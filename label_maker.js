const contact = {
    name: "Radhika Dangal",
    address: "123 Sleepy Hollow Rd",
    city: "Pittsburgh",
    state: "PA",
    zip: "12345",
}

function printContact (contact){
    console.log("Name: " +contact.name);
    console.log("Address:" +contact.address);
    console.log("City: " + contact.city);
    console.log("State: "+ contact.state);
    console.log("Zip: "+ contact.zip);
}

printContact(contact);