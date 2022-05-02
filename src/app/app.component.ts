// Angular
import { Component } from '@angular/core';
// Store
import { Store } from '@ngrx/store';
import { IState } from './store/root.reducer';
import { getSandshrew } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hot-toast-observe';

  constructor(store: Store<IState>) {
    store.dispatch(getSandshrew());
  }
}
