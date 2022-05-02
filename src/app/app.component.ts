// Angular
import { Component } from '@angular/core';
// Store
import { Store } from '@ngrx/store';
import { IState } from './store/root.reducer';
import { getSandshrew } from './store/actions';
import { requestByKey } from './store/requests/selectors/request.selectors';
// Rxjs
import { Observable } from 'rxjs';
// Models
import {
  ApiRequest,
  RequestKey,
} from './store/requests/models/requests.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sandshrewRequest$: Observable<ApiRequest | undefined>;

  constructor(store: Store<IState>) {
    store.dispatch(getSandshrew());
    this.sandshrewRequest$ = store.select(requestByKey(RequestKey.Pokemon));
  }
}
