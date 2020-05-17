import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  nuevoCorreo: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.nuevoCorreo = this.formBuilder.group({
        titulo: ['', [Validators.required, Validators.minLength(3)]],
        cuerpo: ['', [Validators.required, Validators.minLength(10)]],
        destinatario: ['', [Validators.required, Validators.email]],
      });
  }

    get formulario() { return this.nuevoCorreo.controls; }

    onSubmit() {
      this.submitted = true;

      if (this.nuevoCorreo.invalid) {
          return;
      }

      let correo = this.nuevoCorreo.value;
      correo.leido= false;
      correo.emisor= 'correoEmisor1@openWebinar.inv';

      alert("Correo Enviado \nEliminamos el formulario");
      this.onReset();
    }

    onReset() {
      this.submitted = false;
      this.nuevoCorreo.reset();
    }
}
