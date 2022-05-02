// Store
import { createEntityAdapter } from '@ngrx/entity';
// Models
import { ApiRequest } from '../models/requests.interface';

export const requestsAdapter = createEntityAdapter<ApiRequest>({
  selectId: (item: ApiRequest) => item.key,
  sortComparer: false,
});
