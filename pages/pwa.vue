<template>
  <v-layout row wrap justify-center align-center style="height: 90vh;">
      <v-flex xs1>
          <v-progress-circular indeterminate size="100" width="1"/>
      </v-flex>

  </v-layout>
</template>

<script>
export default {
    mounted()
    {
        this.$router.replace(`/`)
    }
}
</script>