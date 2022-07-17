import * as React from 'react';
import Box from '@material-ui/core/Box';
import { spacing } from '@mui/system';
import Container from '@mui/material/Container';
import NoticeGrid from '../components/notice/NoticeGrid';

function createData(number, title, writer, write_date, views) {
  return { number, title, writer, write_date, views };
}

const NoticePage = () => {
  return (
    <>
      <Container>
        <Box m={1} pt={5}>
          <h1>공지사항</h1>
        </Box>

        <NoticeGrid />
        {/* <Pagination /> */}
      </Container>
    </>
  );
};

export default NoticePage;
