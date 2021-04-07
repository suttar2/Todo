
const projects = [];
const items = [];



const projectForm = (() => {
    
    const projectTemplate = document.getElementById('projectTemplate')

    const projectTitle = document.createElement('input');
        projectTitle.setAttribute('placeholder', 'Project Title')
        projectTemplate.appendChild(projectTitle);

    const projectDescription = document.createElement('input');
        projectDescription.setAttribute('placeholder', 'Project Description')
        projectTemplate.appendChild(projectDescription);

    const projButton = document.createElement('button')
        projButton.textContent = "Add Project"
        projectTemplate.appendChild(projButton);

        projButton.addEventListener('click', () => {
                projects.push(
                    newProject(projectTitle.value, projectDescription.value));
            displayController.refresh();
        })
        
})();

const itemForm = (() => {
    const itemTemplate = document.getElementById('itemTemplate')

    const itemTitle = document.createElement('input')
        itemTitle.setAttribute('placeholder', 'Item Title')
        itemTemplate.appendChild(itemTitle);
        
    const itemDescription = document.createElement('input');
        itemDescription.setAttribute('placeholder','Item Description')
        itemTemplate.appendChild(itemDescription);
    
    const dueDate = document.createElement('input');
        dueDate.setAttribute('placeholder', 'Due Date')
        itemTemplate.appendChild(dueDate);
    
    const priority = document.createElement('input');
        priority.setAttribute('placeholder','Priority');
        itemTemplate.appendChild(priority);
    
    const project = document.createElement('input');
        project.setAttribute('placeholder','Project')
        itemTemplate.appendChild(project);

    const itemButton = document.createElement('button')
        itemButton.textContent = "Add Item" 
        itemTemplate.appendChild(itemButton);

            itemButton.addEventListener('click', () => {
                items.push(
                    newTodoItem(itemTitle.value, itemDescription.value, dueDate.value, priority.value, project.value)
                    );
                displayController.refresh();
    })
    

    })();

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

    const display = document.getElementById('content')

    const clearDisplay = (aDisplay) => {
        while (aDisplay.firstChild) {aDisplay.removeChild(aDisplay.lastChild)}
    };

    const displayProject = (aProject) => {
        div = document.createElement('div');
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

