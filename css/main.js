const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 80
});
typewriter
    .typeString("Nuestros Consultorios")
    .pauseFor(340)
    .start();

    