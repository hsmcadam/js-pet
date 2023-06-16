
function findPlacement(id){
    divG=document.getElementById(id);
    divD=divG.querySelector('.description');
    return divD.id;
}

function add(){
    
    document.getElementsByClassName('form')[0].style.display="block";
    document.getElementById('nameG').value="";
    document.getElementById('descriptionG').value="";
    
}

function cancel(){
    document.getElementsByClassName('form')[0].style.display="none";
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
    if(goalName!=""){
    var goalDescription=document.getElementById("descriptionG").value

    //para
    var para=document.createElement("div");
    para.classList.add("goal")
    para.setAttribute('id',goalDescription);
    var flex =document.createElement("div")
    flex.setAttribute('class','flex');

    //name
    var divName=document.createElement("div");
    divName.setAttribute('class','name');
    para.appendChild(flex);
    flex.appendChild(divName);
    divName.innerHTML=goalName;

    //new
    var space=document.createElement("div");
    space.setAttribute('class','space');
    flex.appendChild(space);

    var spanNew=document.createElement("span");
    spanNew.innerHTML=" New";
    spanNew.setAttribute('class','new');
    divName.appendChild(spanNew);


    //done
    var numberS =idFind();
    var divDone=document.createElement("div");
    divDone.innerHTML=" Complete ";
    divDone.setAttribute('class','done');
    divDone.addEventListener('click', function() {
        if(divDone.innerHTML!=""){
        divDone.style.color='#grey';
        //spanDone.style.background='grey';
        para.style.background='grey';

        para.classList.toggle('checked');
        divDone.classList.toggle('checked');
        divDone.innerHTML=""

        divName.classList.toggle('checkedName');
        }
        })
    divDone.setAttribute('id',numberS);
    //spanDone.setAttribute('onclick',"document.getElementsByClassName('name')[id].parentNode.style.background='grey';");
    flex.appendChild(divDone);

    //close
    var divClose=document.createElement("div");
    divClose.setAttribute('class','close');
    divClose.setAttribute("onclick","this.parentElement.parentElement.style.display='none';")
    divClose.innerHTML='&times;';
    flex.appendChild(divClose);


    //description
    var descriptionDiv=document.createElement("div");
    descriptionDiv.setAttribute('class','description');
    var idDescription="description"+numberS;
    descriptionDiv.setAttribute('id',idDescription);
    divName.appendChild(descriptionDiv);
    descriptionDiv.innerHTML=goalDescription;

    //para.setAttribute("onclick","document.getElementById(document.getElementById(this.id).querySelector('.description').id).innerHTML=id;")
    
    findNew();

    document.getElementsByClassName('goals')[0].appendChild(para)


    document.getElementsByClassName('form')[0].style.display="none";

    } 
}

function findNew(){
    if( document.getElementsByClassName('new')[0]!=null){
        document.getElementsByClassName('new')[0].innerHTML=""
        document.getElementsByClassName('new')[0].classList.add('old');
        document.getElementsByClassName('new')[0].classList.remove('new');

    }
}

