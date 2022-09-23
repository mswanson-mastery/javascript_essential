/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

/*
 const backpack = {
    name: "Everyday Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    strapLength: {
      left: 26,
      right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
      this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    },
  };
*/

const yeti_mug = {
    name: "green mug",
    totalCapacity: 20,
    lidOpen: false,
    containsIce: false,
    waterLevel: 0,
    toggleLid: function(newLidStatus) {
        this.lidOpen = newLidStatus;
    },
    addWater: function(amount) {
        this.waterLevel += amount;
    },
    removeWater: function(amount) {
        this.waterLevel -= amount;
    },
    addIce: function() {
        this.containsIce = true;
    },
    removeIce: function() {
        this.containsIce = false; 
    },
};



console.log(yeti_mug);


