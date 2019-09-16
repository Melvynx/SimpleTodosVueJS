Vue.component('newtodo', {
  props: ['doto'],
  data() {  
    return {
      label: 'Ecrire une nouveau toDos.',
      doName: '',
    };
  },
  methods: {
    sendToDos() {
      if (toDos.toDosLists) {
        toDoSend = new newToDos(this.doName);
        toDos.toDosLists.push(toDoSend);
        this.doName = '';
        console.log("send");
      };
      console.log("ok");
    },
  },
  template: `
    <div class="toDosNew">
      <label> {{ label }} <input type="text" v-model="doName" class="toDosNewInput" v-on:keyup.enter="sendToDos" placeholder="Nouvelle tâche"></label>
    </div>
  `,
});