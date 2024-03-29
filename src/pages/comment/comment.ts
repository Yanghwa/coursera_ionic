import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../shared/comment';

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  comment: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, 
    private formbuilder: FormBuilder) {
      this.comment = this.formbuilder.group({
        author: ['', Validators.required],
        rating: 5,
        comment: ['', Validators.required],
        date: ''
      });
  }

  onSubmit() {
    console.log(this.navParams.get('dish'));
    this.comment.value.date = new Date().toISOString();
    console.log(this.comment.value);
    this.viewCtrl.dismiss(this.comment.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
