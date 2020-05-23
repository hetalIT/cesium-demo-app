import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AcNotification } from 'angular-cesium';

@Component({
  selector: 'app-planes-layer',
  templateUrl: './planes-layer.component.html',
  styleUrls: ['./planes-layer.component.css']
})
export class PlanesLayerComponent implements OnInit {
  planes$: Observable<AcNotification>;
  showTracks  = true;

  constructor(
    // private planesService: PlanesService
  ) { }

  ngOnInit() {
  }

}
