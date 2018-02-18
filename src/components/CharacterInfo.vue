<template>
  <div id="character-info">
    <div class="character-list">
      <h2 name="toon_name">{{ characters.name }}</h2>
      <div class="para-div" name="toon_desc">
        <p>{{ characters.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterInfo',
  props: {
    characters: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      className: [],
    };
  },
  mounted() {
    this.addName();
  },
  methods: {
    addName() {
      this.className.push(this.characters.name);
      console.log(this.characters);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#character-info {
  color: #E1F5FE;
  text-shadow: 1px 1px 2px #263238, 0 0 35px #263238, 0 0 7px darkblue;
}
.name-list {
  width: 100px;
  height: 45px;
}
.name-list .btn {
  width: 85px;
  height: 35px;
}
</style>
