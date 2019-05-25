import { Block } from './game-board/block/Block';
import { Prize } from './prize-board/prize/prize';

export class GameState {
  private constant = {
    boardState: 'boardState',
    prizeState: 'prizeState',
    lastSelectedNumber: 'lastSelectedNumber'
  };

  set boardState(state: Array<Block>) {
    sessionStorage.setItem(this.constant.boardState, JSON.stringify(state))
  }

  set prizeState(state: Array<Prize>) {
    sessionStorage.setItem(this.constant.prizeState, JSON.stringify(state));
  }

  set lastSelectedNumber(state: number) {
    sessionStorage.setItem(this.constant.lastSelectedNumber, JSON.stringify(state));
  }

  get boardState(): Array<Block> {
    return JSON.parse(sessionStorage.getItem(this.constant.boardState)) || [];
  }

  get prizeState(): Array<Prize> {
    return JSON.parse(sessionStorage.getItem(this.constant.prizeState)) || [];
  }

  get lastSelectedNumber(): number {
    return JSON.parse(sessionStorage.getItem(this.constant.lastSelectedNumber)) || 0;
  }

  updatePrize(prize: Prize): void {
    this.prizeState = this.prizeState.map(currentState => {
      if (prize.label === currentState.label) {
        return prize;
      }
      return currentState;
    });
  }
}