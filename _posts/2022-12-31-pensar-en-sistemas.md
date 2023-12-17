---
    title:  "pensar en sistemas"
    layout: post
    date:   2022-12-31
    permalink: pensar-en-sistemas
    author: jartigag
    image: /assets/images/posts/slinky.png
    tag:
    - notas
    - libro
    - análisis
    - sistemas
    mastodonReplies: https://mastodon.social/@jartigag/110158705100299773
    twitterReplies: https://twitter.com/jartigag/status/1644620053785063429
    telegramReplies: https://t.me/jartigag_blog/45
---

Estoy acabando[^1] el libro "[Pensar en sistemas](https://www.chelseagreen.com/product/thinking-in-systems/)" de Donella Meadows.
No habla de los sistemas en los que solemos pensar la gente de IT.
Habla de un concepto más abstracto de sistemas, extensible a campos tan diversos como política, biología, física...

Una de las frases que más recuerdo de cuando estudié "Señales y sistemas" en primero de carrera es que **casi todo se puede modelar como un sistema**.
Son cajas, con entradas y salidas, idealmente con una ecuación que las relaciona.
Quizá fuera algo que ya intuía, pero desde entonces no he dejado de comprobar que es totalmente cierto.

Encima hay estudiosos del tema (*teóricos de sistemas*), como la Dra. Meadows, que han sido capaces de poner sus descubrimientos a nuestro alcance.
A mí me han llamado la atención muchos de ellos y voy a intentar sintetizar algunos aquí, así que vamos al turrón.

[^1]: Lo acabé en 2022 pero en realidad no he rematado este post hasta ¡abril de 2023! Vaivenes en mi vida 😊

![]({{site.baseurl}}/assets/images/posts/slinky.png)

## /índice:

<!-- vim-markdown-toc GFM -->

