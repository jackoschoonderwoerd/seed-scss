import { Injectable } from '@angular/core';
import { Exhibition } from './exhibition.model';



@Injectable({
  providedIn: 'root'
})
export class ExhibitionsService {

  exhibitions: Exhibition[] = [
    {
      id: 'exhibition-jazzsession',
      title: 'Exhibition Jazzsession',
      date: 'From September 1st till November 1st 2019',
      artistNames: ['Victor de Boo'],
      // descriptionPath:'./assets/jazz-session/exposition-jazzsession.html',
      descriptionPath: './../assets/exhibitions-assets/exposition-jazzsession/exposition-jazzsession.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/exposition-jazzsession/images/exposition-jazzsession-01.jpg',
          caption: null,
          copyright: 'Victor de Boo',
          price: null
        },
        {
          imagePath: './../assets/exhibitions-assets/exposition-jazzsession/images/IMG_1536.JPG',
          caption: null,
          copyright: 'Victor de Boo',
          price: 175
        },
        {
          imagePath: './../assets/exhibitions-assets/exposition-jazzsession/images/IMG_1537.JPG',
          caption: null,
          copyright: 'Victor de Boo',
          price: 175
        },
        {
          imagePath: './../assets/exhibitions-assets/exposition-jazzsession/images/IMG_1538.JPG',
          caption: null,
          copyright: 'Victor de Boo',
          price: 175
        },
        {
          imagePath: './../assets/exhibitions-assets/exposition-jazzsession/images/IMG_1540.JPG',
          caption: null,
          copyright: 'Victor de Boo',
          price: 175
        },
        {
          imagePath: './../assets/exhibitions-assets/exposition-jazzsession/images/IMG_1542.JPG',
          caption: null,
          copyright: 'Victor de Boo',
          price: 175
        },
        {
          imagePath: './../assets/exhibitions-assets/exposition-jazzsession/images/IMG_1550.JPG',
          caption: null,
          copyright: 'Victor de Boo',
          price: 175
        },
        {
          imagePath: './../assets/exhibitions-assets/exposition-jazzsession/images/IMG_1590.JPG',
          caption: null,
          copyright: 'Victor de Boo',
          price: 175
        },
        {
          imagePath: './../assets/exhibitions-assets/exposition-jazzsession/images/IMG_1898.JPG',
          caption: null,
          copyright: 'Victor de Boo',
          price: 175
        },
        {
          imagePath: './../assets/exhibitions-assets/exposition-jazzsession/images/IMG_1901.JPG',
          caption: null,
          copyright: 'Victor de Boo',
          price: 175
        },
        {
          imagePath: './../assets/exhibitions-assets/exposition-jazzsession/images/IMG_2037.JPG',
          caption: null,
          copyright: 'Victor de Boo',
          price: 175
        },
        {
          imagePath: './../assets/exhibitions-assets/exposition-jazzsession/images/IMG_2066.JPG',
          caption: null,
          copyright: 'Victor de Boo',
          price: 175
        },
      ],
      aspectRatio: 100,
      emailAddresses: ['jackoboes@gmail.com', 'test@test.com'],
      websites: ['https://www.jazzengel.nl', 'https://gogoyeah.club']
    },
    {
      id: 'veertig-jaar-bimhuis',
      title: 'Veertig Jaar Bimhuis',
      date: 'From September 1st till November 1st 2019',
      artistNames: [],
      descriptionPath:'./../assets/exhibitions-assets/veertig-jaar-bimhuis/veertig-jaar-bimhuis.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/veertig-jaar-bimhuis/images/40-jaar-bimhuis-2.jpg',
          caption: null,
          copyright: null,
          price: null
        },
        {
          imagePath: './../assets/exhibitions-assets/veertig-jaar-bimhuis/images/40-jaar-bimhuis.jpg',
          caption: null,
          copyright: null,
          price: null
        },
        {
          imagePath: './../assets/exhibitions-assets/veertig-jaar-bimhuis/images/cafe-jazz.jpg',
          caption: null,
          copyright: null,
          price: null
        }
      ],
      
      emailAddresses: [],
      websites: []
    },
    {
      id: 'onze-portretten',
      title: 'Onze Portretten',
      date: 'From November 6th till February 1ste 2020',
      artistNames: ['Romy van der Burgh', 'Floortje van der Plas'],
      descriptionPath:'./../assets/exhibitions-assets/onze-portretten/onze-portretten.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/onze-portretten/images/onze-portretten-01.jpg',
          caption: null,
          copyright: null,
          price: null
        }
      ],
      
      emailAddresses: ['onzeportretten@gmail.com'],
      websites: []
    },
    {
      id: 'bloekenblal',
      title: 'Bloekenblal',
      date: 'From March 21th till April 7th 2019',
      artistNames: ['George Maas'],
      descriptionPath:'./../assets/exhibitions-assets/bloekenblal/bloekenblal.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/bloekenblal/images/bloekenblal-2.jpg',
          caption: null,
          copyright: 'George Maas',
          price: null
        },
        {
          imagePath: './../assets/exhibitions-assets/bloekenblal/images/bloekenblal.jpg',
          caption: 'vrouw met bloemen'
        },
        {
          imagePath: './../assets/exhibitions-assets/bloekenblal/images/bloekenblal-george-maas-1.jpg',
          caption: null,
          copyright: 'George Maas',
          price: null
        },
        {
          imagePath: './../assets/exhibitions-assets/bloekenblal/images/bloekenblal-photo-1.jpg',
          caption: null,
          copyright: 'George Maas',
          price: null
        },
        {
          imagePath: './../assets/exhibitions-assets/bloekenblal/images/bloekenblal_2019_georgemaas-45.jpg',
          caption: null,
          copyright: 'George Maas',
          price: null
        }
      ],
      emailAddresses: ['georgemaas@xs4all.nl'],
      websites: ['www.georgemaas.nl']
    },
    {
      id: 'veertig-jaar-bimhuis',
      title: 'Veertig Jaar Bimhuis',
      date: 'From September 1st till November 1st 2019',
      artistNames: ['Diverse artiesten'],
      descriptionPath:'./../assets/exhibitions-assets/veertig-jaar-bimhuis/veertig-jaar-bimhuis.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/veertig-jaar-bimhuis/images/40-jaar-bimhuis-2.jpg',
          caption: 'hanging up photo\s',
          copyright: 'dafsd',
          price: 15
        }
      ],
      
      emailAddresses: [],
      websites: []
    },
    {
      id: 'name-expo',
      title: 'Name Expo',
      date: 'FROM OCTOBER 3TH 2018 TILL MARCH 20TH 2019',
      artistNames: [],
      descriptionPath:'./../assets/exhibitions-assets/name-expo/name-expo.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/name-expo/images/expo-maart-2018-1.jpg',
          caption: null,
          copyright: null,
          price: null
        },
        {
          imagePath: './../assets/exhibitions-assets/name-expo/images/maart-2018-2.jpg',
          caption: null,
          copyright: null,
          price: null
        },
       
      ],
      aspectRatio: 100,
      emailAddresses: [],
      websites: []
    },
    {
      id: 'the-rise-of-the-fall',
      title: 'The Rise of the Fall',
      date: 'september 2017',
      artistNames: ['Particia de Ruijter'],
      descriptionPath:'./../assets/exhibitions-assets/the-rise-of-the-fall/the-rise-of-the-fall.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/the-rise-of-the-fall/images/the-rise-of-the-fall-01.jpg',
          caption: null,
          copyright: null,
          price: null
        }
      ],
      
      emailAddresses: [],
      websites: []
    },
    {
      id: 'over-armando',
      title: 'Over Armando',
      date: 'APRIL 5TH UNTIL JUNE 7TH, 2017',
      artistNames: ['Gerard Wagemakers'],
      descriptionPath:'./../assets/exhibitions-assets/over-armando/over-armando.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/over-armando/images/over-armando-01.jpg',
          caption: null,
          copyright: null,
          price: null
        }
      ],
      
      emailAddresses: [],
      websites: []
    },
    {
      id: 'dogwaggers',
      title: 'Dogwaggers',
      date: null,
      artistNames: ['Mathijs Wessing'],
      descriptionPath:'./../assets/exhibitions-assets/dogwaggers/dogwaggers.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/dogwaggers/images/dogwaggers-01.jpg',
          caption: null,
          copyright: null,
          price: null
        },
        {
          imagePath: './../assets/exhibitions-assets/dogwaggers/images/dogwaggers-02.jpg',
          caption: null,
          copyright: null,
          price: null
        },
        {
          imagePath: './../assets/exhibitions-assets/dogwaggers/images/dogwaggers-03.jpg',
          caption: null,
          copyright: null,
          price: null
        },
      ],
      aspectRatio: 133,
      emailAddresses: [],
      websites: []
    },
    {
      id: 'vissers',
      title: 'Vissers!',
      date: null,
      artistNames: ['Kadir van Lohuizen'],
      descriptionPath:'./../assets/exhibitions-assets/vissers/vissers.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/vissers/images/vissers-01.jpg',
          caption: null,
          copyright: null,
          price: null
        },
      ],
      emailAddresses: [],
      websites: []
    },
    {
      id: 'brick-by-brick-bhaktur-nepal-2015',
      title: 'BRICK BY BRICK BHAKTUR, NEPAL, 2015',
      date: null,
      artistNames: ['Chris de Bode'],
      descriptionPath:'./../assets/exhibitions-assets/brick-by-brick-bhaktur-nepal-2015/brick-by-brick-bhaktur-nepal-2015.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/brick-by-brick-bhaktur-nepal-2015/images/brick-by-brick-bhaktur-nepal-2015-01.jpg',
          caption: null,
          copyright: null,
          price: null
        },
      ],
      emailAddresses: ['cdebode@gmail.com'],
      websites: []
    },
    {
      id: 'liefde-voor-fotografie',
      title: 'Liefde voor fotografie',
      date: 'MARCH 25TH UNTIL APRIL 29TH, 2015',
      artistNames: ['Mark van der Zouw e.a.'],
      descriptionPath:'./../assets/exhibitions-assets/liefde-voor-fotografie/liefde-voor-fotografie.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/liefde-voor-fotografie/images/liefde-voor-fotografie-01.jpg',
          caption: null,
          copyright: null,
          price: null
        },
      ],
      emailAddresses: [],
      websites: ['www.debeeldunie.nl']
    },
    {
      id: 'de-havenstraat',
      title: 'De Havenstraat',
      date: null,
      artistNames: ['Michael Floor'],
      descriptionPath:'./../assets/exhibitions-assets/de-havenstraat/de-havenstraat.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/de-havenstraat/images/de-havenstraat-01.jpg',
          caption: null,
          copyright: null,
          price: null
        },
      ],
      aspectRatio: 80,
      emailAddresses: ['michaelfloor@hotmail.com'],
      websites: []
    },
    {
      id: 'fun-op-festivals',
      title: 'Fun op festivals',
      date: null,
      artistNames: ['Amaury Miller'],
      descriptionPath:'./../assets/exhibitions-assets/fun-op-festivals/fun-op-festivals.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/fun-op-festivals/images/fun-op-festivals-01.png',
          caption: null,
          copyright: null,
          price: null
        },
      ],
      
      emailAddresses: [],
      websites: ['www.amaurymiller.nl']
    },
    {
      id: 'portraits',
      title: 'Portraits',
      date: null,
      artistNames: ['Mark Kohn'],
      descriptionPath:'./../assets/exhibitions-assets/portraits/portraits.html',
      slides: [
        {
          imagePath: './../assets/exhibitions-assets/portraits/images/portraits-01.png',
          caption: null,
          copyright: null,
          price: null
        },
      ],
      aspectRatio: 133,
      emailAddresses: [],
      websites: ['www.kohn.nl']
    },
  ];

  constructor() { }

  getExhibitions() {
    return this.exhibitions;
  }
  getExposition(id) {
    return this.exhibitions.find((exhibition: Exhibition) => {
      return exhibition.id === id;
    })
  }
}
