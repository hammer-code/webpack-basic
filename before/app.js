var faqs = document.querySelectorAll('.faq');

faqs.forEach(function (el) {
   new Faq(el);
});

setTodoRoot('#todo')
render();

var form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  var todo = event.target.todo.value;

  add(todo);

  form.reset();
})