import React from 'react';
import { MyRouter, Route } from './customize-router';

const Page1 = () => <h1>Page One</h1>;
const Page2 = () => <h1>Page Two</h1>;
const Page3 = () => <h1>Page Three</h1>;
const Page4 = () => <h1>Page Four</h1>;

const CustomizeRouterExample = () => {
  return (
    <div className="router-container">
      <div className="sidebar">
        <a href="#page1">Page 1</a>
        <a href="#page2">Page 2</a>
        <a href="#page3">Page 3</a>
        <a href="#page4">Page 4</a>
      </div>
      <div className="main">
        {/* define route configuration */}
        <MyRouter>
          <Route path="page1" component={<Page1 />} />
          <Route path="page2" component={<Page2 />} />
          <Route path="page3" component={<Page3 />} />
          <Route path="page4" component={<Page4 />} />
        </MyRouter>
      </div>
    </div>
  );
};

export default CustomizeRouterExample;
