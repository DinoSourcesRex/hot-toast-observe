// Store
import { EntityState } from '@ngrx/entity';
import { Action, createReducer, createFeatureSelector, on } from '@ngrx/store';
// Models
import { ApiRequest } from '../models/requests.interface';
// Actions
import { upsertRequest } from '../actions/requests.actions';
// Adapters
import { requestsAdapter } from '../adapters/requests.adapters';

export const requestsFeatureKey = 'requests';

export interface RequestsState {
  requests: EntityState<ApiRequest>;
}

export const initialState: RequestsState = {
  requests: requestsAdapter.getInitialState(),
};

const reducer = createReducer(
  initialState,

  on(upsertRequest, (state, { item }) => ({
    ...state,
    requests: requestsAdapter.upsertOne(item, state.requests),
  }))
);

export function requestsReducer(state: any, action: Action) {
  return reducer(state, action);
}

export const requestsState =
  createFeatureSelector<RequestsState>(requestsFeatureKey);
