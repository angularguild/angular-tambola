import { Component,ChangeDetectionStrategy } from '@angular/core';
import { Prize } from './prize/prize';
import { GameService } from '../game.service';

@Component({
  selector: 'prize-board',
  templateUrl: './prize-board.component.html',
  styleUrls: ['./prize-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrizeBoardComponent {

  prizes: Array<Prize>;

  get columns(){
    return Math.floor(this.prizes.length/2);
  }

  constructor(private gameService: GameService) {
    this.gameService.prizeState.subscribe((prizes) => {
      this.prizes = prizes
    });
  }

  check(){
    // to demo change changeDetection
    // console.log("prize-area");
  }

}