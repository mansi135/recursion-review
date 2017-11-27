// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //check current element
  // iterate iver childs  
    // recursion
  var actualNode = document.body;

  var results = [];

  // if (actualNode.classList) {
  //   if (actualNode.classList.contains(className)) {
  //     results.concat([actualNode]);
  //     console.log(results);
  //     }
  //   }

  // for (var i = 0; i < actualNode.childNodes.length; i++) {
  //   results.concat(getElementsByClassName(className, actualNode.childNodes[i]));
  //   }

  // return results;

  var containsClassName = function(className, actualNode) {
    if (actualNode.classList) {
      if (actualNode.classList.contains(className)) {
        results.push(actualNode);
        console.log(results);
      }
    }
    
    console.log(actualNode.hasChildNodes());
    if (actualNode.hasChildNodes()) {
      for (var i = 0; i < actualNode.childNodes.length; i++) {
        containsClassName(className, actualNode.childNodes[i]);
      }
    }
  };
    

  containsClassName(className,actualNode);

  return results;

};
