import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
form!:FormGroup


  ngOnInit(): void {
    this.form= new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      idade: new FormControl('', [Validators.required, Validators.min(1)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  
    this.form.get('nome')?.valueChanges.subscribe(valor => {
      console.log('Nome:', valor);
    });
  
    this.form.get('idade')?.valueChanges.subscribe(valor => {
      console.log('Idade:', valor);
    });
  
    this.form.get('email')?.valueChanges.subscribe(valor => {
      console.log('Email', valor);
    });

  
// const dadosFormulario = this.form.getRawValue(); 
//     const usuario: Usuario = {
//       nome: String(dadosFormulario.nome),
//       idade: Number(dadosFormulario.idade),
//       email: String(dadosFormulario.email)
   
//     };
    // console.log('Conversão de dados:', usuario);
  }
  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      alert('Formulário enviado com sucesso!!');
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}



