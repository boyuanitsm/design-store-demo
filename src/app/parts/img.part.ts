/**
 * Created by hookszhang on 2017/4/13.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'img-part',
  template: '<img src="{{src}}"/>'
})
export class ImgPart {
  src = 'https://angular.cn/resources/images/logos/angular2/angular.svg';
}
