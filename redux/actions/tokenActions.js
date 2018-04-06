export const TOKEN = 'TOKEN'

export const token = (newToken) => {
	console.log('hello', newToken)
	return {
		type: TOKEN,
		token: newToken,
	}
}
