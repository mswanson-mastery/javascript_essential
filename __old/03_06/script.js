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

console.log('the pocket num value: ', backpack.pocketNum);

console.log('left strap length: ', backpack.strapLength.left);

console.log('pocketnum value:', backpack["pocketNum"]);

let checked_strap = 'left';

checked_strap = 'right';

console.log('checked strap: ', backpack.strapLength[checked_strap]);


