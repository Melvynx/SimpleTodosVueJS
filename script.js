const findTheBiggestID = function () {
  const maxExistingId = Math.max(...toDos.toDosLists.map((item) => item.id));
  return Math.max(maxExistingId, 0) + 1;
};
class newToDos {
  constructor(toDo) {
    this.id = String(findTheBiggestID());
    this.do = toDo;
    this.done = false;
  }
}
const toDos = new Vue({
  el: "#ToDos",
  data: {
    label: "",
    toDosLists: [],
    doName: "",
  },
  methods: {
    sendToDos() {
      if (this.toDosLists) {
        toDoSend = new newToDos(this.doName);
        this.toDosLists.push(toDoSend);
        this.doName = '';
      } 
    }
  }
})