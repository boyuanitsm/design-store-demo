import {Component, AfterViewInit, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

import {PartItem} from '../parts/part-item';
import {ImgPartComponent} from '../parts/img-part.component';
import {TextPartComponent} from '../parts/text-part.component';
import {PartComponent} from "../parts/part.component";

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements AfterViewInit {

  parts: PartItem[];

  constructor(private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngAfterViewInit() {
    this.parts = this.getParts();
    for(let part of this.parts) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(part.component);
      let componentRef = this.viewContainerRef.createComponent(componentFactory);
      (<PartComponent>componentRef.instance).data = part.data;
    }
  }

  getParts() {
    return [
      new PartItem(TextPartComponent, {text: 'TextPartComponet text'}),
      new PartItem(ImgPartComponent, {src: 'https://angular.io/resources/images/logos/angular/angular.svg'})
    ]
  }

}
