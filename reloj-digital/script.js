
function mostrarHora () {
    const ahora = new Date();

    let hora = ahora.getHours();
    let minuto = ahora.getMinutes();
    let segundo = ahora.getSeconds();

    hora = hora < 10 ? '0' + hora : hora;
    minuto = minuto < 10 ? '0' + minuto : minuto;
    segundo = segundo < 10 ? '0' + segundo : segundo;

    const tiempo = hora + ":" + minuto + ":" + segundo;

    document.getElementById('reloj').innerText = tiempo;

    setTimeout(mostrarHora,1000);
}
function mostrarFecha () {
    const ahora = new Date();

    const diaSemana = ahora.toLocaleDateString('es-ES', {weekday: 'long'});

    const dia = ahora.getDate();
    const mes = ahora.toLocaleDateString('es-ES', {month: 'long'});
    const año = ahora.getFullYear();
    const fecha = `${diaSemana}, ${dia}, ${mes}, ${año}`;
    document.getElementById('fecha').innerText = fecha;
}
mostrarHora();
mostrarFecha();
setInterval(mostrarHora,1000);

const mensajeElement = document.getElementById('mensaje');
function mostrarMensaje () {
    const fecha = new Date();
    const hora = fecha.getHours();
    
    let mensaje = '';

    if (hora >= 6 && hora < 12) {
        mensaje = ('Vamos a por todas!!')
    }else if (hora >= 12 && hora < 18) {
        mensaje = ('Ya queda menos animo!!')
    }else if(hora >= 18 && hora < 24) {
        mensaje = ('Vete pensando en cenar he irte a sobar');

    }else{
        mensaje = ('Dulces sueños terricola');
    }

    
    mensajeElement.textContent = mensaje;
}
mostrarMensaje();
setInterval(mostrarMensaje , 60000);