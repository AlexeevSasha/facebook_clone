import React, { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthProvider, UserProvider } from './common/hooks/AuthProvider';
import { AuthRoutes } from './core/router/authRoutes';
import { PrivateRoutes } from './core/router/PrivateRoutes';

function App() {
  return (
    <Suspense fallback={<div>ewfawesf</div>}>
      <BrowserRouter>
        <Routes>
          <Route element={<UserProvider />}>
            {AuthRoutes.map((el) => (
              <Route path={el.path} key={el.path} element={el.element} />
            ))}
          </Route>

          <Route element={<AuthProvider />}>
            {PrivateRoutes.map((el) => (
              <Route path={el.path} key={el.path} element={el.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
