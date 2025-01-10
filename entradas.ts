import { Readline } from 'node:readline/promises';
import { stdin, stdout } from 'process';
import readline from 'readline';
export const entra_dato= ()=>{

return new Promise<string>((resolve)=>{
    const read=readline.createInterface({
        input:stdin,
        output:stdout
    })
    read.question('introduce una palabra:',(res:string)=>{
        read.close()
        resolve(res)
    })

 })
}

export const enter=()=>{
    return new Promise<void> ( resolve=>{
     const readlin=readline.createInterface({
         input:stdin,
         output:stdout
      })
      readlin.question('',()=>{
       readlin.close()
         resolve();
         
         
      })
   })
  }