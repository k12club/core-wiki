import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AngularFireStorage } from '../../../../node_modules/angularfire2/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  wikiList: AngularFireList<any>;
  wikis: any[];
  constructor(db: AngularFireDatabase,private router:Router,private storage:AngularFireStorage) { 
    this.wikiList = db.list('wikis');
  }

  ngOnInit() {
    this.wikiList.snapshotChanges().map(actions => {
    return actions.map(action => ({ key: action.key, value: action.payload.val() }));
    }).subscribe(items => {
    this.wikis = items;
    });

    
  }
  delWiki(data){
    this.wikiList.remove(data.key)
    console.log(data);
    
    
    
  }
  editWiki(data){
    this.router.navigate([`/editWiki/${data.key}`]);
  }

}