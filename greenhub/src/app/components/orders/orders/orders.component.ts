import { Component } from '@angular/core';
import { Router } from '@angular/router';
import StorageService from 'src/app/services/storage.service';
import { Page } from '../models/page';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends StorageService{
  constructor(private router: Router) {
    super();
  }

  protected readonly Page = Page;
  activePage = this.Page.inWork;

  changePage(page: Page): void {
    this.activePage = page;
  }
}
