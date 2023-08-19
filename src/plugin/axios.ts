import axios from 'axios'
import Cookie from './cookie'

const baseDomain = 'http://127.0.0.1:4444/'
const baseUrl = `${baseDomain}ln-bio-api` // or `${baseDomain}/api/v1`

const service = axios.create({
  baseURL: baseUrl, // api 的 base_url
  timeout: 5000, // request timeout
})
let authToken: string = ''

// Set the Authorization header for all requests
service.interceptors.request.use((config: any) => {
  const token  =  Cookie.share.getToken()
  if (token!= "" && token != null && token.length >=32) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// const apiRepository = {
//   // Define your API methods here
//   get:async (url:string, params:string):Promise<any> => await service.get(url, { params }),
//   post: (url:string, data: any) => service.post(url, data),
//   put: (url:string, data: any) => service.put(url, data),
//   delete: (url:string) => service.delete(url),
// };

const authRepository = {
  login: async (username: string, password: string) => {
    try {
      var status = false
      await service
        .post('/auth/signin', {
          username,
          password
        })
        .then((result: any) => {
          console.log(result)
          if (
            result.data.data != null &&
            result.data.data.access_token != null
          ) {
            authToken = result.data.data.access_token // Save the token
            Cookie.share.setToken(authToken)
            status = true // Login successful
          }
        })
        .catch((err: any) => {
          Cookie.share.setToken("")
          status = false // Login failed
        })
      return status
    } catch (error) {
      Cookie.share.setToken("")
      console.error('Login error:', error)
      return false // Login failed
    }
  }
}

export { service, authRepository }
