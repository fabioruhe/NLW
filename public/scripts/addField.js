// Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

//pega os campos. Que campos?
const fields = newFieldContainer.querySelectorAll('input')

fields.forEach(function(field){
    field.value = ""
})

document.querySelector('#schedule-items').appendChild(newFieldContainer)
}