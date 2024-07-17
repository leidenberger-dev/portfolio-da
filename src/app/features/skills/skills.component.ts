import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  angular = {
    image: 'angular.png',
    title: 'Angular',
  };
  typescript = {
    image: 'typescript.png',
    title: 'TypeScript',
  };
  javascript = {
    image: 'javascript.png',
    title: 'JavaScript',
  };
  html = {
    image: 'html.png',
    title: 'HTML',
  };
  firebase = {
    image: 'firebase.png',
    title: 'Firebase',
  };
  git = {
    image: 'git.png',
    title: 'Git',
  };
  css = {
    image: 'css.png',
    title: 'CSS',
  };
  mdesign = {
    image: 'mdesign.png',
    title: 'Material Design',
  };
  api = {
    image: 'api.png',
    title: 'Rest-Api',
  };
  scrum = {
    image: 'scrum.png',
    title: 'Scrum',
  };

  skillList = [
    this.angular,
    this.typescript,
    this.javascript,
    this.html,
    this.firebase,
    this.git,
    this.css,
    this.mdesign,
    this.api,
    this.scrum,
  ];
}
