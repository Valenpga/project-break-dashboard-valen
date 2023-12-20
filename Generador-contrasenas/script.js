function generarContraseña(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()=+-'
    let contraseña = '';

    for(let i = 0; i < longitud; i++) {
        const caracterAleatorio = caracteres.charAt(
            Math.floor(Math.random() * caracteres.length)
        );
        contraseña += caracterAleatorio;
    }
    return contraseña;
}

//return contraseña;
function generarYMostrarContraseña () {
    const longitudMinima = 12;
    const longitudMaxima = 50;

    const longitud = Math.floor(
        Math.random() * (longitudMaxima - longitudMinima + 1) + longitudMinima
    )
    const contraseñaGenerada = generarContraseña(longitud);
    document.getElementById('contraseñaGenerada').value = contraseñaGenerada;
};

document.getElementById('generarContraseña').addEventListener('click' , generarYMostrarContraseña);