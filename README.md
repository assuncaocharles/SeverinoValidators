# About

[![Greenkeeper badge](https://badges.greenkeeper.io/assuncaocharles/SeverinoValidators.svg)](https://greenkeeper.io/)

Pacote com validadores para Angular 2 Model Driven Forms.

### Validações implementadas

* CPF
* Data no Formato Brasileiro
* Valor mínimo

## Instalação

```
$ npm i --save severino-validators-ng2
```

## Uso

### Component HTML 

```
<form action="" [formGroup]="myForm" novalidate>
  <input type="text" formControlName="CPF" />
  <input type="text" formControlName="Date" />
  <input type="text" formControlName="Valor">
</form>
```

### Component TS 

```
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Severino } from 'severino-validators-ng2/Validators';

@Component({
  selector: 'myComponent',
  templateUrl: './myComponent.component.html',
  styleUrls: ['./myComponent.component.css']
})
export class MyComponentComponent {

  myForm: FormGroup;

  constructor(public fb: FormBuilder){

    this.myForm = this.fb.group({
      CPF: ['', Severino.CPFValidator],
      Date: ['', Severino.DateValidator], //Isso validará um input do tipo texto com o formato DD/MM/YYYY
                                          //Espera-se que seja usado alguma mascara no input
      
      Valor: ['', Severino.MinValue(100)] //Valida se o número é maior do que 100 por exemplo,
                                          //Independente se passar com R$ antes ou não
    });
  }
  
}

```


# To Do

* Validação CNPJ