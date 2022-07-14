//javascript kalkulator
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('.out').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('.out').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('.out').value = string;
      }
  })
})

//javascript kalender
const lang = navigator.language;
let date = new Date();
let tanggal = date.getDate();
let bul = date.getMonth();
let tahun = date.getFullYear();
let hari= date.toLocaleString(lang,{weekday:'long'});
let bulan = date.toLocaleString(lang,{month:'long'});

document.getElementById('tanggal').innerHTML = tanggal;
document.getElementById('bulan').innerHTML = bulan;
document.getElementById('hari').innerHTML = hari;
document.getElementById('tahun').innerHTML = tahun;
