/**
 * Create a Backpack object.
 */

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

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

let straps = ['left', 'right'];
let strap_lengths = {'left': 10, 'right': 15};

for (let i = 0; i < straps.length; i++) {
  if ( i == 0 ){
    for (let i = 0; i < straps.length; i++) {
      console.log(` ${straps[i]} before: `, backpack.strapLength[straps[i]]);
    }
  }
  ( i % 2 == 0 ) ? backpack.newStrapLength(strap_lengths[straps[i]], backpack.strapLength[i+1]) : 
      backpack.newStrapLength(strap_lengths[straps[i-1]], strap_lengths[straps[i]])
  if ( i != 0 ){
    for (let i = 0; i < straps.length; i++) {
      console.log(` ${straps[i]} after: `, backpack.strapLength[straps[i]]);
    }
  }
}

