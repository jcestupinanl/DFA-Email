# Validación de Correos Electrónicos con AFD

![Validación de Correos Electrónicos](https://www.poli.edu.co/sites/default/files/styles/institutional_hero/public/imagen-identidad-institucional-b.jpg?itok=hKMeqUPD)

## ¿Qué es un AFD?

Un AFD, o Autómata Finito Determinista, es un modelo matemático utilizado en ciencias de la computación y teoría de la computación para describir sistemas que pueden estar en diferentes estados y cambiar de estado en respuesta a una secuencia de entradas. En nuestro caso, utilizamos un AFD para validar la estructura de las direcciones de correo electrónico.

## Implementación

En este repositorio, proporcionamos una implementación básica de un AFD para la validación de direcciones de correo electrónico en JavaScript. Nuestro AFD verifica la estructura básica de las direcciones de correo electrónico, incluyendo el formato del nombre de usuario, el dominio y la extensión.

## Uso

Para utilizar nuestra implementación de AFD en tu proyecto, simplemente [instrucciones sobre cómo integrarlo en tu proyecto].

```
const afd = new AFD()
const correo = "jcestupinan@poligran.edu.co"
console.log("El correo electrónico", correo, "es válido:", afd.accept(correo))
```

## Contribución

¡Apreciamos las contribuciones de la comunidad! Si tienes ideas para mejorar nuestra implementación de AFD o sugerencias para nuevas características, por favor abre un issue o envía un pull request.
