import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './containers/home/home.component'
import {TestComponent} from './containers/test/test.component'
import {HahComponent} from './containers/hah/hah.component'
import {PmdComponent} from './containers/pmd/pmd.component'
import {TrafficComponent} from './containers/traffic/traffic.component'
import {CanvasComponent} from './containers/canvas/canvas.component'
import {SmpComponent} from './containers/smp/smp.component'
const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'test', component: TestComponent},
{path: 'hah', component: HahComponent},
{path: 'pmd', component: PmdComponent},
{path: 'traffic', component: TrafficComponent},
{path: 'canvas', component: CanvasComponent},
{path: 'smp', component: SmpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
