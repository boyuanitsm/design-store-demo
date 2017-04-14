/**
 * Created by hookszhang on 2017/4/13.
 */
import {Component, Input} from '@angular/core';
import {PartComponent} from "./part.component";

@Component({
  template: '<p>{{data.text}}</p>'
})
export class TextPartComponent implements PartComponent {
  @Input() data: any;
}
