// Procurar o botao
document.querySelector("#add-time")         /* docuument.query serve para achar o codigo html; .addEventListener, adiciona um sensor de eventos, nesse caso, ao clique, que realiza uma função  */
.addEventListener("click", cloneField)
//Quando clicar no botao

//Executar uma ação
function cloneField(){
    /* duplicar os campos, Que campos? */
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)          /* Node é referencia a elementos hyml, nesse caso serve para clonar */
    /* pegar os campos, que campos? */
    const fields = newFieldContainer.querySelectorAll("input")      
    /* para cada campo, limpar */
    fields.forEach(function(field){     /* Para cada, o parametro da função é a ocorrencia a ser trabalhada */
        field.value = ""
    })

    /* colocar na página, onde? */
    document.querySelector("#schedule-items").appendChild(newFieldContainer)    /* Adiciona o Html selecionado à pagina */
}
    