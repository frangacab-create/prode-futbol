let matches = JSON.parse(localStorage.getItem("matches")) || []
let enviado = localStorage.getItem("enviado")

function cargarPartidos(){

let div = document.getElementById("matches")
div.innerHTML=""

matches.forEach((m,i)=>{

let cierre = new Date(m.hora)
cierre.setMinutes(cierre.getMinutes()-5)

let ahora = new Date()

let disabled = ahora > cierre ? "disabled" : ""

div.innerHTML += `
<div class="match">

<h3>${m.liga}</h3>

<p>${m.local} vs ${m.visitante}</p>

<select id="p${i}" ${disabled}>
<option value="">Elegir</option>
<option>Local</option>
<option>Empate</option>
<option>Visitante</option>
</select>

</div>
`

})

}

function enviarPronosticos(){

if(enviado){
alert("Ya enviaste tu pronostico")
return
}

let apuestas = []

matches.forEach((m,i)=>{

let valor = document.getElementById("p"+i).value
apuestas.push(valor)

})

localStorage.setItem("apuestas",JSON.stringify(apuestas))
localStorage.setItem("enviado",true)

alert("Pronostico enviado")

location.reload()

}

cargarPartidos()