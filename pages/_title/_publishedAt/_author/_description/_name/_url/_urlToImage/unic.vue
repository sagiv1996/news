<template>
  <v-row>
    <v-col cols="12"><watch-article :article="article" size="50vh" /> 
    <v-col cols="12" class="left-text">
      <v-card>
        <v-card-title primary-title class="justify-center">
          More articles that might interest you</v-card-title>
      </v-card>
    </v-col>
    </v-col>
    <v-col v-for="axiosArticle in moreArticles.articles" :key="axiosArticle" cols="12" md="4">
      <watch-article :article="axiosArticle"  />
    </v-col>
  </v-row>
</template>

<script>
export default {
  asyncData({ params }) {
    const article = {
      title: params.title,
      publishedAt: params.publishedAt,
      author: params.author,
      description: params.description,
      source: { name: params.name },
      urlToImage: params.urlToImage,
      url: params.url,
    };
    return { article };
  },
  head() {
    return {
      title: this.$route.params.title,
    };
  },
  data: () => ({
    moreArticles: {},
  }),
  async mounted() {
    const url = `&pageSize=6&country=${this.$i18n.locale}&category=general`;
    this.moreArticles = await this.$axios.$get(this.$axios.defaults.baseURL + url);
  },
};
</script>
