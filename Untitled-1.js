var test=document.getElementById('test');
var email=document.getElementById('email');
var pwd=document.getElementById('pwd');
var tab=JSON.parse(localStorage.getItem("users"))||[];
var tabuniv=JSON.parse(localStorage.getItem("univs"))||[];
var tabad=JSON.parse(localStorage.getItem("admins"))||[];
function connect() {
    // champs vide
    if (email.value==='') {
        document.getElementById('mailvide').innerHTML="! Vous veuillez remplir le champs d'abort";
        email.style.borderColor='red';
    }
    else if (pwd.value==='') {
        document.getElementById('passvide').innerHTML="! Vous veuillez remplir le champs d'abort";
        document.getElementById('mailvide').innerHTML="";
        email.style.borderColor='white';
        pwd.style.borderColor='red';
    }
    // locastorage vide
    else if (tab.length==0 && tabuniv.length==0 && tabad.length==0) {
        alert("! aucun compte trouvé. Inscrivez d'abort");
        location.href='file:///C:/Users/idoud/Desktop/premier/html/test.html';
    }
    // localstorage remplit
    else{
        var ch=email.value;
        var ch2=pwd.value;
        var found=tab.find(element=> element.address==email.value );
        var founduniv=tabuniv.find(element=> element.site==email.value );
        var foundad=tabad.find(element=> element.mailad==email.value );
        console.log('ch ' + ch);
        var k=0;
        // tab etudiant si existe l'addresse
        for (let x = 0; x < tab.length; x++) {
           var part1=JSON.parse(localStorage.getItem("users"))[x].address;
        //    alert(part1)
            console.log(part1 + ' etid')
            if (ch.localeCompare(part1)==0) {
             k=x;
               hana=ch;
               alert(ch);
               localStorage.setItem('ver',part1);
               console.log(k + 'for')
            }
        }
        console.log(k + 'etud')
        // tabuniv si existe l'addresse
        for (let x = 0; x < tabuniv.length; x++) {
           var part2=JSON.parse(localStorage.getItem("univs"))[x].site;
            console.log(part2 + ' univ')
            if (ch.localeCompare(part2)==0) {
               k=x;
               hana=part2;
               alert(hana);
                localStorage.setItem('ver',part2);
            }
        }
        console.log(k + 'univ');
        // tab admin si existe l'addresse
        for (let x = 0; x < tabad.length; x++) {
           var part3=JSON.parse(localStorage.getItem("admins"))[x].mailad;
            if (ch.localeCompare(part3)==0) {
               k=x;
               console.log(x) 
               hana=ch;
               alert(ch);
                localStorage.setItem('ver',part3);
            }
            console.log(x + 'after for')
        }
        console.log(k + 'ad');
        // if adresse entré de l'etudiant
        if ( found!=undefined  ) {
            var part2=JSON.parse(localStorage.getItem("users"))[k].password;
            console.log(part2)
            if ( ch2.localeCompare(part2)==0) {
              alert("existe etud")
               location.href='file:///C:/Users/idoud/Desktop/premier/html/etudiant.html';
            }
            else{
               test.innerHTML='Mot de passe incorrecte';
            }
        }
        // if adresse entré de l'ecole
        else if ( founduniv!=undefined) {
            var part2univ=JSON.parse(localStorage.getItem("univs"))[k].nommot;
            console.log(part2univ)
            if ( ch2.localeCompare(part2univ)==0) {
                alert("existe univ")
                location.href='file:///C:/Users/idoud/Desktop/premier/html/acceuille.html';
            }
            else{
                test.innerHTML='Mot de passe incorrecte';
            }
        }
        // if adresse entré de l'admin
        else {
            var part2ad=JSON.parse(localStorage.getItem("admins"))[k].passad;
            if ( ch2.localeCompare(part2ad)==0) {
                alert("existe admin")
                location.href='file:///C:/Users/idoud/Desktop/premier/html/admin.html';
            }
            else{
                test.innerHTML='Mot de passe incorrecte';
            }
        }
    }
}   
