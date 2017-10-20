var Faq = require('./faq');
var todo = require('./todo');
var math = require('./math');

var faqs = document.querySelectorAll('.faq');

faqs.forEach(function (el) {
   new Faq(el);
});

todo.setTodoRoot('#todo')
todo.render();

var form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var whatToDo = event.target.todo.value;

  todo.add(whatToDo);

  form.reset();
})