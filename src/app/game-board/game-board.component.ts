import { Component,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { Block } from './block/Block';
import { GameService } from '../game.service';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameBoardComponent {
  boardState:Array<Block>;
  constructor(private gameService: GameService, private cdr:ChangeDetectorRef) {
    this.gameService.boardState.subscribe((boardState:Array<Block>) => {
      this.boardState = boardState;
      cdr.detectChanges();
    })
  }

  getBlock(value) {
    return this.boardState?this.boardState[value]:new Block();
  }

  check(){
    // to demo change changeDetection
    //console.log("game-board");
  }
  
}