import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
      this.mensajes =  this.dataservice.getData();
    //  .subscribe( (posts: any[]) =>{
    //   console.log(posts);
    //   this.mensajes = posts;
    //  });
  }

  escuchaclick(id: number)
  {
    // console.log('click en:', id);
  }

}
