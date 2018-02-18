<template>
  <v-app id="app">
    <NavBarTop />
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>

    <Footer />
<!-- :classList="classList" -->
<!-- v-for="classList in classData" -->
<!-- :key="classList.name" -->
<!-- :classList="classList" v-for="classList in classData" -->
  </v-app>
</template>

<script>
import NavBarTop from '@/components/NavBarTop';
import Footer from '@/components/Footer';
// import NavBarRight from '@/components/NavBarRight';
// import Brochure from '@/components/Brochure';

export default {
  name: 'App',
  components: {
    NavBarTop,
    Footer,
    // NavBarRight,
    // Brochure,
  },
  // props: {
  //   classList: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  // data() {
  //   return {
  //     apiURL: 'http://www.dnd5eapi.co/api/classes/',
  //     classNames: [],
  //     classData: [],
  //   };
  // },
  // mounted() {
  //   this.getClassData();
  // },
  // methods: {
  //   getClassData() {
  //     fetch(this.apiURL)
  //       .then(res => res.json())
  //       .then((data) => {
  //         this.classData = data.results;
  //         console.log(this.classData);
  //       });
  //   },
  // },
};
</script>

<style>
#app {

}

small {
  margin-left: 60px;
}

</style>
