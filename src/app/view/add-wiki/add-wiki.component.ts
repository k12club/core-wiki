import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-add-wiki',
  templateUrl: './add-wiki.component.html',
  styleUrls: ['./add-wiki.component.scss']
})
export class AddWikiComponent implements OnInit {
   // Angular 2 Input Mask

   public dateModel = '';
   public dateMask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
 
   public phoneModel = '';
   public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
 
   public taxModel = '';
   public taxMask = [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
 
   public ssnModel = '';
   public ssnMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
 
   public eyeScriptModel = '';
   public eyeScriptMask = ['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/];
 
   public ccnModel = '';
   public ccnMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
 
 
  wiki: any = {};
  title: string = "Add Wiki"
  id;

  constructor(private firebaseService: FirebaseService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.title = "Edit wiki";
      this.getWikiByKey(this.id);
    }
  }
  addWiki(data: NgForm) {
    if (this.id) {
      this.firebaseService.editWiki(this.id, data.value).then(this.goToHome);
    } else {
      this.firebaseService.addWiki("/wikis").push(data.value).then(this.goToHome);
    }
  }
  getWikiByKey(id) {
    this.firebaseService.getWiki(id).subscribe(data => {
      this.wiki = data;
    })
  }
  goToHome = () => {
    this.router.navigate(['/home']);
  }
}
