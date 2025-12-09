import { Component, signal } from '@angular/core';
import { Stuktura } from "./stuktura/stuktura";

@Component({
  selector: 'app-root',
  imports: [Stuktura],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('strukturas');
}
