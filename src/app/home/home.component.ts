import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp  from './../app.reducer';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedLanguage$: Observable<string>
  language: string = 'dutch'
  reader = new FileReader
  link = 'assets'

  constructor(
    private store: Store<fromApp.GlobalState>,
    private http: HttpClient
  ) {
    

  }
  

  ngOnInit(): void {
    fetch(`./assets/text.txt`)
    // .then(response => {
    //   return response.text()
    // })
    // .then(text => console.log(text));

    // fetch('./assets/html.html')
    // .then(response => {
    //   return response.text()
    // })
    // .then(text => console.log(text));

    // function readSingleFile(evt) {
    //   //Retrieve the first (and only!) File from the FileList object
    //   var f = evt.target.files[0]; 
    
    //   if (f) {
    //     var r = new FileReader();
    //     r.onload = function(e) { 
    //       var contents = e.target.result;
    //       alert( "Got the file.n" 
    //             +"name: " + f.name + "n"
    //             +"type: " + f.type + "n"
    //             +"size: " + f.size + " bytesn"
    //             + "contents:" + contents
    //            );  
    //     }
    //     r.readAsText(f);
    //   } else { 
    //     alert("Failed to load file");
    //   }
    // }
    
    // document.getElementById('htmlFile').addEventListener('change', readSingleFile, false);

    this.selectedLanguage$ = this.store.select(fromApp.getSelectedLanguage);
    this.store.select(fromApp.getSelectedLanguage).subscribe((selectedLanguage: string) => {
      this.language = selectedLanguage
    });
  }
}
