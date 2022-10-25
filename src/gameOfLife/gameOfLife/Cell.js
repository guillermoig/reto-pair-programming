class Cell {
    constructor( state ) {
      this.state = state;
    }
    
    isAlive() {
      return this.state === '*'
    }
    
    setNeighbors(neightbors) {
      this.neightborsCount = neightbors.length;
    }
  
    next() {
      const shouldBeLife = this.isAlive() && this.neightborsCount ===  3 
        || this.isAlive() && this.neightborsCount ===  2
        || !this.isAlive() && this.neightborsCount ===  3
  
      this.state = shouldBeLife ? '*' : '.'    
    }
  
    render() {
      return this.state
    }
}

export default Cell