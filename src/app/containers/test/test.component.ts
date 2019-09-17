import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  value: string;
  listOfData = [
    {
      key: '1',
      deviceNumber: 'SN10',
      deviceName: '徽州大道与紫云路交口北200米kk南向北',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '2',
      deviceNumber: 'SN11',
      deviceName: '徽州大道与紫云路交口北200米kk北向南',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '3',
      deviceNumber: 'SN12',
      deviceName: '新包河大道与环湖北路北200米kk北向南',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '4',
      deviceNumber: 'SN12312321334343',
      deviceName: '4343',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '5',
      deviceNumber: 'SN124',
      deviceName: '四里河路与三国城路北南向北',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '6',
      deviceNumber: 'SN125',
      deviceName: '四里河路与三国城路北北向南',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '7',
      deviceNumber: 'SN130300000100012468-1',
      deviceName: '半汤大道与学府路交口 东向西',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '8',
      deviceNumber: 'SN130300000113200082-1',
      deviceName: '大戴村卡口 东向西2+1',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '9',
      deviceNumber: 'SN130300001300012634-1',
      deviceName: 'S105与庙柘路',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '10',
      deviceNumber: 'SN1412425593351130',
      deviceName: '北二环胜利北路东北角枪1',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '11',
      deviceNumber: 'SN1413513639495220',
      deviceName: '南一环明光路西北角枪',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '12',
      deviceNumber: 'SN1415794059281310',
      deviceName: '长江中路环城西路东北角北卡口枪',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '13',
      deviceNumber: 'SN1415794346631580',
      deviceName: '阜南路杏花公园北门卡口枪',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '14',
      deviceNumber: 'SN1415794589489360',
      deviceName: '阜南路财政厅对面枪',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '15',
      deviceNumber: 'SN1415794997041780',
      deviceName: '环城北路蒙城路西北角西卡口枪1',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    },
    {
      key: '16',
      deviceNumber: 'SN1415795137584430',
      deviceName: '金寨路环城南路西北角西卡口枪2',
      deviceType: '卡口',
      company: '四创',
      time: '2018-12-27'
    }
  ];

}
