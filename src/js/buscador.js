
document.addEventListener("DOMContentLoaded", () => {

    const buscadores = document.querySelectorAll(".search_bar");

    buscadores.forEach((form) => {

        form.addEventListener("submit", (e) => {

            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            } else {

                const texto = form.querySelector("input").value;

                if (texto.trim() === "") {
                    e.preventDefault();
                    alert("Por favor, escribe algo para buscar que no sean espacios.");
                }
            }

            form.classList.add("was-validated");

        }, false);

    });

});
