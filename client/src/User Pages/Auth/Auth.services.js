class AuthService {
  constructor() {
    this.authenticated = false;
  }
  login(cb) {
    this.authenticated = true;
    cb();
  }
  logout(cb) {
    this.authenticated = false;
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
  signup() {}
}
export default new AuthService();
