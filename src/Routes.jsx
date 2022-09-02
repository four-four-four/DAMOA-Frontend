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
  PATH_FIELD_KEYWORD_MOA,
  PATH_SEARCH_KEYWORD_MOA,
  PATH_SIGN_UP
} from './constant/pathConstant';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage/MyPage';
import NoticePage from './pages/NoticePage';
import TodayMoaPage from './pages/TodayMoaPage';
import TodayMoaDeatailPage from './pages/TodayMoaDetail';
import FiledKeywordPage from './pages/FiledKeywordPage';
import SearchMoaPage from './pages/SearchMoaPage';
import SignupPage from './pages/Signup/SignupPage';

const Routes = () => (
  <Switch>
    <Route path={PATH_ROOT} element={<MainPage />} />
    <Route path={PATH_MY_PAGE} element={<MyPage />} />
    <Route path={PATH_NOTICE} element={<NoticePage />} />
    <Route path={PATH_LOG_IN} element={<LoginPage />} />
    <Route path={PATH_TODAY_MOA} element={<TodayMoaPage />} />
    <Route path={PATH_SIGN_UP} element={<SignupPage />} />
    <Route path={PATH_TODAY_MOA_DETAIL} element={<TodayMoaDeatailPage />} />
    <Route path={PATH_FIELD_KEYWORD_MOA} element={<FiledKeywordPage />} />
    <Route path={PATH_SEARCH_KEYWORD_MOA} element={<SearchMoaPage />} />
  </Switch>
);

export default Routes;
