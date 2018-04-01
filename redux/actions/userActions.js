export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (email) => {
  return {
    type: 'LOGIN',
    email: email,
  }
}
 
export const signup = (username, password) => {
  return (dispatch) => {
  }
}