

class Cookie {
  public static share = new Cookie()

  setToken = (token: string) => {
    document.cookie = `access_token=${token};`
  }
  getToken = () => {
    const cookies = document.cookie.split('; ')
    let token: string = ""
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=')
      if (name === 'access_token') {
        token = value
        break
      }
    }
    return token;
  }
}

export default Cookie