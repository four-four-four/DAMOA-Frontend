import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Pagination from '@mui/material/Pagination';

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

const rows = [
  {
    id: 1,
    number: 1,
    title: '공지사항 제목',
    writer: '홍길동',
    write_date: '2022-07-01',
    view_cnt: 10
  },
  {
    id: 2,
    number: 2,
    title: '공지사항 제목 테스트 222',
    writer: '가나다',
    write_date: '2022-07-04',
    view_cnt: 24
  }
];

const columns = [
  { field: 'number', headerName: '번호', minWidth: 100, flex: 1 },
  { field: 'title', headerName: '제목', minWidth: 100, flex: 5 },
  { field: 'writer', headerName: '작성자', minWidth: 100, flex: 1 },
  { field: 'write_date', headerName: '작성날짜', minWidth: 100, flex: 1 },
  { field: 'view_cnt', headerName: '조회수', minWidth: 100, flex: 1 }
];

export default function NoticeGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6
  });
  console.log(data);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        pagination
        pageSize={10}
        rowsPerPageOptions={[10]}
        components={{
          Pagination: CustomPagination
        }}
        columns={columns}
        rows={rows}
      />
    </Box>
  );
}
