export const ADD_TAG = 'ADD_TAG'
export const DEL_TAG = 'DEL_TAG'
export const SWEAT = 'SWEAT'
export const DURATION = 'DURATION'

export function del_tag(tag) {
  return { type: DEL_TAG, tag }
}

export function add_tag(tag) {
  return { type: ADD_TAG, tag }
}

export function sweat(sweat) {
  return { type: SWEAT, sweat }
}

export function duration(duration) {
  return { type: DURATION, duration }
}
