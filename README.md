# Amigo Secreto

Una sencilla aplicación web para realizar un sorteo de amigo secreto.

## Descripción

Esta aplicación permite a los usuarios ingresar una lista de nombres de amigos y, posteriormente, realizar un sorteo aleatorio para asignar un amigo secreto a cada uno.  La aplicación se implementa utilizando HTML, CSS y JavaScript.

## Funcionalidades

* **Agregar amigos:** Permite agregar nombres de amigos a una lista.  Se valida que el nombre no esté vacío y que no se repita.
* **Mostrar lista de amigos:** Muestra la lista de amigos agregados.
* **Sortear amigos secretos:** Realiza un sorteo aleatorio para asignar un amigo secreto a cada persona en la lista.  Se muestra el resultado del sorteo.
* **Validación de entrada:** Se valida que se ingresen al menos dos nombres para realizar el sorteo.

## Tecnologías utilizadas

* **HTML:** Para la estructura de la página web.
* **CSS:** Para el estilo de la página web.
* **JavaScript:** Para la lógica del programa, incluyendo la gestión de la lista de amigos y el algoritmo de sorteo.

## Cómo ejecutar la aplicación

1.  Clona este repositorio.
2.  Abre el archivo `index.html` (o el archivo HTML que contenga el código) en un navegador web.


## Consideraciones

* El algoritmo de sorteo es aleatorio.  En sorteos sucesivos, es posible que se repitan las asignaciones.
* El código no maneja el caso en que una persona se pueda asignar a sí misma como amigo secreto.  (Considerar implementar una mejora para esto).

## Estructura del código

El código se divide en tres funciones principales:

*   `agregarAmigo()`: Añade un amigo a la lista.
*   `actualizarLista()`: Actualiza la visualización de la lista en la interfaz de usuario.
*   `sortearAmigo()`: Realiza el sorteo aleatorio y muestra los resultados.

## Autor
Francisco
