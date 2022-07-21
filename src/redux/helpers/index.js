export function setToken(token) {
  localStorage.setItem('token', JSON.stringify(token));
}

export function getToken() {
  return localStorage.getItem('token');
}

export function removeToken() {
  localStorage.removeItem('token');
}
