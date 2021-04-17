var tab=JSON.parse(localStorage.getItem('users'))||[];
var k=0;
document.getElementById('etudiant2').style.display='none';
if (tab==[]) {
    document.getElementById('tab').style.display='none';
    document.writeln('<p>Aucun étudiants trouver</p>');
}
else{
    document.getElementById('tab').style.display='block';

    for (let i = 0; i < tab.length; i++) {
     var tr=document.createElement('tr');
     document.getElementById('tab').appendChild(tr);
     var td=document.createElement('td');
     td.innerHTML="Etudiant numéro " + (i+1) + ' :  ';
     tr.appendChild(td);  
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';
     var td=document.createElement('td');
     td.innerHTML =' ' + JSON.parse(localStorage.getItem('users'))[i].nom ;
     tr.appendChild(td);  
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';
     var td=document.createElement('td');
     td.innerHTML =' ' + JSON.parse(localStorage.getItem('users'))[i].prénom ;
     tr.appendChild(td);
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';
     var td=document.createElement('td');
     td.innerHTML =' ' + JSON.parse(localStorage.getItem('users'))[i].date;
     tr.appendChild(td);
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';
     var td=document.createElement('td');
     td.innerHTML = ' ' + JSON.parse(localStorage.getItem('users'))[i].address  ;
     tr.appendChild(td); 
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';
     var td=document.createElement('td')
     td.innerHTML = ' ' + JSON.parse(localStorage.getItem('users'))[i].genre;
     tr.appendChild(td); 
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';
     var td=document.createElement('td')
     td.innerHTML = ' ' + JSON.parse(localStorage.getItem('users'))[i].password;
     tr.appendChild(td); 
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';
     var td=document.createElement('td');
     // 2 button
     var input=document.createElement('input');
     var input2=document.createElement('input');
     input.value="Edit";
     input.type="submit";
     input2.value="Suprimer";
     input2.type="submit";
     tr.appendChild(input);
     tr.appendChild(input2);
     input.style.width='60px';
     input.style.height='30px';
     input2.style.width='80px';
     input2.style.height='30px';
     td.style.padding='5px';   
     td.style.textAlign='center';
     // supprimer étudiant
     input2.onclick=function(){
          console.log(tab);
         alert(i);
         tab.splice(i,1);
         localStorage.setItem('users',JSON.stringify(tab));
         location.reload(); 
        }
     // edit étudiant
      var nom = document.getElementById('nom');
      var prenom = document.getElementById('prénom');
      var add = document.getElementById('address') ;
      var mot = document.getElementById('mot');
      var date=document.getElementById('date');
      var genre;
     input.onclick=function () {
          k=i;
         document.getElementById('etudiant2').style.display='block';
         document.getElementById('tab').style.display='none';
         nom.value=JSON.parse(localStorage.getItem('users'))[i].nom;
         document.getElementById('nom');
         prenom.value=JSON.parse(localStorage.getItem('users'))[i].prénom;
         add.value=JSON.parse(localStorage.getItem('users'))[i].address;
          document.getElementById('mot').type=Text
         document.getElementById('mot').value=JSON.parse(localStorage.getItem('users'))[i].password;
         date.value=JSON.parse(localStorage.getItem('users'))[i].date;
         var genre;
         document.getElementById('choix').innerHTML=JSON.parse(localStorage.getItem('users'))[i].etat;

        }
    }
}
function sauvgarde() {
    if (document.getElementById('genre').checked===true) {
       genre=document.getElementById('genre').value;
     console.log(genre)
    }
   else{
      genre=document.getElementById('genre1').value; 
      console.log(genre);
   }
       var users = {
         nom: nom.value,
         prénom : prenom.value,
         address : add.value,
         password : mot.value,
          date : date.value,
         genre : genre,
         etat:document.getElementById('choix').value
        }
        
        alert(k)
        tab.splice(k,1);
       tab.push(users)
       console.log('tab '+ tab)
       localStorage.setItem('users',JSON.stringify(tab));
       window.open('mailto:'+add.value);
       location.reload();
      }
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