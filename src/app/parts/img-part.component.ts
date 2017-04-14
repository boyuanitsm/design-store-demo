/**
 * Created by hookszhang on 2017/4/13.
 */
import {Component, Input} from '@angular/core';
import {PartComponent} from "./part.component";

@Component({
  template: '<img class="img-part-component" src="{{data.src}}"/>',
  styles: [`
    .img-part-component {
      width: 100%;
    }
  `]
})
export class ImgPartComponent implements PartComponent {
  @Input() data: any;
}
