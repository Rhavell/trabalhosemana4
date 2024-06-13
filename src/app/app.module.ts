import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    SobreMimComponent,
    ProjetosComponent,
    ContatoComponent
  ],
  providers: [
    importProvidersFrom(BrowserModule),
    provideRouter([])
  ]
})
export class AppModule { }