export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        console.log(config.headers.common.referer = "http://localhost:3000/")
    })
  }
  