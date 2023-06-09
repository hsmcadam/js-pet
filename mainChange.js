function darkAndlight(){
    var allElements=document.body.getElementsByTagName("*");
    var i=0;
    console.log("2");
    while(i<length.allElements){
        console.log("3");
        if(allElements()[i].style.color=="black"){
        allElements()[i].style.color="white"
    }
    else {
    allElements()[i].style.color="black"}
    if(allElements()[i].style.background=="black"){
        allElements()[i].style.background="white"
    }
    else if(allElements()[i].style.background=="white"){
    allElements()[i].style.background="black"}
    i++;
}
}