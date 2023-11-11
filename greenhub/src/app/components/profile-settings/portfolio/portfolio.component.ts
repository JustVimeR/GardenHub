import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

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
      ]
    },
    {
      title: 'Обрізка фруктових дерев у саду',
      location: 'м. Житомир',
      price: 'Договірна',
      isHeartClicked: false,
      typeOfWork: [
       'Догляд за фруктовими деревами','Ландшафтний дизайн','Догляд за газоном','Догляд за газоном'
      ]
    },
    {
      title: 'Діагностика та лікування троянд',
      location: 'м. Кривий Ріг',
      price: '450',
      isHeartClicked: false,
      typeOfWork: [
       'Догляд за рослинами','Діагностика та лікування захворювань','Догляд за газоном'
      ]
    },
    {
      title: 'Покосити газон на прибудинковій території',
      location: 'м. Вишгород, Київська обл.',
      price: '700',
      isHeartClicked: false,
      typeOfWork: [
       'Догляд за газоном','Догляд за газоном','Догляд за газоном'
      ]
    }
  ]
}
