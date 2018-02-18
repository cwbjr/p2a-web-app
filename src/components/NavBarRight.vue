<template>
  <!-- <v-app> -->
    <v-container  id="nav-bar-right">
      <v-content>
        <div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">
          <v-toolbar color="pink">
            <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
            <v-toolbar-title class="white--text">TOOLS USED</v-toolbar-title>
            <!-- <v-spacer></v-spacer> -->
            <!-- <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn> -->
          </v-toolbar>
          <v-card>
            <v-container fluid style="min-height: 0;" grid-list-lg>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card color="cyan darken-2" class="white--text">
                    <v-container fluid grid-list-lg>
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline">Vue.js</div>
                            <div>Lorem ipsum dolor.</div>
                          </div>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media src="../../static/v-logo.png" height="125px" contain></v-card-media>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-flex>
                <v-flex xs12>
                  <v-card color="blue darken-2" class="white--text">
                    <v-container fluid grid-list-lg>
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline">Vuetify.css</div>
                            <div>Lorem ipsum dolor.</div>
                          </div>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media src="../../static/logo1.png" height="125px" contain></v-card-media>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-flex>
                <v-flex xs12>
                  <v-card color="purple" class="white--text">
                    <v-container fluid grid-list-lg>
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline">JavaScript</div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                          </div>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media src="../../static/js-logo.png" height="125px" contain></v-card-media>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </div>
      </v-content>
    </v-container>
  <!-- </v-app> -->

</template>

<script>
export default {
  name: 'NavBarRight',
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      // items: [{
      //   icon: 'bubble_chart',
      //   title: 'Imagine Build Inspire',
      // }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      // title: 'P2 Web App Project',
    };
  },
};
</script>

<style scoped>

</style>
