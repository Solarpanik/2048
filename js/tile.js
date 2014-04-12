function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  // Now the value showed for each tile is this field
  this.representation   = mapLetter(value) || 'Q';

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

// This function maps the value to the desired representation
function mapLetter(value) {
  switch(value){
    case 2:
      return 'Q';
    case 4:
      return 'W';
    case 8:
      return 'E';
    case 16:
      return 'R';
    case 32:
      return 'T';
    case 64:
      return 'Y';
    case 128:
      return 'A';
    case 256:
      return 'S';
    case 512:
      return 'D';
    case 1024:
      return 'F';
    case 2048:
      return 'G';
  }
}
