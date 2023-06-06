import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Map } from 'maplibre-gl';


@Component({
  selector: 'stadiamaps-angular-example-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: 'https://tiles.stadiamaps.com/styles/alidade_smooth.json',
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

  }

  ngOnDestroy() {
    this.map?.remove();
  }

}
