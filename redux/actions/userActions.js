export const LOGIN = 'LOGIN'

export const login = (name, username, pass) => ({
    type: LOGIN,
    payload: {
        name,
        username,
        pass
    }
})