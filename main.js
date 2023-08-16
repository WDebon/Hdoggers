const nome_Input = document.getElementById("nome");

const telefone_Input = document.getElementById("tel");

const cor_Input = document.getElementById("tag");

const desc_Input = document.getElementById("desc");

function telefone_Func(tel) {
    const telArray = tel.split("")

    for (let i = 0; i < telArray.length; i++) 
    {
        if(!isNaN(telArray[i])) {
            console.log(telArray[i]);
        } else {
            console.log(telArray[i]);
            return false
        }
    }
}



