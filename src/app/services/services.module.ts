import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { ServiceRoutingModule } from './services-routing.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
  ]
})
export class ServicesModule { }
