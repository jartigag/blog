---
title: demasiao feed

layout: post

date: 2025-08-30

permalink: demasiao-feed

author: jartigag

image: /assets/images/posts/
c-tangana-demasiadas-mujeres.png

tag:

- herramientas

- web

- reflexiones

- mastodon 

- twitter

- instagram

- linkedin

- github

- twitch

- android

mastodonReplies: https://mastodon.social/@jartigag/xxxxxxxxxxxxxxxxxx

telegramReplies: https://t.me/jartigag_blog/y

---

> "Contra el vicio de pedir, la virtud de no dar" (Mi padre, que cita este refrán siempre que puede)

Nadie duda de que procesar toda la información que recibimos es absolutamente imposible.
Entonces, ¿cómo escogemos aquello a lo que realmente queremos prestarle atención?
Las redes sociales, saturadas desde hace años, han optado por cambiar el orden cronológico de sus timelines por la ordenación de un algoritmo.
Podría ser una buena idea, ¿no? Presentar primero lo que más nos interesa.
Pero claro, quiénes eligen aquí qué es lo interesante, ¿los usuarios?
No, los anunciantes.
Los que ponen la pasta, que esto es un negocio.

Imaginemos por un momento que no fuera un negocio.
Que de verdad pudiéramos elegir cómo organizamos nuestros inputs.
¿Cómo lo haríamos?

<p text-align="center">

<img src="{{site.baseurl}}/assets/images/posts/
c-tangana-demasiadas-mujeres.png">

</p>


## /índice:

<!-- vim-markdown-toc GFM -->

