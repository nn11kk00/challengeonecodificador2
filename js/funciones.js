
    let mensaje = document.querySelector("textarea")
    let btn_encriptar = document.querySelector("#btn-encriptar")
    let btn_desencriptar = document.querySelector("#btn-desencriptar")
    let parrafo = document.querySelector(".texto_parrafo")
    let btn_copiar = document.querySelector("#btn-copiar")
    let btn_limpiar = document.querySelector("#btn-limpiar")

    function btn_funcion_encriptar(){
    btn_encriptar.addEventListener("click", function(event){
    event.preventDefault()

       for (let i = 0; i < mensaje.value.length; i++) {
        
        let element = [mensaje.value[i]]
        let parrafo_encriptado = []
        
        for (let i = 0; i < element.length; i++) {
                if (element[i] == "a") {
                    
                    parrafo_encriptado.push("ai") 
                    break      
                }
                if (element[i] == "e") {
                    parrafo_encriptado.push("enter") 
                    break        
                }
                if (element[i] == "i") {
                    parrafo_encriptado.push("imes") 
                    break       
                }
                if (element[i] == "o") {
                    parrafo_encriptado.push("ober") 
                    break       
                }
                if (element[i] == "u") {
                    parrafo_encriptado.push("ufat")
                    break        
                }
                else{
                    parrafo_encriptado.push(element)
                }         
        }
        console.log(parrafo_encriptado)
        parrafo.textContent += parrafo_encriptado 
       
                      
       }  
       
       })}

      function btn_funcion_desencriptar(){

        btn_desencriptar.addEventListener("click", function(event){
        event.preventDefault()

        let msj = mensaje.value
        msj = msj.replace(/ai/g, "a")
        msj = msj.replace(/enter/g, "e")
        msj = msj.replace(/imes/g, "i")
        msj = msj.replace(/ober/g, "o")
        msj = msj.replace(/ufat/g, "u")

        parrafo.textContent = msj
        
        })
        }

        function copiar_texto() {
            btn_copiar.addEventListener("click", function(event){
                event.preventDefault()

                let contenido_encriptado = document.querySelector('#textarea_des')
                contenido_encriptado.select();
                contenido_encriptado.setSelectionRange(0, 99999)
                document.execCommand('copy');

                let exito_msj_copiado = document.querySelector(".exito-copiado")
                exito_msj_copiado.innerHTML = "¡Texto copiado con exito!"

            })
        }

        
    copiar_texto()
    btn_funcion_encriptar()
    btn_funcion_desencriptar()



