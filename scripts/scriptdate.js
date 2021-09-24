var a = new Date()
var hora = a.getHours()
var min = a.getMinutes()
var data = a.getUTCDate()
var mes = a.getUTCMonth()
var ano = a.getFullYear()
switch(mes) {
    case 0:
        horaData.innerHTML = (`<p>Agora são exatamente ${hora} horas e ${min} minutos do dia ${data} de janeiro de ${ano}.</p>`)
    break

    case 1:
        horaData.innerHTML = (`<p>Agora são exatamente ${hora} horas e ${min} minutos do dia ${data} de fevereiro de ${ano}.</p>`)
    break

    case 2:
        horaData.innerHTML = (`<p>Agora são exatamente ${hora} horas e ${min} minutos do dia ${data} de março de ${ano}.</p>`)
    break

    case 3:
        horaData.innerHTML = (`<p>Agora são exatamente ${hora} horas e ${min} minutos do dia ${data} de abril de ${ano}.</p>`)
    break

    case 4:
        horaData.innerHTML = (`<p>Agora são exatamente ${hora} horas e ${min} minutos do dia ${data} de maio de ${ano}.</p>`)
    break

    case 5:
        horaData.innerHTML = (`<p>Agora são exatamente ${hora} horas e ${min} minutos do dia ${data} de junho de ${ano}.</p>`)
    break

    case 6:
        horaData.innerHTML = (`<p>Agora são exatamente ${hora} horas e ${min} minutos do dia ${data} de julho de ${ano}.</p>`)
    break

    case 7:
        horaData.innerHTML = (`<p>Agora são exatamente ${hora} horas e ${min} minutos do dia ${data} de agosot de ${ano}.</p>`)
    break

    case 8:
        horaData.innerHTML = (`<p>Agora são exatamente ${hora} horas e ${min} minutos do dia ${data} de setembro de ${ano}.</p>`)
    break

    case 9:
        horaData.innerHTML = (`<p>Agora são exatamente ${hora} horas e ${min} minutos do dia ${data} de outubro de ${ano}.</p>`)
    break

    case 10:
        horaData.innerHTML = (`<p>Agora são exatamente ${hora} horas e ${min} minutos do dia ${data} de novembro de ${ano}.</p>`)
    break

    case 11:
        horaData.innerHTML = (`<p>Agora são exatamente ${hora} horas e ${min} minutos do dia ${data} de dezembro de ${ano}.</p>`)
    break

    default:
        horaData.innerHTML = (`<p>[Erro] mês inválido</p>`)
    break
}