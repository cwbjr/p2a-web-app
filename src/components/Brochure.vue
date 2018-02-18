<template>
  <div id="brochure">

    <v-container>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Player Character Classes</h3>
          <p>
            <span class="">Before you start, you might find it helpful to think about the basic kind of character you want to play. You might be a courageous knight, a skulking rogue, a fervent cleric, or a flamboyant wizard. Or you might be more interested in an unconventional character, such as a brawny rogue who likes to mix it up in hand-to‐hand combat, or a sharpshooter who picks off enemies from afar.</span>
          </p>

          <p>
            <span class="">Before you start, you might find it helpful to think about the basic kind of character you want to play. You might be a courageous knight, a skulking rogue, a fervent cleric, or a flamboyant wizard. Or you might be more interested in an unconventional character, such as a brawny rogue who likes to mix it up in hand-to‐hand combat, or a sharpshooter who picks off enemies from afar.</span>
          </p>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">Choose your destiny!</div>

          <v-btn to="/classes" large color="light-blue lighten-3" class="mx-0" name="btn">Classes</v-btn>

        </v-flex>
      </v-layout>
    </v-container>
</div>
</template>

<script>
import Classes from '@/components/Classes';

export default {
  name: 'Brochure',
  components: {
    Classes,
  },
  data() {
    return {

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style: none;
  }
  p span {
    font-size: 18px;
  }
  .bg-shadow {
    background-color: lightgray;
    opacity: 0.5;
  }
  .btn {
    color: #FFF8E1;
  }
</style>
