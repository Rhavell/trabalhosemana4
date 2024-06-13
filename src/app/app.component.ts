import { Component } from '@angular/core';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [SobreMimComponent, ProjetosComponent, ContatoComponent]
})
export class AppComponent {
  title = 'meu-portfolio';
}