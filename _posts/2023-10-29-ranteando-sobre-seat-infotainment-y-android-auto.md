---
title:  "ranteando sobre seat infotainment y android auto"
layout: post
date:   2023-10-29
permalink: ranteando-sobre-seat-infotainment-y-android-auto
author: jartigag
image: /assets/images/posts/android-auto.png
tag:
- android
- seat
- coche
mastodonReplies: https://mastodon.social/@jartigag/111318786486693868
twitterReplies: https://twitter.com/jartigag/status/1718668996877181098
---

<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<link rel="stylesheet" media="all" href="{{site.baseurl}}/assets/css/scroll-video.css">

Ya llevo casi tres años disfrutando de mi Seat León Mk4.
Tiene una línea estética que me encanta y estoy muy contento con sus prestaciones como vehículo.
Sin embargo, cualquiera que haya compartido conmigo un viaje hablando de Android Auto y del infotainment de Seat probablemente me haya escuchado criticar los **defectos de este coche como el ordenador** que también es.
Para que no se quede solo en quejas, voy a procurar identificar estos problemas de software y hardware, investigarlos e incluso, en la medida de lo posible, buscar soluciones.

![]({{site.baseurl}}/assets/images/posts/android-auto.png)

## /índice:

<!-- vim-markdown-toc GFM -->

