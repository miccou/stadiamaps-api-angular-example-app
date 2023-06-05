import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { ElevationComponent } from './elevation/elevation.component';

const geospatialRoutes: Routes = [
  { path: '', redirectTo: 'elevation', pathMatch: 'full' },
  { path: 'elevation', component: ElevationComponent },
];

export const geospatialRouting = RouterModule.forChild(geospatialRoutes);

@NgModule({
  declarations: [ElevationComponent],
  imports: [geospatialRouting, CommonModule, UiModule],
})
export class GeospatialModule {}
