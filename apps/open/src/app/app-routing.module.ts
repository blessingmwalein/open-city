import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvestorDetailsComponent } from './components/investor-details/investor-details.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { EmploymentDetailsComponent } from './components/employment-details/employment-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: InvestorDetailsComponent },
    { path: 'personal-details', component: PersonalDetailsComponent },
    { path: 'contact-details', component: ContactDetailsComponent },
    { path: 'employment-details', component: EmploymentDetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
