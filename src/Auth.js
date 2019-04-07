const Auth = {
    isLogin: false,
    login(callback) {
        this.isLogin = true
        setTimeout(callback, 200)
    },
    logout(callback) {
        this.isLogin = false
        setTimeout(callback, 200)
    }
}

export default Auth;