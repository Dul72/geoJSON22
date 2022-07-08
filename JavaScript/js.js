// street Map
var map = L.map('map').setView([40.66813955408042, 20.14892578125], 5);
var osm = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=FIrU5AKRYsgdfJy1B0tH',{
    attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
})
// satellite Map
var satelliteMap = L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=FIrU5AKRYsgdfJy1B0tH',{
    attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);







var geoJson =   {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Albania"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            20.095367431640625,
            40.63375667842965
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#ff7300",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Ukraine"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            31.16546630859375,
            49.30721745093609
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Austria"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            14.18609619140625,
            47.59505101193038
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Belgium"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            4.50439453125,
            50.427768268027606
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Bulgaria"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            25.103759765625,
            42.75306280054229
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Bosnia and Herzegovina"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            17.700347900390625,
            44.165459568797
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Switzerland"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.06396484375,
            46.794418663019734
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Germany"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.84100341796875,
            51.12421275782688
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Denmark"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            9.87396240234375,
            55.94919982336744
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Finland"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            26.04583740234375,
            62.764783307439565
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#02ff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "United Kingdom"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -2.54058837890625,
            54.234734962180816
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Greece"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            23.68927001953125,
            38.576084772796115
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Croatia"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.5673828125,
            45.65436813946473
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Italy"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.540893554687498,
            42.48830197960227
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Luxembourg"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            5.997161865234375,
            49.76530003346223
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Netherlands"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            5.4217529296875,
            51.957807388715516
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Norway"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.646240234375,
            61.23456648944372
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Poland"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            19.16015625,
            52.1098789403549
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Portugal"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -8.6956787109375,
            39.59510684995191
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Romania"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            24.400634765625,
            45.867062714815475
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Serbia"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            20.489501953125,
            44.24519901522129
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Slovakia"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            19.094238281249996,
            48.71271258145237
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Sweden"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            15.864257812499998,
            64.94216049820734
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Tunisia"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.7451171875,
            34.161818161230386
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Turkey"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            34.639892578125,
            39.04478604850143
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "United States"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.29296874999999,
            39.639537564366684
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "France"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            1.845703125,
            47.85740289465826
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#2eff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Spain"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -5.2734375,
            41.21172151054787
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#02ff31",
          "marker-size": "medium",
          "marker-symbol": "marker",
          "name": "Singapore"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            103.80706787109375,
            1.3594305392513826
          ]
        }
      }
    ]
  };

L.geoJSON(geoJson,{
        style: function (feature) {
            // return {color: feature.properties.marker-color};
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

