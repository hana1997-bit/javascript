var tab=JSON.parse(localStorage.getItem('users'))||[];
document.getElementById('etudiant1').className = "s";
var nom = document.getElementById('nom');
var prenom = document.getElementById('prénom');
var add = document.getElementById('address') ;
var mot = document.getElementById('mot');
var mot1 = document.getElementById('mot1');
var date=document.getElementById('date');
var genre;
var sel=document.getElementById('optionn');
var k=0;

var name=window.localStorage.getItem('ver') ;
for (let i = 0; i < tab.length; i++) {
    if (name.localeCompare(JSON.parse(localStorage.getItem('users'))[i].address)==0){
        document.getElementById('bien').innerHTML='Bienvenue '+ JSON.parse(localStorage.getItem('users'))[i].nom;
        // alert('i'+  i)
        k=i;
       document.getElementById('nom').innerHTML=JSON.parse(localStorage.getItem('users'))[i].nom;
       document.getElementById('prenom').innerHTML=JSON.parse(localStorage.getItem('users'))[i].prénom;
       document.getElementById('mail').innerHTML=JSON.parse(localStorage.getItem('users'))[i].address;
       document.getElementById('genre').innerHTML=JSON.parse(localStorage.getItem('users'))[i].genre;
       document.getElementById('date').innerHTML=JSON.parse(localStorage.getItem('users'))[i].date;
       document.getElementById('etat').innerHTML=JSON.parse(localStorage.getItem('users'))[i].etat;
       document.getElementById('pass').innerHTML=JSON.parse(localStorage.getItem('users'))[i].password;
    }
}

// modifier de données
function modifier() {
    document.getElementById('etudiant1').className='part';
    document.getElementById('my').className='s';
    // alert(k)
    // alert(JSON.parse(localStorage.getItem('users'))[k].nom)
           document.getElementById('nomm').value=JSON.parse(localStorage.getItem('users'))[k].nom;
           document.getElementById('prénom').value=JSON.parse(localStorage.getItem('users'))[k].prénom;
           document.getElementById('address').value=JSON.parse(localStorage.getItem('users'))[k].address;
           document.getElementById('genre').value=JSON.parse(localStorage.getItem('users'))[k].genre;
           document.getElementById('datee').value=JSON.parse(localStorage.getItem('users'))[k].date;
           document.getElementById('choix').innerHTML=JSON.parse(localStorage.getItem('users'))[k].etat;
           document.getElementById('mot').type=Text;
           document.getElementById('mot1').type=Text;
           document.getElementById('mot').value=JSON.parse(localStorage.getItem('users'))[k].password;
           document.getElementById('mot1').value=JSON.parse(localStorage.getItem('users'))[k].password;
}
var regexpass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
// validation de mot de passe
var regexpass= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
var pa=false;
function pass() {
    if (!mot.value.match(regexpass)) {
        ph=false;
        mot.style.borderColor='red';
        document.getElementById('valide2').innerHTML='votre mot de passe doivent contient au moin une seul lettre majuscule et minuscule et des chiffres.';
        // alert('votre mot de passe doivent contient au moin une seul lettre majuscule et minuscule et des chiffres.')
    }
    else{
        document.getElementById('valide2').innerHTML='';
        ph=true;
        mot.style.borderColor='#00ff00';
    }
}
var regex= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var mail=false;
// validation d'adresse maile etudiant
function validadd1() {
    var found=tab.find(element=> element.address==add.value );
    var founduniv=tabuniv.find(element=> element.site==add.value );
    var foundad=tabad.find(element=> element.mailad==add.value );
    console.log('et'+found)
    console.log('un'+founduniv)
    console.log('ad'+foundad)
  if (found!= undefined) {
        add.style.borderColor='red';
        document.getElementById("validadd1").color='red';
        mail=false;
        document.getElementById("validadd1").innerHTML='choisir un autre mail.';
    }
    else if (founduniv != undefined ) {
        add.style.borderColor='red';
        document.getElementById("validadd1").color='red';
        mail=false;
        document.getElementById("validadd1").innerHTML='choisir un autre mail.';
    }
    else if (foundad != undefined) {
        add.style.borderColor='red';
        document.getElementById("validadd1").color='red';
        mail=false;
        document.getElementById("validadd1").innerHTML='choisir un autre mail.';
    }
    else if (add.value.match(regex)) {
        document.getElementById("validadd1").innerHTML=''
        mail=true;
        add.style.borderColor='#00ff00';
    }
    else if (!add.value.match(regex)) {
        add.style.borderColor='red';
        mail=false;
        document.getElementById("validadd1").color='red';
        document.getElementById("validadd1").innerHTML='votre adresse mail n\'est pas de forme valide.';
    }
}
// validation de password identiques ou non
function validpass() {
    var h=mot.value.localeCompare(mot1.value);
    console.log('hh'+mot.value.localeCompare(mot1.value))
    console.log(mot.value)
    console.log(mot1.value)
    if (h!=0) {
        document.getElementById('valide').innerHTML='les mots de passe ne sont pas identiques.';  
        document.getElementById("validadd1").color='red';
    }
    else{
        document.getElementById('valide').innerHTML='';
        document.getElementById('mot1').style.borderColor='#00ff00';
    }
}

// enregistre le modification
var nom = document.getElementById('nomm');
var prenom = document.getElementById('prénom');
var add = document.getElementById('address') ;
var mot = document.getElementById('mot');
var mot1 = document.getElementById('mot1');
var date=document.getElementById('datee');
var genre;
document.getElementById('choix').value=JSON.parse(localStorage.getItem('users'))[k].etat;
function sauvgarder() {
    if (document.getElementById('genree').checked===true) {
        genre=document.getElementById('genree').value;
      console.log(genre)
     }
    else{
       genre=document.getElementById('genre11').value; 
       console.log(genre);
    }
// alert(document.getElementById('genree').checked    + 'femme')
     var users = {
       nom: nom.value,
       prénom : prenom.value,
       address : add.value,
       password : mot.value,
        date : date.value,
       genre : genre,
       etat:document.getElementById('choix').value
      }
      
    //   alert(k)
      tab.splice(k,1);
     tab.push(users)
     console.log('tab '+ tab)
     localStorage.setItem('users',JSON.stringify(tab));
     location.reload();
    }
