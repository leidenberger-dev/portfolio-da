import { Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { AboutComponent } from '../../features/about/about.component';
import { SkillsComponent } from '../../features/skills/skills.component';
import { PortfolioComponent } from '../../features/portfolio/portfolio.component';
import { ContactComponent } from '../../features/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
