const findTheBiggestID = function () {
  const maxExistingId = Math.max(...toDos.toDosLists.map((item) => item.id));
  return Math.max(maxExistingId, 0) + 1;
};
const catchDo = function (doName) {
  doLength = doName.length;
  if (doLength < 4) {
    return false;
  }
  if (doLength >= 40) {
    return false;
  }
  return true;
}
class newToDos {
  constructor(toDo) {
    this.id = String(findTheBiggestID());
    this.do = toDo;
    this.done = false;
  }
}
let saveDoBeforeChange = "";
const toDos = new Vue({
  el: "#ToDos",
  data: {
    label: "",
    toDosLists: [{id: 0, do: "Changer le button modifer en sauvegarder", done: false}, {id: 1, do: "faire en sort que le button anuller agise comme retours en arrière", done: true}, {id: 2, do: "changer style input", done: true}, {id: 3, do: "Manger jean pierre", done: false}, {id: 4, do: "Aller voir papy", done: false}],
    doName: "",
  },
  methods: {
    sendToDos() {
      if (this.toDosLists) {
        toDoSend = new newToDos(this.doName);
        this.toDosLists.push(toDoSend);
        this.doName = '';
      } 
    },
    deleteAllDo() {
      w = 0;
      if (this.toDosLists) {
        for (i = 0; i < this.toDosLists.length; i++) {
          console.log("---Counter is on the number "+i+"---")
          if (this.toDosLists[i].done) {
            console.log("[Passed, the todo n+" + this.toDosLists[i].id+"]")
            w++;
            const id = this.toDosLists[i].id;
            const index = this.toDosLists.findIndex((todo) => todo.id === id);
            setTimeout(() => {
              if (index >= 0) {
                this.toDosLists.splice(index, 1);
              } 
            }, 1000 - (i*10));
          }
        }
      }
      console.log(w);
    },
  }
})
/*for (i = 0; i < toDos.toDosLists.length; i++) {
          toDos.toDosLists[i].done = true;
					console.log(toDos.toDosLists[i].do)
}*/
