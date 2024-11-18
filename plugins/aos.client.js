// plugins/aos.client.js
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use({
    install() {
      AOS.init()
    }
  })

  nuxtApp.hook('page:finish', () => {
    setTimeout(() => {
      AOS.refresh()
    }, 1000)
  })
})
