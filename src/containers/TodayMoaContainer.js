import React from 'react';
import styled from 'styled-components';
import FilterView from '../components/todaymoa/FilterView';
import TodayMoaContent from '../components/todaymoa/TodayMoaContent';

const TodayMoaBlock = styled.div`
    display: flex;
    max-width: 1920px;
    min-width: 320px;
    margin: 0 auto;
`;
const TodayMoaContainer = () => {
  
    return (
        <TodayMoaBlock>
            <FilterView />
            <TodayMoaContent />
        </TodayMoaBlock>
    );
};

export default TodayMoaContainer;
