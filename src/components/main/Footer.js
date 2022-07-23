import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    바로가기
                </Typography>
                <Demo>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="잿플린"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="프로젝트"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="스토리"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="라운지"
                            />
                        </ListItem>
                    </List>
                </Demo>
                </Grid>
                <Grid item xs={12} md={3}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    이용안내
                </Typography>
                <Demo>
                    <List>
                        <ListItem>
                        <ListItemText
                            primary="공지사항"
                        />
                        </ListItem>
                        <ListItem>
                        <ListItemText
                            primary="FAQ"
                        />
                        </ListItem>
                    </List>
                </Demo>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        관련사이트
                    </Typography>
                    <Demo>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="네이버 블로그"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="티스토리 블로그"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="인스타그램"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="velog"
                                />
                            </ListItem>
                        </List>
                    </Demo>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        서비스약관
                    </Typography>
                    <Demo>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="서비스 이용약관"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="개인정보 취급방침"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="전자금융거래약관"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="결제/환불약관"
                                />
                            </ListItem>
                        </List>
                    </Demo>
                </Grid>
            </Grid>
        </Box>
    );
}