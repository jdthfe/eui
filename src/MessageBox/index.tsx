import MessageBox from './MessageBox';
import model from './Model';

import { MessageBoxProps } from './PropsType';

const messageExport = MessageBox as ((props: MessageBoxProps) => JSX.Element) & {
    model: typeof model.model;
    alert: typeof model.alert;
    confirm: typeof model.confirm;
};

messageExport.model = model.model;
messageExport.alert = model.alert;
messageExport.confirm = model.confirm;

export default messageExport;
