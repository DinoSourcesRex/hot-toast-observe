import { ActionReducerMap } from '@ngrx/store';
// Requests
import {
  requestsReducer,
  RequestsState,
} from './requests/reducers/requests.reducer';

export interface IState {
  requests: RequestsState;
}

export const reducers: ActionReducerMap<IState> = {
  requests: requestsReducer,
};
