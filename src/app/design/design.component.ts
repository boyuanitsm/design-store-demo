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
  textData: any = {
    text: ''
  };
  imgData: any = {
    src: ''
  };
  editor: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    this.parts = DesignComponent.getParts();
    for (let part of this.parts) {
      this.appendComponentToWorkspace(part);
    }
  }

  // DYNAMIC COMPONENT LOADER https://angular.io/docs/ts/latest/cookbook/dynamic-component-loader.html
  appendComponentToWorkspace(part: PartItem) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(part.component);
    let componentRef = this.workspaceHost.viewContainerRef.createComponent(componentFactory);
    (<PartComponent>componentRef.instance).data = part.data;
  }

  static getParts() {
    // mock PartItem array
    return [
      new PartItem(TextPartComponent, {text: 'TextPartComponet text'}),
      new PartItem(ImgPartComponent, {src: 'https://angular.io/resources/images/logos/angular/angular.svg'})
    ]
  }

  onTextEditFinish() {
    // {...object} is shorthand object spread notation, deep clone
    this.appendComponentToWorkspace(new PartItem(TextPartComponent, {...this.textData}));
    // clear
    this.editor = '';
    this.textData.text = '';
  }

  onImgEditFinish() {
    this.appendComponentToWorkspace(new PartItem(ImgPartComponent, {...this.imgData}));
    this.editor = '';
    this.imgData.src = '';
  }
}
