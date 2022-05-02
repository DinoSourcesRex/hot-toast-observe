import { createSelector } from '@ngrx/store';
import { RequestsState, requestsState } from '../reducers/requests.reducer';
import { RequestKey } from '../models/requests.interface';

export const requestByKey = (key: RequestKey) =>
  createSelector(
    requestsState,
    (state: RequestsState) => state.requests.entities[key]
  );
