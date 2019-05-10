import Loadable from 'react-loadable';
import LoadingComponent from '../_util/LoadingComponent';

export const AsyncDemo = Loadable({
    loader: () => import(/* webpackChunkName: "instanceDemo" */ './Demo'),
    loading: LoadingComponent,
});
