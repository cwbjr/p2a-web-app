<template>
  <div id="character-img">
    <div class="character-img-list">
      <div class="para-img">
        <img :src="toonImg.image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterImg',
  props: {
    toonImg: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // toons: {
      //   title: '',
      //   pay: '',
      //   description: '',
      //   interested: []
      // }
    };
  },
  methods: {
    // submitForm () {
    //   this.sendListing(this.job)
    //   this.job = {
    //     title: '',
    //     pay: '',
    //     description: '',
    //     interested: []
    //   }
    // // console.log(this.job);
    // }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.para-img img {
  height: 525px;
}

</style>
