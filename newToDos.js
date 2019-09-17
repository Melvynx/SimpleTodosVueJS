let labelToCreateToDo = 'Ecrire une nouveau toDos';
Vue.component('newtodo', {
  props: ['doto'],
  data() {  
    return {
      label: labelToCreateToDo,
      doName: '',
    };
  },
  methods: {
    sendToDos() {
      if (toDos.toDosLists) {
        if (catchDo(this.doName)) {
          toDoSend = new newToDos(this.doName);
          toDos.toDosLists.push(toDoSend);
          this.doName = '';
        } else {
          this.label = "La limite de caractères est entre 4 et 40."
          setTimeout(() => {
            this.label = labelToCreateToDo; 
          }, 3000);
        }
      };
    },
  },
  template: `
    <div class="toDosNew">
      <p class="labelNewToDo"> {{ label }} </p> <input type="text" v-model="doName" class="toDosNewInput" v-on:keyup.enter="sendToDos" placeholder="Nouvelle tâche">
    </div>
  `,
});