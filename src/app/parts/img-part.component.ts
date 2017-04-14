/**
 * Created by hookszhang on 2017/4/13.
 */
import {Component, Input} from '@angular/core';
import {PartComponent} from "./part.component";

@Component({
  template: '<img src="{{data.src}}"/>'
})
export class ImgPartComponent implements PartComponent {
  @Input() data: any;
}
