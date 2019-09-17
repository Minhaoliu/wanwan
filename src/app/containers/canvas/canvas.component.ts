import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.less']
})

export class CanvasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    const c = document.getElementById('myCanvas');
    const ctx = (c as any).getContext('2d');

    // var data = {
    //   "1":
    //   {
    //     "E": ["ZR", "Z", "L"],
    //     "W": ["R", "U", "Z"],
    //     "S": ["R", "Z", "ZL"],
    //     "N": ["R", "A", "L"],
    //   }
    // }


      ctx.beginPath();
      // 北
      ctx.moveTo(100, 20);
      ctx.lineTo(100, 100);
      ctx.moveTo(200, 20);
      ctx.lineTo(200, 100);
      // 车道线
      ctx.moveTo(120, 20);
      ctx.lineTo(120, 100);
      ctx.moveTo(140, 20);
      ctx.lineTo(140, 100);

      // 南
      ctx.moveTo(100, 200);
      ctx.lineTo(100, 280);
      ctx.moveTo(200, 200);
      ctx.lineTo(200, 280);
      // 车道线
      ctx.moveTo(180, 200);
      ctx.lineTo(180, 280);
      ctx.moveTo(160, 200);
      ctx.lineTo(160, 280);

      // 西
      ctx.moveTo(20, 100);
      ctx.lineTo(100, 100);
      ctx.moveTo(20, 200);
      ctx.lineTo(100, 200);
      // 车道线
      ctx.moveTo(20, 180);
      ctx.lineTo(100, 180);
      ctx.moveTo(20, 160);
      ctx.lineTo(100, 160);

        //东
      ctx.moveTo(200, 100);
      ctx.lineTo(280, 100);
      ctx.moveTo(200, 200);
      ctx.lineTo(280, 200);
      // 车道线
      ctx.moveTo(200, 120);
      ctx.lineTo(280, 120);
      ctx.moveTo(200, 140);
      ctx.lineTo(280, 140);

      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.moveTo(150, 20);
      ctx.lineTo(150, 100);
      ctx.strokeStyle = '#006400';
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.closePath();




  }



}
