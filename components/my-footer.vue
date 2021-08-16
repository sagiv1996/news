<template lang="pug">
  v-footer(style='direction: ltr')
    v-row
      v-col(cols='12' sm='6' md='3')
        v-list
          v-list-item
            v-list-item-title  Quick Links 
          v-list-item(:to="localePath('/')" nuxt='')
            v-list-item-subtitle  home 
          v-list-item(:to="localePath('get-app')" nuxt='')
            v-list-item-subtitle  get-app 
          v-list-item(:to="localePath('/why-us')" nuxt='')
            v-list-item-subtitle  why-us 
      v-col(cols='12' sm='6' md='3')
        v-list(:dense='!$vuetify.breakpoint.mobile')
          v-list-item
            v-list-item-title  Categories 
          v-list-item(v-for='(topic, index) in topics' :key='index' @click='updateLocal(topic.value)' nuxt='')
            v-list-item-icon
              v-icon(small='') {{ topic.icon }}
            v-list-item-subtitle
              | {{ topic.value }}
      v-col(cols='12' sm='6' md='3')
        v-list
          v-list-item
            v-list-item-title  Contact Us 
          v-list-item
            v-list-item-content
              | You can contact us at
              v-btn(link='' text='' small='' left='')
                v-icon mdi-gmail
                | sagivb13@gmail.com
      v-col(cols='12' sm='6' md='3')
        v-list
          v-list-item
            v-list-item-title  Dark state 
          v-list-item
            v-list-icon
              v-btn(icon='' @click='darkMode' small='')
                v-icon mdi-theme-light-dark
</template>

<script>
export default {
  data: () => ({
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
  }),
  methods: {
    updateLocal(category) {
      localStorage.setItem("category", category);
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("useDarkTheme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>

<style>
</style>