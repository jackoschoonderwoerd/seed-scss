import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from './../../app.reducer'
import * as UI from './../../shared/ui.actions'
// import * as AUTH from './../../auth/auth.actions'
// import * as EXPOSITION from '../../exhibitions/exhibitions.actions'
import { AuthService } from 'src/app/auth/auth.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isAuth$: Observable<boolean>;
  language: string = 'dutch'

  constructor(
    private store: Store<fromApp.GlobalState>,
    private authService: AuthService,

  ) { }

  ngOnInit(): void {
    this.isAuth$ = this.store.select(fromApp.getIsAuth);
    this.store.select(fromApp.getSelectedLanguage).subscribe((language: string) => {
      this.language = language
    })
  }
  onCloseSidenav() {
    this.store.dispatch(new UI.CloseSidenav);
  }
  onLogOut() {
    this.authService.logOut()
  }
}
