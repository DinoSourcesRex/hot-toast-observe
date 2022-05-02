// Store
import { createAction, props } from '@ngrx/store';
// Models
import { ApiRequest } from '../models/requests.interface';

export const upsertRequest = createAction(
  '[Squad/Internal] Upsert Request',
  props<{ item: ApiRequest }>()
);
