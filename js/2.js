//checking

function check(){
    var storedName = JSON.parse(localStorage.getItem('name'));
    var storedPw = JSON.parse(localStorage.getItem('pw'));
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    if(userName.value == storedName && userPw.value == storedPw){
        window.location.replace("ecommerce.html");
    }else{
        document.getElementById('alert-3').innerHTML ="Please fill in all items";
    }
}