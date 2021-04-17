document.getElementById('univ').style.display='none';
var tabuniv=JSON.parse(localStorage.getItem('univs'))||[];
var tab=JSON.parse(localStorage.getItem('users'))||[];
var k=0;
var hana=window.localStorage.getItem('ver');
if (tabuniv==[]) {
    document.writeln('<p>Aucun université trouver</p>');
    document.getElementById('tab').style.display='none';
}
else{
    document.getElementById('tab').style.display='block';
    
    for (let i = 0; i < tabuniv.length; i++) {
        var tr=document.createElement('tr');
     document.getElementById('tab').appendChild(tr);
     var td=document.createElement('td');
     td.innerHTML="Université numéro " + (i+1) + ' :  ';
     tr.appendChild(td);  
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';
     var td=document.createElement('td');
     td.innerHTML =' ' + JSON.parse(localStorage.getItem('univs'))[i].nomuniv ;
     tr.appendChild(td);  
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';
     var td=document.createElement('td');
     td.innerHTML =' ' + JSON.parse(localStorage.getItem('univs'))[i].nomadd ;
     tr.appendChild(td);
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';
     var td=document.createElement('td');
     td.innerHTML =' ' + JSON.parse(localStorage.getItem('univs'))[i].phone;
     tr.appendChild(td);
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';
     var td=document.createElement('td');
     td.innerHTML = ' ' + JSON.parse(localStorage.getItem('univs'))[i].site  ;
     tr.appendChild(td); 
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';
     var td=document.createElement('td')
     td.innerHTML = ' ' + JSON.parse(localStorage.getItem('univs'))[i].nommot;
     tr.appendChild(td); 
     td.style.border='1px solid black';
     td.style.padding='5px';   
     td.style.textAlign='center';  
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
     // supprimer école"
     input2.onclick=function(){
         var nomm=JSON.parse(localStorage.getItem('univs'))[i].nomuniv;
         for (let j = 0; j < tab.length; j++) {
              var etablit=JSON.parse(localStorage.getItem('users'))[j].etat;
            //   alert(etablit + nomm)
              if (nomm==etablit) {
                  tab.splice(j,1);
                  localStorage.setItem('users',JSON.stringify(tab));
                }
            }
        //  alert((i));
         tabuniv.splice(i,1);
          localStorage.setItem('univs',JSON.stringify(tabuniv));
         location.reload(); 
     
        } 
        // edit école
        input.onclick=function () {
         document.getElementById('univ').style.display='block';
         document.getElementById('tab').style.display='none';
         document.getElementById('nomecole').value=JSON.parse(localStorage.getItem('univs'))[i].nomuniv;
         document.getElementById('phone').value=JSON.parse(localStorage.getItem('univs'))[i].phone;
         document.getElementById('nom-add').value=JSON.parse(localStorage.getItem('univs'))[i].nomadd;
         document.getElementById('site').value=JSON.parse(localStorage.getItem('univs'))[i].site;
         document.getElementById('nom-mot').type=Text;
         document.getElementById('nom-mot').value=JSON.parse(localStorage.getItem('univs'))[i].nommot;
         k=i;
        }
    }
}
function sauv() {
    var univs={
        nomuniv: document.getElementById('nomecole').value,
        nomadd : document.getElementById('nom-add').value,
        phone : document.getElementById('phone').value,
        site : document.getElementById('site').value,
        nommot :  document.getElementById('nom-mot').value
    }
    tabuniv.splice(k,1);
    tabuniv.push(univs);
    localStorage.setItem('univs',JSON.stringify(tabuniv));
    location.reload();
    
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
        nommot.style.borderColor='green'
    }
}