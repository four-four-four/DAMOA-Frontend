import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { PATH_ROOT, PATH_USER_LOGIN, PATH_MY_PAGE, PATH_NOTICE } from './constant/pathConstant';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage/index';
import NoticePage from './pages/NoticePage';


const Routes = () => (
  <Switch>
    <Route path={PATH_ROOT} element={<MainPage />} />
    <Route path={PATH_MY_PAGE} element={<MyPage />} />
    <Route path={PATH_NOTICE} element={<NoticePage />} />

  </Switch>
);

export default Routes;
