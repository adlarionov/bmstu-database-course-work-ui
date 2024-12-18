export default class AuthApi {
  static user = { username: '', password: '' }
  static token = 'y0_AgAAAAA67UkNAAvG9wAAAAEcXibLAACRWUkrZzZK55IX8ch95w42_WxxLw'

  static auth() {
    const user = sessionStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }

  static login(username: string, password: string) {
    if (!this.auth()) {
      this.user = { username, password }
      sessionStorage.setItem('user', JSON.stringify({ username, password }))
    }
  }

  static logout() {
    this.user = { username: '', password: '' }
    sessionStorage.removeItem('user')
  }
}