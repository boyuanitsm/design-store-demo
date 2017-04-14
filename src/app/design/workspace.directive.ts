/**
 * Created by hookszhang on 2017/4/14.
 */
import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[workspace-host]',
})
export class WorkspaceDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
