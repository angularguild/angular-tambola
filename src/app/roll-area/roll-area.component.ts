import { Component,Input,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { GameService } from '../game.service';
import { Subject} from 'rxjs'
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-roll-area',
  templateUrl: './roll-area.component.html',
  styleUrls: [ './roll-area.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RollAreaComponent  {

  nextNum = 0;
  blinkText = false;
  config = {animation: 'count',duration: 3000 };
  stopFireWork = new Subject();
  igniteFireWork = new Subject();
  isDisabled = false;

  get delayTime(){
    return this.gameService.delayTime;
  }
  
  constructor(private gameService: GameService,private cdr:ChangeDetectorRef){
    this.config.duration = this.delayTime;
    this.gameService.nextNumber.subscribe((num)=>{
        this.nextNum = 0;
        this.cdr.detectChanges();
        this.nextNum = num;
         this.cdr.detectChanges();
        this.igniteFireWork.next();
    })
    this.igniteFireWork.asObservable().pipe(delay(this.delayTime)).subscribe(()=>{
      this.blinkText = true;
      this.cdr.detectChanges();
      this.stopFireWork.next();
    })
    this.stopFireWork.asObservable().pipe(delay(this.delayTime)).subscribe(()=>{
      this.blinkText = false;
      this.isDisabled = false;
      this.cdr.detectChanges();
    })
  }

  popNextNumber() {
    this.isDisabled = true;
    this.gameService.roll();
  }

  check(){
    // to demo change changeDetection
    //console.log("roll-area");
  }
}