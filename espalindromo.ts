

export const palindromo=(palabra:string):boolean=>{
let longitud=palabra.length-1
 for (let i = 0; i < palabra.length; i++) {


    
    
    if(i==longitud){
        if(palabra[i].toLowerCase!=palabra[longitud].toLowerCase ){
            return false
         }

         return true
    }
    if(palabra[i].toLowerCase!=palabra[longitud].toLowerCase ){
       return false
    }
    longitud-=1
    
 }

}