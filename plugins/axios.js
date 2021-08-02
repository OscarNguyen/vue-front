export default function ({ $axios, isDev }) {
  let baseURL = 'http://localhost:8080/api/'
  if (!isDev) {
    baseURL = 'http://backend-server:8080/api/'
  }
  $axios.setBaseURL(baseURL)
}
