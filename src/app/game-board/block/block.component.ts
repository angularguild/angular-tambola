import { Component,Input,ChangeDetectionStrategy } from '@angular/core';
import {Block} from './Block'

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: [ './block.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlockComponent  {
  @Input() block:Block;
  check(){
    // to demo change changeDetection
    console.log("block-area"+this.block.value);
  }
}