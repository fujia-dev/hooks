import { ReactNode } from 'react';

import UseKeyPressExample from '../features/UseKeyPressExample';
import CustomizeRouterExample from '../features/CustomizeRouterExample';

type RouteItem = [string, ReactNode]
type Routes = Array<RouteItem>;

const routes: Routes = [
  ['useKeyPress', UseKeyPressExample],
  ['customizeRouter', CustomizeRouterExample]
];

export default routes;
