document.addEventListener("DOMContentLoaded", () => {
    const texto = document.body.querySelector("#texto");
    const amogus = document.body.querySelector("#amogus");
    texto.addEventListener("click", () =>{
        if (texto.textContent === "Olá Mundo")
            texto.textContent = "Hello World";
        else
            texto.textContent = "Olá Mundo";
    });
});