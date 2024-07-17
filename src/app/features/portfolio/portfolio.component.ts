import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  join = {
    title: 'Join',
    description:
      'Join is a social media platform that allows users to create and join events in their area. Users can also chat with other users and create groups.',
    stack: 'Angular | TypeScript | HTML | CSS | Firebase',
    image: 'join.png',
    link: 'https://google.com',
    github: 'https://github.com',
  };
  sharkie = {
    title: 'Sharkie',
    description:
      'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
    stack: 'JavaScript | HTML | CSS',
    image: 'sharkie.png',
    link: 'https://google.com',
    github: 'https://github.com',
  };
  crm = {
    title: 'Simple CRM',
    description:
      'A very Simple Customer Relationship Management system working with CRUD functionality.',
    stack: 'Angular | Firebase',
    image: 'crm.png',
    link: 'https://google.com',
    github: 'https://github.com',
  };
  pokedex = {
    title: 'Pokédex',
    description:
      'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
    stack: 'JavaScript | HTML | CSS | Api ',
    image: 'pokedex.png',
    link: 'https://google.com',
    github: 'https://github.com',
  };
  projectList = [this.join, this.sharkie, this.crm, this.pokedex];
}
