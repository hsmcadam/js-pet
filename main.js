function addAndRemoveAll(i){
    k=0;
    while(k<i){
        const paraK=document.getElementById(k).parentNode;
        paraK.remove();
        document.getElementsByClassName('goals')[0].appendChild(paraK);
        k++;
    }
}

var i=0;
function typeDescription(id){
    divDid=findPlacement(id);
    document.getElementById(divDid).innerHTML=id;
    
}


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
    spanDone.innerHTML=" Complete ";
    spanDone.setAttribute('class','done');
    spanDone.addEventListener('click', function() {
        if(spanDone.innerHTML!=""){
        spanDone.style.color='grey';
        //spanDone.style.background='grey';
        para.style.background='grey';

        para.classList.toggle('checked');
        spanDone.classList.toggle('checked');
        spanDone.innerHTML=""

        spanName.classList.toggle('checkedName');
        }
        })
    spanDone.setAttribute('id',numberS);
    //spanDone.setAttribute('onclick',"document.getElementsByClassName('name')[id].parentNode.style.background='grey';");
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


    document.getElementsByClassName('form')[0].style.display="none";

    } 
}

function findNew(){
    if( document.getElementsByClassName('new')[0]!=null){
    document.getElementsByClassName('new')[0].remove();}
}
