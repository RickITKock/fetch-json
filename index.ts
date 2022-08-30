import axios from "axios";

const url = `https://jsonplaceholder.typicode.com/todos/1`;

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: string, title: string, completed: boolean) => {
  console.log(`
  The Todo with id: ${id} 
  Has a title of: ${title} 
  Is it finished: ${completed ? "yes" : "no"}
  `);
};
