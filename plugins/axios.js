export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        config.headers.common.refer="http://localhost:3000/"
      console.log(config)
    })
  }
  