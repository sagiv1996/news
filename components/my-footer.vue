<template>
  <v-footer style="direction: ltr">
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-list>
          <v-list-item>
            <v-list-item-title> Quick Links </v-list-item-title> </v-list-item
          ><v-list-item :to="localePath('/')" nuxt>
            <v-list-item-subtitle> home </v-list-item-subtitle>
          </v-list-item>
          <v-list-item :to="localePath('get-app')" nuxt>
            <v-list-item-subtitle> get-app </v-list-item-subtitle>
          </v-list-item>

          <v-list-item :to="localePath('/why-us')" nuxt>
            <v-list-item-subtitle> why-us </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col cols="12" sm="6" md="3">
        <v-list :dense="!$vuetify.breakpoint.mobile">
          <v-list-item>
            <v-list-item-title> Categories </v-list-item-title>
          </v-list-item>
          <v-list-item
            v-for="(topic, index) in topics"
            :key="index"
            @click="updateLocal(topic.value)"
            nuxt
          >
            <v-list-item-icon>
              <v-icon small>{{ topic.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle>
              {{ topic.value }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-list>
          <v-list-item>
            <v-list-item-title> Contact Us </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              You can contact us at
              <v-btn link text small left
                ><v-icon>mdi-gmail</v-icon>sagivb13@gmail.com</v-btn
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-list>
          <v-list-item>
            <v-list-item-title> Dark state </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-icon>
              <v-btn icon @click="darkMode" small>
                <v-icon>mdi-theme-light-dark</v-icon>
              </v-btn>
            </v-list-icon>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-footer>
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