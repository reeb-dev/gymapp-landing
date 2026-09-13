import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  /** Marca sutil solo cuando el ejemplo vive en webconreeb.com/demos/gimnasio */
  readonly showcase =
    typeof location !== 'undefined' && location.pathname.includes('/demos/gimnasio');
}
