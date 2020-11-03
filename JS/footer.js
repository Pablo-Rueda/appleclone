function displayOrHide(target) {
    if( document.getElementById(target).style.display === "block"){
        document.getElementById(target).style.display = "none";
    }else{
        document.getElementById(target).style.display = "block";
    }
}