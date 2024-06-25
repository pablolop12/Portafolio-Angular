import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FormationComponent } from './components/formation/formation.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PolygonSkillsComponent } from './components/polygon-skills/polygon-skills.component';


// Importar los módulos de Ng Zorro necesarios
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

const routes: Routes = [
  { path: '', component: IndexComponent },
];

@NgModule({
  declarations: [
    IndexComponent,
    NavbarComponent,
    ProfileComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    FormationComponent,
    AboutComponent,
    ContactComponent,
    PolygonSkillsComponent,

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzStepsModule,   
    NzPopoverModule 
  ],
  exports: [RouterModule]
})
export class IndexModule { }
