<template>
  <div class="footer" >
      <v-footer :fixed="fixed" app>
        <small><span >&copy; 2018</span></small>
      </v-footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  // props: {
  //   classList: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  data() {
    return {
      fixed: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
