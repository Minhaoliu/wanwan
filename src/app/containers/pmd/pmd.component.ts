import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pmd',
  templateUrl: './pmd.component.html',
  styleUrls: ['./pmd.component.less']
})
export class PmdComponent implements OnInit {

  constructor() { }

  src = '../../assets/image/1.jpg';

  ngOnInit() {
  }
  public change(e){
  console.log(e);
  this.src ="../../assets/image/" + (e + 1)+ ".jpg";
  }

}
