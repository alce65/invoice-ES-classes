# Dashboard GoT

## Modelo de datos

Tendrás que crear en JS una estructura de clases que refleje el siguiente modelo de datos:

- En Juego de Tronos existen personajes. Todos esos personajes tienen la siguiente información: · Nombre · Familia a la que pertenece · Edad · Estado (vivo o muerto, aunque inicialmente todos están vivos)

- Todos los personajes pueden realizar la acción de comunicar, pero cada tipo de personaje (no cada personaje) se comunica de un modo distinto. Nota: este método devuelve el string con la frase, no imprime por consola.

- Todos los personajes pueden realizar la acción de morir, cambiándose su estado a muerto.

- Todos los personajes pueden realizar la acción de revivir, cambiándose su estado a vivo.

- Todos los personajes pertenecen a la misma serie, "Juego de Tronos".

- Cada uno de esos personajes puede ser un rey, un luchador, un asesor, o un escudero.

- Un rey, además de la información que tiene por ser personaje, tiene la siguiente información: · Años de reinado · Cuando se comunica dice: "Vais a morir todos"

- Un luchador, además de la información que tiene por ser personaje, tiene la siguiente información: · Arma que usa · Destreza (un valor entre 0 y 10) · Cuando se comunica dice: "Primero pego y luego pregunto"

- Un asesor, además de la información que tiene por ser personaje, tiene la siguiente información: · Personaje al que asesora (que puede ser rey, luchador, asesor o escudero) · Cuando se comunica dice: "No sé por qué, pero creo que voy a morir pronto"

- Un escudero, además de la información que tiene por ser personaje, tiene la siguiente información: · Personaje al que sirve (que sólo puede ser luchador) · Grado de servilismo (un valor entre 0 y 10) · Cuando se comunica dice: "Soy un loser"

## Datos

Una vez hecha toda la estructura, crea un array con los siguientes personajes

- Joffrey Baratheon (rey)
- Jaime Lannister (luchador)
- Daenerys Targaryen (luchadora)
- Tyrion Lannister (asesor de Daenerys)
- Bronn (escudero de Jaime).

## Funciones y métodos

Haz una función que tenga como entrada dicho array y devuelva un array con los nombres de los personajes. Para probarla, haz otra función que recorre el array y
imprime por consola cada uno de los nombres.

¿No sería mejor reorganizar este código en función del concepto de clases?

## Métodos de instancia

- Crea un método que mata/reviva al personaje (es decir que cambie su estado)
  Para probarlo, mata a Jaime y a Tyrion y comprueba que están muertos.
- Crea un método que permite mostrar el mensaje del usuario, por consola o como elemento HTML (este último lo usaras luego), o ambos a la vez

Tu decides en que nivel de la estructura de clases debe estar este método.

## Dashboard

- Crea una página HTML que muestre la información de tus personajes como un conjunto de tarjetas con la siguiente estructura.

- Cuando se hace hover sobre la imagen (o click, para el mobile) se mostrara el 'reverso' de la tarjeta.

![Card - Front](./card-front.small.png)
![Card - back](./card-back.small.png)

- El boton habla hace que se muestre el mensaje del personaje (tu eliges la forma en que aparece en la página)

- El botón muere/revive debe mostrar el mensaje que corresponda y cambiar el estado del personaje cuando se pulsa

- Según el evento que cambio de 'cara' la tarjeta, la perdida de hover o un nuevo click debe permitir regresar a la cara inicial
