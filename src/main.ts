import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Pokemon } from './app/pokemon/pokemon';

@Component({
  selector: 'app-root',
  imports: [Pokemon],
  template: `
    <app-pokemon></app-pokemon>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
