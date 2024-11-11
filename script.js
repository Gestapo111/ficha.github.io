let imagenGenerada = null;
let telefonoActual = '';

async function generarPreview() {
    const telefono = document.getElementById('telefono').value.trim();
    if (!telefono) {
        alert('Por favor, ingrese un número de teléfono.');
        return;
    }

    telefonoActual = telefono;
    document.getElementById('loader').style.display = 'flex';

    try {
        const formulario = document.querySelector('.container');
        const canvas = await html2canvas(formulario, {
            scale: 2,
            useCORS: true,
            logging: false,
            letterRendering: true
        });

        imagenGenerada = canvas.toDataURL('image/png');
        document.getElementById('previewImage').src = imagenGenerada;
        document.getElementById('previewModal').style.display = 'flex';
    } catch (error) {
        console.error('Error al generar la imagen:', error);
        alert('Hubo un error al generar la imagen. Por favor, intente nuevamente.');
    } finally {
        document.getElementById('loader').style.display = 'none';
    }
}

function closePreview() {
    document.getElementById('previewModal').style.display = 'none';
}

async function enviarImagen() {
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const descripcionFalta = document.getElementById('descripcion').value;
    const acuerdoResponsable = document.getElementById('acuerdo').value;

    const mensaje = `Estimado(a):\n\nLe informamos que el estudiante ${nombre}, el día ${fecha}, incurrió en una falta.\n\nDescripción de la falta:\n${descripcionFalta}\n\nAcuerdo con el responsable:\n${acuerdoResponsable}\n\nAtentamente,\n[Nombre de la Institución]`;

    const urlMensaje = `https://web.whatsapp.com/send?phone=${telefonoActual}&text=${encodeURIComponent(mensaje)}`;
    window.open(urlMensaje, '_blank');
}
