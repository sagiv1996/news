
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - news',
    title: 'news',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/rtl.js',
    '@/plugins/CountryFlag.js',
   // {src: "@/Plugins/MarqueeText.js", mode: 'client'}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'vue-social-sharing/nuxt',
    'nuxt-i18n',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "https://newsapi.org/v2/top-headlines?apiKey=505e647bbabd48d1ba723b85b0f685c6",
    headers: {
      "Content-type": "application/json"
    }
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  i18n: {
    langDir: "locales/",
    locales: [
      {
        code: 'ar',
        iso: 'es-AR',
        file: 'es.json',
        name: 'Argentina'
      },
      {
        code: 'au',
        iso: 'en-AU',
        file: 'en.json',
        name: 'Australia'
      },
      {
        code: 'at',
        iso: 'de-AT',
        file: 'de.json',
        name: 'Austria'
      },
      {
        code: 'be',
        iso: 'nl-BE',
        file: 'nl.json',
        name: 'Belgium'
      },
      {
        code: 'br',
        iso: 'pt-BR',
        file: 'pt.json',
        name: 'Brazil'
      },
      {
        code: 'bg',
        iso: 'bg-BG',
        file: 'bg.json',
        name: 'Bulgaria'
      },
      {
        code: 'ca',
        iso: 'en-CA',
        file: 'en.json',
        name: 'Canada'
      },
      {
        code: 'cn',
        iso: 'zh-CN',
        file: 'zh.json',
        name: 'China'
      },
      {
        code: 'co',
        iso: 'es-CO',
        file: 'es.json',
        name: 'Colombia'
      },
      {
        code: 'cu',
        iso: 'es-CU',
        file: 'es.json',
        name: 'Cuba'
      },
      {
        code: 'cz',
        iso: 'cs-CZ',
        file: 'cs.json',
        name: 'Czech Republic'
      },
      {
        code: 'eg',
        iso: 'ar-EG',
        file: 'ar.json',
        name: 'Egypt'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr.json',
        name: 'France'
      },
      {
        code: 'de',
        iso: 'de-DE',
        file: 'de.json',
        name: 'Germany'
      },
      {
        code: 'gr',
        iso: 'el-GR',
        file: 'el.json',
        name: 'Greece'
      },
      {
        code: 'hk',
        iso: 'zh-HK',
        file: 'zh.json',
        name: 'Hong Kong SAR'
      },
      {
        code: 'hu',
        iso: 'hu-HU',
        file: 'hu.json',
        name: 'Hungary'
      },
      {
        code: 'in',
        iso: 'en-IN',
        file: 'en.json',
        name: 'India'
      },
      {
        code: 'id',
        iso: 'id-ID',
        file: 'id.json',
        name: 'Indonesia'
      },
      {
        code: 'ie',
        iso: 'en-IE',
        file: 'en.json',
        name: 'Ireland'
      },
      {
        code: 'it',
        iso: 'it-IT',
        file: 'it.json',
        name: 'Italy'
      },
      {
        code: 'jp',
        iso: 'ja-JP',
        file: 'ja.json',
        name: 'Japan'
      },
      {
        code: 'kr',
        iso: 'ko-KR',
        file: 'ko.json',
        name: 'Korea'
      },
      {
        code: 'lv',
        iso: 'lv-LV',
        file: 'lv.json',
        name: 'Latvia'
      },
      {
        code: 'lt',
        iso: 'lt-LT',
        file: 'lt.json',
        name: 'Lithuania'
      },
      {
        code: 'my',
        iso: 'ms-MY',
        file: 'ms.json',
        name: 'Malaysia'
      },
      {
        code: 'mx',
        iso: 'es-MX',
        file: 'es.json',
        name: 'Mexico'
      },
      {
        code: 'ma',
        iso: 'ar-MA',
        file: 'ar.json',
        name: 'Morocco'
      },
      {
        code: 'nz',
        iso: 'en-NZ',
        file: 'en.json',
        name: 'New Zealand'
      },
      {
        code: 'ng',
        iso: 'en-ng',
        file: 'en.json',
        name: 'Nigeria'
      },
      {
        code: 'no',
        iso: 'nb-NO',
        file: 'nb.json',
        name: 'Norway'
      },
      {
        code: 'ph',
        iso: 'en-PH',
        file: 'en.json',
        name: 'Philippines'
      },
      {
        code: 'pl',
        iso: 'pl-PL',
        file: 'pl.json',
        name: 'Poland'
      },
      {
        code: 'pt',
        iso: 'pt-PT',
        file: 'pt.json',
        name: 'Portugal'
      },
      {
        code: 'ro',
        iso: 'ro-RO',
        file: 'ro.json',
        name: 'Romania'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.json',
        name: 'Russia'
      },
      {
        code: 'rs',
        iso: 'Cy-sr-SP',
        file: 'sr.json',
        name: 'Serbia'
      },
      {
        code: 'sg',
        iso: 'zh-SG',
        file: 'zh.json',
        name: 'Singapore'
      },
      {
        code: 'sk',
        iso: 'sk-SK',
        file: 'sk.json',
        name: 'Slovakia'
      },
      {
        code: 'si',
        iso: 'sl-SI',
        file: 'sl.json',
        name: 'Slovenia'
      },
      {
        code: 'za',
        iso: 'en-ZA',
        file: 'en.json',
        name: 'South Africa'
      },
      {
        code: 'se',
        iso: 'sv-SE',
        file: 'sv.json',
        name: 'Sweden'
      },
      {
        code: 'ch',
        iso: 'de-CH',
        file: 'de.json',
        name: 'Switzerland'
      },
      {
        code: 'tw',
        iso: 'zh-TW',
        file: 'zh.json',
        name: 'Taiwan'
      },
      {
        code: 'th',
        iso: 'th-TH',
        file: 'th.json',
        name: 'Thailand'
      },
      {
        code: 'nl',
        iso: 'nl-NL',
        file: 'nl.json',
        name: 'The Netherlands'
      },
      {
        code: 'tr',
        iso: 'tr-TR',
        file: 'tr.json',
        name: 'Turkey'
      },
      {
        code: 'ua',
        iso: 'uk-UA',
        file: 'uk.json',
        name: 'Ukraine'
      },
      {
        code: 'ae',
        iso: 'ar-AE',
        file: 'ar.json',
        name: 'United Arab Emirates'
      },
      {
        code: 'gb',
        iso: 'en-GB',
        file: 'en.json',
        name: 'United Kingdom'
      },
      {
        code: 'us',
        iso: 'en-US',
        file: 'en.json',
        name: 'United States'
      },
      {
        code: 've',
        iso: 'es-VE',
        file: 'es.json',
        name: 'Venezuela'
      },
      {
        code: 'il',
        iso: 'he-IL',
        file: 'he.json',
        name: 'israel'
      },
      {
        code: 'sa',
        iso: 'ar-SA',
        file: 'ar.json',
        name: 'schimbă limba'
      }
    ],
    seo: true,
    strategy: "prefix_and_default",
    defaultLocale: "il",
    lazy: true,
    vueI18nLoader: true,
  },
  pwa: {
    manifest: {
      start_url: '/pwa'
    },
  },
  
  oneSignal: {
    init: {
      appId: 'dde5af34-ca4c-4263-9b87-d3195564ec70',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
          disable: true
      }
    }
  }
}
