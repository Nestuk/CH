const pasoDos = document.querySelector('#pasoDos');
pasoDos.addEventListener('submit', (event)=>{
    event.preventDefault();
})

var storedName = JSON.parse(localStorage.getItem('name'));
var storedPw = JSON.parse(localStorage.getItem('pw'));

//checking
function check(){
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    if(userName.value == storedName && userPw.value == storedPw){
        window.location.assign('ecommerce.html');
    }else{
        document.getElementById('alert-3').innerHTML ="Por favor complete todos los campos";
    }
    return false;
}