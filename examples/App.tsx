import { Layout } from 'antd';
import { MyMenu } from './src/components/MyMenu';

const { Content, Sider } = Layout;

function App() {
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <MyMenu />
      </Sider>
      <Layout style={{ height: '100vh' }}>
        <Content
          style={{ margin: '24px 16px 0', overflow: 'initial', height: '100%' }}
        >
          <h1>content</h1>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
