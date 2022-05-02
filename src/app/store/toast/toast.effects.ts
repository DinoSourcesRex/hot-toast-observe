// Angular
import { Injectable } from '@angular/core';
// Store
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { IState } from '../root.reducer';
import { requestByKey } from '../requests/selectors/request.selectors';
// Rxjs
import { filter, first, tap } from 'rxjs/operators';
// Actions
import { showToast, showToastObserveRequest } from '../toast/toast.actions';
// Third Party
import { HotToastService } from '@ngneat/hot-toast';
// Models
import { ToastOptions, ToastTypes } from './toast.models';
import { RequestKey } from '../requests/models/requests.interface';

@Injectable()
export class ToastEffects {
  constructor(
    private actions$: Actions<Action>,
    private toastService: HotToastService,
    private store: Store<IState>
  ) {}

  showToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(showToast),
        tap((data) => {
          this.showToast(data, this.styleToast(data.toastType));
        })
      ),
    {
      dispatch: false,
    }
  );

  showObserveToast$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(showToastObserveRequest),
        filter((data) => data.requestKey !== RequestKey.None),
        tap((data) => {
          this.store
            .select(requestByKey(data.requestKey))
            .pipe(
              this.toastService.observe({
                loading: 'Loading...',
                success: 'DONE!',
                error: 'FAILED.',
              }),
              tap((val) => console.log(val)),
              first()
            )
            .subscribe();
        })
      ),
    {
      dispatch: false,
    }
  );

  private showToast(options: ToastOptions, toastStyle: any) {
    const text = options.message;

    this.toastService.show(text, {
      duration: 1500,
      autoClose: options.autoClose,
      dismissible: options.dismissible,
      style: toastStyle,
    });
  }

  private styleToast(toastType: ToastTypes) {
    return {
      border: `1px solid var(--toast-${toastType}-text-and-border)`,
      color: `var(--toast-${toastType}-text-and-border)`,
      'background-color': `var(--toast-${toastType}-bg)`,
      'border-radius': '0px',
    };
  }
}
