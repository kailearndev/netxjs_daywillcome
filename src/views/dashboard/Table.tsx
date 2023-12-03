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
import { Button, CardHeader, CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import listService from 'src/services/list-day.service'
import { getUserInfomation } from 'src/redux/userSlice'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import authService from 'src/services/auth.service'
import BasicModal from './ModalDate'
import ModalCreate from './ModalCreate'
import ModalConfirm from './ModalConfirm'




interface DataType {
  id: number;
  date: string;
  isLate: number;
  detail: string;
}
const DashboardTable = () => {
  const [idsTable, setIdsTable] = useState<string | number>('')
  const [idsDelete, setIdsDelete] = useState<string | number>('')

  const [openModal, setOpenModal] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)

  const [openModalCreate, setOpenModalCreate] = useState<boolean>(false)

  const id = Cookies.get('userId')
  const [filter, setFilter] = useState<any>({
    date: "" || {},
  });
  const [dataLoaded, setDataLoaded] = useState<DataType[]>([]);
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const fetchData = async () => {
    const res: any = await listService.getListFromUser(id);
    setDataLoaded(res.day);
  }
  const handleRefecth = async () => {
    await fetchData()
  }
  const handleOpenModalEdit = (ids: any) => {
    setIdsTable(ids)
    setOpenModal(true)
    fetchData()
    
  }  
  const handleOpenModalDelete = (id: any) => {
    setIdsDelete(id)
    setDeleteModal(true)
  }
  const handleDelete = async() => {
  
    const idDelete = await listService.deleteDay(idsDelete) 
    fetchData()
    setDeleteModal(false)
  }  
  return (

    <Card>
      <CardHeader title={<Button onClick={() => setOpenModalCreate(true)} color='success' variant='contained'>Add new</Button>} />
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

            {dataLoaded.toReversed().map((row: DataType) => (
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
                    label={!row.isLate ? 'NO' : 'YES'}
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
                  <Button
                    onClick={() =>handleOpenModalEdit(row.id)} sx={{ mr: 2 }} size='small' color='primary' variant='contained'>Edit</Button>
                  <Button onClick={() =>handleOpenModalDelete(row.id)} size='small' color='warning' variant='contained'>Remove</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <BasicModal id={ idsTable } handleOpen={() => setOpenModal(true)} handleClose={() => setOpenModal(false)} open={openModal} />
      <ModalCreate handleFetch={handleRefecth} idUser={id} handleOpen={() => setOpenModal(true)} handleClose={() => setOpenModalCreate(false)} open={openModalCreate} />
      <ModalConfirm open ={deleteModal} handleConfirm={handleDelete}  handleClose={() => setDeleteModal(false)}/>
    </Card>
  )
}

export default DashboardTable
