/*
class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

export default Backpack;
*/

class Yeti {

    constructor ( 
        name,  
        volume, 
        waterLevel, 
        containsIce,
        drinksTaken, 
        timesSpilled,
        lidOpen
    ) {
        this.name = name; 
        this.waterLevel = waterLevel;
        this.containsIce = containsIce;
        this.drinksTaken = drinksTaken;
        this.timesSpilled  = timesSpilled;
        this.lidOpen = lidOpen;
    }
    toggleLid(lidStatus) { 
        this.lidOpen = lidStatus;
    }
    addWater(waterLevel){
        this.waterLevel += waterLevel;
    }
    takeDrink(drinksTaken){
        this.drinksTaken += drinksTaken;
    }
}

export default Yeti;