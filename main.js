function sort() {
    var list = document.getElementByClass("goals");
    var unSorted=true;
    var switchY;
    while(unSorted){
        unSorted=false;
        goals =  list.getElementByClass("goal");
        for(i=0;i<(goals.length-1);i++){
            switchY = false;
            print(goals[i].innerHTML.toLowerCase());
            if(goals[i].innerHTML.toLowerCase()>goals[i+1].innerHTML.toLowerCase()){
                switchY=true;
                break;
            }
        }
        if(switchY){
            goals[i].parentNode.insertBefore(goals[i+1],goals[i]);
            unSorted=true;
        }
    }
}
var i=0;
function typeDescription(id){
        var text=""
        text=id
        goal=document.getElementById(id);
    while(i<text.length){
        document.getElementById("description").innerHTML+=id.charAt(i);
        i++;
    }
}

function finish(id) {
    document.getElementsByClassName("name")[id].innerHTML.style.textDecoration='line-through';
}

function add(){
    document.getElementById('formGoal').style.display='block'
    
}
function cancel(){
    document.getElementById('formGoal').style.display='none'
}
function confirm(){
    goalName=document.getElementById("nameG").value
    goalDescription=document.getElementById("descriptionG").value

    //para
    const para=document.createElement("div");
    para.classList.add("goal")
    para.setAttribute('id',goalDescription);
    para.setAttribute('onclick',typeDescription(this.id));

    //name
    const nameText=document.createTextNode(goalName);
    const spanName=document.createElement("span");
    spanName.setAttribute('id','name');
    spanName.appendChild(nameText);
    para.appendChild(spanName)
    
    //new
    const newText=document.createTextNode(" New");
    const spanNew=document.createElement("span");
    spanNew.appendChild(newText);
    spanNew.setAttribute('class','new');
    para.appendChild(spanNew)

    //done
    var numberS =9;
    const doneText=document.createTextNode(" DONE ");
    const spanDone=document.createElement("span");
    spanName.setAttribute('class','done');
    spanName.setAttribute('id',numberS);
    spanName.setAttribute('onclick',finish(this.id));
    spanDone.appendChild(doneText);
    para.appendChild(spanDone)

    //close
    const spanClose=document.createElement("span");
    spanName.setAttribute('class','close');
    para.appendChild(spanClose);

    //description
    const descriptionDiv=document.createElement("div");
    para.appendChild(descriptionDiv);

    document.getElementById('formGoal').style.display='none'
}
