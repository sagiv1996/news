<template lang="pug">
  div
    v-row(no-gutters='')
      v-col(cols='12' md='8')
        v-chip-group(v-model='category' center-active='' active-class='primary--text' @change='updateLocal' :mandatory='string == null')
          v-chip(v-for='(topic, index) in topics' :key='index' :value='topic.value')
            | {{ $t(topic.value) }}
            v-avatar(right='')
              v-icon {{ topic.icon }}
      v-col(cols='12' md='4')
        v-text-field(:label="$t('search')" outlined='' @keypress.enter='search' prepend-inner-icon='mdi-search-web' clearable='' :append-icon="$vuetify.rtl ? 'mdi-arrow-left' : 'mdi-arrow-right'" @click:append='search' v-model='string')
    client-only(v-if='$fetchState.pending || $fetchState.error')
      v-row(align='center' justify='center' v-if='$fetchState.pending')
        v-col(v-for='i in 9' :key='i' cols='12' md='6' lg='4')
          v-skeleton-loader.mx-auto(max-width='300' type='card')
      v-alert(type='error' :value='true' v-else-if='$fetchState.error') error load data + {{ $fetchState.error }}
    v-row(v-else-if=' data.articles && data.totalResults > 0' align='center' justify='center')
      v-col(v-for='(article, index) in data.articles' :key='index' cols='12' md='6' lg='4')
        watch-article(:article='article')
    v-row(v-else='')
      v-col
        v-alert.text-left(type='info' :value='true') No results were found for the values &ZeroWidthSpace;&ZeroWidthSpace;you searched for
  
</template>>

<script>
export default {
  data: () => ({
    category: "general",
    topics: [
      { value: "business", icon: "mdi-handshake-outline" },
      {
        value: "entertainment",
        icon: "mdi-emoticon-lol-outline",
      },
      { value: "general", icon: "mdi-lightbulb-on-outline" },
      { value: "health", icon: "mdi-hospital-building" },
      { value: "science", icon: "mdi-head-flash-outline" },
      { value: "sports", icon: "mdi-weight-lifter" },
      { value: "technology", icon: "mdi-vpn" },
    ],
    data: null,
    string: null,
  }),
  async fetch() {
    if (this.category) {
      const lang = this.$i18n.locales.find(locale=>locale.code === this.$i18n.locale).iso.split('-')[0]
      const url = `&max100&country=${this.$i18n.locale}&category=${this.category}&lang=${lang}`;
      const data = await this.$axios.$get(this.$axios.defaults.baseURL + url);
      this.data = data;
      this.string = null;
    }
  },
  methods: {
    async search() {
      if (this.string) {
        this.$fetchState.pending = true;
        const url = `&country=${this.$i18n.locale}&max=20&q=${this.string}`;
        const data = await this.$axios.$get(this.$axios.defaults.baseURL + url);
        this.$fetchState.pending = false;
        this.data = data;
        this.category = null;
      }
    },
    updateLocal() {
      localStorage.setItem("category", this.category);
      this.$fetch();
    },
  },
  beforeMount() {
    this.category = localStorage.getItem("category")
      ? localStorage.getItem("category")
      : "general";
  },
};
</script>