import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'geocoding',
    loadChildren: () =>
      import('./geocoding/geocoding.module').then((m) => m.GeocodingModule),
  },
  {
    path: 'geospatial',
    loadChildren: () =>
      import('./geospatial/geospatial.module').then((m) => m.GeospatialModule),
  },
  {
    path: 'routing',
    loadChildren: () =>
      import('./routing/routing.module').then((m) => m.RoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
