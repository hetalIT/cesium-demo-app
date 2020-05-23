import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-lazy-load';
  ngOnInit() {
    var viewer = new Cesium.Viewer('cesiumContainer');
//     var options:any;
// options.defaultResetView = Cesium.Rectangle.fromDegrees(71, 3, 90, 14);
// Only the compass will show on the map
// options.enableCompass = true;
// options.enableZoomControls = false;
// options.enableDistanceLegend = false;
// options.units = 'kilometers' // default is kilometers;
// turf helpers units https://github.com/Turfjs/turf/blob/v5.1.6/packages/turf-helpers/index.d.ts#L20
//options.distanceLabelFormatter = (convertedDistance, units : Units): string => { ... } // custom label formatter
viewer.extend(Cesium.viewerCesiumNavigationMixin, {
});
  //   var viewer = new Cesium.Viewer('cesiumContainer',{
  //     terrainProvider : new Cesium.CesiumTerrainProvider({
  //         url: Cesium.IonResource.fromAssetId(1)
  //     })
  // });
  //   var tileset = viewer.scene.primitives.add(
  //     new Cesium.Cesium3DTileset({
  //         url: Cesium.IonResource.fromAssetId(77834)
  //     })
  // );

  }
}
