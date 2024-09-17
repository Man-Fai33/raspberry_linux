import React from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import routers from './router/routers';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ResponsiveAppBar from './components/appbar';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from '../src/components/redux/store';
import Index from './pages';
// import { Breadcrumbs, Link as MuiLink, Typography } from '@mui/material';

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
  // function Breadcrumb() {
  //   const location = useLocation();
  //   const pathnames = location.pathname.split('/').filter((x) => x);

  //   return (
  //     <Breadcrumbs aria-label="breadcrumb">
  //       <MuiLink component={Link} to="/">
  //         Home
  //       </MuiLink>
  //       {pathnames.map((value, index) => {
  //         const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

  //         // If it's the last item, we use Typography to indicate it's not clickable
  //         const isLast = index === pathnames.length - 1;
  //         return isLast ? (
  //           <Typography key={value}>{value}</Typography>
  //         ) : (
  //           <MuiLink component={Link} to={routeTo} key={value}>
  //             {value}
  //           </MuiLink>
  //         );
  //       })}
  //     </Breadcrumbs>
  //   );
  // }
  return <>
    {/* <Breadcrumb /> */}
    <Routes >

      {routers.map((router) => (< Route key={router.path} path={router.path} element={user.token !== '' ? router.element : <Index />} />))}
    </Routes>
  </>
}

export default App;
