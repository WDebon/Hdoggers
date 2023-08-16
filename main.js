const nome_Input = document.getElementById("nome");

const telefone_Input = document.getElementById("tel");

const cor_Input = document.getElementById("tag");

const desc_Input = document.getElementById("desc");

const button_Input = document.querySelector("button")

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

            if(isNaN(telefone_Value)){
                button_Input.style.backgroundColor = "grey";
                button_Input.disabled = "true";
            }else{
                button_Input.style.backgroundColor = "";
                button_Input.disabled = "false";
            }
        
});



