/**
 * Created by hookszhang on 2017/4/13.
 */
import { Component, Input, OnDestroy, ViewRef, ComponentRef, ViewContainerRef } from '@angular/core';
import { PartComponent } from "./part.component";

@Component({
  template: `
    <div class="text-part-main">
      <p class="text-part-component">{{data.text}}</p>
      <div class="text-part-options">
        <br>
        <input type="text" *ngIf="editor" [(ngModel)]="textData.text">
        <button (click)="onTextEditStart()" *ngIf="!editor">编辑</button>
        <button (click)="onTextEditFinished()" *ngIf="editor">保存</button>
        <button (click)="onTextRemove()">删除</button>
      </div>
    </div>
  `,
  styles: [`
    .text-part-main{
      position: relative;
      padding:  30px;
    }
    .text-part-component {
      color: #546E7A;
    }
    .text-part-main:hover{
      background:red
    }
    .text-part-options{
      display:none;
      position: absolute;
      top: 44%;
      text-align: center;
      margin: 0 auto;
      width: 100%;
    }

    .text-part-main:hover .text-part-options{
      display:block
    }
  `]
})
export class TextPartComponent implements PartComponent {
  @Input() data: any;
  @Input() viewRef: ViewRef;
  @Input() viewContainerRef: ViewContainerRef;

  textData: any = {
    text: ''
  };
  editor: boolean = false;

  onTextEditStart() {
    this.editor = true;
  }

  onTextRemove() {
    // 获得当前组件，现在的下标
    let index = this.viewContainerRef.indexOf(this.viewRef);
    // 删除
    this.viewContainerRef.remove(index);
  }

  onTextEditFinished() {
    this.data.text = this.textData.text;
    this.textData.text = '';
    this.editor = false;
  }
}
