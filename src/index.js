const displayController = (() => {

    let display = document.getElementById('content')

    const clearDisplay = () => {
        while (display.firstChild) {display.removeChild(display.lastChild)}
    }

    const displayProject = () =>{
        clearDisplay();

    }

    const displayItems = (anItem) =>{
        display.innerHTML = anItem.title
    }

    return {clearDisplay, displayItems, displayProject}

})();

const newProject = (title, description, items) => {
    this.title = title;
    this.description = description;
    this.items = [items];

    return {title, description, items}
};

const newTodoItem = (title, description, dueDate, priority) => {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    return {title, description, dueDate, priority}
};

const testItem = newTodoItem('OOP', 'Study OOP and the Odin Project', 'April 15th', 'high priority')
const testProject = newProject('Finish TOP', 'Finish all of the Odin Project and understand it all', testItem)

console.table(testProject);
displayController.displayProject();