* [Making-of](#making-of)
* [Issues](#issues)
* [Fixes](#fixes)

<!-- vim-markdown-toc -->

## Making-of
También voy a aprovechar este tema para hacer una incursión en un campo que he explorado poco hasta ahora: la edición de vídeo<sup id="fnref:1">[1](#fn:1)</sup>.
A ver si me queda chulo:

<div class="video-wrap">
  <div class="video">
    <iframe name="peertubevideo" width="600" height="340" src="https://fediverse.tv/videos/embed/19ce0dba-a941-403b-a970-7a130a720504?warningTitle=0" frameborder="0" gesture="media" allowfullscreen></iframe>
  </div>
</div>


Además estoy probando a escribir, revisar y editar el post desde el móvil<sup id="fnref:2">[2](#fn:2)</sup>.
Tiene la ventaja de poder retomarlo cuando surja y donde surja.
Gracias a ello, voy a acabar todo el artículo en un Soria-Huesca desde el asiento de atrás ✌️

---

<a name="fn:1"></a>1: Mediante [CapCut](https://play.google.com/store/apps/details?id=com.lemon.lvoverseas), una de las populares apps del unicornio chino Bytedance, intento aplicar un estilo de edición actual imitando descaradamente a [youtubers](https://youtube.com/@LiveOverflow) [varios](https://youtu.be/mU9ic3CzF-M). ¡Me flipa que una tarea como la edición de vídeo tenga tanta potencia y estabilidad en dispositivos móviles! [↩](#fnref:1)  
<a name="fn:2"></a>2: Uso la app [PureWriter](https://play.google.com/store/apps/details?id=com.drakeet.purewriter), un editor de Markdown. Está super cuidada, da gusto. Casualmente también es de origen chino, en este caso del desarrollador [@drakeet](https://github.com/drakeet). [↩](#fnref:2)  

## Issues
Pasamos a desarrollar los puntos del vídeo, que tengo cuerda para rato.
Ve clickando <span style="color: goldenrod;">cada marca de tiempo en amarillo</span> si quieres ver el fragmento al que me refiero en cada párrafo.

1. <a href="https://fediverse.tv/videos/embed/19ce0dba-a941-403b-a970-7a130a720504?start=43s&amp;stop=52s&amp;title=0&amp;warningTitle=0&amp;p2p=0&amp;autoplay=1" style="color: goldenrod;" target="peertubevideo">
00:43</a>:
Cada vez que arrancas, te "da la bienvenida" cargando los ajustes desde a saber dónde<sup id="fnref:3">[3](#fn:3)</sup>.
¿Y si se cuelga la conexión?
Pues se queda ahí infinitamente 😳
Los menús para sintonizar la radio, llamar con tu teléfono a través del manos libres, reproducir la música que viene por Bluetooth o USB, emparejar Android Auto, configurar las luces del interior...
Todos son inaccesibles mientras se muestre este mensaje.
¿Que quieres bajar la calefacción?
Eso es lo mejor: como el "Cargando ajustes..." falle, te quedas con la temperatura y potencia que dejaras ayer.
Si por suerte funciona, no te relajes aún, porque usar la [ruleta de la derecha](https://twitter.com/jartigag/status/1563451011229880323) para regularla hubiera sido demasiado cómodo:
poner el aire acondicionado requiere dar toques navegando por 3 paneles distintos 🤦‍♂️

2. <a href="https://fediverse.tv/videos/embed/19ce0dba-a941-403b-a970-7a130a720504?start=56s&amp;stop=1m3s&amp;title=0&amp;warningTitle=0&amp;p2p=0&amp;autoplay=1" style="color: goldenrod;" target="peertubevideo">
00:57</a>:
Android soporta el modo inalámbrico de Android Auto desde finales de 2020, cuando llegó su versión 11.
Yo pillé este móvil después de comprar el coche, con la idea de que conectarlo implicara cero fricción (figurada y literalmente, que a mí todos los cacharros se me desgastan por el puerto del cargador).
Siempre cuento la historia de aquel comercial en el concesionario, al que le conté que andaba detrás del tema de evitar cables.
«Después de navidades voy a mirar un móvil que me permita la conexión inalámbrica.
¿El nuevo modelo del León cuenta con esto?»
«¡Sí, sí! ¡Por supuesto!
Con iPhone ya funciona en este coche.
Con Android todavía no.
Ya se sabe que **esto del software libre nunca ha funcionado bien**».
¡Y se quedó tan ancho! 😂
Pensé "mira, no sé ni por dónde empezar... Así que mejor olvidamos el disparate que acabas de decir".

3. <a href="https://fediverse.tv/videos/embed/19ce0dba-a941-403b-a970-7a130a720504?start=1m8s&amp;stop=1m35s&amp;title=0&amp;warningTitle=0&amp;p2p=0&amp;autoplay=1" style="color: goldenrod;" target="peertubevideo">
01:08</a>:
Por fin todo está listo, se reanuda la reproducción de aquel podcast donde lo dejaste...
¡Eh, oigo el podcast pero no veo los controles!
¿Y el GPS?
No se termina de pintar la pantalla de Android Auto.
¡Pero no te preocupes!
Lo que pasa es que tienes que adivinar que, al cambiar de panel con los botones y volver al panel donde estabas, el inesperado proceso de mostrar la vista inicial recibe el empujón que necesitaba 🙄 Venga, vamos a poner rap del bueno.

4. <a href="https://fediverse.tv/videos/embed/19ce0dba-a941-403b-a970-7a130a720504?start=1m38s&amp;stop=2m16s&amp;title=0&amp;warningTitle=0&amp;p2p=0&amp;autoplay=1" style="color: goldenrod;" target="peertubevideo">
01:38</a>:
Yo diría que el reconocimiento de voz funciona bastante bien, mejor de lo que me habían contado.
Para llamar, pedir una canción o un artista, dictar mensajes...
Es una pena que no pille los nombres de las playlists, ni siquiera las predefinidas en Spotify como la de canciones que me gustan.
Igual es que no he dado con la palabra clave para que las busque, todo puede ser.

5. <a href="https://fediverse.tv/videos/embed/19ce0dba-a941-403b-a970-7a130a720504?start=2m17s&amp;stop=2m42s&amp;title=0&amp;warningTitle=0&amp;p2p=0&amp;autoplay=1" style="color: goldenrod;" target="peertubevideo">
02:17</a>:
«Esta canción mola, pero había otra del Bejito...
¿Cómo se llamaba?
Un momento que miro la lista...»
¡Nop!
No tardes más de 5 segundos, que te bloquea otros 5 segundos con una "Pausa de seguridad" y vuelta a empezar
(si con los 5 segundos de anuncios en YouTube no abandonas lo que estabas viendo, por esta interrupción tampoco vas a desistir en tu búsqueda de la canción que intentas recordar) 😐
«Joer Javi, que es para evitar que te distraigas mientras conduces»
Bien, te lo compro.
¿Pero el copiloto también tiene que navegar por Spotify a tirones de 5 segundos?
Hay sensores por todo el coche, no sería difícil evaluar si el conductor tiene las dos manos en el volante y por tanto quien toca la pantalla es su acompañante...

<a name="fn:3"></a>3: ¿Alguien sabe dónde está la antena 4G de este coche o cómo se apaga? Yo todavía no la he encontrado ni buscando esquemas electrónicos. [↩](#fnref:3)  

<div class="hide-video"></div>
## Fixes

1. Evitar lo de la pantalla "Cargando ajustes" no parece fácil.
Como no encuentre alguna forma de cortocircuitar esa conexión...
He pasado por el taller alguna vez que este problema se alargaba demasiado, y resulta que había recibido actualizaciones en beta (por eso sospecho de la red) que tuve que pedir que revirtieran.
Meterme yo a tocar el firmware serían palabras mayores.
Tampoco veo cómo dotar de más funcionalidad a la ruleta de la derecha, aunque me encantaría.

2. Cuando mi móvil con Android 11 (e incluso 12, en otoño del año pasado) ya soportaba Android Auto inalámbrico pero mi coche no, me puse a mirar adaptadores USB.
Entre los cuatro o cinco fabricantes que ofrecían estos dongles por aquel entonces, el que más me gustó fue [AAWireless](https://www.aawireless.io/).
Lo compré en junio de 2022, justo antes de que sus desarrolladores Emil y Chiel se despidieran de su página de Indiegogo y de su soporte vía [GitHub](https://github.com/cpebit) para empezar a vender a través de su web propia y Amazon.
Elegir este producto fue un acierto, me alegra que el proyecto siga creciendo.

3. Los atascos renderizando la pantalla de Android Auto, como los problemas del punto 1, no pintan sencillos de arreglar.
Resulta que esto corre sobre QNX, un sistema operativo cerrado propiedad de Blackberry.
A ver quién mete mano ahí...

4. En [este hilo](https://www.reddit.com/r/googlehome/comments/ou7gkr/get_google_voice_assistant_to_play_my_spotify/) de r/GoogleHome han sugerido varias ideas que pueden conseguir que el asistente de voz entienda que buscas una playlist en Spotify. Las iré probando, ya os contaré si me funciona alguna.

5. Dicen en r/AndroidAuto (¡que viva la gente de los subreddits!) que [AAWireless tiene una opción para deshabilitar la "pausa de seguridad"](https://www.reddit.com/r/AndroidAuto/comments/12ly2op/safety_pause_back_soon/jg9hdyv).
Este dongle, aparte de cumplir su cometido por defecto con solo enchufarlo, tiene una [app](https://play.google.com/store/apps/details?id=app.aawireless) que permite ciertas modificaciones avanzadas cuando algo no funciona como debería (¿veis cómo fue una elección acertada?).
Lo malo es que también he leído que [ese workaround puede provocar bugs en la posición en Google Maps](https://www.androidcentral.com/accessories/audio/aawireless-review)...
También lo probaré, veremos si me compensa.

Ale, ya he soltado todas las pegas que he encontrado en mi ordenador sobre ruedas.
Dicho esto, opino que la integración smartphone-coche es una gran ventaja.
En el próximo post comentaré las partes más útiles de Android Auto para mí, qué nuevos descubrimientos he hecho y cómo les saco el máximo provecho.
Incluso puede que me curre algún hack... 😇

---
<script type="text/javascript" src="{{site.baseurl}}/assets/js/scroll-video.js"></script>
