var m=[];
document.getElementById('ecole').className = "s";
var nomuniv=document.getElementById('nomecole');
var nomadd=document.getElementById('nom-add');
var phone=document.getElementById('phone');
var site=document.getElementById('site');
var nommot=document.getElementById('nom-mot');
var bien=document.getElementById('bien');
var t=[];
// affichage de bienvenue
var tabuniv=JSON.parse(localStorage.getItem('univs'))||[];
var name=window.localStorage.getItem('ver') ;
// remplissage de votre compte
for (let i = 0; i < tabuniv.length; i++) {
    if (name.localeCompare(JSON.parse(localStorage.getItem('univs'))[i].site)==0) {
     document.getElementById('bien').innerHTML='Bienvenue chez '+ JSON.parse(localStorage.getItem("univs"))[i].nomuniv;
      document.getElementById('tnom').innerHTML =JSON.parse(localStorage.getItem("univs"))[i].nomuniv;
      document.getElementById('tadd').innerHTML= JSON.parse(localStorage.getItem("univs"))[i].nomadd;
      document.getElementById('tphone').innerHTML=JSON.parse(localStorage.getItem("univs"))[i].phone;
      document.getElementById('tmail').innerHTML= JSON.parse(localStorage.getItem("univs"))[i].site;
      document.getElementById('tmot').innerHTML=JSON.parse(localStorage.getItem("univs"))[i].nommot;  
    }  
}
var k;
// modifier de données
function modifier() {
 document.getElementById('ecole').className='part';
 document.getElementById('my').className='s';
  for (let i = 0; i < tabuniv.length; i++) {
     if (name.localeCompare(JSON.parse(localStorage.getItem('univs'))[i].site)==0){
         k=i;
         document.getElementById('nomecole').value=JSON.parse(localStorage.getItem('univs'))[i].nomuniv;
         document.getElementById('nom-add').value=JSON.parse(localStorage.getItem('univs'))[i].nomadd;
         document.getElementById('phone').value=JSON.parse(localStorage.getItem('univs'))[i].phone;
         document.getElementById('site').value=JSON.parse(localStorage.getItem('univs'))[i].site;
         document.getElementById('nom-mot').type=Text
         document.getElementById('nom-mot').value=JSON.parse(localStorage.getItem('univs'))[i].nommot;
        }   
    }
  console.log(k)
}
// fonction de sauvgarde de modification
function sauv() {
 document.getElementById('my').className='part';
 var univs={
     nomuniv: nomuniv.value,
     nomadd : nomadd.value,
     phone : phone.value,
     site : site.value,
     nommot : nommot.value
    }
   tabuniv.splice(k,1);
    tabuniv.push(univs)
   console.log('tab '+ tabuniv)
  localStorage.setItem('univs',JSON.stringify(tabuniv));
//   alert(JSON.parse(localStorage.getItem('univs'))[k].nomuniv)
  document.getElementById('bien').innerHTML='Bienvenue chez '+ JSON.parse(localStorage.getItem('univs'))[k].nomuniv;
  document.getElementById('ecole').className='s';
  document.getElementById('tnom').innerHTML= JSON.parse(localStorage.getItem("univs"))[k].nomuniv;
  document.getElementById('tadd').innerHTML= JSON.parse(localStorage.getItem("univs"))[k].nomadd;
  document.getElementById('tphone').innerHTML= JSON.parse(localStorage.getItem("univs"))[k].phone;
  document.getElementById('tmail').innerHTML= JSON.parse(localStorage.getItem("univs"))[k].site;
 document.getElementById('tmot').innerHTML= JSON.parse(localStorage.getItem("univs"))[k].nommot;
 var hana=JSON.parse(localStorage.getItem("univs"))[k].nomuniv;
 localStorage.setItem('ver',hana);
}
// validation de numéro de téléphone
var regexphone=/[\d]{8,}/;
var ph=false;
function validepho() {
    var founduniv=tabuniv.find(element=> element.phone==phone.value );
    var foundad=tabad.find(element=> element.phonead==phone.value );
    console.log('foun' + founduniv)
    if (founduniv!=undefined) {
        document.getElementById("phone").style.borderColor='red';
        ph=false;
        document.getElementById("phonevalid").innerHTML="ce numéro est existe choisir un autre numéro"
    }
    else if (foundad!=undefined) {
        document.getElementById("phone").style.borderColor='red';
        ph=false;
        document.getElementById("phonevalid").innerHTML="ce numéro est existe choisir un autre numéro"
    }
    else if (phone.value.match(regexphone)) {
        document.getElementById("phone").style.borderColor='#00ff00';
        document.getElementById("phonevalid").innerHTML='';
        ph=true;
    }
    else if (!phone.value.match(regexphone)) {
        document.getElementById("phonevalid").innerHTML="forma de phone n'est valide";
        document.getElementById("phone").style.borderColor='red';
        ph=false;
    }
}
// validation de password
var regexpass= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
var pa=false;
function passe() {
    if (!nommot.value.match(regexpass)) {
        nommot.style.borderColor='red';
        pa=false;
        document.getElementById('textpass').innerHTML='votre mot de passe doivent contient au moin une seul lettre majuscule et des lettres minuscule et des chiffres.';
        document.getElementById('textpass').style.color='red'; 
    }
    else{
        document.getElementById('textpass').innerHTML='';
        pa=true;
        nommot.style.borderColor='green';
    }
}
// validation d'adresse maile

var regex= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var mail=false;
function validadd() {
    var found=tab.find(element=> element.address==site.value );
 var founduniv=tabuniv.find(element=> element.site==site.value );
 var foundad=tabad.find(element=> element.mailad==site.value ); 
    if (found!= undefined) {
        document.getElementById("site").style.borderColor='red';
        document.getElementById("sitevalid").innerHTML='choisir un autre mail.';
        document.getElementById("sitevalid").style.color='red';
        mail=false;
    }
    else if (founduniv != undefined ) {
        document.getElementById("site").style.borderColor='red';
        document.getElementById("sitevalid").innerHTML='choisir un autre mail.';
        document.getElementById("sitevalid").style.color='red';
        mail=false;
    }
    else if (foundad != undefined) {
        document.getElementById("site").style.borderColor='red';
        document.getElementById("sitevalid").innerHTML='choisir un autre mail.';
        document.getElementById("sitevalid").style.color='red';
        mail=false;
    }
    else  if (!site.value.match(regex)) {
        document.getElementById("site").style.borderColor='red';
        document.getElementById("sitevalid").style.color='red';
        mail=false;
        document.getElementById("sitevalid").innerHTML='votre adresse mail n\'est pas de forme valide.';
    }
    else if (site.value.match(regex)) {
        document.getElementById("sitevalid").innerHTML='';
        document.getElementById("site").style.borderColor='#00ff00';
        mail=true;
        // alert('mail ' +mail);
    }
    else{
        mail=false;
        document.getElementById("sitevalid").style.color='red';
        document.getElementById("sitevalid").innerHTML='votre adresse mail est pas de forme valide.';
    }
}