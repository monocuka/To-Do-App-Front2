window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.querySelector("form");
    const email = document.querySelector("#inputEmail");
    const password = document.querySelector("#inputPassword");
    const ulr = "https://todo-api.ctd.academy/v1";


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
    event.preventDefault();//para que no se recargue la pagina.
    
    const payload = {
        email:email.value,
        password:password.value
    };

    const settings = {
        method:"POST",
        body: JSON.stringify(payload), //se convierte el string en Json para que la api lo pueda leer.
        Headers: {
            'content-Type': 'application/json'
        }
    }
    realizarLogin(settings);
    form.reset();//limpia los campos del formulario.

    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
    




        
    };


});