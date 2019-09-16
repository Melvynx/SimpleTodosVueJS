Vue.component('note', {
    props: ['doto'],
    data() {
      return {
        checkToDo: false,
        isDo: false,
        deleteButton: "",
        answerDeleteToDo: false,
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
            console.log("ok");
        },
        AnswerDeleteNote() {
            this.answerDeleteToDo = !this.answerDeleteToDo;
        }
    },
    template: `
    <div class="doList">
        <div class="notDo doCheckbox" v-show="noDo()" v-on:click="inverseDo"><img class="imgSvg inCorrect" src="incorrect.svg"/></div>
        <div class="itsDo doCheckbox" v-show="yesDo()" v-on:click="inverseDo"><img class="imgSvg Correct" src="correct.svg"></div>
        <p v-show="noDo()" v-on:click="inverseDo" v-bind:class="{ biffed: isDo }"> {{ doto.do }}</p>
        <p v-show="yesDo()" v-on:click="inverseDo" v-bind:class="{ biffed: isDo }"> {{ doto.do }}</p>
        <button v-model:value="deleteButton" class="deleteButton" v-on:click="AnswerDeleteNote"><img src="trash.svg" class="trashSvg"/></input>
        <div v-show="answerDeleteToDo" class="boxToCenter">
            <div class="intoBox">
                <button v-on:click="AnswerDeleteNote">STOP</button>
            </div>
        </div>
    </div>
    `,
  });
  