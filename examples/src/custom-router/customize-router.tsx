import React, { FC, ReactNode } from 'react';
import _ from 'lodash';
import { useHash } from 'react-use';

interface RouteProps {
  path: string;
  component: ReactNode;
}

export const MyRouter = ({ children }: { children: any[] }) => {
  const routes = _.keyBy(
    React.Children.map(children, (c) => c.props),
    'path'
  );

  const [hash] = useHash();
  const Page = routes[hash.replace('#', '')]?.component;
  // if the route don't exist will return Not Found
  return Page ? Page : <div>Not Found.</div>;
};

export const Route: FC<RouteProps> = () => null;
