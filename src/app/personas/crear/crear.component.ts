import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonasService } from '.././shared/personas.service';
import { Persona } from '.././shared/persona';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-crear',
    templateUrl: './crear.component.html',
    styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

    public persona: Persona = new Persona();
    public textoBotton = '';

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private personasService: PersonasService,
        private toastr: ToastrService
    ) { }

    ngOnInit() {
        var id = this.route.params.subscribe(params => {
            var id = params['id'];

            this.textoBotton = id ? 'Editar' : 'Crear';

            if (!id)
                return;

            this.personasService.getById(id)
                .subscribe(
                    persona => this.persona = persona,
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['not-found']);
                        }
                    });
        });
    }

    procesarPeticion() {
        if (!this.persona.nroDocumento) {
            this.toastr.warning('Debe diligenciar el campo Número documento');
            return;
        }

        if (!this.persona.tipoDocumento) {
            this.toastr.warning('Debe diligenciar el campo tipo documento');
            return;
        }

        if (!this.persona.nombres) {
            this.toastr.warning('Debe diligenciar el campo nombres');
            return;
        }

        if (!this.persona.apellidos) {
            this.toastr.warning('Debe diligenciar el campo apellidos');
            return;
        }

        if (!this.persona.fechaNacimiento) {
            this.toastr.warning('Debe diligenciar el fecha de nacimiento');
            return;
        }

        let resultado;
        if (this.persona.id) {
            resultado = this.personasService.editar(this.persona);
        } else {
            resultado = this.personasService.crear(this.persona);
        }

        resultado.subscribe(
            data => {
                this.toastr.success('Proceso realizado con éxito');
                this.router.navigate(['personas']);
            }
        );
    }
}
