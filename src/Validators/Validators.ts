import { FormControl, FormGroup, FormArray } from '@angular/forms';

export const Severino = {

    CPFValidator : function(c: FormControl){  
          let value = c.value;        
          if(VerificaCPF(c.value || "")) {
                return null;
          } 
          else if(c.value){
               return { validCPF: true }
               
          }
          else{
                return { validCPF: false }
          }             
    },

    MinValue : (Value)=>{
      return (c: FormControl) => {  
          if(c.value){
                let value = c.value.replace(/[^0-9]+/ig, "");
                value = Number(value);
                if(value >= Value) {
                      return null;
                }           
                else{
                      return { minvalue: true }
                }   
          }     
          else{
            return { minvalue: true }
          }     
       }
    },

    DateValidator: (c: FormControl) => {
      let date = new Date();
      if(/^\d{2}\/\d{2}\/\d{4}$/.test(c.value) && isValidDate(c.value)){          
          return null;
      }
      else if (c.value){
          return  { dateValid: true} 
      } 
      else { return  { dateValid: false} }
    }    
}


function VerificaCPF(CPF: any) {
        
        if(CPF.length<11)
            return false;
            
        let cpf = CPF.replace(/[\D]/ig,"");
        console.log(cpf);
        var soma: any;
        var resto: any;
        soma = 0;
       
       
       var numeros: any, digitos: any, soma: any, i: any, resultado: any, digitos_iguais: any;
        digitos_iguais = 1;
        if (cpf.length < 11)
              return false;
        for (i = 0; i < cpf.length - 1; i++)
              if (cpf.charAt(i) != cpf.charAt(i + 1))
                    {
                    digitos_iguais = 0;
                    break;
                    }
        if (!digitos_iguais)
              {
              numeros = cpf.substring(0,9);
              digitos = cpf.substring(9);
              soma = 0;
              for (i = 10; i > 1; i--)
                    soma += numeros.charAt(10 - i) * i;
              resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
              if (resultado != digitos.charAt(0))
                    return false;
              numeros = cpf.substring(0,10);
              soma = 0;
              for (i = 11; i > 1; i--)
                    soma += numeros.charAt(11 - i) * i;
              resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
              if (resultado != digitos.charAt(1))
                    return false;
              return true;
              }
        else
            return false;
}

function isValidDate(s: any) {
  var bits = s.split('/');
  var d = new Date(bits[2], bits[1] - 1, bits[0]);
  return d && (d.getMonth() + 1) == bits[1] && d.getFullYear() > 1920;
}