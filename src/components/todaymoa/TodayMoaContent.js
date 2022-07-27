import React, { useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [
    {
        src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title: '우린 언제 몇명되야 정점? "3월 중순 예상, 27만명쯤"',
        channel: '오미크론 변이 확산...',
        views: '국민일보',
        createdAt: '17 Feb 2022',
    },
    {
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: '안전벨트 경고음',
        channel: '테슬라 아우디 등 ...',
        views: '이코노미미스트',
        createdAt: '17 Feb 2022',
    },
    {
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: '정부, 내일 거리두기 발표 ...',
        channel: '대통령 선거일인 3월 9일까지 ...',
        views: '뉴시스',
        createdAt: '17 Feb 2022',
    },
    
];

const TodayMoaContentBlock = styled.div`
    display:inline-flex;
    width: 70%;
    max-width: 1920px;
    min-width: 320px;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.38);
    height: 800px;
`;

const TodayMoaContent = (pros) => {

    const loading = false;
    
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <TodayMoaContentBlock>
            <div style={{width:"100%"}}>
                <div>Today</div>
                <FormControl sx={{ m: 1, minWidth: 120, float:'right' }} size="small">
                    <InputLabel id="demo-simple-select-label">날짜</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                        <MenuItem value={10}>오늘</MenuItem>
                        <MenuItem value={20}>어제</MenuItem>
                    </Select>
                </FormControl>

                <Grid container wrap="nowrap">
                    {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                        <Box key={index} sx={{ width: 210, margin: 'auto', my: 5 }}>
                        {item ? (
                            <img
                            style={{ width: 210, height: 118 }}
                            alt={item.title}
                            src={item.src}
                            />
                        ) : (
                            <Skeleton variant="rectangular" width={210} height={118} />
                        )}

                        {item ? (
                            <Box sx={{ pr: 2 }}>
                            <Typography gutterBottom variant="body2">
                                {item.title}
                            </Typography>
                            <Typography display="block" variant="caption" color="text.secondary">
                                {item.channel}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {`${item.views} • ${item.createdAt}`}
                            </Typography>
                            </Box>
                        ) : (
                            <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                            </Box>
                        )}
                        </Box>
                    ))}
                </Grid>

                <Grid container wrap="nowrap">
                    {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                        <Box key={index} sx={{ width: 210, margin: 'auto', my: 5 }}>
                        {item ? (
                            <img
                            style={{ width: 210, height: 118 }}
                            alt={item.title}
                            src={item.src}
                            />
                        ) : (
                            <Skeleton variant="rectangular" width={210} height={118} />
                        )}

                        {item ? (
                            <Box sx={{ pr: 2 }}>
                            <Typography gutterBottom variant="body2">
                                {item.title}
                            </Typography>
                            <Typography display="block" variant="caption" color="text.secondary">
                                {item.channel}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {`${item.views} • ${item.createdAt}`}
                            </Typography>
                            </Box>
                        ) : (
                            <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                            </Box>
                        )}
                        </Box>
                    ))}
                </Grid>

            </div>
        </TodayMoaContentBlock>
    );
}

export default TodayMoaContent;