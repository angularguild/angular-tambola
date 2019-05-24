import { Component, Input, Output, EventEmitter,ChangeDetectionStrategy } from '@angular/core'
import { Prize } from './prize';

@Component({
  selector: 'prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrizeComponent {
  @Input() prize: Prize;
  @Output() claimed = new EventEmitter<Prize>()

  toggle() {
    if (this.prize.isClaimed) {
      let res = confirm("Reset claimed prize");
      this.prize.isClaimed = res ? !this.prize.isClaimed : this.prize.isClaimed;
    } else {
      this.prize.isClaimed = !this.prize.isClaimed;
    }
    this.claimed.emit(this.prize);
    let tempPrizeState = JSON.parse(localStorage.getItem("prizeState"));
    for (let i = 0; i < tempPrizeState.length; i++)
    {
      if (tempPrizeState[i].label === this.prize.label)
      {
        tempPrizeState[i].isClaimed = this.prize.isClaimed;
        localStorage.setItem("prizeState", JSON.stringify(tempPrizeState));
        break;
      }
    }
  }

  get btnClass() {
    return {
      'btn-primary': !this.prize.isClaimed,
      'btn-danger': this.prize.isClaimed,
    }
  }
}