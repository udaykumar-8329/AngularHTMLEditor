import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  html = '';
  css = '';
  js = '';
  total = '';

  constructor() { }

  ngOnInit(): void {
  }

  execute() {

    this.total = this.css + this.js + this.html;
    let output = document.getElementById('output');
    output.innerHTML = '';
    output.innerHTML = this.total;
  }
}
