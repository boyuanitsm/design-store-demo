/**
 * Created by hookszhang on 2017/4/13.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DesignComponent} from './design/design.component';

const routes: Routes = [
  {
    path: 'design',
    component: DesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
