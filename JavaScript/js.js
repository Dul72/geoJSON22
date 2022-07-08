// street Map
var map = L.map('map').setView([40.66813955408042, 20.14892578125], 5);
var osm = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=FIrU5AKRYsgdfJy1B0tH',{
    attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
})
// satellite Map
var satelliteMap = L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=FIrU5AKRYsgdfJy1B0tH',{
    attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);





var geoJson = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[9.49755989,56.3166372]},"id":"274b22d9-59fe-46b3-9da8-43b67866f972","properties":{"name":"Denmark","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[14.76339605,47.71087071]},"id":"826f15a1-ebc4-499d-a1ba-1423ab8d4a92","properties":{"name":"Austria","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-2.19548946,54.5455426]},"id":"5c665294-ab5c-4383-b7a0-0f4b87ca72ca","properties":{"name":"United Kingdom","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[5.5654319,52.13409535]},"id":"3a8ba515-b1a0-4414-9f7b-1bf38dad5cc7","properties":{"name":"Netherlands","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-3.42495125,40.020888]},"id":"984d4fc9-a11b-4365-bf11-18e78557d2d6","properties":{"name":"Spain","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[31.07286744,48.92439372]},"id":"46c122eb-c315-496a-92b2-60d55baf9ef4","properties":{"name":"Ukraine","marker-color":"#ff7300"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-99.97922184,38.24414752]},"id":"bbbac58b-7ec8-4b16-ae91-e8d08a9439b2","properties":{"name":"United States","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[4.83121687,50.50525772]},"id":"18f6c364-b49c-47b4-8c52-9d4a82c3f3b7","properties":{"name":"Belgium","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[8.41833565,46.82031089]},"id":"bc728981-208b-4cdc-badd-7af06d13ca67","properties":{"name":"Switzerland","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[10.54008728,51.25090617]},"id":"78b2432d-ad33-4a7a-a3cd-f4221471322c","properties":{"name":"Germany","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[12.50615409,42.67419848]},"id":"c5b0cfda-4083-40ef-8559-37bcae1973c1","properties":{"name":"Italy","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[19.18190799,52.01899576]},"id":"397afa33-b67f-4cdb-b985-39b8d31ba52d","properties":{"name":"Poland","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-8.32147045,39.62934433]},"id":"248cbae3-9063-46fa-9fa4-d4900e6e9073","properties":{"name":"Portugal","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[24.20761156,46.00842742]},"id":"39dbfa80-239c-4b54-9a35-ec91d9e40dbb","properties":{"name":"Romania","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[14.94894896,62.98142833]},"id":"0f27af2a-9806-4d9f-b5b0-a6c8a1cd7991","properties":{"name":"Sweden","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[8.79617978,33.8749604]},"id":"432ea53d-048d-4e08-a5ec-8267ad20fb19","properties":{"name":"Tunisia","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[103.8193223,1.3650723]},"id":"c7c57ebd-7401-4053-83ba-2e28a553f4fd","properties":{"name":"Singapore","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[17.88110211,43.94515821]},"id":"b1072e92-59c6-4927-ad97-53bbfe0c92c0","properties":{"name":"Bosnia and Herzegovina","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[6.0425499,49.81085742]},"id":"db4747dc-f1e4-4336-87e8-1fe81c0c548d","properties":{"name":"Luxembourg","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[13.51917709,65.36660275]},"id":"b980ad26-5c1d-4fb7-8932-4205e4dcd54d","properties":{"name":"Norway","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[21.01039628,44.23646249]},"id":"f9ccfe82-9345-4944-b1e5-4a536f2b73df","properties":{"name":"Serbia","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[35.47935516,39.02832082]},"id":"fd401642-3d77-40e1-8939-232c33edb3dd","properties":{"name":"Turkey","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[15.29592719,44.7756343]},"id":"e6997b9f-7f65-42b4-bae8-b2a31a38a3a5","properties":{"name":"Croatia","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[19.64645096,48.69110127]},"id":"e6b7466f-e896-4d83-8a70-f603aa055f9b","properties":{"name":"Slovakia","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[2.14787414,46.88828176]},"id":"ebce9301-f7fc-4d0f-b433-7f5955f93ea9","properties":{"name":"France","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-77.69310436,43.20978723]},"id":"1aa65ff3-859e-4e32-af8a-bd107b35b146","properties":{"name":"Greece","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[25.16625901,42.75606184]},"id":"13f373be-ee5d-44b4-a6be-eb0bedbbe521","properties":{"name":"Bulgaria","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-75.87865146,1.32900806]},"id":"4b9a58cd-637f-438d-908e-e8c454731a0b","properties":{"name":"Albania","marker-color":"#2eff31"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[27.52589231,65.44142976]},"id":"6351df99-73f7-44b1-8e4f-4e6f7c994cf1","properties":{"name":"Finland","marker-color":"#2eff31"}}]}
;


L.geoJSON(geoJson,{
    onEachFeature: function (feature, layer) {
        // layer.bindPopup();
        layer.bindPopup('<h4 style="text-align:center;">'+feature.properties.name+'</h4>'+
        '<div id="overflowTest">'+
            '<div class="container">'+

                '<table class="table table-hover ">'+
                    '<thead class="thead-light">'+
                    '<tr class="t-head">'+
                        '<th>Your tabale head</th> '+
                        '<th>Second heading</th>'+
                    '</tr>'+
                    '</thead>'+

                    '<tr>'+
                        '<td>td 01</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 02</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 03</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 04</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 05</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+   
                    '<tr>'+
                        '<td>td 06</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+ 
                    '<tr>'+
                        '<td>td 07</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+ 
                    '<tr>'+
                        '<td>td 08</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+  
                    '<tr>'+
                        '<td>td 09</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+  
                    '<tr>'+
                        '<td>td 10</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+  
                    '<tr>'+
                        '<td>td 11</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 12</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 13</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 14</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 15</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+   
                    '<tr>'+
                        '<td>td 16</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+ 
                    '<tr>'+
                        '<td>td 17</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+ 
                    '<tr>'+
                        '<td>td 18</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+  
                    '<tr>'+
                        '<td>td 19</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+  
                    '<tr>'+
                        '<td>td 20</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 21</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 22</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 23</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 24</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>td 25</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+   
                    '<tr>'+
                        '<td>td 26</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+ 
                    '<tr>'+
                        '<td>td 27</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+ 
                    '<tr>'+
                        '<td>td 28</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+  
                    '<tr>'+
                        '<td>td 29</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+  
                    '<tr>'+
                        '<td>td 30</td> '+
                        '<td>add your data</td>'+
                    '</tr>'+ 

                '</table>'+
            '</div>'+
        '</div>');
      }
}).addTo(map);


// Layer contol
var baseLayers = {
    "Street map": osm,
    "Satallite": satelliteMap
};
var overlays = {
    // "Marker": marker,
    // "Roads": roadsLayer
};

L.control.layers(baseLayers, overlays).addTo(map);

