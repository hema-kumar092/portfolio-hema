import { Component, signal } from '@angular/core';

import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Experience } from './experience/experience';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Home,
    About,
    Skills,
    Projects,
    Experience,
    Contact
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio');
}