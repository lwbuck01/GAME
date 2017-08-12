
var GAME = {}; 

GAME.getRecordData = function (record_key, model) {
  app.models[model].getRecord(record_key);
  var record_obj = record.record; 
  var keys = Object.keys(record_obj.data);   
  
  // keys for getting real field name values
  var name_keys = Object.keys(record.J.Jb); 
   
  // get the field names first, then match
  var field_names = [];
  for (var q = 0; q < keys.length; q++) {
    console.log('name key is: ' + name_keys[q]); 
    console.log('real value is: ' + record.J.Jb[String(name_keys[q])].name);
    field_names.push(record.J.Jb[String(name_keys[q])].name);  
  }
  
  // perfect record to return 
  var perf_record = new Object(); 
  
  for (var i = 0; i < keys.length; i++) {
    var this_key = keys[i]; // cryptic key 
    var this_value = record.record.data[String(keys[i])];
    console.log('this key: ' + this_key +  ' : ' + this_value); 
   
    // set new object field names and values 
    perf_record[String(field_names[i])] = this_value;  // sorting ok                                                       
  }
  
  return JSON.stringify(perf_record);    
}