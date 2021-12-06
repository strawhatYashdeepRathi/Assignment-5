var key = 0;
const div = document.getElementsByClassName('todos')[0];
const AddButton = document.getElementsByTagName('button')[0];
AddButton.addEventListener('click', () => {
    var task1 = document.createElement('p');
    var task = document.querySelector('input');
    task1.innerHTML = task.value;
    var temp_att = document.createAttribute("key");
    temp_att.value = key;
    task1.setAttributeNode(temp_att);
    div.append(task1);
    key = key+1;
    task1.addEventListener('click', function(){del(this)}, false);
})
function del(elem){
    removeP = elem;
    removeP.remove();
}