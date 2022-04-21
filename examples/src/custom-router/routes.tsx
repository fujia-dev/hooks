import { ReactNode } from 'react';

import UseKeyPressExample from './UseKeyPressExample';
import CustomizeRouterExample from './CustomizeRouterExample';

type RouteItem = [string, ReactNode];
type Routes = Array<RouteItem>;

const routes: Routes = [
  ['useKeyPress', UseKeyPressExample],
  ['customizeRouter', CustomizeRouterExample],
];

export default routes;
