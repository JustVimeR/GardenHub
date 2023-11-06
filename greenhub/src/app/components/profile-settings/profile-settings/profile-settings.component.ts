import { Component } from '@angular/core';
import { Router } from '@angular/router';
import StorageService from 'src/app/services/storage.service';
import { Page } from '../models/page';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent extends StorageService{
  constructor(private router: Router) {
    super();
  }

  protected readonly Page = Page;
  activePage = this.Page.mainInfo;

  changePage(page: Page): void {
    this.activePage = page;
  }
}
