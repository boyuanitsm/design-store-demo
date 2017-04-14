/**
 * Created by hookszhang on 2017/4/13.
 */
import {Component, Input} from '@angular/core';
import {PartComponent} from "./part.component";

@Component({
  template: '<p class="text-part-component">{{data.text}}</p>',
  styles: [`
    .text-part-component {
      color: #546E7A;
    }
  `]
})
export class TextPartComponent implements PartComponent {
  @Input() data: any;
}
