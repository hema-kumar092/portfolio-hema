import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { About } from '../about/about';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Experience } from '../experience/experience';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    About,
    Skills,
    Projects,
    Experience,
    Contact
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}