// ** MUI Imports

"use client"
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

// ** Types Imports
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import listService from 'src/services/list-day.service'
import { getUserInfomation } from 'src/redux/userSlice'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import authService from 'src/services/auth.service'




interface DataType {
  id: number;
  date: string;
  isLate: number;
  detail: string;
}
const DashboardTable = () => {
  const [filter, setFilter] = useState<any>({
    date: "" || {},
  });
  const [dataLoaded, setDataLoaded] = useState<DataType[]>([]);
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const fetchData = async () => {
    
   const id = Cookies.get('userId')
    const res: any = await listService.getListFromUser(id);
    
    setDataLoaded(res.day);
  }
  
return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Detail</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataLoaded.map((row: DataType) => (
              <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.id}</Typography>
                    
                  </Box>
                </TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.detail}</TableCell>

                <TableCell>
                  <Chip
                    label={!row.isLate ? 'NO' :'YES' }
                    color={!row?.isLate ? 'success' : 'error'}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
                <TableCell >
                  <Button sx={{mr: 2}} size='small' color='primary' variant='contained'>Edit</Button>
                  <Button size='small' color='warning' variant='contained'>Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
