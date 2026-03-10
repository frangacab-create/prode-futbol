const ADMIN_USER = "admin"
const ADMIN_PASS = "1234"

function login(){

let u = document.getElementById("user").value
let p = document.getElementById("pass").value

if(u===ADMIN_USER && p===ADMIN_PASS){

document.getElementById("login").style.display="none"
document.getElementById("panel").style.display="block"

mostrar()

}else{

alert("Datos incorrectos")

}

}

function agregarPartido(){

let liga = document.getElementById("liga").value
let local = document.getElementById("local").value
let visitante = document.getElementById("visitante").value
let hora = document.getElementById("hora").value

let matches = JSON.parse(localStorage.getItem("matches")) || []

matches.push({liga,local,visitante,hora})

localStorage.setItem("matches",JSON.stringify(matches))

mostrar()

}

function mostrar(){

let matches = JSON.parse(localStorage.getItem("matches")) || []

let div = document.getElementById("lista")

div.innerHTML=""

matches.forEach(m=>{

div.innerHTML += `<p>${m.liga} - ${m.local} vs ${m.visitante}</p>`

})

}

function reset(){

localStorage.removeItem("matches")
localStorage.removeItem("apuestas")
localStorage.removeItem("enviado")

location.reload()

}