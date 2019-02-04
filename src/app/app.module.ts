import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { routing } from './app.routing';
import { MzCheckboxModule, MzInputModule, MzSelectModule } from 'ngx-materialize';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonasComponent } from './personas/personas.component';
import { SorteoComponent } from './sorteo/sorteo.component';
import { CrearComponent } from './personas/crear/crear.component';
import { PersonasService } from './personas/shared/personas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    NotFoundComponent,
    PersonasComponent,
    SorteoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MzSelectModule, 
    MzInputModule,
    MzCheckboxModule
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
