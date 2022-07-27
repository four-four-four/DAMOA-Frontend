import React from 'react';
import styled from 'styled-components';
import FilterView from '../components/todaymoa/FilterView';
import TodayMoaContent from '../components/todaymoa/TodayMoaContent';

const MainViewBlock = styled.div`
    display: flex;
    max-width: 1920px;
    min-width: 320px;
    margin: 0 auto;
`;
const MainContainer = () => {
  

    return (
        <MainViewBlock>
            <FilterView />
            <TodayMoaContent />
        </MainViewBlock>
    );
};

export default MainContainer;
