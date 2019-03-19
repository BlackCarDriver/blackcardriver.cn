import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../app/homepage/homepage.component';
import { PersonalComponent} from '../app/personal/personal.component';

const routes: Routes = [ 
  { path: 'homepage', component: HomepageComponent },
  { path: 'personal', component: PersonalComponent},
  { path: '', redirectTo: 'homepage', pathMatch: 'full' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }

