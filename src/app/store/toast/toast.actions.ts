import { createAction } from '@ngrx/store';
// Models
import { RequestKey } from '../requests/models/requests.interface';
import { ToastObserveOptions, ToastOptions } from './toast.models';

export const showToast = createAction(
  '[Utilities/Toast] Show Toast',
  (
    options: ToastOptions = {
      toastType: 'info',
    }
  ) => ({
    message: '',
    showIcon: false,
    autoClose: true,
    dismissible: true,
    duration: 1500,
    translate: undefined,
    ...options,
  })
);

export const showToastObserveRequest = createAction(
  '[Utilities/Toast] Show Observable Toast',
  (
    options: ToastObserveOptions = {
      toastType: 'info',
      requestKey: RequestKey.None,
    }
  ) => ({
    message: '',
    showIcon: false,
    autoClose: true,
    dismissible: true,
    duration: 1500,
    translate: undefined,
    ...options,
  })
);
