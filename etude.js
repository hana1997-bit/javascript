var nomuniv;
var tab=JSON.parse(localStorage.getItem('users'))||[];
var k=0;
var hana=window.localStorage.getItem('ver');
console.log(tab.length);console.log( 'tab'+tab);
// var found=tab.find(element=> element.etat=hana);
var w=tab.length;
var z=0;
console.log('w ' + w)
// if (w===0) {
//   document.getElementById('tab').style.display='none';
//   alert('aucun étudiant incsrit');
// }
if (w!=0) {
  

var tabuniv=JSON.parse(localStorage.getItem('univs'));
document.getElementById('tab').style.display='block';

for (let i = 0; i < tabuniv.length; i++) {
  var site=JSON.parse(localStorage.getItem('univs'))[i].site;
  if (hana===site) {
    nomuniv=JSON.parse(localStorage.getItem('univs'))[i].nomuniv;
    // alert(nomuniv)
  }
  
}
for (let i = 0; i < w; i++) {
  // var found=tab.find(element=> element.etat=hana);
  console.log('foun' + i);
  var y=JSON.parse(localStorage.getItem('users'))[i].etat
  console.log('y ' + y)
  var tr=document.createElement('tr');
  // if l'etudiant inscrit a cette université
  document.getElementById('tab').appendChild(tr);
  if (y==nomuniv) {
    document.getElementById('ins').innerHTML='';

    z++;
    // création de tableau
    var td=document.createElement('td');
    td.innerHTML="Etudiant numéro " + (z) + ' :  ';
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
      // alert(i);
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
     
    //  l'ajout de le genre selon le choix
    //  if (document.getElementById('genre').value=='femme') {
    //    document.getElementById('genre')=checked ;
    //    console.log(genre)
    //   }
    //  else{
    //   document.getElementById('genre1').checked=checked;; 
    //    console.log(genre);
    //   }
      nom.value=JSON.parse(localStorage.getItem('users'))[i].nom;
      document.getElementById('nom');
      prenom.value=JSON.parse(localStorage.getItem('users'))[i].prénom;
      add.value=JSON.parse(localStorage.getItem('users'))[i].address;
      document.getElementById('mot').type=Text
      document.getElementById('mot').value=JSON.parse(localStorage.getItem('users'))[i].password;
      date.value=JSON.parse(localStorage.getItem('users'))[i].date;
      var genre;
     
    }
    
  } 
  
} 
    
if (z==0) {
    document.getElementById('tab').style.display='none'
    document.getElementById('ins').innerHTML='aucun étudaint inscrit ici ';
  }  
}
document.getElementById('choix').innerHTML=nomuniv;
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
      
      // alert(k)
      tab.splice(k,1);
     tab.push(users)
     console.log('tab '+ tab)
     localStorage.setItem('users',JSON.stringify(tab));
     window.open('mailto:'+add.value+'?subject=subject&body=body');
     location.reload();
    }
    // validation de password
var regexpass= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
var pa=false;
function passe() {
    if (!nommot.value.match(regexpass)) {
        pa=false;
        document.getElementById('textpass').innerHTML='votre mot de passe doivent contient au moin une seul lettre majuscule et des lettres minuscule et des chiffres.';
        document.getElementById('textpass').style.color='red'; 
    }
    else{
        pa=true;
        nommot.style.borderColor='green'
    }
}


        

    
    
    


