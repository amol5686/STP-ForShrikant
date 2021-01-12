import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceRequestComponent } from './service-request/service-request.component';


const routes: Routes = [  
  {path: 'home', component: HomeComponent},  
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'contactUs', component: ContactUsComponent},
  // {path: 'ourServices', loadChildren: './services/services.module#ServicesModule'},
  {path:'ourServices', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)},  
  {path: 'serviceRequest', component: ServiceRequestComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},  
  {path: '**', component:PageNotFoundComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
