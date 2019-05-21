import {Injectable} from '@angular/core'
import { Block } from './game-board/block/Block'
import {BehaviorSubject, Subject} from 'rxjs'
import { delay } from 'rxjs/operators';
import { Prize } from './prize-board/prize/prize';
import { GameState } from './game-state';

@Injectable()
export class GameService {
private _boardState:Array<Block>;
private _prizeState: Array<Prize>;
private _gameState:GameState;
private boardState$:BehaviorSubject<Block[]>;
private prizeState$:BehaviorSubject<Prize[]>;
private nextNum:Subject<number>;
private _randomNumbers;
delayTime = 4000;

constructor(){
  this.initializeBoard();
  this.initializePrizes();
  this._gameState =  new GameState(this._boardState,this._prizeState);
  this._randomNumbers = this.randomizedNumbers();
  this.boardState$ = new BehaviorSubject(this._gameState.boardState);  
  this.prizeState$ = new BehaviorSubject(this._gameState.prizeState);  
  this.boardState$.next([...this._boardState]);
  this.nextNum = new Subject();
}

get boardState(){
  return this.boardState$.asObservable().pipe(delay(this.delayTime));
}
get prizeState(){
  return this.prizeState$.asObservable();
}

get nextNumber(){
  return this.nextNum.asObservable();
}

randomizedNumbers(){
  return this._boardState
  .map((e)=>e.value)
  .sort(()=> { return 0.5 - Math.random()})  
}

popNextNumber(){
return this._randomNumbers.pop();
}

selectPoppedNumber(num){
  let index = this._boardState.findIndex((e)=>e.value === num);
  this._boardState[index] = {...this._boardState[index],isSelected: true};
}

roll(){  
  this.boardState$.next([...this._gameState.boardState])
  let num = this.popNextNumber();
  this.nextNum.next(num);
  this.selectPoppedNumber(num);
  this.boardState$.next([...this._gameState.boardState])
}



resetGame(){
  this.initializeBoard();
  this._gameState =  new GameState(this._boardState,this._prizeState);
  this.boardState$.next([...this._gameState.boardState])
}



initializeBoard(){
  this._boardState = new Array();
  let num =10
  let rows= 9;
  let cols = 10;
  for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
         let block = new Block();
         block.value = (i*10)+j+1;
         this._boardState.push(block);
    }
  }
}

initializePrizes(){
  this._prizeState = [
     new Prize("First Five"),
      new Prize("Top Row"),
      new Prize("Middle Row"),
      new Prize("Last Row"),
      new Prize("Bull's Eye"),
      new Prize("Break Fast"),
      new Prize("Lunch"),
      new Prize("Dinner"),
      new Prize("Hot N Cold"),
      new Prize("Full House #1"),
      new Prize("Full House #2"),
      new Prize("Full House #3"),
  
  ]
}

}