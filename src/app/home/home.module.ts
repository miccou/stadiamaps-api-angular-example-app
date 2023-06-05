import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const homeRoutes: Routes = [
  { path: '',  component: HomeComponent }
]

export const homeRouting = RouterModule.forChild(homeRoutes);

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    homeRouting
  ]
})
export class HomeModule { }
