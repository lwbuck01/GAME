
var GAME = {}; 

/**
 * pass in {string} record json  and the model from which to fetch it 
 * This will return a clean (non-cyclic) record obj
 */
GAME.extractData = function (record) {
  
  // set a record object 
  var record_obj = record.record; 
  
  // get the keys for the field values of the record_obj
  var keys = Object.keys(record_obj.data);   
  
  // keys for getting real field name values
  var name_keys = Object.keys(record.J.Jb);
   

  var field_names = [];
  for (var q = 0; q < keys.length; q++) {
    field_names.push(record.J.Jb[String(name_keys[q])].name);  
  }

  var perf_record = {}; 
  
  for (var i = 0; i < keys.length; i++) {
    var this_key = keys[i]; // cryptic key 
    var this_value = record.record.data[String(keys[i])];
   
    perf_record[String(field_names[i])] = this_value;  
  }
  
  return perf_record;
}
