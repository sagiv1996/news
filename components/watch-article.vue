<template>
  <v-card>
    <v-img
      :src="article.urlToImage"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
      :height="size"
      contain
      lazy-src="../no-image.jpg"
      :alt="article.title"
    >
      <v-card-title class="justify-center">{{ article.title }}</v-card-title>
      <template v-slot:placeholder v-if="article.urlToImage">
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-subtitle class="justify-center">
      {{ $t("publishedAt") }}
      {{ article.publishedAt }}
      {{ article.author }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn icon @click="show = !show" :disabled="!article.description">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="purple" text target="_blank" :href="article.url">
        {{ $t("open") }}
        <template v-if="article.source.name.split('.').length > 0">{{
          article.source.name.split(".")[0]
        }}</template>
        <template v-else>{{ article.source.name }}</template>
      </v-btn>
      <v-spacer></v-spacer>
      <v-edit-dialog>
        <v-btn icon>
          <v-icon>mdi-share</v-icon>
        </v-btn>
        <template v-slot:input>
          <v-card-text>
            <ShareNetwork
              v-for="network in networks"
              :network="network.network"
              :key="network.network"
              :url="'http://' + $store.state.host +'/' + $i18n.locale + '/' + getUnicUrl(article)"
              title="מצאתי כתבה שאני רוצה לשתף אותך!"
              :description="article.title"
              quote="יש לי יופי של מאמר בשבילך"
              :hashtags="
                article.description
                  ? article.description.replace(' ', ',')
                  : null
              "
              twitterUser="sagiv"
            >
              <v-btn icon>
                <v-icon :color="network.color">{{ network.icon }}</v-icon>
              </v-btn>
            </ShareNetwork>
          </v-card-text>
          <v-divider></v-divider>
        </template>
      </v-edit-dialog>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text class="align-center">{{
          article.description
        }}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
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
