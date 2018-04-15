export const PICKER = 'PICKER'
export const PICKER_NULL = 'PICKER_NULL'

export const pickerDate = (date) => ({
    type: 'PICKER',
    date: date,
})

export const pickerDateNull = () => ({
    type: 'PICKER_NULL',
})
