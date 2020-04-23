/*
Diferencia entre getElementById y querySelector: En pocas palabras podemos decir que getElementById hace
referencia a un elemento html atravez de su id devolviendo la primera coincidencia o nulo en caso de no 
encontrar el elemento. Por otro lado querySelector hace referencia a un elemento html por medio de su id
y ademas por una clase css; Para saber cuando se hace referencia por id o clase simplemente debemos ver
si tiene el simbolo "#" antes de su de la palabra para saber que es por id, caso contrario es por clases
css.
*/
document.querySelector('.menu-btn').addEventListener('click',()=> {
    document.querySelector('.nav-menu').classList.toggle('show');});
    /*Con el metodo classList accedemos a lista de clases y con el metodo .toggle() declaramos una 
    funcion que permite alternar para agregar o quitar una clase especifica.*/ 

    // Libreria SCROLLREVEAL
    // Agregando animacion al momento de cargar la pagina
    ScrollReveal().reveal('.showcase');  
    // Agregamos la misma animacion pero con una duracion de 0.5 segundos.
    ScrollReveal().reveal('.news-cards',{delay:500}); 
    ScrollReveal().reveal('.cards-banner-one',{delay:500});
    ScrollReveal().reveal('.cards-banner-two',{delay:500});

