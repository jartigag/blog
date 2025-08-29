---
    title:  "app de fotos en el servidor familiar"
    layout: post
    date:   2024-01-19
    permalink: immich-fotos-vps-familiar
    author: jartigag
    image: /assets/images/posts/immich.jpg
    tag:
    - selfhosting
    - sysadmin
    - proxy
    - docker
    - nginx
    - certbot
    - dns
    - web
    - sistemas
    - redes
    - notas
    - herramientas
    - google
    - flutter
    - twitch
    mastodonReplies: https://mastodon.social/@jartigag/111784419092792864
    telegramReplies: https://t.me/jartigag_blog/52
---

<script
  type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<link
  rel="stylesheet" media="all" href="{{site.baseurl}}/assets/css/scroll-video.css">
Todo empezó con [este toot](https://mastodon.social/@jartigag/111681231334222433).
Bueno, no.
Empezó antes, con mi padre diciendo "está bien lo de compartir un álbum con nuestras fotos, pero no me hace gracia que sea en Google" (ay, criaturica.. como si Google no te tuviera fichadísimo ya).
Total, que me lié la manta a la cabeza y levanté [fotos.losages.es](https://fotos.losages.es).

![]({{site.baseurl}}/assets/images/posts/immich.png)

## /índice:
  * [¿Immich?](#immich)
  * [¿Otto?](#otto)
  * [Pasos](#pasos)
    * [Nginx Proxy Manager](#1-nginx-proxy-manager)
    * [Docker Compose](#2-docker-compose)
    * [Networking](#3-networking)

## ¿Immich?
[Immich](https://github.com/immich-app/immich) es una aplicación para la gestión y organización de álbumes de fotos de forma privada y segura.
Permite a los usuarios compartir recuerdos con amigos y familiares de una manera sencilla y controlada.
Tiene apps en [PlayStore](https://play.google.com/store/apps/details?id=app.alextran.immich) y [AppStore](https://apps.apple.com/es/app/immich/id1613945652), pero el "modo kiosko" (para ponerlo en una tablet vieja como marco de fotos digital, que es mi plan) por ahora solo está soportado en la [versión web](https://demo.immich.app).
Es bastante fácil de auto-alojar, además de que cumple muy decentemente con las [funcionalidades habituales de las herramientas open-source para guardar tus fotos](https://meichthys.github.io/foss_photo_libraries/).

## ¿Otto?
Otto es el servidor en el que tengo alojado Immich. Es un VPS baratillo (2 cores, 4 GB de RAM y 80 GB de disco SSD) que contraté en OVH.
Lo he bautizado así en honor a [aquel servidor que ardió]({{site.baseurl}}/tenias-backup-no#la-nube-está-en-la-tierra) en Estrasburgo allá por 2021.
Ha resurgido de sus cenizas 💪

## Pasos

### 1. Nginx Proxy Manager

Una vez hayamos registrado el dominio que vamos a usar y hayamos configurado las entradas DNS correspondientes, podemos empezar con la instalación.
El propio equipo de [Immich recomienda seguir el procedimiento para desplegar con Docker Compose](https://immich.app/docs/install/docker-compose).
No tiene mucho misterio, la verdad.
Ya se ve en el vídeo, yo solo copié y pegué:

<div class="static-video-wrap">
  <div class="static-video">
    <div style="text-align:center">
      <iframe src="https://player.twitch.tv/?video=2020708595&parent=jartigag.blog&autoplay=false" frameborder="0" allowfullscreen gesture="media" height="340" width="600"></iframe>
    </div><br/>
  </div>
</div>

Mencionar aquí [Nginx Proxy Manager](https://nginxproxymanager.com/) (¡gracias Uri!), que facilita un montón la gestión de proxys y certificados SSL.

### 2. Docker Compose

Hablando de Docker, quiero recomendar "[Docker para DevOps: de noob a experto](http://dockerparadevops.com)" (¡gracias Iván!),
un libro completísimo que da las bases sobre esta tecnología para después profundizar en sus entrañas, en cómo securizarla y en definitiva en cómo exprimirla al máximo.
En esta sesión estuvimos echándole un ojo:

<div class="static-video-wrap">
  <div class="static-video">
    <div style="text-align:center">
      <iframe src="https://player.twitch.tv/?video=2022370382&parent=jartigag.blog&autoplay=false" frameborder="0" allowfullscreen gesture="media" height="340" width="600"></iframe>
    </div><br/>
  </div>
</div>

También estuvimos comparando planes de VPS, ya que AsturGeek se lo estaba planteando.
Sobre eso yo guardo [mis anotaciones aquí](https://javier.artiga.es/notas/vps).

### 3. Networking

Para terminar, en la última sesión estuve pegándome con las redes de Docker, sus NATeos, el proxy, el firewall...
Tocar cosas hasta que funcionase, vaya.
El proceso de encontrar por qué no funcionaba fue importante, pero lo fue más el proceso de analizar por qué al final funcionó:

<div class="static-video-wrap">
  <div class="static-video">
    <div style="text-align:center">
      <iframe src="https://player.twitch.tv/?video=2025847969&parent=jartigag.blog&autoplay=false" frameborder="0" allowfullscreen gesture="media" height="340" width="600"></iframe>
    </div><br/>
  </div>
</div>

---
<script
  type="text/javascript" src="{{site.baseurl}}/assets/js/scroll-video.js"></script>
