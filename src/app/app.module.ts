import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN, en_US } from 'ng-zorro-antd';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import en from '@angular/common/locales/en';
import { HomeComponent } from './containers/home/home.component';
import { TestComponent } from './containers/test/test.component';
import { HahComponent } from './containers/hah/hah.component';
import { PmdComponent } from './containers/pmd/pmd.component';
import { TrafficComponent } from './containers/traffic/traffic.component';
import { CanvasComponent } from './containers/canvas/canvas.component';
import { SmpComponent } from './containers/smp/smp.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    HahComponent,
    PmdComponent,
    TrafficComponent,
    CanvasComponent,
    SmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  providers: [
  { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
