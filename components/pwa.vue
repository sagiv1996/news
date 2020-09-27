<template>
  <v-card style="direction: ltr">
    <v-card-title class="justify-center">
      Download the free app for any device in the world!
    </v-card-title>
    <v-card-text class="align-center">
      <v-row align="center">
        <v-col cols="12" md="8"
          >PWA stands for progressive web app. This is an app built from the web
          technologies we all know and love, like HTML, CSS, and JavaScript, but
          with a feel and functionality that rivals an actual native app. Thanks
          to a couple of smart additions, you can turn almost any website into a
          progressive web app. This means that you can build a PWA rather
          quickly, in regards to a native app that’s pretty difficult to
          develop. Plus, you can offer all the features of native apps, like
          push notifications, offline support, and much more. Many sites you
          find online are actually a progressive web app. Take twitter.com, for
          instance. If you visit that site on your smartphone, you can install
          it to your home screen. Now, on opening the saved Twitter site, you’ll
          notice that it looks and performs just like a native app. There’s no
          browser window or nothing. There’s no difference in running it from an
          iPhone or an Android smartphone. Simply log in and you’re good to go.
          That’s a major benefit of building your web app with a PWA in mind.
          PWAs are gaining popularity. Many big sites are PWAs, like
          Starbucks.com, Pinterest.com, Washingtonpost.com and Uber.com are
          actually installable on your home screen and offer a comparable
          experience to their native apps.
          You can read more about it in the 
        <v-btn
          link
          href="https://support.google.com/chrome/answer/9658361"
          text
          color="info"
          target="_blnak"
          width="auto"
          ><v-icon x-small right>mdi-link</v-icon>attached link
          
          </v-btn
        >

        </v-col>
        
        <v-col cols="12" md="4"><v-img src="/pwa.gif" alt="pwa" /></v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>
