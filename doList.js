Vue.component('doto', {
  props: ['doto'],
  data() {
   return {
    checkToDo: false,
    isDo: false,
    deleteButton: "",
    answerDeleteToDo: false,
    showSettingsDeleteVerif: true,
    showSettingsDelete: false,
    z : 0,
    isChanging: false,
    isChange2: false,
    changeDo: false,
    showSettingsButton: false,
    annulerNormalToModify: true,
    showEditButtonToChange: true,
    informationPage: false,
    showInformation: false,
   };
  },
  methods: {
    clickSalut() {
      alert("saluit");
    },
    yesDo() {
      if (this.doto.done){
        this.isDo = true;
        return true;
      }else {
        return false;
      }
    },
    noDo() {
      if (this.doto.done) {
        return false;
      } else {
        this.isDo = false;
        return true;
      }
    },
    inverseDo() {
      this.doto.done = !this.doto.done;
    },
    openSettingsPage() {
      this.answerDeleteToDo = true;
    },
    delteToDo() {
      const id = this.doto.id;
      const index = toDos.toDosLists.findIndex((todo) => todo.id === id);
      if (index >= 0) {
        toDos.toDosLists.splice(index, 1);
      }
      this.answerDeleteToDo = false;
      setTimeout(() => {
        this.answerDeleteToDo = false;
      }, 50);
    },
    closeSettingsPage() {
      this.answerDeleteToDo = false;
      this.msgModify = "Modifier";
      this.showSettingsDelete = false;
      this.showSettingsDeleteVerif = true;
    },
    changeToDo() {
      console.log("changement de do")
      this.isChanging = true;
      this.changeDo = true;
      saveDoBeforeChange = this.doto.do;
      this.msgModify = "Terminer";
      this.annulerNormalToModify = false;
      this.$nextTick(() => this.$refs.refEditDo.focus());
      this.showEditButtonToChange = false;
    },
    returnExDo() {
      console.log("Annuler le changement")
      this.doto.do = saveDoBeforeChange;
      this.$nextTick(() => this.$refs.refEditDo.focus());
      this.saveDo();
    },
    tryDeleteToDo(){
      this.showSettingsDelete = true;
      this.showSettingsDeleteVerif = false;
    },
    saveDo() {
      console.log("Sauvegarde");
      this.isChanging = false;
      this.changeDo = false;
      this.msgModify = "Modifier";
      if (catchDo(this.doto.do)) {
      console.log("Sauvegarde réussite");
        this.annulerNormalToModify = true;
        this.showEditButtonToChange = true;
    } else {
        this.showInformation = true;
        this.showSettingsDelete = false;
        this.showSettingsDeleteVerif = false;
        setTimeout(() => {
          console.log("Sauvegarde -> échec, delete page");
        this.showInformation = false;
        this.showSettingsDeleteVerif = true;
        }, 3000);
        this.returnExDo();
      }
    },
    mouseOverDoList() {
      this.showSettingsButton = true;
    },
    mouseLeaveDoList() {
      this.showSettingsButton = false;

    },
    limitation() {
      this.doto.do
    }  
  },
  template: `
  <div class="doList" @mouseover="mouseOverDoList" @mouseleave="mouseLeaveDoList">
    <div class="notDo doCheckbox" v-show="noDo()" v-on:click="inverseDo"><img class="imgSvg inCorrect" src="incorrect.svg"/></div>
    <div class="itsDo doCheckbox" v-show="yesDo()" v-on:click="inverseDo"><img class="imgSvg Correct" src="correct.svg"></div>
    <p class="doListP" v-show="noDo()" v-on:click="inverseDo" v-bind:class="{ biffed: isDo }"> {{ doto.do }}</p>
    <p class="doListP" v-show="yesDo()" v-on:click="inverseDo" v-bind:class="{ biffed: isDo }"> {{ doto.do }}</p>
    <transition name="smouth">
      <button v-show="showSettingsButton" class="settingsButton" v-on:click="openSettingsPage"><img src="settings.svg" class="settingsSvg"/></button>
    </transition>
    <transition name="fade">
      <div v-show="answerDeleteToDo" class="boxToCenter">
        <div class="intoBox">
          <a href="#">
          <div class="answerCompenent">
          
            <div class="settingsDo">
              <div class="notDo doCheckbox" v-show="noDo()" v-on:click="inverseDo"><img class="imgSvg inCorrect" src="incorrect.svg"/></div>
              <div class="itsDo doCheckbox" v-show="yesDo()" v-on:click="inverseDo"><img class="imgSvg Correct" src="correct.svg"></div>
              <p class="doListP" v-show="yesDo()" v-on:click="inverseDo" v-bind:class="{ biffed: isDo, changeDo: isChanging }"> {{ doto.do }}</p>
              <p class="doListP" v-show="noDo()" v-on:click="inverseDo" v-bind:class="{ biffed: isDo, changeDo: isChanging }"> {{ doto.do }}</p>
              <input class="inputEditDo" type="text" v-show="changeDo" v-model="doto.do" v-on:keyup="limitation" v-on:keyup.enter="saveDo" ref="refEditDo">

              
            </div>

            <div class="settingsBox" v-show="showEditButtonToChange" v-on:click="changeToDo"><p class="settingsBoxP">Modifier</p></div> 
            <div class="settingsBox" v-show="!showEditButtonToChange" v-on:click="saveDo"><p class="settingsBoxP">Terminer</p></div> 
            <div class="settingsBox" v-show="showSettingsDeleteVerif" v-on:click="tryDeleteToDo"><p class="settingsBoxP">Supprimer</p></div> 
            <div class="tryDeleteBox settingsBox" v-show="showSettingsDelete" v-on:click="delteToDo"><p class="tryDeleteBox settingsBoxP">Supprimer imédiatement ?</p></div> 
            <div class="tryDeleteBox settingsBox" v-show="showInformation"><p class="tryDeleteBox settingsBoxP">Caractères minimume : 4, maximume : 30</p></div> 
            <div v-show="annulerNormalToModify" class="cancelSettingsBox settingsBox" v-on:click="closeSettingsPage"><p class="settingsBoxP">Quitter</p></div> 
            <div v-show="!annulerNormalToModify" class="cancelSettingsBox settingsBox" v-on:click="returnExDo"><p class="settingsBoxP">Annuler les changements</p></div> 
          </div>
          </a>
        </div>
      </div>
    </transition>
  </div>
  `,
 });
 