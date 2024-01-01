import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  tickets = [
    {
      id: 1,
      user: {
        img: '../../assets/icons/avatar1.png',
        name: ' احمد محمود',
        phone: '0123456789',
      },
      nTicket: 'C-101',
      price: '$40',
      cinema: 'سينما مصر ,مول العرب , برج الأطنان , سرايا القبة',
      n: 1,
      nBuy: 'مرة واحدة',
      ticket: {
        tImg: '../../assets/icons/ticket-2.png',
        nt: 'تذكرة رقم 45.pdf',
        size: '9mb , PDF',
        dImg: '../../assets/icons/download.png',
      },
    },
    {
      id: 1,
      user: {
        img: '../../assets/icons/avatar2.png',
        name: 'محمد الغريب',
        phone: '0123456789',
      },
      nTicket: 'C-102',
      price: '$30',
      cinema: 'سينما مصر ,مول العرب , برج الأطنان , سرايا القبة',
      n: 1,
      nBuy: 'مرة واحدة',
      ticket: {
        tImg: '../../assets/icons/ticket-2.png',
        nt: 'تذكرة رقم 45.pdf',
        size: '9mb , PDF',
        dImg: '../../assets/icons/download.png',
      },
    },
    {
      id: 3,
      user: {
        img: '../../assets/icons/avatar3.png',
        name: 'محمد الغريب',
        phone: '0123456789',
      },
      nTicket: 'C-102',
      price: '$45',
      cinema: 'سينما مصر ,مول العرب , برج الأطنان , سرايا القبة',
      n: 1,
      nBuy: 'مرة واحدة',
      ticket: {
        tImg: '../../assets/icons/ticket-2.png',
        nt: 'تذكرة رقم 45.pdf',
        size: '9mb , PDF',
        dImg: '../../assets/icons/download.png',
      },
    },
    {
      id: 4,
      user: {
        img: '../../assets/icons/avatar4.png',
        name: 'محمد الغريب',
        phone: '0123456789',
      },
      nTicket: 'C-103',
      price: '$54',
      cinema: 'سينما مصر ,مول العرب , برج الأطنان , سرايا القبة',
      n: 1,
      nBuy: 'مرة واحدة',
      ticket: {
        tImg: '../../assets/icons/ticket-2.png',
        nt: 'تذكرة رقم 45.pdf',
        size: '9mb , PDF',
        dImg: '../../assets/icons/download.png',
      },
    },
  ];

  toggle: boolean = true;

  active() {
    this.toggle = true;
  }
  disactive() {
    this.toggle = false;
  }
}
