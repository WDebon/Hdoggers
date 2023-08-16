const nome_Input = document.getElementById("nome");

const telefone_Input = document.getElementById("tel");

const cor_Input = document.getElementById("tag");

const desc_Input = document.getElementById("desc");

const button_Input = document.querySelector("button")

const form_Select = document.querySelector("form");

let linhas = '';

cor_Input.value = '#000000';

// function telefone_Func(func) {

//     const telArray = func.split("") //vai separar o input por cada letra
//     console.log(func);
//     for (let i = 0; i < telArray.length; i++) 
//     {
//         // isNan vai dar true se for um número e false se não for
        
//         isNaN(telArray[i])
//         // console.log(isNaN(telArray[i]));
//     }
// }

telefone_Input.addEventListener("keyup", function(e){
    const telefone_Value = telefone_Input.value
            // console.log(telefone_Value);
            // console.log(isNaN(telefone_Value))
            // button_Input.disabled = !telefone_Func(telefone_Input);

            button_Input.disabled = isNaN(telefone_Value);

            if(!isNaN(telefone_Value)){
                button_Input.style.backgroundColor = "";
            }else{
                button_Input.style.backgroundColor = "grey";
            }
        // console.log(button_Input.disabled)
});

form_Select.addEventListener("submit",function(e){

    e.preventDefault()

    const tabelaBody = document.querySelector('tbody');
    const tabelaFoot = document.querySelector('tfoot');

    let linha = '<tr>';

    linha +=`<td id="tag-color" style="background-color: ${cor_Input.value};"></td>`;
    linha += `<td>${nome_Input.value}</td>`;
    linha +=`<td>${telefone_Input.value}</td>`;
    linha += '</tr>';
    linha += '<tr>';
    linha += `<td colspan="3" class="desc">${desc_Input.value}</td>`
    linha += '</tr>';
    linhas += linha;

    tabelaBody.innerHTML = linhas;
    // tabelaFoot.innerHTML = linhas;

    nome_Input.value = '';
    telefone_Input.value = '';
    desc_Input.value = '';
    cor_Input.value = '#000000';
})



