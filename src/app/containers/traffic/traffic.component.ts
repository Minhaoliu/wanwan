import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-traffic',
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.less'],
  encapsulation: ViewEncapsulation.None,

})
export class TrafficComponent implements OnInit {
  sortName: string | null = null;
  sortValue: string | null = null;
  searchAddress: string;
  listOfCreateTime = [{ text: '2016-09-01 08:50:08', value: '2016-09-01 08:50:08' },
  { text: '2016-09-06 10:50:08', value: '2016-09-06 10:50:08' },
  { text: '2016-09-16 10:55:08', value: '2016-09-16 10:55:08'}];
  listOfCheckTime = [{ text: '2016-09-23 08:50:08', value: '2016-09-23 08:50:08' },
  { text: '2016-09-25 08:20:08', value: '2016-09-25 08:20:08' },
  { text: '2016-10-21 08:50:08', value: '2016-10-21 08:50:08' }];
  listOfDistributeTime = [{ text: '2017-01-15 08:50:08', value: '2017-01-15 08:50:08' },
  { text: '2017-09-02 08:50:08', value: '2017-09-02 08:50:08' },
  { text: '2017-02-06 08:50:08', value: '2017-02-06 08:50:08' }];
  listOfSearchName: string[] = [];


  listOfData: Array<{ Road: string; FangAn: string;
    CreateTime: string; CreatePerson: string; CheckTime: string; CheckPerson: string; DistributeTime: string;
    Status: string; [key: string]: string | number }> = [
    {
      Road: '黄山路与怀宁路',
      FangAn: '新方案20190606',
      CreateTime: '2016-09-01 08:50:08',
      CreatePerson: '张三',
      CheckTime: '2016-09-23 08:50:08',
      CheckPerson: '张三',
      DistributeTime: '2017-01-15 08:50:08',
      Status: '已审核',
    },
    {
      Road: '黄山路与怀宁路',
      FangAn: '新方案20190606',
      CreateTime: '2016-09-06 10:50:08',
      CreatePerson: '张三',
      CheckTime: '2016-09-25 08:20:08',
      CheckPerson: '张三',
      DistributeTime: '2017-09-02 08:50:08',
      Status: '已审核',
    },
    {
      Road: '黄山路与怀宁路',
      FangAn: '新方案20190606',
      CreateTime: '2016-09-16 10:55:08',
      CreatePerson: '张三',
      CheckTime: '2016-10-21 08:50:08',
      CheckPerson: '张三',
      DistributeTime: '2017-02-06 08:50:08',
      Status: '已审核',
    },

  ];
  listOfDisplayData: Array<{ Road: string; FangAn: string;
    CreateTime: string; CreatePerson: string; CheckTime: string; CheckPerson: string; DistributeTime: string;
    Status: string; [key: string]: string | number }> = [
    ...this.listOfData
  ];

  sort(sort: {key: string; value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  filter(listOfSearchName: string[], searchAddress: string): void {
    this.listOfSearchName = listOfSearchName;
    this.searchAddress = searchAddress;
    this.search();
  }

  search(): void {
    const filterFunc = (item: { Road: string; FangAn: string;
      CreateTime: string; CreatePerson: string; CheckTime: string; CheckPerson: string; DistributeTime: string;
      Status: string }) =>
      (this.searchAddress ? item.CreateTime.indexOf(this.searchAddress) !== -1 : true) &&
      (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.CreatePerson.indexOf(name) !== -1) : true);
    const data = this.listOfData.filter(item => filterFunc(item));

    if (this.sortName && this.sortValue) {
      this.listOfDisplayData = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.sortName!] > b[this.sortName!]
            ? 1
            : -1
          : b[this.sortName!] > a[this.sortName!]
          ? 1
          : -1
      );
    } else {
      this.listOfDisplayData = data;
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
