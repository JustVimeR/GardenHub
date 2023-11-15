import { Component, OnInit } from '@angular/core';
import { OrderStatus } from 'src/app/models/enums/order-status';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  activeRole: 'gardener' | 'housekeeper';

  constructor(private roleService: RoleService) {
    this.activeRole = 'gardener';
  }

  ngOnInit() {
    this.roleService.activeRole.subscribe(role => {
      this.activeRole = role;
    });
  }

  toggleHeart(order: any) {
    order.isHeartClicked = !order.isHeartClicked;
  }

  fakeData: any = [
    {
      workerPhoto: "../../../assets/photo1.png",
      username: "juli.gardener",
      raiting: '5.0'
    },
    {
      workerPhoto: "../../../assets/photo2.png",
      username: "anna.wodj",
      raiting: '5.0'
    },
    {
      workerPhoto: "../../../assets/photo3.png",
      username: "anton__one",
      raiting: '4.9'
    },
    {
      workerPhoto: "../../../assets/photo4.png",
      username: "olexandr.mukh",
      raiting: '4.8'
    },
    {
      workerPhoto: "../../../assets/photo5.png",
      username: "emiliartp",
      raiting: '4.8'
    },
    {
      workerPhoto: "../../../assets/photo6.png",
      username: "_sergart_",
      raiting: '4.7'
    },
    {
      workerPhoto: "../../../assets/photo7.png",
      username: "oleg_vnek",
      raiting: '4.6'
    },
  ];

  fakeOrders:any = [
    {
      title: 'Покосити газон на прибудинковій території',
      location: 'м. Вишгород, Київська обл.',
      price: '700',
      isHeartClicked: false,
      typeOfWork: [
       'Догляд за газоном','Догляд за фруктовими деревами','Ландшафтний дизайн'
      ],
      orderStatus: OrderStatus.active
    },
    {
      title: 'Обрізка фруктових дерев у саду',
      location: 'м. Житомир',
      price: 'Договірна',
      isHeartClicked: false,
      typeOfWork: [
       'Догляд за фруктовими деревами','Ландшафтний дизайн','Догляд за газоном','Догляд за газоном'
      ],
      orderStatus: OrderStatus.active
    },
    {
      title: 'Діагностика та лікування троянд',
      location: 'м. Кривий Ріг',
      price: '450',
      isHeartClicked: false,
      typeOfWork: [
       'Догляд за рослинами','Діагностика та лікування захворювань','Догляд за газоном'
      ],
      orderStatus: OrderStatus.active
    },
    {
      title: 'Покосити газон на прибудинковій території',
      location: 'м. Вишгород, Київська обл.',
      price: '700',
      isHeartClicked: false,
      typeOfWork: [
       'Догляд за газоном','Догляд за газоном','Догляд за газоном'
      ],
      orderStatus: OrderStatus.active
    }
  ]
}

