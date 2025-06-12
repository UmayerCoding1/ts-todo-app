# TS TODO APP

## Overview
This project is a simple TODO application built with TypeScript, HTML, and CSS. It allows users to add, view, and delete tasks. The tasks are stored in the browser's local storage, ensuring persistence across sessions.

## Features
- Add new tasks with a title and description.
- View all tasks in a list format.
- Delete tasks individually.
- Tasks are stored in local storage for persistence.

## Project Structure
- **HTML**: The structure of the application is defined in [`index.html`](e:\learn\prevtice-ts\index.html).
- **TypeScript**: The core functionality is implemented in [`src/app.ts`](e:\learn\prevtice-ts\src\app.ts).
- **CSS**: Styling is applied via the linked CSS file (`dist/css/style.css`).

## How to Run
1. Clone the repository to your local machine.
2. Ensure you have TypeScript installed globally (`npm install -g typescript`).
3. Compile the TypeScript files using the command:
   ```bash
   tsc
   ```
   This will generate JavaScript files in the `dist/js` directory.
4. Open `index.html` in your browser to view the application.

## TypeScript Configuration
The project uses the following TypeScript configuration:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ES2020",
    "outDir": "./dist/js",
    "rootDir": "./src"
  }
}
```

## Code Highlights
### Task Management
Tasks are managed using the `TODOTYPE` type:
```typescript
type TODOTYPE = {
  id: number;
  title: string;
  description: string;
  createAt: Date;
};
```

### Adding Tasks
Tasks are added via a form submission:
```typescript
submitTodo.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const taskData: TODOTYPE = {
    id: taskId,
    title: todoTitle.value,
    description: todoDes.value,
    createAt: new Date(),
  };
  saveTodoINDB(taskData);
});
```

### Viewing Tasks
Tasks are dynamically rendered in the DOM:
```typescript
function getAllTask(): void {
  const tasks: TODOTYPE[] = JSON.parse(localStorage.getItem('yourTask') || '[]');
  tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <small>Created at: ${new Date(task.createAt).toLocaleString()}</small>
      <button class="delete-btn" data-id="${task.id}">Delete</button>
    `;
    todoContainr.appendChild(taskElement);
  });
}
```

### Deleting Tasks
Tasks can be deleted using their unique ID:
```typescript
function deleteTodo(id: number): void {
  const tasks: TODOTYPE[] = JSON.parse(localStorage.getItem('yourTask') || '[]');
  const filteredTasks = tasks.filter(task => task.id !== id);
  localStorage.setItem('yourTask', JSON.stringify(filteredTasks));
  getAllTask();
}
```

## Future Improvements
- Add task editing functionality.
- Implement user authentication.
- Enhance UI/UX with better styling.

## Author
Created by [Your Name].

## License
This project is licensed under the MIT License.