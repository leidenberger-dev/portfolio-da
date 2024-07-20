import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  constructor(private scroller: ViewportScroller) {}

  handleButtonClick() {
    this.scroller.scrollToAnchor('contact');
  }
}
