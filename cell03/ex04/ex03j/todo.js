
$(document).ready(function () {
  loadTodos();

  $('#newBtn').on('click', function () {
    let text = prompt("Enter your new TO DO:");
    if (text && $.trim(text) !== "") {
      addTodo($.trim(text), true);
      saveTodos();
    }
  });
});

function addTodo(text, isNew = false) {
  const $todo = $('<div></div>', {
    class: 'todo',
    text: text,
    click: function () {
      if (confirm("Do you want to delete this TO DO?")) {
        $(this).remove();
        saveTodos();
      }
    }
  });

  // New TODOs go on top
  if (isNew) {
    $('#ft_list').prepend($todo);
  } else {
    // When loading from cookie, keep original order
    $('#ft_list').append($todo);
  }
}

function saveTodos() {
  const todos = [];
  $('#ft_list .todo').each(function () {
    todos.push($(this).text());
  });
  document.cookie = "todo_list=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
  console.log(document.cookie);
}

function loadTodos() {
  const cookies = document.cookie.split('; ');
  const todoCookie = cookies.find(row => row.startsWith("todo_list="));
  if (todoCookie) {
    const value = decodeURIComponent(todoCookie.split("=")[1]);
    try {
      const todos = JSON.parse(value);
      todos.forEach(todoText => addTodo(todoText));
    } catch (e) {
      console.error("Error loading todos:", e);
    }
  }
}

