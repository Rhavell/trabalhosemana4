import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  standalone: true
})
export class ContatoComponent {
  abrirLink(url: string) {
    window.open(url, '_blank');
  }
}