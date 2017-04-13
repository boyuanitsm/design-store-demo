/**
 * Created by hookszhang on 2017/4/13.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'text-part',
  template: '<p>{{text}}</p>'
})
export class TextPart {
  text = 'TextPart in line';
}
