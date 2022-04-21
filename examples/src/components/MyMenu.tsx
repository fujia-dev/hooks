import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const hookContext = require.context(
  '../../../src',
  true,
  /(use)[A-Z]{1}[A-Za-z]*$/
);
const allHooks = hookContext.keys().map((h) => h.split('/')[1]);

const hookList = [...new Set(allHooks)];

const hookItems = hookList.map((hookName) => ({
  key: hookName,
  label: hookName,
  title: hookName,
}));

export const MyMenu = () => {
  return (
    <Menu mode="inline" style={{ height: '100%' }} theme="dark">
      {hookItems.map((config) => (
        <Menu.Item key={config.label}>
          <Link to={`/fujia-dev/hooks/${config.label}`}>{config.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