* [Por qué los sistemas funcionan tan bien](#por-qué-los-sistemas-funcionan-tan-bien)
* [Por qué los sistemas nos sorprenden](#por-qué-los-sistemas-nos-sorprenden)
* [Trampas y oportunidades de los sistemas](#trampas-y-oportunidades-de-los-sistemas)
* [Provocar cambios](#provocar-cambios)

<!-- vim-markdown-toc -->

### Por qué los sistemas funcionan tan bien

#### Resiliencia
La resiliencia es la capacidad de sobreponerse a perturbaciones externas ("recuperar el estado inicial cuando ha cesado la perturbación a la que se estaba sometido").
Se consigue con muchos bucles de retroalimentación[^2] redundantes y en diferentes escalas temporales, que proveen al sistema de la elasticidad deseable.
La cualidad opuesta sería la fragilidad o la rigidez, que aparece cuando se aplica una visión reduccionista de la eficiencia.

[^2]: Los fundamentos básicos de los sistemas se explican en el primer capítulo del libro, pero [en esta reseña están muy bien resumidos](https://www.15-15-15.org/webzine/2022/07/02/resena-de-thinking-in-systems-pensar-en-sistemas/).

Son buenos ejemplos de sistemas resilientes el cuerpo humano y los ecosistemas.
También ilustran claramente que la resiliencia **siempre tiene límites**.

La resiliencia no se observa inmediatamente (de hecho, es **difícil reconocerla** hasta que no se exceden sus límites y se quiebra la estructura del sistema).
Por eso, muchas veces se sacrifica la resiliencia en favor de la estabilidad estática y la productividad.
Las mismas excusas suelen presentarse contra la organización autónoma.

#### Organización autónoma
La autoorganización es una cualidad tan común, especialmente en la biología, que la despreciamos.
Sin embargo, esta capacidad permite que los sistemas transformen su estructura en otra más compleja, además de generar heterogeneidad e imprevisibilidad, claves para la supervivencia.

Cuando se sacrifica la organización autónoma en una sociedad, las personas más creativas se convierten en accesorios mecánicos de los procesos de producción.
Por suerte, la autoorganización es una propiedad tan **esencial** en los sistemas de nuestro mundo biológico que ni siquiera la estructura de poder más autoritaria puede acabar con ella del todo.

#### Jerarquía

La jerarquía no es más que la organización de sistemas y subsistemas pretendiendo contribuir a los objetivos generales del sistema de la mejor forma posible.
Esta división del trabajo en varios subsistemas reduce la cantidad de información que cada parte tiene que controlar.

Al alcanzar cierto tamaño, los sistemas autoorganizados forman jerarquías siempre con un mismo propósito original, que es el de contribuir a que los estratos inferiores que las han generado puedan hacer mejor su trabajo.
La única forma de que los sistemas, partiendo de una forma simple, puedan seguir desarrollándose (y, por tanto, aumentando su complejidad) es contando con formas intermedias estables.

Dentro de los subsistemas, la **cohesión** es mayor, es decir, las relaciones internas son más densas que las relaciones entre los subsistemas.
De esta forma, los retrasos de retroalimentación se reducen.
Incluso se pueden llegar a desmontar los subsistemas con conexiones de información especialmente densas y que estos funcionen, al menos parcialmente, como sistemas independientes.
Sin embargo, deben revisarse continuamente las relaciones que mantienen unido cada subsistema a los demás y a los niveles superiores, para no perder de vista el objetivo original.

Cuando los objetivos de un subsistema se imponen a los de la totalidad, el resultado es una **suboptimización**, que es tan perjudicial como el exceso de control central.

### Por qué los sistemas nos sorprenden

> "El problema [...] es que somos terriblemente ignorantes.
> La adquisición de conocimiento siempre implica la revelación de nuestra ignorancia:
> prácticamente consiste en la revelación de nuestra ignorancia.
> Lo primero que nos enseña nuestro conocimiento del mundo es que es mucho más grande de lo que podamos llegar a conocer de él."
>
> — Wendell Berry, *Standing by Words*

Antes de entrar en las razones, merece la pena recordar cómo asimilamos el mundo: con **modelos mentales** que ciertamente se suelen ajustar a la realidad con bastante precisión (por eso el ser humano se ha adaptado tan bien), pero que nunca serán representaciones exhaustivas, ya que chocan con nuestros límites.

Nos quedamos **fascinados por los sucesos** en vez de ahondar en la dimensión de los **comportamientos**, que es la serie de sucesos que revela la estructura del sistema.

Nuestra mente lineal establece unas expectativas entre acción y reacción que se ven frustradas por la infinidad de **procesos no lineales** existente.
Pero lo realmente importante de la no linealidad es que hace variar la **intensidad relativa entre los bucles** de retroalimentación.
Esto provoca cambios de dominio en los bucles, modificaciones sensibles en las reservas del sistema y numerosos comportamientos complejos.

Veamos ahora el diagrama de un sistema extraído del libro, sobre el que podremos aterrizar algunos de los conceptos que estamos mencionando:

![]({{site.baseurl}}/assets/images/posts/fig31.jpg)

En este blog ya nos habíamos encontrado con [el símbolo de la nube](/como-hemos-llegado-a-este-internet-2#la-nube).
Para el análisis sistémico, las nubes marcan la frontera del diagrama de un sistema.
**Fronteras impuestas** por el lenguaje, la razón, la percepción o una convención, pues las fronteras raramente son reales.
Aun así, necesitamos establecer fronteras que acoten el estudio que vamos a hacer sobre un sistema.
La importancia de considerar más o menos porción de un flujo (por ejemplo, de las existencias del concesionario) depende de quién estudia el sistema, para contestar qué preguntas y durante cuánto tiempo.

Otro aspecto que olvidamos frecuentemente son los límites del crecimiento.
En palabras de Meadows, "el crecimiento siempre tendrá límites. Puede tratarse de límites autoimpuestos. En caso contrario, los impondrá el sistema. Ninguna entidad física puede crecer eternamente".

Acerca del crecimiento, es interesante lo que dice la [Ley del Mínimo](https://es.wikipedia.org/wiki/Ley_del_M%C3%ADnimo_de_Liebig), que establece que es el **factor limitador** (esto es, el recursos más escaso) quien controla el crecimiento de un sistema.
El modelo de crecimiento empresarial de [Jay Forrester](https://en.wikipedia.org/wiki/Jay_Wright_Forrester) señala precisamente esto, que el problema para el crecimiento de una empresa está en reconocer y gestionar sus límites, siempre cambiantes en respuesta al crecimiento de la propia compañía.

Finalmente, tenemos que asumir que nos guiamos por la **racionalidad limitada**, basada en la información imperfecta de la que disponemos y en los intereses personales que queremos satisfacer suficientemente.
Esto, sumado a la **ubicuidad de los retrasos**, nos coloca en una posición de toma de decisiones condicionada por nuestras limitaciones humanas.

### Trampas y oportunidades de los sistemas
Se repasan en este capítulo varios **arquetipos**, llamados así porque generan pautas problemáticas ("trampas") muy comunes.
Reconocerlos de antemano no es suficiente, también hay que aprovechar la oportunidad para aplicar las soluciones propuestas ante cada uno:

#### Resistencia a las políticas
👉 Buscar vías que satisfagan a todos y objetivos que integren a todos los actores
#### La tragedia de los recursos comunes
👉 Educar en las consecuencias de la sobreexplotación. Reforzar el desaparecido vínculo de retroalimentación, bien privatizando o bien regulando el acceso.
#### Deriva hacia el bajo rendimiento
👉 Ceñirse a criterios de rendimiento absolutos, relacionarlos con las mejoras de rendimiento en vez de los empeoramientos.
#### Escalada de tensión
👉 Evitar caer en ella. Si ya estamos dentro, desarme unilateral o negociar con bucles compensadores para controlar la escalada.
#### El éxito que atrae al éxito: la exclusión competitiva
👉 Diversificación (permitir a los perdedores abandonar el juego y empezar nueva partida), leyes antitrust, nivelación del terreno de juego, compensar las ventajas, recompensas al éxito que no condicionen la siguiente ronda de competición.
#### Adicción (desplazamiento de la carga hacia la intervención)
👉 Evitar caer en ella. Poner énfasis en reestructuración a largo plazo.
#### Evitación de las reglas
👉 Diseñar reglas que animen a los actores a dedicar su creatividad a la consecución del propósito, no a su evitación.
#### Persecución del objetivo equivocado
👉 Especificar indicadores y objetivos que reflejen el bienestar real del sistema. No confundir el esfuerzo con el resultado.

### Provocar cambios

Argumenta el mismo Forrester que, "aunque la gente profundamente involucrada en un sistema es capaz de encontrar contraintuitivamente los **puntos de influencia**, la mayoría de las veces impulsan el cambio en la *dirección equivocada*".
Para tener un punto de partida, la autora del libro ofrece la siguiente lista de puntos donde se puede intervenir en un sistema.

`[12]`. **Parámetros**: los números, el volumen de los flujos. Influyen a corto plazo y para quienes se ven afectados directamente por el flujo en cuestión, pero rara vez alteran el comportamiento de un sistema complejo.

`[11]`. **Amortiguadores (stock)**: afectan a la estabilidad y flexibilidad de un sistema, aunque es cierto que los amortiguadores por lo general son entidades físicas y por tanto no son fáciles de cambiar.

`[10]`. **Estructuras de flujos**: una parte fundamental del sistema, pero difícilmente empleable como punto de influencia porque no suele poderse alterar de forma rápida y sencilla.

`[9]`. **Retrasos**: también decisivos, ya que repercuten sobre el ritmo de cambio de las reservas. Es mucho más fácil ralentizar que acelerar.

`[8]`. **Bucles compensadores**: a veces se comete el grave error de desprendernos de ellos, cuando son un importante mecanismo de respuesta de "emergencia". Ej: tiempos de descanso, leyes antitrust, supresión de subvenciones perniciosas.

`[7]`. **Bucles reforzadores**: reducir su intensidad suele ser un punto de influencia mucho más eficaz que reforzar los bucles compensadores

`[6]`. **Flujos de información**: perder algún flujo de información es una de las fuentes de problemas más comunes en un sistema. Por otro lado, recuperarlos es mucho más sencillo y barato que reconstruir la infraestructura del sistema, así que puede resultar un método de intervención muy eficaz.

`[5]`. **Reglas**: los fallos más graves de los sistemas se entienden prestando atención a las reglas y a los que tienen poder sobre ellas.

`[4]`. **Organización autónoma**: es lo que en biología se conoce como evolución y, en ciencias sociales, avance técnico o revolución social. En este proceso intervienen una materia prima (ej: conocimientos acumulados), una fuente de variedad (ej: creatividad humana) y un mecanismo de prueba (ej: recompensa del mercado, satisfacción de necesidades, selección natural).

Por último, vamos con los tres más influyentes:

`[3]`. **El propósito del sistema**: los bucles compensadores suelen tener sus propios objetivos, pero existen objetivos que afectan a la totalidad del sistema, por lo que permiten una intervención aún más eficaz. Los actores no siempre reconocen cuál es este objetivo global.

Por ejemplo, se dice frecuentemente que el objetivo de una empresa es obtener beneficios. Pero eso no es más que una regla, una condición necesaria para seguir jugando. ¿Cuál es la finalidad del juego? Crecer, tomar mayor control del mercado, reducir así la incertidumbre... ¿es por tanto el monopolio el objetivo último?

Algunos [estudios sobre el sistema industrial](https://en.wikipedia.org/wiki/The_New_Industrial_State) así lo determinan. En realidad, se dice que ese es el objetivo de cualquier población de seres vivos. Sin mecanismos que equilibren este objetivo individual, se antepondría al objetivo general del sistema, ya sea evolucionar un ecosistema o mantener la competitividad del mercado.

`[2]`. **Paradigmas (modelos mentales)**: el modelo mental social compartido, un conjunto de creencias tácitas y arraigadas sobre el funcionamiento del mundo. Por ejemplo, el pago de impuestos se basa en la idea aceptada de "distribución equitativa", antes de que las leyes lo especifiquen de una u otra forma.

Los paradigmas son el origen de los sistemas. Las ideas de la sociedad. ¿Cómo pueden cambiarse? A priori, pudiera parecer que son el elemento más difícil de alterar en un sistema. En el fondo, sólo hace falta que la mente del individuo (quizá incluso de un único individuo) haga clic.

Después, para que este clic llegue a una sociedad entera, hace falta más. "Deben dejarse al descubierto las anomalías y los defectos del viejo paradigma. Defender el nuevo paradigma con aplomo y vehemencia. Situar a los que lo defienden en posiciones de poder, con visibilidad pública. No perder el tiempo con los reaccionarios, sino colaborar con los agentes capaces de provocar un cambio activo y con el amplio sector de la sociedad que posee una mente abierta"[^3].

[^3]: [Thomas Kuhn, *La estructura de las revoluciones científicas*](https://en.wikipedia.org/wiki/The_Structure_of_Scientific_Revolutions)

`[1]`. **Trascender los paradigmas**: "Existe todavía un punto de influencia aún más importante que un cambio de paradigma. Consiste en mantener nuestra independencia en el terreno de los paradigmas, mostrarnos flexibles, comprender que NINGÚN paradigma es *verdadero*. Que todos ellos, incluido el que modela suavemente nuestra propia visión del mundo, son una interpretación tremendamente limitada de un universo inmenso y alucinante que se encuentra más allá de la comprensión humana."

"Cuando la gente vislumbra **la posibilidad de que todo** lo que habían dado por sentado ahora **carezca por completo de sentido**, empieza a remar rápidamente en la dirección contraria. Pero lo cierto es que a todos los que han conseguido abrigar esa idea, durante un instante o durante toda su vida, les ha servido de **base para un fortalecimiento radical**. Si no existe ningún paradigma verdadero, podemos elegir cualquiera que nos ayude a alcanzar nuestro propósito".

"Este espacio de dominio de los paradigmas es el lugar donde la gente consigue librarse de una adicción, vivir en la felicidad constante, derrocar imperios, ser fusilado, y ejercer una influencia que puede durar miles de años".

---
