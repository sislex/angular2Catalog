import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/token').subscribe((token) => {
        console.log(token);

        // this.http.post('http://127.0.0.1:8000/api/products', {_token: ''}).subscribe((data) => {
        //     console.log(data);
        // });
    });

  }
}
