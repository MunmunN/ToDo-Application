// getting all the html items
const addButton=document.querySelector('.addButton');
const input=document.querySelector(".input");
const container=document.querySelector(".container");
//create class item for each input task
class item{
  constructor(itemname){
    this.createDiv(itemname);
  }
  createDiv(itemname){
    var input=document.createElement('input');
    input.value=itemname;
    input.disabled=true;
    input.classList.add("item_input")//class for input
    input.type="text";
    //div for each entry
    var itembox=document.createElement('div');
    itembox.classList.add("item");
    //edit button
    var editbutton=document.createElement('button');
    editbutton.classList.add("editbutton");
    editbutton.innerHTML="Edit";
//remove button
    var removebutton=document.createElement('button');
    removebutton.classList.add("removebutton");
    removebutton.innerHTML="Remove";
//add everything in itembox div
    itembox.appendChild(input);
    itembox.appendChild(editbutton);
    itembox.appendChild(removebutton);
    //add itembox div in container
    container.appendChild(itembox);
    //add EventListeners to the buttons
    //editbutton.addEventListener('click',this.edit(input).bindedit);
    //removebutton.addEventListener('click',remove);

    editbutton.addEventListener('click',() =>this.edit(input));
  removebutton.addEventListener('click',() =>this.remove(itembox));



  }
   edit(input){
    input.disabled=false;

  }
  remove(item){
    container.removeChild(item);//html will undrestand item not itembox

  }

}
//function for addButton
function check(){
  if(input.value !=""){
    new item(input.value);
    input.value="";
  }
}
addButton.addEventListener('click',check);
