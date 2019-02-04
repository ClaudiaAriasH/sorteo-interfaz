import { Component, OnInit } from '@angular/core';
import { SorteoService } from './shared/sorteo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css']
})
export class SorteoComponent implements OnInit {

  public ganadoresSorteo = []
  public mensaje = "";
  constructor(private sorteoService : SorteoService) { }

  ngOnInit() {
  }

  comenzarSorteo() {

  
    
    this.sorteoService.comenzarSorteo()
      .subscribe(
          persona => {
            this.ganadoresSorteo = persona;
            if(!this.ganadoresSorteo || !this.ganadoresSorteo.length){
               this.mensaje = "No hubo ganadores para el sorteo";
            }
        }
      );
  }
}
