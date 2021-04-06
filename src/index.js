
const projects = [];
const items = [];

display = document.getElementById('content')
template = document.getElementById('template')


const projButton = document.createElement('button')

    projButton.addEventListener('click', () => {
        projects.push(newProject(
            prompt("Enter project name"), 
            prompt("Enter project Description")
            ));
        displayController.refresh();
    })
    projButton.textContent = "New Project"

    template.appendChild(projButton);


const itemButton = document.createElement('button')

    itemButton.addEventListener('click', () => {
        items.push(newTodoItem(
            prompt("Item Title"),
            prompt("Item Description"), 
            prompt("Due Date"),
            prompt("Priority"),
            prompt("project")
            ));
        displayController.refresh();
    })
    itemButton.textContent = "New Item"

    template.appendChild(itemButton);

const newProject = (title, description) => {
    this.title = title;
    this.description = description;

    return {title, description}
};

const newTodoItem = (title, description, dueDate, priority, project, completed) => {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = false;

    return {title, description, dueDate, priority, project, completed}
};

const displayController = (() => {

    const clearDisplay = (aDisplay) => {
        while (aDisplay.firstChild) {aDisplay.removeChild(aDisplay.lastChild)}
    };

    const displayProject = (aProject) => {
        div = document.createElement('div')
            div.id = `${aProject.title}`;
            div.classList.add('project');
            div.innerHTML = `${div.id} - ${aProject.description}`
            display.append(div)
    };

    const displayItems = (anItem) =>{

        div = document.createElement('div')
        div.id = `${anItem.title}`
        div.classList.add('item')
        div.innerHTML = `${anItem.title} - ${anItem.description} - ${anItem.dueDate} - ${anItem.priority}`

        const proj = document.getElementById(`${anItem.project}`)
        
        proj.append(div);

    };

    const refresh = () =>{ 
        clearDisplay(display);
        
        projects.forEach(element => displayController.displayProject(element));
             
        items.forEach(element => displayController.displayItems(element));
    }

    return {clearDisplay, displayItems, displayProject, refresh}

})();





projects.unshift(newProject('Default Project', 'Project Description'));
items.unshift(newTodoItem('Item Title', 'Item Description', 'Due Date', 'Priority', 'Default Project', true))


displayController.refresh();

