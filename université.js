var tab=JSON.parse(localStorage.getItem('users'));
var tabuniv=JSON.parse(localStorage.getItem('univs'));
var y=localStorage.getItem('ver');
var name='';
// cherche nom de l'université dans tab
for (let i = 0; i < tab.length; i++) {
    var part=JSON.parse(localStorage.getItem('users'))[i].address;
    if (y===part) {
        name=JSON.parse(localStorage.getItem('users'))[i].etat;
        // alert('name'+ name)
    }  
}
// repmlir le tableau avec les information de l'universite
for (let j = 0; j < tabuniv.length; j++) {
    var nom=JSON.parse(localStorage.getItem('univs'))[j].nomuniv;
    if (nom===name) {
        document.getElementById('tnom').innerHTML=JSON.parse(localStorage.getItem('univs'))[j].nomuniv;
        document.getElementById('tadd').innerHTML=JSON.parse(localStorage.getItem('univs'))[j].nomadd;
        document.getElementById('tphone').innerHTML=JSON.parse(localStorage.getItem('univs'))[j].phone;
        document.getElementById('tmail').innerHTML=JSON.parse(localStorage.getItem('univs'))[j].site;
    }
    
}
function appel() {
    window.location.href = "tel:"+document.getElementById('tphone').innerHTML ;
}
function mail() {
    window.open('mailto:'+document.getElementById('tmail').innerHTML);
}