var todos = ['something'];

var root = "";

function add(todo) {
  todos.push(todo);

  render();
}

function setTodoRoot(selector) {
  root = selector
}

function render() {
  if (!root) {
    throw new Error('Please specifiy selector for todos root');
  }

  var todoItems = todos
    .map(function (todo) {
        return "<li>" + todo + "</li>";
    })
    .join('');

  var todoRoot = document.querySelector(root);

  todoRoot.innerHTML = todoItems;
}

module.exports = {
  add: add,
  render: render,
  setTodoRoot: setTodoRoot
}