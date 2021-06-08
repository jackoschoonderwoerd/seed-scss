import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Exhibition } from '../exhibition.model';

import { ExhibitionsService } from '../exhibitions.service';
import { Photo } from '../photo.model';
import * as fromApp from './../../app.reducer';
import * as UI from './../../shared/ui.actions'

import { Slide } from '../slide.model';
import { ViewportScroller } from '@angular/common';

import { interval as observableInterval } from "rxjs";
import { takeWhile, scan, tap } from "rxjs/operators";




@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss']
})
export class ShowCaseComponent implements OnInit, OnDestroy {


  images = []
  exhibitionId: string;
  exhibition: Exhibition
  // expositionId: string = '';

  expositionDescription: string = '';
  // imgPaths: string[] = [];
  // imgPath: string;
  htmlContent: string;
  mainPhoto: Photo
  additionalPhotos: Photo[];
  aspectRatio: number = 66;
  hideArrows: boolean = true;
  pageYoffset: number;
  @HostListener('window:scroll', ['$event']) onScroll(event) {

    this.pageYoffset = window.pageYOffset;
    console.log(this.pageYoffset);
  }


  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.GlobalState>,
    private expositionService: ExhibitionsService,
    private router: Router,
    private scroll: ViewportScroller

    // private expositionService: ExpositionsService
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.store.dispatch(new UI.ShowcaseActive(true));
    this.store.subscribe(storeContent => {
      if (storeContent.exposition.exhibitionId) {
        this.exhibition = this.expositionService.getExposition(storeContent.exposition.exhibitionId);
        console.log(this.exhibition);
        this.images = [];
        if (this.exhibition.aspectRatio) {
          this.aspectRatio = this.exhibition.aspectRatio
        }
        if (this.exhibition.slides.length > 1) {
          this.hideArrows = false
        }
        this.exhibition.slides.forEach((slide: Slide) => {
          this.images.push({
            'image': slide.imagePath,
            caption: slide.caption,
            price: slide.price,
            copyright: slide.copyright
          })
        })
        // this.slides = this.exhibition.slides;
      }
      fetch(this.exhibition.descriptionPath)
        .then(response => {
          return response.text()
        })
        .then((htmlContent: string) => {
          this.htmlContent = htmlContent
        })
    });

  }
  // onScrollToTop(el) {
  //   console.log(el);
  //   el.scrollTop = 0;
  // }


  ngOnDestroy() {
    this.images = [];
    this.store.dispatch(new UI.ShowcaseActive(false));
  }
}
