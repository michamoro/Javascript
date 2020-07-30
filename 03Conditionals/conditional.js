let compraRealizada = false;

if (compraRealizada === true) {
  let subsidioAdicional = 10;
} else {
  let subsidioAdicional = 5;
}

let eleccion = 'nublado';
if (eleccion === 'soleado') {
    parrafo.textContent = 'El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado.';
  } else if (eleccion === 'lluvioso') {
    parrafo.textContent = 'Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.';
  } else if (eleccion === 'nevando') {
    parrafo.textContent = 'Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.';
  } else if (eleccion === 'nublado') {
    parrafo.textContent = 'No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.';
  } else {
    parrafo.textContent = '';
  }

  eleccion = 'soleado'
  if (elección === 'soleado') {
    if (temperatura < 86) {
      parrafo.textContent = 'Está a ' + temperatura + ' grados afuera — agradable y soleado. Vamos a la playa, o al parque, y comer helado.';
    } else if (temperatura >= 86) {
      parrafo.textContent = 'Está a ' + temperatura + ' grados afuera — ¡QUÉ CALOR! Si deseas salir, asegúrate de aplicarte bloqueador solar.';
    }
  }

  let choice = 'rainy'
  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }