import Toast from './Toast';
import loading from './Loading';
import model from './Model';
import { ToastProps } from './PropsType';

const toastExport = Toast as ((props: ToastProps) => JSX.Element) & {
    normal: typeof model.normal;
    success: typeof model.success;
    alert: typeof model.alert;
    loading: typeof loading.loading;
    closeLoading: typeof loading.closeLoading;
};

toastExport.normal = model.normal;
toastExport.success = model.success;
toastExport.alert = model.alert;
toastExport.loading = loading.loading;
toastExport.closeLoading = loading.closeLoading;

export default toastExport;
