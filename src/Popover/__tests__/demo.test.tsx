import webDemoTest from '@tests/shared/demoTest';
import ReactDOM from 'react-dom';
ReactDOM.createPortal = jest.fn().mockReturnValue(null);
webDemoTest('Popover');
