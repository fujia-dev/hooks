
<div align="center">
  <a href="#" target="_blank">
    <img alt="hooks logo" width="200" src="https://github.com/fujia-dev/hooks/blob/main/public/logo.svg"/>
  </a>
</div>

<div align="center">
  <h1>@fujia/hooks</h1>
</div>

<div align="center">

An awesome library for React Hooks.

</div>

<div align="center">

English | [简体中文](./README-zh_CN.md)

</div>

# Features

## friendly

UI development process, the first thing to consider is how to make the components more user-friendly, so that users are comfortable with.

## Artistic

Continued pursuit of the ultimate in aesthetics while maintaining component performance.

## Efficient

During the code design process, we are trading-off to achieve the best balance between component reuse, business usage boundaries, and component usage specifications.

## Extensible

Considering the business case differences, the code in the framework are scope-limited and easily overwritten.

## Comprehensive

Out of the box, high-quality components that cover most business scenarios.

## TypeScript friendly

All components are written in TypeScript. it's type friendly.


# Installation

[npm package](https://www.npmjs.com/package/@ui-puzzles/rect)

```sh
// npm
npm i @fujia/hooks

// yarn
yarn add @fujia/hooks
```

# Examples

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { useWinSize } from '@fujia/hooks';

function App() {
  const winSize = useWinSize();

  return (
    <Button btnType="primary" label="Hello World" />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```


# Browser Support

| IE / Edge | Firefox | Chrome | Safari | Opera | Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

# License

This project is [MIT licensed](./LICENSE)