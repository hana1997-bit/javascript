document.getElementById('adminins').style.display='none';
var tabad=JSON.parse(localStorage.getItem('admins'))||[];
var y=localStorage.getItem('ver');
var k=0;
for (let i = 0; i < tabad.length; i++) {
    var email=JSON.parse(localStorage.getItem('admins'))[i].mailad;
    if (y===email) {
        k=i; 
     document.getElementById('bien').innerHTML='Bienvenue '+ JSON.parse(localStorage.getItem("admins"))[i].nomad;
     document.getElementById('nom').innerHTML =JSON.parse(localStorage.getItem("admins"))[i].nomad;
     document.getElementById('prenom').innerHTML= JSON.parse(localStorage.getItem("admins"))[i].prenomad;
     document.getElementById('mail').innerHTML=JSON.parse(localStorage.getItem("admins"))[i].mailad;
     document.getElementById('phone').innerHTML= JSON.parse(localStorage.getItem("admins"))[i].phonead;
     document.getElementById('pass').innerHTML=JSON.parse(localStorage.getItem("admins"))[i].passad; 
     document.getElementById('date').innerHTML=JSON.parse(localStorage.getItem("admins"))[i].age;   
    }
    
}
// validation de mot de passe
var regexpass= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
var pa=false;
function passadd() {
    if (!passad.value.match(regexpass)) {
        passad.style.borderColor='red';
        pa=false;
        document.getElementById('passadmin').style.color='red';
        document.getElementById('passadmin').innerHTML='votre mot de passe doivent contient au moin une seul lettre majuscule et minuscule et des chiffres et le longueur ne depasse pas 8 ';
    }
    else{
        pa=true;
        document.getElementById('passadmin').innerHTML='';
        passad.style.borderColor='green';
    }
}
// validation de numéro de phone
var regexphone=/[\d]{8,}/;
var ph=false;
function validephad() {
    var founduniv=tabuniv.find(element=> element.phone==phonead.value );
    var foundad=tabad.find(element=> element.phonead==phonead.value );
    if (founduniv!=undefined) {
        ph=false;
        document.getElementById("validphad").innerHTML="ce numéro est existe choisir un autre numéro"
    }
    else if (foundad!=undefined) {
        ph=false;
        document.getElementById("validphad").innerHTML="ce numéro est existe choisir un autre numéro"
    }
    else if (phonead.value.match(regexphone)) {
        document.getElementById("validphad").innerHTML="";
        ph=true;
    }
    else if (!phonead.value.match(regexphone)) {
        document.getElementById("validphad").innerHTML="forma de phone n'est valide";
        ph=false;
    }
}
// validation d'adresse maile admin
var regex= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var mail=false;
function validadd2() {
    var found=tab.find(element=> element.address==mailad.value );
    var founduniv=tabuniv.find(element=> element.site==mailad.value );
    var foundad=tabad.find(element=> element.mailad==mailad.value );
    if (mailad.value.match(regex)) {
        document.getElementById("mailvalide").innerHTML='';
        mailad.style.borderColor="#00ff00";
        mail=true;
    }
    if (!mailad.value.match(regex)) {
        mailad.style.borderColor="red";
        mail=false;
        document.getElementById("mailvalide").style.color='red';
        document.getElementById("mailvalide").innerHTML='votre adresse mail n\'est pas de forme valide.';
    }
    else if (found!= undefined) {
        mailad.style.borderColor="red";
        mail=false;
        document.getElementById("mailvalide").style.color='red';
        document.getElementById("mailvalide").innerHTML='choisir un autre mail.';
    }
    else if (founduniv != undefined ) {
        mailad.style.borderColor="red";
        mail=false;
        document.getElementById("mailvalide").style.color='red';
        document.getElementById("mailvalide").innerHTML='choisir un autre mail.';
    }
    else if (foundad != undefined) {
        mail=false;
        mailad.style.borderColor="red";
        document.getElementById("mailvalide").style.color='red';
        document.getElementById("mailvalide").innerHTML='choisir un autre mail.';
    }
}
var nomad=document.getElementById('nomad');
var prenomad=document.getElementById('prenomad');
var phonead=document.getElementById('phonead');
var age=document.getElementById('age');
var mailad=document.getElementById('mailad');
var passad=document.getElementById('passad');
function modifier() {
    document.getElementById('home').style.display='none';
    document.getElementById('adminins').style.display='block';
    nomad.value=JSON.parse(localStorage.getItem('admins'))[k].nomad;
    prenomad.value=JSON.parse(localStorage.getItem('admins'))[k].prenomad;
    phonead.value=JSON.parse(localStorage.getItem('admins'))[k].phonead;
    mailad.value=JSON.parse(localStorage.getItem('admins'))[k].mailad;
    age.value=JSON.parse(localStorage.getItem('admins'))[k].age;
    passad.type=Text;
    passad.value=JSON.parse(localStorage.getItem('admins'))[k].passad;
}
function sauvgarde() {
    var admins ={
        nomad:nomad.value,
        prenomad:prenomad.value,
        phonead:phonead.value,
        age:age.value,
        mailad:mailad.value,
        passad:passad.value
    }
    
        tabad.splice(k,1);
     tabad.push(admins);
     localStorage.setItem('admins',JSON.stringify(tabad));
     location.reload();
    
    
}
function sort() {
    location.replace='file:///C:/Users/idoud/Desktop/premier/html/Untitled-1.html';
}