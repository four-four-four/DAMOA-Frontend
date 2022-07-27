import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import {
  PATH_ROOT,
  PATH_LOG_IN,
  PATH_MY_PAGE,
  PATH_NOTICE,
  PATH_TODAY_MOA
} from './constant/pathConstant';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage/MyPage';
import NoticePage from './pages/NoticePage';
import TodayMoaPage from './pages/TodayMoaPage';

const Routes = () => (
  <Switch>
    <Route path={PATH_ROOT} element={<MainPage />} />
    <Route path={PATH_MY_PAGE} element={<MyPage />} />
    <Route path={PATH_NOTICE} element={<NoticePage />} />
    <Route path={PATH_LOG_IN} element={<LoginPage />} />
    <Route path={PATH_TODAY_MOA} element={<TodayMoaPage />} />
  </Switch>
);

export default Routes;
