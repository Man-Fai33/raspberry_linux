import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from './router/routers';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ResponsiveAppBar from './components/appbar';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from '../src/components/redux/store';
import Index from './pages';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <ResponsiveAppBar />
          <RouterController />
        </BrowserRouter>
      </div>
    </Provider >

  );
}
function RouterController() {
  const user = useSelector((state: RootState) => state.user)
  return <>
    <Routes >
      {/* {routers.map((router) => (< Route key={router.path} path={router.path} element={user.token !== '' ? router.element : <Index />} />))

      } */}
      {routers.map((router) => (< Route key={router.path} path={router.path} element={user.token !== '' ? router.element : <Index />} />))

      }


    </Routes>
  </>
}

export default App;
