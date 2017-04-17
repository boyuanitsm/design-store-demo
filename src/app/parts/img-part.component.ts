// /**
//  * Created by hookszhang on 2017/4/13.
//  */
// import {Component, Input} from '@angular/core';
// import {PartComponent} from "./part.component";

// @Component({
//   template: '<img class="img-part-component" src="{{data.src}}"/>',
//   styles: [`
//     .img-part-component {
//       width: 100%;
//     }
//   `]
// })
// export class ImgPartComponent implements PartComponent {
//   @Input() data: any;
// }


/**
 * Created by hookszhang on 2017/4/13.
 */
import { Component, Input } from '@angular/core';
import { PartComponent } from "./part.component";

@Component({
  template: `
    <div class="img-part-main">
      <img class="img-part-component" src="{{data.src}}"/>
      <div class="img-part-options">
        <br>
        <input type="img" *ngIf="editor" [(ngModel)]="imgData.src">
        <button (click)="onImgEditStart()" *ngIf="!editor">编辑</button>
        <button (click)="onImgEditFinished()" *ngIf="editor">保存</button>
        <button (click)="onImgRemove()">删除</button>
      </div>
    </div>
  `,
  styles: [`
    .img-part-main{
      position: relative;
      padding:  30px;
    }
    .img-part-component {
      color: #546E7A;
    }
    .img-part-main:hover{
      background:red
    }
    .img-part-options{
      display:none;
      position: absolute;
      top: 44%;
      img-align: center;
      margin: 0 auto;
      width: 100%;
    }

    .img-part-main:hover .img-part-options{
      display:block
    }
  `]
})
export class ImgPartComponent implements PartComponent {
  @Input() data: any;

  imgData: any = {
    src: ''
  };
  editor: boolean = false;

  onImgEditStart(){
    this.editor = true;
  }

  onImgRemove(){
    console.log(this)
    // this.viewContainer.clear();
    // this.data =  ""
    // this = ""
    // this.data = ""
  }

  onImgEditFinished(){
    console.log(this);
    this.data.src = this.imgData.src;
    this.imgData.src = '';
    this.editor = false;
  }
}
