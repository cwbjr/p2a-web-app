<template>
  <div id="class-list">
    <div class="name-list">
      <v-btn small color="light-blue darken-2"
        class="mx-0 btn"
        >{{ classList.name }}</v-btn>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassList',
  props: {
    classList: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#class-list {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  display: inline-block;
}
.name-list {
  width: 100px;
  height: 45px;
}
.name-list .btn {
  width: 85px;
  height: 35px;
  box-shadow: 2px 2px 2px #01579B, 0 0 35px #37474F, 0 0 7px black;
  color: #E1F5FE;
  text-shadow: 1px 1px 3px #C8E6C9, 0 0 15px #263238, 0 0 5px darkblue;
}
.name-list .btn:hover {
  box-shadow: 2px 2px 2px #01579B, 0 0 35px #37474F, 0 0 7px red;
  color: #E1F5FE;
  text-shadow: 1px 1px 3px #C8E6C9, 0 0 15px #CFD8DC, 0 0 5px #FFCCBC;
  color: red;
}
</style>
