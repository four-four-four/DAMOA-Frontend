import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import {
  PATH_ROOT,
  PATH_LOG_IN,
  PATH_MY_PAGE,
  PATH_NOTICE,
  PATH_TODAY_MOA,
  PATH_TODAY_MOA_DETAIL,
} from './constant/pathConstant';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage/MyPage';
import NoticePage from './pages/NoticePage';
import TodayMoaPage from './pages/TodayMoaPage';
import TodayMoaDeatailPage from './pages/TodayMoaDetail';

const Routes = () => (
    <Switch>
        <Route path={PATH_ROOT} element={<MainPage />} />
        <Route path={PATH_MY_PAGE} element={<MyPage />} />
        <Route path={PATH_NOTICE} element={<NoticePage />} />
        <Route path={PATH_LOG_IN} element={<LoginPage />} />
        <Route path={PATH_TODAY_MOA} element={<TodayMoaPage />} />
        <Route path={PATH_TODAY_MOA_DETAIL} element={<TodayMoaDeatailPage />} />
    </Switch>
);

export default Routes;
