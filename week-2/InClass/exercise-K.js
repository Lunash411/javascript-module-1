const nameofstudents = [
    "John",
    "Methap",
    "Deniz",
    "konstantine",
    "Rachid",
    "Burcok",
    "Alex",
  ];
  
  for (let i = 0; i < nameofstudents.length; i++) {
    const nameMessage = "name is: " + nameofstudents[i];
    const indexMessage = "index is: " + i;
    console.log(indexMessage, nameMessage);
  }