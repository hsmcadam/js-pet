
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
    var spanName=document.createElement("div");
    spanName.setAttribute('class','name');
    spanName.innerHTML=goalName;
    para.appendChild(flex);
    flex.appendChild(spanName);
    spanName.setAttribute('onclick', "this.parentElement.parentElement.querySelector('.description').innerHTML=this.parentElement.parentElement.id;");
    
    //new
    var spanNew=document.createElement("div");
    spanNew.innerHTML=" New";
    spanNew.setAttribute('class','new');
    flex.appendChild(spanNew);

    //done
    var numberS =idFind();
    var spanDone=document.createElement("div");
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
    flex.appendChild(spanDone);

    //close
    var spanClose=document.createElement("div");
    spanClose.setAttribute('class','close');
    spanClose.setAttribute("onclick","this.parentElement.parentElement.style.display='none';")
    spanClose.innerHTML='&times;';
    flex.appendChild(spanClose);


    //description
    var descriptionDiv=document.createElement("div");
    descriptionDiv.setAttribute('class','description');
    var idDescription="description"+numberS;
    descriptionDiv.setAttribute('id',idDescription);
    para.appendChild(descriptionDiv);
    //para.setAttribute("onclick","document.getElementById(document.getElementById(this.id).querySelector('.description').id).innerHTML=id;")
    
    findNew();

    document.getElementsByClassName('goals')[0].appendChild(para)


    document.getElementsByClassName('form')[0].style.display="none";

    } 
}

function findNew(){
    if( document.getElementsByClassName('new')[0]!=null){
        document.getElementsByClassName('new')[0].parentElement.classList.toggle('old');
        document.getElementsByClassName('new')[0].remove();}
}

