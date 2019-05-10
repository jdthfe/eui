import Loadable from 'react-loadable';
import LoadingComponent from '../_util/LoadingComponent';
export const AsyncArticle = Loadable({
    loader: () => import(/* webpackChunkName: "Article" */ './Article'),
    loading: LoadingComponent,
});
