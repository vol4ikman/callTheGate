import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { User } from "../../models/user";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    user = {} as User;

    constructor( public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private alertCtrl: AlertController ) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    presentAlert( error_title ) {
      let alert = this.alertCtrl.create({
        title: error_title,
        buttons: ['Dismiss']
      });
      alert.present();
    }

    loginUser(user: User) {
        try {
            const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
            if (result) {
                console.log(result);
                //this.navCtrl.setRoot('HomePage');
                return;
            }
        }
        catch (e) {
            console.error(e);
            this.presentAlert( e.message );
        }
      }

}
