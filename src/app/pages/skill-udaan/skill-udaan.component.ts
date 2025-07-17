import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-udaan',
  imports: [RouterModule,CommonModule],
  templateUrl: './skill-udaan.component.html',
  styleUrl: './skill-udaan.component.scss'
})
export class SkillUdaanComponent {
  hero = {
    title: 'Skill Udaan',
    backgroundImage: 'images/skilludyanb.jpg',
    breadcrumb: [
      { name: 'Home', route: '/' },
      { name: 'Skill Udaan' }
    ]
  };

  sectionTitle = 'Skill Udaan';

  description = `vertex kalyan cooperative society have developed an excellent reputation with taking care of the financial needs for a wide variety of businesses and individuals. If you need assistance with financial management, you can count on us for professional service. We have a wealth of information and are looking forward to serve you.`;

  vision = this.description;
  leadership = 'vertexsociety vertexsociety,vertexsociety';

  projectObjectives = [
    'Employment Generation',
    'Skill Development',
    'Youth Empowerment',
    'Education'
  ];

  howItWorks = [
    'Skill Assessment',
    'Training and Certification',
    'Recruitment and Placement',
    'Pre-departure Assistance',
    'Ongoing Support'
  ];

  benefits = [
    { target: 'Workers', detail: 'High-paying jobs, Skill exposure' },
    { target: 'Employers', detail: 'Skilled and reliable workforce' },
    { target: 'India', detail: 'Remittances and Skill recognition' },
    { target: 'Students', detail: 'Transparent Skill education options' }
  ];
}
