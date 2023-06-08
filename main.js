function sortOld() {
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

function sort(){
    goals =document.getElementsByClassName("name");
    i=1;
    while(document.getElementById(i)!=null){
        j=i-1;
        k=i
    
        while(1<=k&&j>=0){
            console.log(k)
            console.log(j)
            console.log(document.getElementsByClassName('name')[k].innerText)
            console.log(document.getElementsByClassName('name')[j].innerText)
            if(document.getElementsByClassName('name')[k].innerText>document.getElementsByClassName('name')[j].innerText){
            switchElements(k,j);
            j--;
            console.log("swap")
            }else{
            k=0;}
        }
        i++;
    }
    addAndRemoveAll(i);
}


function addAndRemoveAll(i){
    k=0;
    while(k<i){
        const paraK=document.getElementById(k).parentNode;
        paraK.remove();
        document.getElementsByClassName('goals')[0].appendChild(paraK);
        k++;
    }
}

function switchElements(i,j){
    const paraI=document.getElementById(i).parentNode;
    const paraJ=document.getElementById(j).parentNode;
    paraJ.getElementsByClassName('done')[0].setAttribute('id',i);
    //paraJ.getElementsByClassName('descriprion')[0].setAttribute('id',"description"+i);
    paraI.getElementsByClassName('done')[0].setAttribute('id',j);
    //paraI.getElementsByClassName('descriprion')[0].setAttribute('id',"description"+j);
    
}

var i=0;
function typeDescription(id){
    divDid=findPlacement(id);
    document.getElementById(divDid).innerHTML=id;
    
}

//document.getElementById(document.getElementById(id).querySelector('.description').id).innerHTML=id;


function findPlacement(id){
    divG=document.getElementById(id);
    divD=divG.querySelector('.description');
    return divD.id;
}

function add(){
    document.getElementById('formGoal').style.display='block'
    
}
function cancel(){
    document.getElementById('formGoal').style.display='none'
}

function idFind(){
    i=1;
    while(document.getElementById(i)!=null){
        i++;
    }
    return i;
}

function confirm(){
    var goalName=document.getElementById("nameG").value
    var goalDescription=document.getElementById("descriptionG").value

    //para
    var para=document.createElement("div");
    para.classList.add("goal")
    para.setAttribute('id',goalDescription);

    //name
    var spanName=document.createElement("span");
    spanName.setAttribute('class','name');
    spanName.innerHTML=goalName;
    para.appendChild(spanName);
    
    //new
    var spanNew=document.createElement("span");
    spanNew.innerHTML=" New";
    spanNew.setAttribute('class','new');
    para.appendChild(spanNew);

    //done
    var numberS =idFind();
    var spanDone=document.createElement("span");
    spanDone.setAttribute('class','done');
    spanDone.setAttribute('id',numberS);
    spanDone.setAttribute('onclick',"document.getElementsByClassName('name')[id].parentNode.style.background='grey';");
    spanDone.innerHTML=" DONE ";
    para.appendChild(spanDone);

    //close
    var spanClose=document.createElement("span");
    spanClose.setAttribute('class','close');
    spanClose.setAttribute("onclick","this.parentElement.style.display='none';")
    spanClose.innerHTML='&times;';
    para.appendChild(spanClose);

    //description
    var descriptionDiv=document.createElement("div");
    descriptionDiv.setAttribute('class','description');
    var idDescription="description"+numberS;
    descriptionDiv.setAttribute('id',idDescription);
    para.appendChild(descriptionDiv);
    para.setAttribute("onclick","document.getElementById(document.getElementById(this.id).querySelector('.description').id).innerHTML=id;")
    findNew();

    document.getElementsByClassName('goals')[0].appendChild(para)


    document.getElementById('formGoal').style.display='none';
}

function findNew(){
    document.getElementsByClassName('new')[0].remove();
}
