<template>
  <div id="classes">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>

        <v-flex id="ltUpBox" xs6>
          <v-card class="color" height="580px">
            <v-card-text class="px-0">6 LEft side</v-card-text>

<!-- Image of Character Classes -->
            <CharacterImg v-for="toonImg in characterList"
              :toonImg="toonImg"
              :key="toonImg.image"
              :class="{ hidden : showList }"/>
          </v-card>
        </v-flex>

        <v-flex id="rtUpBox" xs6 >
          <v-card class="color" height="580px">
            <v-card-text class="px-0">6 Right side</v-card-text>

<!-- Info of Character Classes -->
            <div class="character-list"v-for="characters in characterList"
              :characters="characters" :key="characters.name"
              :class="{ hidden : showList }">
                <h2 name="toon_name">{{ characters.name }}</h2>
                <div class="para-div" name="toon_desc">
                  <p>{{ characters.description }}</p>

                </div>
            </div>


            <!-- <CharacterInfo v-for="characters in characterList"
              :characters="characters" :key="characters.name"
               v-if="showList"/> -->
          </v-card>
        </v-flex>

        <v-flex xs12 >
          <v-card class="color2" height="200px">
            <v-card-text class="px-0">12 lorem</v-card-text>

<!-- List of Character Classes as Buttons -->
              <div class="name-list" v-for="classList in classData"
                :key="classList.name" :classList="classList">
                  <v-btn small color="light-blue darken-2" class="mx-0 btn"
                    type="button" name="button" value="classList.name"
                    @click="event()">
                      {{ classList.name }}
                  </v-btn>
              </div>
<!-- @click="showList = !showList" -->

            <!-- <ClassList v-for="classList in classData"
              :classList="classList" :key="classList.name"
              /> -->

            <v-card-actions class="text-xs-center">
              <v-btn to="/" large color="blue lighten-3" name="btn">Brochure</v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
</template>

<script>
// import ClassList from '@/components/ClassList';
// import CharacterInfo from '@/components/CharacterInfo';
import CharacterImg from '@/components/CharacterImg';

export default {
  name: 'Classes',
  components: {
    // ClassList,
    // CharacterInfo,
    CharacterImg,
  },
  prop: {
    classList: {
      type: Object,
      required: true,
    },
    characters: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      classInfo: {

      },
      // classDescription: [],
      // classImage: [],
      showList: true,
      apiURL: 'http://www.dnd5eapi.co/api/classes/',
      apiURL_2: '../../static/character-info.json',
      classData: [],
      characterList: [],
    };
  },
  mounted() {
    this.getClassData();
    this.listClassCharacter();
  },
  methods: {
    getClassData() {
      fetch(this.apiURL)
        .then(res => res.json())
        .then((data) => {
          this.classData = data.results;
          // console.log(this.classData);
        });
    },
    listClassCharacter() {
      fetch(this.apiURL_2)
        .then(res => res.json())
        .then((data) => {
          this.characterList = data.class;
          // this.classByName = [];
          // console.log(this.characterList);
        });
    },
  },
  computed: {
    showSelectClass() {
      this.characters(this.classInfo);
      this.classInfo = {
        name: '',
        description: '',
      };
    },
    event() {
        if (event.target.innerText === 'RANGER') {
        alert('hello');
      }
      // console.log(event.target.innerText);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hidden {
  display: none;
}
#classes {
  width: 100%;
}
#ltUpBox, #rtUpBox {
  overflow: hidden;
}
.color {
  background: linear-gradient(to top, #263238 , white);
}
.color2 {
  background: linear-gradient(to top, white 10%, #455A64 85%);
}
.btn {
  color: #FFF8E1;
}
/*  */
/* #class-list {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  display: inline-block;
} */
.name-list {
  width: 100px;
  height: 45px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  display: inline-block;
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
/*  */
/* #character-info {
  color: #E1F5FE;
  text-shadow: 1px 1px 2px #263238, 0 0 35px #263238, 0 0 7px darkblue;
} */
.name-list {
  width: 100px;
  height: 45px;
  color: #E1F5FE;
  text-shadow: 1px 1px 2px #263238, 0 0 35px #263238, 0 0 7px darkblue;
}
.name-list .btn {
  width: 85px;
  height: 35px;
}
</style>
