import { Component, OnInit } from '@angular/core';
import { PersonasService } from './shared/personas.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  public personas = [];

  constructor(
    private personasService: PersonasService,
    private toastr: ToastrService
  ) { 
  }

  ngOnInit() {
      this.cargarPersonas();
  }

  cargarPersonas() {
    this.personasService.get()
          .subscribe(data => this.personas = data);
  }

  borrarPersona(persona) {
    this.personasService.borrar(persona.id)
      .subscribe(response => {
        const mensaje = response['_body'];
        if(mensaje.includes('correctamente')){
          this.toastr.success(mensaje);
        } else {
          this.toastr.warning(mensaje);
        }
        
        this.cargarPersonas();
      });
  }

}
