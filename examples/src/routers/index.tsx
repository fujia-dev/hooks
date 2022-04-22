import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../../App';
import NotFoundImg from '../../../public/404.svg';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fujia-dev/hooks" caseSensitive element={<App />}></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
              <div style={{ width: '50%', height: '50%', marginTop: 32 }}>
                <img src={NotFoundImg} alt="no found" />
              </div>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
