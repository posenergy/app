export const PREPOPULATE = 'PREPOPULATE'
export const ONBOARDING = 'ONBOARDING'

export const prepopulate = (name, buffer, start, end, email, id) => {
  return {
    type: 'PREPOPULATE',
    name: name,
    buffer: buffer,
    startTime: start,
    endTime: end,
    email: email,
    id: id,
  }
}

export const onboarding = () => ({
    type: 'ONBOARDING',
})
