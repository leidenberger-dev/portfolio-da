import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  thing1 = {
    title: 'Thing 1',
    image: 'bulb.png',
    imageAlt: 'Bulb',
    content:
      'Some personal thing to share(...) Donec ut imperdiet diam, et convallis neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
  };
  thing2 = {
    title: 'Thing 2',
    image: 'puzzle.png',
    imageAlt: 'Puzzle',
    content:
      'Some personal thing to share(...) Donec ut imperdiet diam, et convallis neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
  };
  personalThings = [this.thing1, this.thing2];
}
