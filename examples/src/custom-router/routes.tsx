import { ComponentType } from 'react';

import UseKeyPressExample from './UseKeyPressExample';
import CustomizeRouterExample from './CustomizeRouterExample';

type RouteItem = [string, ComponentType];
type Routes = Array<RouteItem>;

const routes: Routes = [
  ['useKeyPress', UseKeyPressExample],
  ['customizeRouter', CustomizeRouterExample],
];

export default routes;
