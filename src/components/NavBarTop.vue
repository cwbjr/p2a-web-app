<template>
  <div>
    <v-navigation-drawer temporary :mini-variant="miniVariant" v-model="drawer" enable-resize-watcher fixed app>

      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-content class="pl-0">
        <h1 class="display-2 mb-0 mx-0 mb-5">Charles Ballew</h1>
        <img src="../../static/image/me-icon.png" alt="" width="300">
        <object height="260" data="../../static/image/g70.pdf"></object>
      </v-content>

    </v-navigation-drawer>

    <v-toolbar app :clipped-left="clipped">
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon color="blue lighten-2">check_circle</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <img src="../../static/dd-logo2.png" alt="D and D" width="100" />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <NavBarRight ></NavBarRight>
    </v-navigation-drawer>

  </div>
</template>

<script>
import NavBarRight from '@/components/NavBarRight';

export default {
  name: 'NavBarTop',
  components: {
    NavBarRight,
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Imagine Build Inspire',
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'P2 Web App Project',
    };
  },
};
</script>

<style scoped>
  .content {
    padding-right: 10px;
  }
  h1 {
    width: 300px;
    color: white;
    text-shadow: 1px 1px 2px #FF6F00, 0 0 5px #42A5F5, 0 0 7px darkred;
  }
</style>
