export const PREPOPULATE = 'PREPOPULATE'
export const ONBOARDING = 'ONBOARDING'
export const PICKER = 'PICKER'

export const prepopulate = (name, buffer, start, end, email) => {
  return {
    type: 'PREPOPULATE',
    name: name,
    buffer: buffer,
    startTime: start,
    endTime: end,
    email: email,
  }
}

export const onboarding = () => ({
    type: 'ONBOARDING',
})

export const pickerDate = (date) => ({
    type: 'PICKER',
    date: date,
})
