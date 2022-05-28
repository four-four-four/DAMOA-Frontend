import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '../components/main/Footer';
import Item from './Item';
import Loader from './Loader';
import Button from '@mui/material/Button';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  body {
    background-color: #f2f5f7;
  }
`;

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  .Target-Element {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;


// 리스트 아이템 컴포넌트
const ListItem = (props) => {

    console.log('props', props);

    return (
        <div style={{'minWidth': '64px','backgroundColor': 'black', 'color': 'white', 'padding': '0 16px', 'fontWeight': '600'
        , 'textAlign': 'center', 'height': '36px', 'borderRadius': '4px', 'alignItems': 'center', 'display': 'inline-flex'
        }}>
            {props.children}
        </div>
    )
}

const MainWrapper = styled.div`
    max-width: 100%;
    // padding-top: 10rem;
    // padding-bottom: 14.1rem;
`;

const MainContainer = () => {

    const [target, setTarget] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [itemLists, setItemLists] = useState([1]);

    useEffect(() => {
        console.log(itemLists);
    }, [itemLists]);

    const getMoreItem = async () => {
        setIsLoaded(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        let Items = [1, 2, 3, 4, 5];
        setItemLists((itemLists) => itemLists.concat(Items));
        setIsLoaded(false);
    };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
        observer.unobserve(entry.target);
        await getMoreItem();
        observer.observe(entry.target);
    }
  };

  useEffect(() => {
        let observer;
        if (target) {
            observer = new IntersectionObserver(onIntersect, {
                threshold: 0.4,
            });
            observer.observe(target);
        }
      return () => observer && observer.disconnect();
  }, [target]);


    return (
        <>
            <MainWrapper>

                <Box
                    sx={{
                        width: 1,
                        height: 70,
                        mt: 2,
                        borderRadius: '14px',
                        backgroundColor: 'rgb(120, 75, 160)',
                    }}
                >
                        <Button variant="outlined" sx={{m:2, minWidth: 100, backgroundColor: '#000000', color: '#FFFFFF', fontWeight: 'bold'}}>개발자</Button>
                        <Button variant="outlined" sx={{m:2, minWidth: 100, backgroundColor: '#000000', color: '#FFFFFF', fontWeight: 'bold'}}>애플</Button>
                        <Button variant="outlined" sx={{m:2, minWidth: 100, backgroundColor: '#000000', color: '#FFFFFF', fontWeight: 'bold'}}>정치</Button>
                </Box>
                
                {/* 기존 소스 */}
                {/* <Grid container spacing={2} style={{'height': '70px', 'borderRadius': '14px', 
                margin: '0.5rem', 
                'backgroundColor': 'rgb(255, 60, 172)', 
                'backgroundImage': 'linear-gradient(220deg, rgb(255, 60, 172) 0%, rgb(120, 75, 160) 50%, rgb(43, 134, 197) 100%)'}}>
                    <Grid item xs={0}>
                        <ListItem>개발자</ListItem>
                    </Grid>
                    <Grid item xs={0}>
                        <ListItem>애플</ListItem>
                    </Grid>
                    <Grid item xs={0}>
                        <ListItem>정치</ListItem>
                    </Grid>
                </Grid> */}


                <div style={{width:'100%', height:'10rem'}}>메인 내용들 작업중...</div>

                {/* <AppWrap> 
                    {itemLists.map((v, i) => {
                        return <Item number={i + 1} key={i} />;
                    })}
                    <div ref={setTarget} className="Target-Element">
                        {isLoaded && <Loader />}
                    </div>
                </AppWrap> */}
                <Footer />
            </MainWrapper>
        </>
    );
};

export default MainContainer;