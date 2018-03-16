export const FILTER = 'FILTER'
export const TAG = 'TAG'
export const SWEAT = 'SWEAT'
export const DURATION = 'DURATION'

export function filter(tags, sweat, duration) {
	return { 
		type: FILTER,
		payload: {
			tags,
			sweat,
			duration
		}
	}
}

export function tag(tag) {
	return { type: TAG, tag }
}

export function sweat(sweat) {
	return { type: SWEAT, sweat }
}

export function duration(duration) {
	return { type: DURATION, duration }
}