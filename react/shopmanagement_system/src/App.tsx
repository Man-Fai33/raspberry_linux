import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from './router/routers';
import ResponsiveAppBar from './components/appbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ResponsiveAppBar/>
        <RouterController />
      </BrowserRouter>
    </div>
  );
}
function RouterController() {
  // const user = useSelector((state: RootState) => state.user)
  return <>
    <Routes>

      {/* <Route path='' element={user.token !== undefined && user.token !== '' ? <Home /> : <Index />} /> */}

      {/* {routers.map((router) => (< Route key={router.path} path={router.path} element={user.token !== '' ? router.element : <Index />} />))

      } */}
      {routers.map((router) => (< Route key={router.path} path={router.path} element={router.element} />))

      }


    </Routes>
  </>
}

export default App;
