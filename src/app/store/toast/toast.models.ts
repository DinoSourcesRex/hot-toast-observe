import { RequestKey } from '../requests/models/requests.interface';

export type ToastTypes = 'success' | 'info' | 'warning' | 'error';

export interface ToastTranslate {
  key: string;
  data?: any;
}

export interface ToastOptions {
  message?: string;
  toastType: ToastTypes;
  showIcon?: boolean;
  autoClose?: boolean;
  dismissible?: boolean;
  duration?: number;
  translate?: ToastTranslate;
}

export interface ToastObserveOptions extends ToastOptions {
  requestKey: RequestKey;
}
