const enlacesLIst = document.getElementById('enlacesList');
const btnAgregarEnlace = document.getElementById('btnAgregarEnlace');

btnAgregarEnlace.addEventListener('click', function() {
    const titulo = document.getElementById('titulo').value;
    const enlace = document.getElementById('urlInput').value;
    if(titulo && enlace) {
        const enlaceObjeto = {
            titulo: titulo,
            enlace: enlace
        };
        mostrarEnlace(enlaceObjeto);
        guardarEnlaceEnLocalStorage(enlaceObjeto);

        document.getElementById('titulo').value ='';
        document.getElementById('urlInput').value ='';
    }
    
});
function mostrarEnlace (enlace) {
    const nuevoEnlace = document.createElement('div');
    nuevoEnlace.innerHTML = `
    <p><strong>${enlace.titulo}</strong>: <a href="${enlace}" target="_blank">${enlace.enlace}</a>
    <button class ="btnEliminar">Eliminar</button></p>
    `;

    nuevoEnlace.querySelector('.btnEliminar').addEventListener('click',function() {
        eliminarEnlaceLocalStorage(enlace);
        nuevoEnlace.remove();
    });
    enlacesLIst.appendChild(nuevoEnlace);
}
function guardarEnlaceEnLocalStorage(enlace) {
    let enlaces = localStorage.getItem('enlaces');
    if(!enlaces) {
        enlaces = [];
    } else {
        enlaces = JSON.parse(enlaces);
    }
    enlaces.push(enlace)
    localStorage.setItem('enlaces' , JSON.stringify(enlaces));
}
document.addEventListener('DOMContentLoaded' , function() {
    let enlaces;
    if(localStorage.getItem('enlaces') === null) {
        enlaces = [];
    } else {
        enlaces = JSON.parse(localStorage.getItem('enlaces'));
    }
    function mostrarEnlaces(enlaces) {
        enlaces.forEach(function(enlace) {
            mostrarEnlace(enlace);
        });    
    }
    
});
function eliminarEnlaceLocalStorage(enlaceEliminar) {
    let enlaces;
    if(localStorage.getItem('enlaces') === null) {
        enlaces = [] ;
    } else {
        enlaces = JSON.parse(localStorage.getItem('enlaces'));
    }
    enlaces.forEach(function (enlace , index){
        if (enlaceEliminar.titulo === enlace.titulo && enlaceEliminar.enlace === enlace.enlace) {
            enlaces.splice(index , 1);
        }
    });
    localStorage.setItem('enlaces', JSON.stringify(enlaces));
}
