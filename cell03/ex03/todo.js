window.onload = function () {
    loading();
  
    document.getElementById('newBtn').addEventListener('click', function () {
      let Text = prompt("Enter your new TO DO:");
      if (Text && Text.trim() !== "") {
        addTodo(Text.trim());
        save();
      }
    });
  };
  
  function addTodo(text) {
    const ftList = document.getElementById('ft_list');
    const todo = document.createElement('div');
    todo.className = 'todo';
    todo.textContent = text;
  
    todo.addEventListener('click', function () {
      const confirmDelete = confirm("Do you want to delete this TO DO?");
      if (confirmDelete) {
        ftList.removeChild(todo);
        save();
      }
    });
    ftList.appendChild(todo); 
  }
  
  function save() {
    const todoarray = [];
    const todoElements = document.querySelectorAll('#ft_list .todo');
    todoElements.forEach(todo => todoarray.push(todo.textContent));
    document.cookie = "todo_list=" + encodeURIComponent(JSON.stringify(todoarray)) + "; path=/";
    console.log(document.cookie);
    
  }
  
  function loading() {
    const cookies = document.cookie.split("; ");
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