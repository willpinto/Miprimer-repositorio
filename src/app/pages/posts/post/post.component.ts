import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input() mensaje: any;
  @Output() clickpost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.clickpost.emit(this.mensaje.id);
  }

}
