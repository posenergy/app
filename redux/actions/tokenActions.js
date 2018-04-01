export const TOKEN = 'TOKEN'

export const token = (newToken) => {
	return {
		type: TOKEN,
		token: newToken,
	}
}
