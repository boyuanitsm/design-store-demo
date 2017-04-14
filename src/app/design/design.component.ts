import {Component, AfterViewInit, ViewChild, ComponentFactoryResolver} from '@angular/core';

import {PartItem} from '../parts/part-item';
import {ImgPartComponent} from '../parts/img-part.component';
import {TextPartComponent} from '../parts/text-part.component';
import {PartComponent} from "../parts/part.component";
import {WorkspaceDirective} from './workspace.directive';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements AfterViewInit {
  parts: PartItem[];
  @ViewChild(WorkspaceDirective) workspaceHost: WorkspaceDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    this.parts = this.getParts();
    for (let part of this.parts) {
      this.appendComponentToWorkspace(part);
    }
  }

  appendComponentToWorkspace(part: PartItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(part.component);
    let componentRef = this.workspaceHost.viewContainerRef.createComponent(componentFactory);
    (<PartComponent>componentRef.instance).data = part.data;
  }

  getParts() {
    return [
      new PartItem(TextPartComponent, {text: 'TextPartComponet text'}),
      new PartItem(ImgPartComponent, {src: 'https://angular.io/resources/images/logos/angular/angular.svg'})
    ]
  }

  onClickText() {
    this.appendComponentToWorkspace(new PartItem(TextPartComponent, {text: 'append one line text'}));
  }

  onClickImg() {
    this.appendComponentToWorkspace(
      new PartItem(ImgPartComponent, {src: 'https://angular.io/resources/images/logos/angular/angular.svg'}));
  }
}
