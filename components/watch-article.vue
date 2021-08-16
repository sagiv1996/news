<template lang="pug">
  v-card( data-aos="fade-up")
    v-img.white--text.align-end(:src='article.urlToImage' gradient='to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)' :height='size' contain='' lazy-src='../no-image.jpg' :alt='article.title')
      v-card-title.justify-center {{ article.title }}
      template(v-slot:placeholder='' v-if='article.urlToImage')
        v-row.fill-height.ma-0(align='center' justify='center')
          v-progress-circular(indeterminate='' color='grey lighten-5')
    v-card-subtitle.justify-center
      | {{ $t(&quot;publishedAt&quot;) }}
      | {{ article.publishedAt }}
      | {{ article.author }}
    v-card-actions
      v-btn(icon='' @click='show = !show' :disabled='!article.description')
        v-icon {{ show ? &quot;mdi-chevron-up&quot; : &quot;mdi-chevron-down&quot; }}
      v-spacer
      v-btn(color='purple' text='' target='_blank' :href='article.url')
        | {{ $t(&quot;open&quot;) }}
        template(v-if="article.source.name.split('.').length > 0")
          | {{
          | article.source.name.split(&quot;.&quot;)[0]
          | }}
        template(v-else='') {{ article.source.name }}
      v-spacer
      v-edit-dialog
        v-btn(icon='')
          v-icon mdi-share
        template(v-slot:input='')
          v-card-text
            sharenetwork(v-for='network in networks' :network='network.network' :key='network.network' :url="'http://' + $store.state.host +'/' + $i18n.locale + '/' + getUnicUrl(article)" title='מצאתי כתבה שאני רוצה לשתף אותך!' :description='article.title' quote='יש לי יופי של מאמר בשבילך' :hashtags="\
            article.description\
            ? article.description.replace(' ', ',')\
            : null\
            " twitteruser='sagiv')
              v-btn(icon='')
                v-icon(:color='network.color') {{ network.icon }}
          v-divider
    v-expand-transition
      div(v-show='show')
        v-divider
        v-card-text.align-center
          | {{
          | article.description
          | }}
</template>
  
<script>
export default {
  props: { article: Object, size: { type: String, default: "200" } },
  data: () => ({
    show: false,
    networks: [
      { network: "email", icon: "mdi-email", color: "#333333" },
      { network: "facebook", icon: "mdi-facebook", color: "#1877f2" },
      { network: "skype", icon: "mdi-skype", color: "#00aff0" },
      { network: "sms", icon: "mdi-cellphone-iphone", color: "#333333" },
      { network: "telegram", icon: "mdi-telegram", color: "#0088cc" },
      { network: "twitter", icon: "mdi-twitter", color: "#1da1f2" },
      { network: "whatsapp", icon: "mdi-whatsapp", color: "#25d366" },
    ],
  }),
  methods: {
    getUnicUrl(article) {
      const url = encodeURIComponent(article.url),
        urlToImage = encodeURIComponent(article.urlToImage),
        description = article.description
          ? article.description
          : "לא קיים תאור";
      return `/${encodeURIComponent(article.title)}/${encodeURIComponent(
        article.publishedAt
      )}/${encodeURIComponent(article.author)}/${encodeURIComponent(
        description
      )}/${encodeURIComponent(article.source.name)}/${url}/${urlToImage}/unic`;
    },
  },
};
</script>
