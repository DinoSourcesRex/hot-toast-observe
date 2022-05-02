import { createSelector } from '@ngrx/store';
import { RequestsState, requestsState } from '../reducers/requests.reducer';

export const requestByKey = (key: string) =>
  createSelector(
    requestsState,
    (state: RequestsState) => state.requests.entities[key]
  );
