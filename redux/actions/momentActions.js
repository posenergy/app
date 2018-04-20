export const ADD_TAG = 'ADD_TAG'
export const DEL_TAG = 'DEL_TAG'
export const SWEAT = 'SWEAT'
export const DURATION = 'DURATION'
export const DEL_ALL_TAGS = 'DEL_ALL_TAGS'
export const DEL_SWEAT = 'DEL_SWEAT'
export const DEL_DURATION = 'DEL_DURATION'

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

export function del_all_tags() {
	return { type: DEL_ALL_TAGS }
}

export function del_duration() {
	return { type: DEL_DURATION }
}

export function del_sweat() {
	return { type: DEL_SWEAT, sweat }
}