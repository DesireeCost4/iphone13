const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // Remove a classe 'selected' de todos os botões
        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        // Adiciona a classe 'selected' ao botão clicado
        const button = e.currentTarget;
        button.querySelector(".color").classList.add("selected");

        const id = button.getAttribute("id");
        console.log(id);

        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }) 
        
    });
});
