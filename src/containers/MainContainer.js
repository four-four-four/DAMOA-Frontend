import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Footer from '../components/main/Footer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DraftsIcon from '@mui/icons-material/Drafts';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import Item from './Item';
import Loader from './Loader';
import Button from '@mui/material/Button';

const data = [
  {
    "name": "06-25",
    "cnt": 100,
    "amt": 50
  },
  {
    "name": "06-25",
    "cnt": 120,
  },
  {
    "name": "06-25",
    "cnt": 130,
  },
  {
    "name": "06-25",
    "cnt": 140,
  },
  {
    "name": "06-25",
    "cnt": 125,
  },
  {
    "name": "06-25",
    "cnt": 110,
  },
  {
    "name": "06-25",
    "uv": 90,
  }
]


const IngimoaItem = styled.div`
  background-color: #FFFFFF;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;


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
// const ListItem = (props) => {
//   console.log('props', props);

//   return (
//     <div
//       style={{
//         minWidth: '64px',
//         backgroundColor: 'black',
//         color: 'white',
//         padding: '0 16px',
//         fontWeight: '600',
//         textAlign: 'center',
//         height: '36px',
//         borderRadius: '4px',
//         alignItems: 'center',
//         display: 'inline-flex'
//       }}>
//       {props.children}
//     </div>
//   );
// };

const MainWrapper = styled.div`
  max-width: 1920px;
  min-width: 320px;
  margin: 0 auto;
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
        threshold: 0.4
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <>
      <MainWrapper>
        <h1>인기모아</h1>
        <Grid container spacing={0}>
          <Grid item xs={6} md={6} style={{'backgroundColor': '#D9D9D9'}}>
              <IngimoaItem style={{'marginTop': '1rem'}}>1 [2보] 5월 소비자물가 상승률 5.4%…근 14년 만에 최고</IngimoaItem>
              <IngimoaItem>2 권상우, ‘왜 오수재인가' 특별출연 [공식]</IngimoaItem>
              <IngimoaItem>3 한국 월드컵 상대 우루과이, 멕시코에 3-0 완승…카바니 두 골</IngimoaItem>
              <IngimoaItem>4 “날 알까” 걱정했던 손흥민, 네이마르와 유니폼 바꿨다</IngimoaItem>
              <IngimoaItem style={{'marginBottom': '1rem'}}>5 손흥민·네이마르, 라커룸서 만났다… 둘이 똑같이 올린 ‘이 사진’</IngimoaItem>
          </Grid>
          <Grid item xs={6} md={6} style={{'backgroundColor': '#D9D9D9'}}>
              <IngimoaItem style={{'marginTop': '1rem'}}>6 디아블로 이모탈, 정식 출시</IngimoaItem>
              <IngimoaItem>7 송가인 '전국 투어 콘서트' 공연 실황 공개</IngimoaItem>
              <IngimoaItem>8 [동학개미 떠나나①] `국민주' 삼성전자 '애물단지'로</IngimoaItem>
              <IngimoaItem>9 2위 삼성, 1위 애플과 격차 좁혔다…갤럭시워치 점유율 '쑥'</IngimoaItem>
              <IngimoaItem style={{'marginBottom': '1rem'}}>10 호주서 ‘세계 최대 식물’ 발견…“축구장 2만7500개 크기”</IngimoaItem>
          </Grid>
        </Grid>

        
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <h1>급상승 키워드(등록)</h1>

              <div>
                #주식 #아이폰 #애플 #호주 #월드컵
              </div>

              <LineChart width={600} height={500} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cnt" stroke="#FF5E00" />
              </LineChart>

            </Grid>
            <Grid item xs={8}>
              <h1>실시간 키워드(검색)</h1>

              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="1 OO치킨" />
                    <ListItemIcon>
                      <ShowChartIcon color="success" />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="2 OO치킨" />
                    <ListItemIcon>
                      <ShowChartIcon color="success" />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="3 OO치킨" />
                    <ListItemIcon>
                      <ShowChartIcon color="success" />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="4 OO치킨" />
                    <ListItemIcon>
                      <ShowChartIcon color="success" />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="5 OO치킨" />
                    <ListItemIcon>
                      <ShowChartIcon color="success" />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="6 OO치킨" />
                    <ListItemIcon>
                      <ShowChartIcon color="success" />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="7 OO치킨" />
                    <ListItemIcon>
                      <ShowChartIcon color="success" />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="8 OO치킨" />
                    <ListItemIcon>
                      <ShowChartIcon color="success" />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="9 OO치킨" />
                    <ListItemIcon>
                      <ShowChartIcon color="success" />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="10 OO치킨" />
                    <ListItemIcon>
                      <ShowChartIcon color="success" />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </List>
      
            </Grid>
          </Grid>
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
