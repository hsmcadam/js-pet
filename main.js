// VAR is redundant, use let or const instead

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
    // What if undefined, not null? Its better to check on 'true'
    while(document.getElementById(i)){
        i++;
    }
    return i;
}

function confirm(){
    const goalName = document.getElementById("nameG").value;
    // If you want to check for string use double '=' like !==, but you also can check if value is 'true'
    if(goalName){
        const goalDescription = document.getElementById("descriptionG").value;

    //para
    const para = document.createElement("div");
    para.classList.add("goal")
    para.setAttribute('id',goalDescription);
    const flex =document.createElement("div")
    flex.setAttribute('class','flex');

    //name
    const divName=document.createElement("div");
    divName.setAttribute('class','name');
    para.appendChild(flex);
    flex.appendChild(divName);
    divName.innerHTML=goalName;

    //new
    const space=document.createElement("div");
    space.setAttribute('class','space');
    flex.appendChild(space);

    const spanNew=document.createElement("span");
    spanNew.innerHTML=" New";
    spanNew.setAttribute('class','new');
    divName.appendChild(spanNew);


    //done
    const numberS = idFind();
    const divDone=document.createElement("div");
    divDone.innerHTML=" Complete ";
    divDone.setAttribute('class','done');
    divDone.addEventListener('click', function() {
        // If you want to check for string use double '=' like !==, but you also can check if value is 'true'
        if(divDone.innerHTML){
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
    const divClose=document.createElement("div");
    divClose.setAttribute('class','close');
    divClose.setAttribute("onclick","this.parentElement.parentElement.style.display='none';")
    divClose.innerHTML='&times;';
    flex.appendChild(divClose);


    //description
    const descriptionDiv=document.createElement("div");
    descriptionDiv.setAttribute('class','description');
    const idDescription="description"+numberS;
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
    // What if undefined, not null? Its better to check on 'true'
    if( document.getElementsByClassName('new')[0]){
        document.getElementsByClassName('new')[0].innerHTML=""
        document.getElementsByClassName('new')[0].classList.add('old');
        document.getElementsByClassName('new')[0].classList.remove('new');

    }
}

