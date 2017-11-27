// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
 
  
  if (typeof(obj) === 'boolean' || typeof(obj) === 'number' || obj === null) {
    return "" + obj;
  }

  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }

//   if(obj instanceof Function) {
//     return ;
// };

  if (Array.isArray(obj)) {
      if (obj.length === 0) {
        return '[]';
      } 
   
      var finalString = "[" ;
      for(var i=0; i < obj.length; i++) {
        finalString += (stringifyJSON(obj[i]) + ",");       
      }

      finalString = finalString.slice(0,finalString.length-1);

      finalString += "]";

      return finalString;

    } 

  if (typeof(obj) === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      var finalString = "{" ;
    for(var k in obj) {
      if (!(obj[k] instanceof Function) && !(obj[k] === undefined)) {
        finalString += stringifyJSON(k) + ':' + stringifyJSON(obj[k]) + ',';
      }
    } 
    if (!(finalString === '{')) {
      finalString = finalString.slice(0,finalString.length-1);
    }
    
    finalString += "}";

    return finalString;
    }  

  };
  
}
  
  


