

document.addEventListener('DOMContentLoaded', () =>  {
   const submitTodo = document.getElementById('submit-todo') as HTMLFormElement;
   const addTaskBtn = document.querySelector('.add-task-btn') as HTMLButtonElement;
   const taskForm = document.querySelector('.contant-containar') as HTMLDivElement;
    const closeTaskBtn = document.querySelector('.x-mark')as HTMLDivElement;

   //  all type
    type TODOTYPE = {
    id:number
    title: string,
    description: string,
    createAt: Date
}

   addTaskBtn.addEventListener('click', () => {
      taskForm.style.display = 'block'
   })
   closeTaskBtn.addEventListener('click', () => {
      taskForm.style.display = 'none'
   })




   
   

   submitTodo.addEventListener('submit', (e:Event) => {
      e.preventDefault();
      const todoTitle= document.getElementById('todo-title') as HTMLInputElement;
      const todoDes  = document.getElementById('todo-des') as HTMLInputElement;
      const taskId = parseInt((Math.random() * 1000000).toFixed());
      const taskData:TODOTYPE = {
        id: taskId,
        title: todoTitle.value,
        description: todoDes.value,
        createAt: new Date()
     }
      
      
      saveTodoINDB(taskData)
      
   })






   function saveTodoINDB (data: TODOTYPE):void {
      if (!data) {
         throw new Error('Task is missing');
      }

      const existTask = localStorage.getItem('yourTask');

      if (existTask) {
        const persExistTask: TODOTYPE[] = JSON.parse(existTask);
        let newTask = [...persExistTask,data];
       localStorage.setItem('yourTask', JSON.stringify(newTask));

         
      }
      else{
         const todoData = [data];
         localStorage.setItem("yourTask",JSON.stringify(todoData));
         alert('New task is added')
         
         
      }
     
       taskForm.style.display = 'none'
       getAllTask();
   }



   // fecth data to Database
   function getAllTask  (): void {
      const todoContainr = document.getElementById('todo-container') as HTMLDivElement;
      todoContainr.innerHTML = ''
   
   
      const getTask = localStorage.getItem('yourTask');

      if (!getTask) {
         todoContainr.innerHTML = '<p>No task available</p>'
      }

      const tasks:TODOTYPE[] = JSON.parse(getTask);

      tasks.forEach(task => {
         const taskElement = document.createElement('div');

         taskElement.className = 'single-task';
          taskElement.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <hr>
      <small>Created at: ${new Date(task.createAt).toLocaleString()}</small>
       <button class="delete-btn" data-id="${task.id}">Delete</button>
    `;

    todoContainr.appendChild(taskElement)
      })

      const deleteButtons = document.querySelectorAll('.delete-btn');
      deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = parseInt((button as HTMLButtonElement).dataset.id!);
      deleteTodo(id);
    });
  });
      
      


      
   }


   function deleteTodo(id: number): void {
  const getTasks = localStorage.getItem('yourTask');
  if (!getTasks) return;

  const tasks: TODOTYPE[] = JSON.parse(getTasks);
  const filteredTasks = tasks.filter(task => task.id !== id);
  localStorage.setItem('yourTask', JSON.stringify(filteredTasks));
  getAllTask();
}


   getAllTask();
   
})