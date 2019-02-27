import Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';
//Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZGM2MGRjYi1kNjVjLTRlNDEtOGZlYS0yOTk0OGU5NjdjNDEiLCJpZCI6NjkxMCwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0NzY5MTQ0M30.SUqZB4nFWP5ftgJXsmJa9zh0qISmqLvXzoG9crFiR38';
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ODRkMGNmYS1iYmMwLTQ5MjgtYTYzOC1lYzMzNDk2YjIyMGUiLCJpZCI6MjU5LCJzY29wZXMiOlsiYXNyIiwiZ2MiXSwiaWF0IjoxNTQzODQ5NzQ1fQ.80vzOtxheq1XsMJOKrSRdh3ybJu1XttfE7P47UxGxpY'
var viewer = new Cesium.Viewer('build');
var tileset = viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
        //url: Cesium.IonResource.fromAssetId(14265)
        url: Cesium.IonResource.fromAssetId(6074)
    })
);
viewer.zoomTo(tileset)