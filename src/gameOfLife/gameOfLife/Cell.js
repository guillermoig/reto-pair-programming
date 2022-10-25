const STATE_SYMBOL = {
    dead: ".",
    alive: "*"
}

class Cell {
    constructor( state ) {
      this.state = state;
    }
    
    isAlive() {
      return this.state === STATE_SYMBOL.alive
    }
    
    setNeighbors(neightbors) {
      this.neightborsCount = neightbors.length;
    }
  
    next() {
      const shouldBeLife = this.isAlive() && this.neightborsCount ===  3 
        || this.isAlive() && this.neightborsCount ===  2
        || !this.isAlive() && this.neightborsCount ===  3
  
      this.state = shouldBeLife ? STATE_SYMBOL.alive : STATE_SYMBOL.dead    
    }
  
    render() {
      return this.state
    }
}

export default Cell