const nombreEstudiante = "Juan Orozco";
const grado = "1° Tec";
const seccion = "A";
const fecha = "2024-11-10";
const hora = "21:03";
const tipoFalta = "Leve";
const descripcionFalta = "fumando";
const acuerdoResponsable = "motawa";

const mensaje = `Estimado(a):

Le informamos que el estudiante ${nombreEstudiante}, del grado ${grado} sección ${seccion}, el día ${fecha} a las ${hora}, incurrió en una falta de tipo: ${tipoFalta}.

Descripción de la falta:
${descripcionFalta}

Acuerdo con el responsable:
${acuerdoResponsable}

Atentamente,
[Nombre de la Institución]`;

// Convertir a formato URI para WhatsApp
const urlMensaje = `https://web.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`;
window.open(urlMensaje, '_blank');
