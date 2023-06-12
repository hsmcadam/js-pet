
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
    
    document.getElementById('formGoal').style.width="750px";
    document.getElementById('nameG').value="";
    document.getElementById('descriptionG').value="";
    
}
function cancel(){
    document.getElementById('formGoal').style.width="0";
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
    spanDone.setAttribute('class','done');
    spanDone.addEventListener('click', function() {

        spanDone.style.color='grey';
        //spanDone.style.background='grey';
        para.style.background='grey';

        //works if not changed in js
        para.classList.toggle('checked');
        spanDone.classList.toggle('checked');
    

        //works
        spanName.classList.toggle('checkedName');

        progress(numberS);
        })
    spanDone.setAttribute('id',numberS);
    //spanDone.setAttribute('onclick',"document.getElementsByClassName('name')[id].parentNode.style.background='grey';");
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


    document.getElementById('formGoal').style.width="0";

    } else {
        //document.getElementById('nameRequired').ClassList === 'formGoalRequired'
    }
}
//var list = document.getElementsByClassName('goals');
//list.addEventListener('click', function(ev) {
//    if (ev.target.ClassList === 'goal') {
//      ev.target.classList.toggle('checked');
//    }
//  }, false);


function findNew(){
    if( document.getElementsByClassName('new')[0]!=null){
    document.getElementsByClassName('new')[0].remove();}
}

function slides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {n = 1}    
  if (n < 1) {n = 3}
  for (i = 0; i < 3; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < 3; i++) {
    console.log("dot");
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n-1].style.display = "block";  
  dots[n-1].className += " active";
}

function icon(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    document.getElementsByClassName('image')[idImageSelector].src="images/"+n+".jpg";
    for (i = 0; i < 3; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    for (i = 0; i < 3; i++) {
        slides[i].style.display = "none";  
    }
    document.getElementsByClassName('iconPicker')[0].style.display="none"

}

function filterSearch(){
    var searchInput = document.getElementById("searchInput");
    var filter = searchInput.value.toUpperCase();
    var goals= document.getElementsByClassName('name');
    for (i = 0; i < goals.length; i++) {
        a = goals[i];
        if (a.innerText.toUpperCase().indexOf(filter) > -1) {
            document.getElementsByClassName('goal')[i].style.display = "";
        } else {
            document.getElementsByClassName('goal')[i].style.display = "none";
        }
    }
}



