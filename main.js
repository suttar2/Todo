(()=>{const e=[],t=[];display=document.getElementById("content"),template=document.getElementById("template");const i=document.createElement("button");i.addEventListener("click",(()=>{e.push(d(prompt("Enter project name"),prompt("Enter project Description"))),r.refresh()})),template.appendChild(i),document.createElement("button").addEventListener("click",(()=>{}));const d=(e,t)=>({title:e,description:t}),r=(()=>{const i=e=>{for(;e.firstChild;)e.removeChild(e.lastChild)};return{clearDisplay:i,displayItems:e=>{div=document.createElement("div"),div.id=`${e.title}`,div.classList.add("item"),div.innerHTML=`${e.title} - ${e.description} - ${e.dueDate} - ${e.priority}`,document.getElementById(`${e.project}`).append(div)},displayProject:e=>{div=document.createElement("div"),div.id=`${e.title}`,div.classList.add("project"),div.innerHTML=`${div.id} - ${e.description}`,display.append(div)},refresh:()=>{i(display),e.forEach((e=>r.displayProject(e))),t.forEach((e=>r.displayItems(e)))}}})();e.unshift(d("Default Project","Project Description")),t.unshift(("Item Title","Item Description","Due Date","Priority","Default Project",{title:"Item Title",description:"Item Description",dueDate:"Due Date",priority:"Priority",project:"Default Project",completed:!0})),r.refresh()})();