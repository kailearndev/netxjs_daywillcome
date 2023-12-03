import { Checkbox, Fade, FormControl, Stack, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import dayjs, { Dayjs } from 'dayjs'
import * as React from 'react'
import BasicDatePicker from './DateTime'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'
import { TypeAnimation } from 'react-type-animation'
import listService from 'src/services/list-day.service'
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height: '400px'
}

interface ModalProps {
  idUser: any
  open: boolean
  handleOpen: () => void
  handleClose: () => void
  handleFetch: () => Promise<void>

  
}
type DateField = {
  userId: any
  detail: string
  date: string | null | any
  isLate: boolean
}

export default function ModalCreate({ open, handleClose, handleOpen, idUser , handleFetch}: ModalProps) {
  const [updateDate, setUpdateDate] = React.useState<DateField>({
    date: '',
    userId:idUser ,
    detail: '',
    isLate: false
  })

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  const handleUpdate = async () => {
    const res = await listService.createDateTime(updateDate)
    handleFetch()
    handleClose()
   
  }
  return (
    <div>
      <Modal
        sx={{ borderRadius: 20, border: 'none' }}
        disableEnforceFocus={true}
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Fade in={open}>
          <Box sx={style}>
            <form noValidate autoComplete='off'>
              <FormControl sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <TypeAnimation
                  sequence={[
                    'Add new  Date', // Types 'One'

                    1000,
                    () => {}
                  ]}
                  wrapper='h3'
                  cursor={false}
                  repeat={Infinity}
                  style={{ fontSize: '14px', display: 'inline-block', color: 'InfoText' }}
                />

                <BasicDatePicker
                  date={dayjs(updateDate?.date).format('YYYY-MM-DD')}
                  onChange={e =>
                    setUpdateDate({
                      ...updateDate,
                      date: dayjs(e).format('YYYY-MM-DD')
                    })
                  }
                />
                <Box display={'flex'} alignItems={'center'}>
                  <TypeAnimation
                    sequence={[
                      'Is Late ?', // Types 'One'

                      1000,
                      () => {}
                    ]}
                    wrapper='h3'
                    cursor={false}
                    repeat={Infinity}
                    style={{ fontSize: '14px', display: 'inline-block' }}
                  />

                  <Checkbox
                    onChange={e =>
                      setUpdateDate({
                        ...updateDate,
                        isLate: e.target.checked
                      })
                    }
                    disableRipple
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </Box>
                <TextField
                  sx={{ width: '270px' }}
                  value={updateDate.detail}
                  onChange={e =>
                    setUpdateDate({
                      ...updateDate,
                      detail: e.target.value
                    })
                  }
                  multiline
                  maxRows={4}
                />
                <Button onClick={handleUpdate} centerRipple variant='outlined'>
                  Save
                </Button>
              </FormControl>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
