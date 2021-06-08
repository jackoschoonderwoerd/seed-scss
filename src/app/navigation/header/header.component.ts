import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

import * as fromRoot from './../../app.reducer';
import * as UI from './../../shared/ui.actions';
import * as EXPOSITION from '../../exhibitions/exhibitions.actions'
import { faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userEmail$: Observable<string>
  isAdmin$: Observable<boolean>
  selectedLanguage$: Observable<string>
  language: string = 'dutch';
  expositionId: string;
  isShowcaseActive: boolean = false;
  faBars = faBars

  constructor(
    private store: Store<fromRoot.GlobalState>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.store.subscribe(data => console.log(data));
    this.store.select(fromRoot.getSelectedLanguage).subscribe((language: string) => {
      this.language = language;
    });
    this.store.select(fromRoot.getIsShowcaseActive).subscribe((isShowcaseActive: boolean) => {
      this.isShowcaseActive = isShowcaseActive
    })
    this.userEmail$ = this.store.select(fromRoot.getUserEmail);
    this.isAdmin$ = this.store.select(fromRoot.getIsAdmin);
    this.selectedLanguage$ = this.store.select(fromRoot.getSelectedLanguage);
  }
  onOpenSidenav() {
    this.store.dispatch(new UI.OpenSidenav);
  }
  onLogOut() {
    this.authService.logOut()
  }
  selectedLanguage(language: string) {
    this.store.dispatch(new UI.SelectedLanguage(language))
  }
  // expositionSelected() {
  //   this.store.dispatch(new EXPOSITION.SeteXHIBITION(null))
  // }
  expositionSelected() {
    this.store.dispatch(new EXPOSITION.SetExhibitionId(null))
  }
}
