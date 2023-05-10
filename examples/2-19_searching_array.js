let teams = [
    "Red Sox",
    "Rangers",
    "Blue Jays",
    "Astros",
    "White Sox",
    "Rangers",
  ];
  
  let index = teams.indexOf("Rangers"); // returns 1
  
  // let index = teams.indexOf("Rangers", 3); //returns 5
  
  if (index == -1) {
    console.log("Item not found");
  } else {
    console.log("Item at position: " + index);
  }
  
  // let firstIndex = teams.indexOf("Rangers"); // returns 1
  // let lastIndex = teams.lastIndexOf("Rangers"); // returns 5