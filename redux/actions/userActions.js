export const PREPOPULATE = 'PREPOPULATE'

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