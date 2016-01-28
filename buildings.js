'use strict';
var turf = require('turf');

module.exports = function(tileLayers, tile, writeData, done) {
  var largest = {
    'length': 0,
    'feature': {}
  };
  var layer = tileLayers.osm.osm;
  var result = layer.features.filter(function(val) {
    if (val.properties.building && (val.properties._user === 'srividya_c' || 
                                    val.properties._user === 'samely'||
                                    val.properties._user === 'saikabhi'||
                                    val.properties._user === 'ruthmaben'||
                                    val.properties._user === 'Rub21'||
                                    val.properties._user === 'RichRico'||
                                    val.properties._user === 'ramyaragupathy'||
                                    val.properties._user === 'pratikyadav'||
                                    val.properties._user === 'PlaneMad'||
                                    val.properties._user === 'oini'||
                                    val.properties._user === 'nikhilprabhakar' ||
                                    val.properties._user === 'mikelmaron'||
                                    val.properties._user === 'manings'||
                                    val.properties._user === 'lxbarth'||
                                    val.properties._user === 'Luis36995'||
                                    val.properties._user === 'karitotp'||
                                    val.properties._user === 'Jothirnadh'||
                                    val.properties._user === 'jinalfoflia'||
                                    val.properties._user === 'ediyes'||
                                    val.properties._user === 'dannykath'||
                                    val.properties._user === 'Chetan_Gowda'||
                                    val.properties._user === 'calfarome'||
                                    val.properties._user === 'andygol'||
                                    val.properties._user === 'abel801'
                                    )){
     var length = 0;
     //  try {
     //   length = turf.lineDistance(val, 'kilometers');
     //   val.properties.length = length;
     //   if (length > largest.length) {
     //    largest.length = length;
     //    largest.feature = val;
     //   }
     // } catch(e) {}
     return true;
   }
 });

  // write all roundabouts to stdout
  if (result.length > 0) {
    var fc = turf.featurecollection(result);
    writeData(JSON.stringify(fc) + '\n');
  }

  done(null, largest);
};