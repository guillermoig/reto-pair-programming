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
      this.state = this.#shouldbeAlive() ? STATE_SYMBOL.alive : STATE_SYMBOL.dead    
    }
  
    render() {
      return this.state
    }

    #shouldbeAlive() {
      if(this.isAlive()){
        return this.neightborsCount === 2 || this.neightborsCount === 3
      }
      
      return this.neightborsCount === 3
    }
}

export default Cell