const nome_Input = document.getElementById("nome");

const telefone_Input = document.getElementById("tel");

const cor_Input = document.getElementById("tag");

const desc_Input = document.getElementById("desc");

const button_Input = document.querySelector("button")

function telefone_Func(func) {

    const telArray = func.toString().split("") //vai separar o input por cada letra

    for (let i = 0; i < telArray.length; i++) 
    {
        // isNan vai dar true se for um número e false se não for
        
        isNaN(telArray[i])
    }
}

telefone_Input.addEventListener("keyup", function(e){
        if(!telefone_Func(telefone_Input)){
            button_Input.disabled = "true";
        }else{
            button_Input.disabled = "false";}
        
});