* [Timelines](#timelines)
* [Informarse](#informarse)
* [Scroll infinito](#scroll-infinito)
* [Triggers](#triggers)
* [Backlog](#backlog)

<!-- vim-markdown-toc -->

## Timelines

Las plataformas sociales no son todas iguales en la manera en que presentan la información. Algunas, como Instagram, LinkedIn o Twitter (ahora X), dependen casi por completo de **algoritmos** que deciden por ti qué verás primero. Sus timelines son cajas negras: muestran lo que creen que te retendrá más tiempo, no necesariamente lo que quieres ver.

Otras, como Reddit, ofrecen —al menos en teoría— la posibilidad de configurar el orden de lo que ves: cronológico, por popularidad o por relevancia en tu comunidad. Al ser **configurable**, el usuario recupera un mínimo de control, aunque sea limitado.

La pregunta es: ¿hasta qué punto esa "configurabilidad" es real? ¿Cuántos usuarios eligen de verdad el orden cronológico o ajustan sus preferencias? ¿Cuántos aceptan la versión por defecto, diseñada para maximizar la permanencia y, por tanto, los ingresos publicitarios?

Existen todavía espacios donde es el tiempo, orden natural de la información, el criterio para organizar lo que vemos: RSS, Mastodon, Github, incluso el correo electrónico. En los timelines **cronológicos**, el flujo respeta la secuencia real de los acontecimientos: lo más reciente aparece primero. Sin filtros invisibles. Sin priorizaciones con interés ajeno.

Este modelo tiene una virtud esencial: la transparencia. Tú decides qué fuentes sigues, y el sistema sólo las ordena según su momento de publicación. Sin embargo, este enfoque tiene un precio: la sobrecarga. Si sigues demasiadas fuentes, la información se acumula sin control, y la responsabilidad de filtrar pasa a ser completamente tuya.

Aparte de los algoritmos y el orden cronológico, existe otro modelo clásico: el de los timelines **curados por editores** profesionales. Este enfoque, típico de medios de comunicación tradicionales, confía en un equipo de personas para seleccionar y ordenar la información más relevante.

Su principal fortaleza es la intencionalidad. Detrás de cada pieza hay un criterio explícito: relevancia, rigor, interés temático. A diferencia de los algoritmos, los editores pueden aportar contexto, jerarquía y diversidad de perspectivas, no sólo maximizar permanencia del usuario.

Claro, esto responde a líneas editoriales, sesgos personales o incluso sesgos personales. La decisión de qué importa y qué no sigue delegándose en algo ajeno. La diferencia es que es un humano en vez de una máquina.

## Informarse

Primero, vamos a sondear el problema y entenderlo.
Hablemos sólo de "**leer las noticias**".
Para tener algo de lo que partir, ¿os parece si echamos unas cuentas con mi lector de RSS[^1]?

[^1]: Sí, [RSS](https://es.wikipedia.org/wiki/RSS). Que sí lo conoces... ¡Lo del iconito naranja ese! <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Feed-icon.svg/128px-Feed-icon.svg.png" alt="el icono de RSS" height="28" width="28" style="display:inline;vertical-align:middle;">

Recibo los titulares de un par de periódicos nacionales + los locales que me interesan + el telediario.
Eso ya pueden ser unos 100-150 artículos al día.
También estoy suscrito al feed de unos 15 medios (¿¿15?? De aquí voy a quitar unos cuantos pero ya)
relacionados con tecnología de distintas formas: linux, sysadmin, generalista, seguridad, internacional...
Otros 150 artículos diarios fijo.
Ya van varios cientos de líneas por escanear, sólo para filtrar qué leer.
¡Todavía ni he entrado a leer ninguno!

Supongo que es el coste de **informarse con un poco de pluralidad**, ¿no..?
No sé, quizá pueda considerarse un **coste excesivo**, si lo miramos detenidamente.

Aparte, por RSS también sigo más de 25 **blogs personales**, que en realidad son los que más me interesan.
En estos hay entradas nuevas un par de veces al mes si eso, con suerte.
Pero vamos, que es totalmente entendible.
No seré yo quien le quite mérito al esfuerzo que implica seguir escribiendo un blog personal.

[[ Feeds vídeo: Twitch, YouTube. Algoritmo de recomendación, directos, ver más tarde. ]]

Ya vemos que la cantidad de inputs es excesiva.
Necesitamos que esté ordenada y filtrada de alguna forma.

## Scroll infinito

[[ Twitter/X y su alternativa libre-federada, Mastodon. ]]

Hace tiempo monté una prueba rápida usando algunas herramientas de línea de comandos[^2], con la que quería medir el [goteo de posts](https://www.twitch.tv/videos/1576283289)[^3] que percibo yo como usuario de estas dos redes sociales de microblogging.
Sobre todo, quise recoger cuántas micro-publicaciones vería un día cualquiera en mis timelines, si las leyera todas.

<pre><code>
# posts en mi timeline de Mastodon durante un martes:
$ grep "2022-08-30" toot_timeline.stream.txt | wc -l
<mark>455</mark>
# (sigo unas 250 cuentas)
</code></pre>

<pre><code>
# posts en mi timeline de Twitter durante un martes:
$ grep "2022-08-30" rainbowstream_timeline.stream.txt | wc -l
<mark>511</mark>
# (sigo unas 400 cuentas)
</code></pre>

[^2]: En concreto, usé [`toot`](https://github.com/ihabunek/toot) para Mastodon, [`rainbowstream`](https://github.com/orakaro/rainbowstream) para Twitter y [`viddy`](https://github.com/sachaos/viddy) para monitorizar cómo evolucionaba la cosa. Bueno, y [`bat`](https://github.com/sharkdp/bat) para colorear la salida de `cat`.

[^3]: Tweets, tuits, toots... Como lo quieras llamar.

No considero que sea un usuario especialmente intensivo de estas apps.
Aunque imagino que casi cualquier persona a la que le preguntes te dirá lo mismo...
Depende de con quién te compares y en qué momento.
Sin embargo, para poder tomar conciencia del asunto, **es necesario que cada uno saque sus propios números**.
Yo voy a seguir analizando los míos.

[[ Algoritmos en redes sociales ]]

[[ De timelines a notificaciones push ]]

## Triggers

¿Sabes cuántas notificaciones recibes cada día en tu móvil?
Sí, un montón, ¿pero cuántas dirías que son?
Yo las he sumado en el mío.

Está en **Notificaciones > Historial de notificaciones > Últimas 24 horas** (es un Android 16).
Quitando la *<u>gran</u>* cantidad de aplicaciones/grupos que tengo en silencio, el teléfono reclama mi atención fácilmente 100 veces al día (algunas de ellas agrupadas, menos mal).
Notificaciones que por lo general quiero recibir, ojo.
Si no, las silenciaría.
Pequeñas interrupciones, pero ya son unas cuantas.

Las quería comparar con las de un móvil que tuve para el trabajo (también Android 12, aunque con capa de personalización Samsung) pero no he encontrado el dato tan fácilmente.
De todas formas, pienso que en lo laboral deberían contabilizarse por un lado la mensajería instantánea y por otro los correos,
que suelen requerir tiempos distintos para entenderlos, actuar y redactar una respuesta.
Esto es parte del trabajo, por supuesto.
Aun así, es la parte que llega desde fuera e interrumpe tu tarea actual, **al menos durante el instante en el que valoras si lo que entra es más prioritario** que lo que estabas haciendo.

<!-- {{ -->

[[ Ante esto, ¿suprimir cualquier aviso? ¿Interacción?

Para eso son las notificaciones.
A veces incluso se agradecen.
Que te saquen de tu propio pensamiento.

Concentración / Ensimismamiento.

Pero tantos cambios de contexto... ]]

<!-- }} -->

De primeras, una notificación cuesta muy poco leerla y normalmente también cuesta poco contestarla.
Como ya sabrás por experiencia propia, el verdadero problema no viene por la notificación en sí, sino por el círculo vicioso que se forma cuando pones el móvil en tu mano, ya que estás abres nosequé otra app, empiezas a deslizar con tu dedo...
Y, de repente, han pasado 10 minutos (o según cómo te pille, diez son sólo los primeros) en los que no recuerdas qué ha pasado,
pero [algo te ha mantenido pegado a la pantalla](/sal-de-la-maquina#3-origen-y-consecuencias-de-la-epidemia).

[[ [My Addictometer](https://nanhekadam.github.io/home/myaddictometer/myaddictometer.html) ]]

### Backlog

[[ Pestañas abiertas, marcadores. Newsletters. ]]