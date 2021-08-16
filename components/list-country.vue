<template lang="pug">
  v-list
    v-list-item
      v-text-field(:label="$t('search')" prepend-inner-icon='mdi-search-web' clearable='' v-model.lazy='string' @click:clear='string = null')
    v-virtual-scroll(:items='filteredItems' :item-height='50' :max-height="$vuetify.breakpoint.mobile? '100vh' : '75vh'")
      template(v-slot='{ item }')
        v-list-item(dense='' :to='switchLocalePath(item.code)' nuxt='' link='')
          v-list-item-subtitle
            country-flag(:country='item.code')
          v-spacer
          v-list-item-subtitle {{item.name}} ({{item.iso}})
    v-list-item(v-if='filteredItems.length === 0')
      v-list-item-title
        | No results were found for the values &ZeroWidthSpace;&ZeroWidthSpace;you searched for
</template>

<script>
export default {  
  data: () => ({
    string: null,
  }),
  computed: {
    filteredItems() {
      if (this.string) {
        return this.$i18n.locales.filter((locale) => {
          return (
            locale.name.toLowerCase().indexOf(this.string.toLowerCase()) > -1
          );
        });
      } else return this.$i18n.locales;
    },
  },
};
</script>
