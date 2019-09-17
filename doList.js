Vue.component('doto', {
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
            console.log(this.answerDeleteToDo);
            this.answerDeleteToDo = !this.answerDeleteToDo;
            console.log(this.answerDeleteToDo);
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
        showDeleteButton() {
            if (this.doto.done) {
                return true;
            }
            return false;
        }
    },
    template: `
    <div class="doList">
        <div class="notDo doCheckbox" v-show="noDo()" v-on:click="inverseDo"><img class="imgSvg inCorrect" src="incorrect.svg"/></div>
        <div class="itsDo doCheckbox" v-show="yesDo()" v-on:click="inverseDo"><img class="imgSvg Correct" src="correct.svg"></div>
        <p v-show="noDo()" v-on:click="inverseDo" v-bind:class="{ biffed: isDo }"> {{ doto.do }}</p>
        <p v-show="yesDo()" v-on:click="inverseDo" v-bind:class="{ biffed: isDo }"> {{ doto.do }}</p>
        <button v-show="showDeleteButton()" class="deleteButton" v-on:click="AnswerDeleteNote"><img src="trash.svg" class="trashSvg"/></button>
        <div v-show="answerDeleteToDo" class="boxToCenter">
            <div class="intoBox">
                <div class="answerCompenent">
                    <h3>Voulez vous vraiment supprimer la note <span class="AnswerDeleteH3"> {{ doto.do }} </span> ? </h3>  
                    <button class="AnswerDeleteButtonNo" v-on:click="this.anserDeleteToDo = false">No</button>
                    <button class="AnswerDeleteButtonYes" v-on:click="delteToDo">Yes</button>
                </div>
            </div>
        </div>
    </div>
    `,
  });
  