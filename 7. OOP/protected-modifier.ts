class Player4 {
    constructor(
      public first: string,
      public last: string,
      protected _score: number
    ) {}
  
    get score(): number {
      return this._score;
    }
  }
  
  class SuperPlayer extends Player4 {
    public isAdmin: boolean = true;
    maxScore() {
      this._score = 99999;
    }
  }
  
  const dog5 = new Player4("Elton", "Steele", 10);