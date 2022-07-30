import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TextsmsIcon from '@mui/icons-material/Textsms';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const TodayMoaDetailContainer = () => {
  

    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        HOME &#62; 칼럼
                    </Typography>
                    <Typography variant="h5" component="div">
                        '최저임금 자살' 한경 기사는 가짜뉴스인가 아닌가'
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <PersonIcon fontSize="small" sx={{verticalAlign: 'middle', marginBottom: '5px'}} />김준일 팩트체커 | <AccessTimeIcon fontSize="small" sx={{verticalAlign: 'middle', marginBottom: '5px'}} />  승인 2018.09.04 15:39 | <TextsmsIcon fontSize="small" sx={{verticalAlign: 'middle', marginBottom: '5px'}} />댓글 0
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        | 가짜뉴스 정의와 '야마잡기' 언론 관행
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        "그래서 야마가 뭐야?"

                        기자 시절 데스크로부터 제일 많은 들은말이다.<br/>
                        ...
                    </Typography>
                </CardContent>
            </Card>

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <ListItem alignItems="flex-start" sx={{paddingLeft: '0px'}}>
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="김준일 open@newstof.com"
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                최근글 보기
                            </Typography>
                            {" 2001년부터 언론인으로 활동하며 ... "}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                </CardContent>
            </Card>


            {/* <List sx={{ width: '100%', maxWidth: 275, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
            </List> */}

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        저작권자 뉴스톱 무단전재 및 재배포 금지
                    </Typography>
                    
                </CardContent>
            </Card>

        </div>
    );
};

export default TodayMoaDetailContainer;
