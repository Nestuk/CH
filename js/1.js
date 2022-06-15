function store(){
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        document.getElementById('alert-1').innerHTML = "Please fill in email";
    }else if(pw.value.length == 0){
        document.getElementById('alert-2').innerHTML = "Please fill in password";
    }else if(name.value.length == 0 && pw.value.length == 0){
        document.getElementById('alert-2').innerHTML = "Please fill in email and password";
    }else if(pw.value.length > 8){
        document.getElementById('alert-2').innerHTML = "Max of 8";
    }else if(!pw.value.match(numbers)){
        document.getElementById('alert-2').innerHTML = "please add 1 number";
    }else if(!pw.value.match(upperCaseLetters)){
        document.getElementById('alert-2').innerHTML = "please add 1 uppercase letter";
    }else if(!pw.value.match(lowerCaseLetters)){
        document.getElementById('alert-2').innerHTML = "please add 1 lovercase letter";
    }else{
        localStorage.setItem('name', JSON.stringify(name.value));
        localStorage.setItem('pw', JSON.stringify(pw.value));
        document.location.href = '2.html';
    }
}

