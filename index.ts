import { enter, entra_dato } from "./entradas"
import { palindromo } from "./espalindromo";


async function init() {
    let palabra:string 
    let continuar:boolean=true
    const programa= async ()=>{
        while(continuar){
            palabra=await entra_dato();
            console.clear()
            if(palindromo(palabra)){
                console.log("es una palabra palindroma")
                await enter()
                console.clear()
                programa()
                
            }else{
                console.log("no es una palabra palindroma") 
                await enter()

                console.clear()

                programa()
                
            }

    
    }
    

    }
    programa()
   
    
  }
  init()