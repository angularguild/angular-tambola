import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2OdometerModule } from 'ng2-odometer';

import { AppComponent } from './app.component';
import { BlockComponent } from './game-board/block/block.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { RollAreaComponent } from './roll-area/roll-area.component';
import { TimesPipe } from './game-board/times.pipe';
import { GameService } from './game.service';
import {FireworksComponent} from './fireworks/fireworks.component';
import {PrizeBoardComponent} from './prize-board/prize-board.component';
import {PrizeComponent} from './prize-board/prize/prize.component';

@NgModule({
  imports: [BrowserModule, Ng2OdometerModule.forRoot()],
  declarations: [
    AppComponent, BlockComponent, GameBoardComponent, TimesPipe, RollAreaComponent,FireworksComponent,PrizeBoardComponent,PrizeComponent
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
