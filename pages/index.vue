<template>
  <div>
    <load-data />
    <why-us :dark="true"/>
    <pwa />
  </div>
</template>

<script>
export default {
  head:({$i18n})=>({
    title: $i18n.locale
  })
};
</script>
