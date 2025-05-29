const cartas = [
  { titulo: "Estés feliz", contenido: "que sepas que eres merecedora de la felicidad que estás sintiendo, y de mucho más. desconozco la razón detras de esa sonrisa tan bonita, pero sea lo que sea, disfruta el momento y atesoralo sin importar que sea por nada especial, solamente porque lo estás. Ojalá te dure muchísimo tiempo sin dejar que nada te afecte ni nadie te ponga mal. Aprovecha cada instante, cada momento, cada segundo, transmite eso a los demás contagiados con tu alegría. Haría lo que fuera y todo lo que esté a mi alcance para que siempre estés así" },
  { titulo: "Me extrañes", contenido: "YO TAMBIÉN TE EXTRAÑO MUCHO MI NIÑA, cada instante que esoty lejos de ti sea una hora, un dia, una semana se me hacen eternos y cuento las horas para volverte a ver, encunetro consuelo en recordar cuanto te amo y en la certeza de que nuestro rencuenro será pronto, o en esas noches solitarias en las que un abrazo es necesario, puede que no haya aprendido a teletransportarme pero me aseguraré de darte un abrazototote cuado te vea de nuevo para compensarte." },
  { titulo: "Necesites reír", contenido: "¿Cómo se llama el primo vegano de Bruce Lee? Broco Lee. JAJSJASKJKASJKJS pero rie vl, es malo pero no tanto." },
  { titulo: "Estés aburrida", contenido: "Si estás aburrida pobte a dormir ns JAJSJASJKS, o llámame si quieres y hablamos paja (Depende de la hora claro jijiji), o juega los sims y  deja esa creatividad a volar, bueeeno no yo se como curar el aburrimiento pero seguro alemenos leyendo esto te saqué una sonrisa, tambien puedes armar un sindicato y derrocar el gobierno, tienes todo mi apoyo" },
  { titulo: "Estés molesta", contenido: "Jaiiii, estas molesta, capaz es por una situacion, por una cosa o por una persona, sea lo que sea puedes hablarlo si necesitas desahogarte claro, a veces retener esas cosas hacen más daño que la situación, y dejamos que nos sobrepasen dependiendo de que sean, se que a veces que estás molesta no quieres hablar, pero si algun momento sientes que quieres soltar las cosas aqui andamos para ayudar, sea yo o las muchachas, y si somos la causa del enojo ps algo hicimos para merecerlo jajajajs." },
  { titulo: "Estés celosa", contenido: "Si estás leyendo esto, es porque esa vocecita en tu cabeza está susurrando dudas. Primero, respira. La celosía es solo un grito del corazón que teme perder algo valioso. Pero quiero que recuerdes esto: no hay nadie como tú. Nadie con tu risa, tu forma de amar, tu luz única.Las comparaciones son espejos rotos que solo distorsionan la realidad. Tú no necesitas medirte contra nadie, porque lo que construimos no se basa en 'quién es mejor', sino en 'qué tan genuinos somos'. Si algo o alguien te hace dudar de tu lugar, mírate al espejo y repite: 'Soy suficiente, y lo que es mío, no se irá. Tu eres mi elección, el amor de mi vida, de lo poco que he vivido y quiero que sea para toda la vida, mi novia, mi mujer, mi mejor amiga, y nadie te quitará tu lugar en mi vida sea quien sea esté como esté o se vea como se vea, si estuvieramos en los 50s tu tendrías mis papeles JASJKSAJKSAJK ,este corazon tiene solo una llave, y la tienes tu" },
  { titulo: "Estés triste", contenido: "Sea el día que sea y la hora que sea, me pone mal el hecho de que estés triste, niña. No es bueno, pero sí normal, por lo que todos pasamos. Ya sea por un problema familiar, personal, etc. Hay muchas razones. Siempre existe un breve momento en nuestras vidas en el que nos sentimos raritos. Pero ese preciso momento no es más que un encuentro con nosotros mismos. un momento de vulneravilidad, si las lágrimas corren no contengas, si necesitas apoyo hay un grupo de mujeres un enano y un negro que te apoyarán pase lo que pase en tu tristeza, no te aisles, dejate sentir lo que está pasando pero no en un exilio mental porfis" },
  { titulo: "Cuando sientas que la relación está rara", contenido: "jaii, capaz sientas que andamos raros, o simplemente algo te incomoda, si es así hablemos, y buscar una manera de como solucionarlo, si sientes alguna incomodidad hazmelo saber más aún si me sientes raro o algo de mi te incomoda, actitud, comportamiento, afecto, etc.es normal las turbulencias y las mareas fuertes en una relacion, con comunicacion y entendimiento podemos surcar juntos y volver a aguas quietas" },
  { titulo: "Quieras saber por qué te amo", contenido: "te amo por tu forma de ser, por tu naturalidad al hablar por tu forma de caminar, por tus ojitos bonitos que aprecio cuando estamos cerca, por tus abrazos, tu actitud y resiliencia, tu voz, tu pelo, tu sonrisa perlada que brilla más que las luciernagas de noche, tu forma de amar en silencio pero presente y en la que plasmas tu corazon en manualidades y detalles, por tus consejos y reflexiones, por tus temas de conversacion y chistes, por ti daria lo que fuera por ver felicidad en ti, si mi alma fuera pluma y mi corazón tintero con la sangre de mis venas te escribiría miles de te quieros cual caligrafia completaria cientos de libros suficientes para llenar la biblioteca del cielo" }
];

function mostrarCartas() {
  document.getElementById("bienvenida").classList.add("hidden");
  document.getElementById("cartas").classList.remove("hidden");

  const contenedor = document.getElementById("cards-container");
  cartas.forEach((carta) => {
    const div = document.createElement("div");
    div.textContent = carta.titulo;
    div.onclick = () => abrirModal(carta.titulo, carta.contenido);
    contenedor.appendChild(div);
  });
}

function abrirModal(titulo, contenido) {
  document.getElementById("modal-title").textContent = titulo;
  document.getElementById("modal-body").textContent = contenido;
  document.getElementById("modal").classList.remove("hidden");
}

function cerrarModal() {
  document.getElementById("modal").classList.add("hidden");
}