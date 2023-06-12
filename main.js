var idImageSelector

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
    b=1;
    while(document.getElementById(b)!=null){
        i=1;
        while(document.getElementById(i)!=null){
            j=i-1;
            k=i
    
            while(1<=k&&j>=0){
                console.log(k)
                console.log(j)
                console.log(document.getElementsByClassName('name')[k].innerText)
                console.log(document.getElementsByClassName('name')[j].innerText)
                if(document.getElementsByClassName('name')[k].innerText<document.getElementsByClassName('name')[j].innerText){
                switchElements(j-1,j);
                j--;
                console.log("swap")
                }else{
                k=0;}
            }
            i++;
        }
        b++
        addAndRemoveAll(i);
    }
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
    if(goalName!=""){
    var goalDescription=document.getElementById("descriptionG").value
    var goalColor=document.getElementById("colorG").value;

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
        progressDiv.classList.toggle('checked');
        barDiv.classList.toggle('checked');

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

    //icon
    var icon=document.createElement("span");
    icon.setAttribute('class','icon');
    icon.setAttribute('onclick','addIcon(this.parentElement)');
    var img=document.createElement("img");
    img.setAttribute('class','image');
    img.setAttribute('src','images/1.jpg');
    icon.appendChild(img);
    para.appendChild(icon)

    //description
    var descriptionDiv=document.createElement("div");
    descriptionDiv.setAttribute('class','description');
    var idDescription="description"+numberS;
    descriptionDiv.setAttribute('id',idDescription);
    para.appendChild(descriptionDiv);
    para.setAttribute("onclick","document.getElementById(document.getElementById(this.id).querySelector('.description').id).innerHTML=id;")

    //progress
    var progressDiv=document.createElement("div");
    progressDiv.setAttribute('class','progress');
    var barDiv=document.createElement("div");
    barDiv.setAttribute('class','bar');
    progressDiv.appendChild(barDiv)
    para.appendChild(progressDiv);

    findNew();
    para.style.backgroundColor=goalColor,
    spanDone.style.color=goalColor;

    document.getElementsByClassName('goals')[0].appendChild(para)


    document.getElementById('formGoal').style.display='none';

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
    document.getElementsByClassName('new')[0].remove();
}

function progress(id) {
    var i = 0;
  if (i == 0) {
    i = 1;
    var para = document.getElementsByClassName("bar")[id];
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        para.style.display='none'
        i = 0;
      } else {
        width++;
        wide = width + "%";
        para.style.width = wide;
      }
    }
  }
}
function addIcon(parent) {
    idImageSelector=parent.querySelector('.done').id;
    document.getElementsByClassName('iconPicker')[0].style.display="block";
    document.getElementsByClassName('slides')[0].style.display="block";
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

