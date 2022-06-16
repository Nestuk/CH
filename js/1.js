
const form = document.querySelector('#formulario');
form.addEventListener('submit', (event)=>{
    event.preventDefault();
})

function store(){
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        document.getElementById('alert-1').innerHTML = "Complete un nombre de usuario";
    }else if(email.value.length == 0){
        document.getElementById('alert-2').innerHTML = "Complete el correo electrónico";
    }else if(pw.value.length == 0){
        document.getElementById('alert-3').innerHTML = "Complete la contraseña";
    }else if(name.value.length == 0 && email.value.length == 0 && pw.value.length == 0){
        document.getElementById('alert-3').innerHTML = "Complete el nombre, correo electrónico y la contraseña";
    }else if(pw.value.length > 8){
        document.getElementById('alert-2').innerHTML = "Máximo de 8";
    }else if(!pw.value.match(numbers)){
        document.getElementById('alert-2').innerHTML = "Agregue 1 número";
    }else if(!pw.value.match(upperCaseLetters)){
        document.getElementById('alert-2').innerHTML = "Agregue 1 letra mayúscula";
    }else if(!pw.value.match(lowerCaseLetters)){
        document.getElementById('alert-2').innerHTML = "Agregue 1 letra minúscula";
    }else{
        localStorage.setItem('name', JSON.stringify(name.value));
        localStorage.setItem('pw', JSON.stringify(pw.value));
        window.location.assign('2.html');
    }
    return false;
}