"use client"
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { PickerChangeHandlerContext } from '@mui/x-date-pickers/models';
import { DateValidationError } from '@mui/lab/internal/pickers/date-utils';

type BasicDatePickerProps = {
    date: Dayjs | null | string
    onChange?: ((value: string | dayjs.Dayjs | null) => void) | undefined
}

const BasicDatePicker: React.FC<BasicDatePickerProps> = (props) => {
    const { date, onChange } = props


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >

            <DatePicker value={dayjs(date)}
                format='YYYY-MM-DD'
                onChange={onChange} />

        </LocalizationProvider>
    );
}
export default BasicDatePicker