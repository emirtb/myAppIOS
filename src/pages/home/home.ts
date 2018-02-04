import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AdMobFree  } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /* tabStart:string = "StartPage";
  tabMap:string = "MapPage"; */

  constructor(public navCtrl: NavController, private admobFree:AdMobFree, public platform:Platform) {

  }
  ionViewDidLoad() {
  
    setTimeout(()=> {
      this.showBanner();
   }, 1000);
    
    console.log('ionViewDidLoad NearBusinessPage');
  }


  showBanner(){
   
 
    if(this.platform.is('android')) {
      
            
                this.admobFree.banner.config({
                 id: '',
                 isTesting: false,
                 bannerAtTop: false,
                 overlap: false,
                 offsetTopBar: false
                }); 
      
               }
               if(this.platform.is('ios')) {
                  //let conf :AdMobFreeBannerConfig  = new AdMobFreeBannerConfig();
                  
                     this.admobFree.banner.config({
                      id: '',
                      isTesting: false,
                      autoShow: false ,
                      overlap:false,
                      bannerAtTop: false,

                     }); 
          
               }
      
                
                this.admobFree.banner.prepare()
               .then(() => {
                 console.log("admob ready");
                 this.admobFree.banner.show();
                 
                 //this.admobFree.banner.show();
               }).catch(e => {
                
                
                console.log("error");
                console.log(e);
               }
              );  
   
  }

}
