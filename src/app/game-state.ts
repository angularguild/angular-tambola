import { Block } from './game-board/block/Block';
import { Prize } from './prize-board/prize/Prize';

export class GameState {
  boardState: Array<Block>;
  prizeState: Array<Prize>;

  constructor(boardState: Array<Block>, prizeState: Array<Prize>, ) {
    this.boardState = boardState;
    this.prizeState = prizeState;
  }
}