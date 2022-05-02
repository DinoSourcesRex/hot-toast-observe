// Angular
import { Injectable } from '@angular/core';
// Store
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
// Rxjs
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
// Actions
import {
  getSandshrew,
  getSandshrewFailure,
  getSandshrewSuccess,
} from './actions';
import { upsertRequest } from './requests/actions/requests.actions';
import { showToastObserveRequest } from './toast/toast.actions';
// Models
import { RequestKey } from './requests/models/requests.interface';
// Services
import { PokemonService } from './../services/pokemon.service';

@Injectable()
export class RootEffects {
  constructor(
    private actions$: Actions<Action>,
    private pokemonService: PokemonService
  ) {}

  getSandshrew$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSandshrew),
      switchMap(() =>
        this.pokemonService.getPokemonDetails('sandshrew').pipe(
          map(() => getSandshrewSuccess()),
          catchError((error) => {
            console.error(error);
            return of(getSandshrewFailure());
          })
        )
      )
    )
  );

  startGenerateJoinSquadLink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSandshrew),
      switchMap(() => [
        upsertRequest({
          item: {
            key: RequestKey.Pokemon,
            loading: true,
          },
        }),
        showToastObserveRequest({
          toastType: 'info',
          requestKey: RequestKey.Pokemon,
        }),
      ])
    )
  );

  endGenerateJoinSquadLink$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSandshrewSuccess, getSandshrewFailure),
      map((response) =>
        upsertRequest({
          item: {
            key: RequestKey.Pokemon,
            loading: false,
            response: {
              success: response.type == getSandshrewSuccess.type,
            },
          },
        })
      )
    )
  );
}
