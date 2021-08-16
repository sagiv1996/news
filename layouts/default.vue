<template lang="pug">
  v-app
    v-navigation-drawer(v-model='drawer' bottom='' app='' :right='$vuetify.rtl' :mini-variant='variant && !$vuetify.breakpoint.mobile' mini-variant-width='100')
      list-country
        v-divider
        v-list
          v-list-item
            v-btn(icon='' @click='variant = !variant' :disabled='$vuetify.breakpoint.mobile' v-show='!$vuetify.breakpoint.mobile' x-large='')
              v-icon(v-text="\
              $vuetify.rtl\
              ? variant\
              ? 'mdi-arrow-left'\
              : 'mdi-arrow-right'\
              : variant\
              ? 'mdi-arrow-right'\
              : 'mdi-arrow-left'\
              " x-large='')
            v-spacer
            v-btn(icon='' @click='darkMode' x-large='')
              v-icon(x-large='') mdi-theme-light-dark
    v-app-bar(app='')
      v-btn(icon='' @click='drawer = !drawer')
        v-icon(x-large='' color='primary') mdi-cogs
      v-spacer
      v-btn(icon='' :to="localePath('/')" nuxt='')
        v-avatar
          img(:src='$icon(512)' alt='icon news')
    v-main
      v-container(fluid='')
        v-btn(v-scroll='onScroll' fab='' fixed='' bottom='' :right='!$vuetify.rtl' :left='$vuetify.rtl' color='primary' @click='$vuetify.goTo(0)' v-show='btnTop')
          v-icon mdi-arrow-up
        nuxt(v-if='$nuxt.isOnline')
        v-alert.text-left(type='primary' :value='true' v-else)
          | There is no internet connection
        my-footer
</template>


<script>
import json from "../locales/locale.json";
export default {
  created() {
    this.$vuetify.rtl = this.$t("dir") === "rtl";
  },
  data() {
    return {
      searchData: json,
      drawer: null,
      variant: false,
      btnTop: false,
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.btnTop = top > 20;
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("useDarkTheme", this.$vuetify.theme.dark.toString());
    },
    search(string) {
      if (string) {
        this.searchData = this.searchData.filter(
          (locale) =>
            locale.text.toLowerCase().startsWith(string.toLowerCase()) ||
            locale.country.toLowerCase().startsWith(string.toLowerCase())
        );
      } else this.searchData = json;
    },
  },
  beforeMount() {
    const theme = localStorage.getItem("useDarkTheme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else this.$vuetify.theme.dark = false;
    }
  },
  computed: {
    sortData: function () {
      return this.searchData.sort((a, b) => a.text > b.text);
    },
  },
};
</script>
