<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" class="indigo accent-4" fixed app dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'TodoList'
    }
  }
}
</script>

<style>
.v-toolbar__title {
  font-family: 'Damion', cursive;
  font-size: 2.5rem;
  width: 100%;
  text-align: center;
}
</style>
