class GuessingGame {
    constructor() {}
  
    setRange(min, max) {
      this.average= Math.round((min+max)/2);
      this.min=min;
      this.max=max;
    }
  
    guess() {
      return this.average;
    }
  
    lower() {
      this.setRange(this.min,this.average);
      //console.log('max',this.max);
    }
  
    greater() {
      this.setRange(this.average,this.max);
      //console.log('min',this.min);
    }
  }
module.exports = GuessingGame;
