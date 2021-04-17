// affichier le mot de passe
function affiche() {
   document.getElementById('nom-mot').type='text';  
   document.getElementById('mot').type='text';   
   document.getElementById('passad').type='text';
}
function toggleBoxVisibility() {
    // page ecole
    if (document.getElementById("ecole").checked == true) {
        document.getElementById("univ").className = "part";
        document.getElementById("etudiant1").className = "s";
        document.getElementById("admin1").className = "s";
        document.getElementById('disabl').innerHTML='';
    }
    // page etudiant
    if (document.getElementById("etudiant").checked == true) {
        document.getElementById("univ").className= "s";
        document.getElementById("etudiant1").className = "part";
        document.getElementById("admin1").className = "s"; 
        var tabuniv=JSON.parse(localStorage.getItem('univs'))||[]
        // pour remplir le select avec les options trouvé dans le localestorage
        if (tabuniv.length==0) {
         document.getElementById("etudiant1").className = "s";
         document.getElementById('disabl').innerHTML='aucun établissement trouver, réssay plus tard';
        }
        else{
         var x=JSON.parse(localStorage.getItem("univs")).length;
         for (let i = 0; i < x; i++) {
              var neww=document.createElement('option');
              neww.textContent=JSON.parse(localStorage.getItem("univs"))[i].nomuniv;
              document.getElementById('optionn').appendChild(neww);
                  
            }  
        }
    } 
    // page admin
    if (document.getElementById("admin").checked == true){
        // alert("admin")
        document.getElementById("univ").className = "s";
        document.getElementById("etudiant1").className = "s";
        document.getElementById("admin1").className = "part";
       document.getElementById('adminins').className="s"
       document.getElementById('disabl').innerHTML='';   
    }
}
// partie admin
var correct='0000';
// verification de code
function verifier() {
    var code=document.getElementById("adminpass").value;
    console.log(code.localeCompare(correct))
    console.log(code)
    if (code.localeCompare(correct)==0) {
        document.getElementById('adminins').className="part";
        document.getElementById("adminverif").className = "s";
    }
    else{
        alert('code incorrect');
    }
}

// localstorage de page ecole
var  tabuniv = JSON.parse(localStorage.getItem("univs")) || [];
var nomuniv=document.getElementById('nomecole');
var nomadd=document.getElementById('nom-add');
var phone=document.getElementById('phone');
var site=document.getElementById('site');
var nommot=document.getElementById('nom-mot');
// fonction inscrit pour l'ajout de local storage de l'ecole
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
        nommot.style.borderColor='green'
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


    console.log( JSON.parse(localStorage.getItem("univs")) )
function inscrit() {
    var univs={
        nomuniv: nomuniv.value,
        nomadd : nomadd.value,
        phone : phone.value,
        site : site.value,
        nommot : nommot.value
    }
    // formulaire n'est pas vide
    if((nomuniv.value != "") && (nomadd.value != "") && (ph==true) && (mail==true) && (pa==true)){
       tabuniv.push(univs);
        localStorage.setItem('univs',JSON.stringify(tabuniv)); 
        alert('merci pour votre inscription');
        location.href="file:///C:/Users/idoud/Desktop/premier/html/Untitled-1.html";

    }  
    else{
        alert("les champs doivent tout remplir et de forme valide");
        nomuniv.style.borderColor='red';
        nomadd.style.borderColor='red';
        phone.style.borderColor='red';
        site.style.borderColor='red';
        nommot.style.borderColor='red';
    } 
}
// validation de mot de passe
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
// partie de la page étudiant
var tab =JSON.parse(localStorage.getItem('users'))||[] ;
var nom = document.getElementById('nom');
var prenom = document.getElementById('prénom');
var add = document.getElementById('address') ;
var mot = document.getElementById('mot');
var mot1 = document.getElementById('mot1');
var date=document.getElementById('date');
var genre;
var sel=document.getElementById('optionn');
console.log(document.getElementById('genre').checked)
console.log(document.getElementById('genre1').checked)



// fonction inscription pour l'ajout de localstorage de la page étudiant
function inscription() {
    console.log(localStorage.getItem("users"));
    // l'ajout de le genre selon le choix
    if (document.getElementById('genre').checked===true) {
      genre=document.getElementById('genre').value;
     console.log(genre)
    }
   else{
      genre=document.getElementById('genre1').value; 
      console.log(genre);
   }
    console.log(document.getElementById('genre').checked)
    console.log(document.getElementById('genre').value)
console.log(document.getElementById('genre1').checked)
    // le choix de létablissement choisie
    var textselectionne = sel.options[sel.selectedIndex].text;  
    
    console.log(textselectionne); 
    
     // formulaire n'est pas vide
    if((nom.value != "") && (prenom.value != "") && (mail==true) && (date.value != "") && (ph==true) && (genre.value != "")){
        var users = {
            nom: nom.value,
            prénom : prenom.value,
            address : add.value,
            password : mot.value,
            date : date.value,
            genre : genre,
            etat:textselectionne  
        }

        console.log('pusshedddd',users);
        console.log('tabbbb',tab);
        tab.push(users);
        localStorage.setItem('users',JSON.stringify(tab));
        console.log(genre)
        location.href="file:///C:/Users/idoud/Desktop/premier/html/Untitled-1.html";

    }
    else{
        alert("les champs doivent tout remplir et de forme valide");
        nom.style.borderColor='red';
        prenom.style.borderColor='red';
        add.style.borderColor='red';
        date.style.borderColor='red';
        mot.style.borderColor='red';
    }  
}
// localstorage de l'admin
var tabad=JSON.parse(localStorage.getItem('admins'))||[];
var nomad=document.getElementById('nomad');
var prenomad=document.getElementById('prenomad');
var phonead=document.getElementById('phonead');
var age=document.getElementById('age');
var mailad=document.getElementById('mailad');
var passad=document.getElementById('passad');
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
function connect() {
   var admins ={
        nomad:nomad.value,
        prenomad:prenomad.value,
        phonead:phonead.value,
        age:age.value,
        mailad:mailad.value,
        passad:passad.value
    }
    if (nomad.value!=""&&prenomad.value!=""&&ph==true&&age.value!=""&&mail==true&&pa==true) {
     tabad.push(admins);
     localStorage.setItem('admins',JSON.stringify(tabad)); 
     location.href="file:///C:/Users/idoud/Desktop/premier/html/Untitled-1.html";
    }
    else{
        alert('!tout les chapms doivent etre remplit et de forme valide');
        nomad.style.borderColor='red';
        prenomad.style.borderColor='red';
        age.style.borderColor='red';
        mailad.style.borderColor='red';
        passad.style.borderColor='red';
    } 
}


// var y = JSON.parse(localStorage.getItem("users",tab));
// var student ={
// }
// if (y!=null) {
//     var valid = true ;
//   if (email==false || email.match(regex)) {
//       if (email==false ) {
//           msgeroor
//           valid=false 
//       } else {
          
//       }
//   }
  
//   if () {
//     student.mail=email
//   }
// } else {
//     alert('vide')
// }


