document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Crear el contenido a mostrar
    const results = `
        <h2>Datos Ingresados:</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
    `;

    // Insertar el contenido en el div de resultados
    document.getElementById('results').innerHTML = results;
});