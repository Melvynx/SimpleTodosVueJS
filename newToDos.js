Vue.component('newToDos', {
  data() {  
    return {
      label: 'oui je suis un label a moi tout suel',
    };
  },
  methods: {
    sendToDos() {
      alert("salut");
    },
  },
  template: `
    <div class="toDosNew">
      <label> {{ label }} <input type="text" class="toDosNewInput" v-on:keyup.enter="sendToDos" placeholder="Nouvelle tâche"></label>
    </div>
  `,
});
console.log('ok')