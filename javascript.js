var audio = window.document.getElementById("audio")
var lofi = window.document.getElementById("lofi")
var musiquinha = window.document.getElementById("musiquinha")
var tempo = window.document.getElementById("tempo")
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()

if (hora >= 1 && hora <= 6) {
    window.document.body.style.backgroundImage += "url(imagens/madrugada.gif)"
    window.document.body.style.backgroundSize = "91%"
    tempo.innerHTML = `<h1>São ${hora}:${minutos} horas da madrugada, durma um pouco...</h1>`
    musiquinha.src = "audios/X2Download.com - até amanhã (128 kbps).mp3"
    audio.innerHTML += `<p>GabrielMzero - Até amanhã </p>`
}
if (hora >= 7 && hora <= 12) {
    window.document.body.style.backgroundImage += "url(imagens/manha.gif)"
    tempo.innerHTML =  `<h1>São ${hora}:${minutos} horas, agora está de manhã</h1>`
    musiquinha.src = "audios/X2Download.com - saturday jam (128 kbps).mp3"
    audio.innerHTML += `<p> RadicalRingtail - Saturday jam </p>`
}
if (hora >= 13 && hora <= 18) {
    window.document.body.style.backgroundImage += "url(imagens/tarde.gif)"
    window.document.body.style.backgroundSize = "100%"
    tempo.innerHTML = `<h1>São ${hora}:${minutos} horas, agora está de tarde</h1>`
    musiquinha.src = "audios/X2Download.com - (FREE) Lofi Type Beat - sunset lover (prod. yusei) (128 kbps).mp3"
    audio.innerHTML += `<p> Yusei - Sunset lover </p>`
}
if (hora >= 19 && hora <= 24) {
    window.document.body.style.backgroundImage += "url(imagens/noite.gif)"
    window.document.body.style.backgroundSize = "91%"
    tempo.innerHTML = `<h1>São ${hora}:${minutos} horas, agora está de noite</h1>`
    musiquinha.src = "audios/X2Download.com - MOSHi - dead feelings (128 kbps).mp3"
    audio.innerHTML += `<p> MOSHI - dead feelings </p>`
}

