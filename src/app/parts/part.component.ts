/**
 * Created by hookszhang on 2017/4/14.
 */
import { ViewRef, ViewContainerRef } from '@angular/core';

export interface PartComponent {
  data: any;
  viewRef: ViewRef;
  viewContainerRef: ViewContainerRef;
}
