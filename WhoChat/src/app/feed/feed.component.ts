import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {CardService} from '../services/card.service';
import {DataService} from '../services/data.service';


declare var $: any;
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [AuthService, CardService]
})
export class FeedComponent implements OnInit {

  
  cards: any;
  textValue: string;
  profile: any;
  showComments: boolean[];
  // commentValue: string;
  i: number;
  tag: string;
  titleTag: string


  constructor(private auth:AuthService, private cardservice:CardService, private data: DataService) {
    
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.tag = message);
    this.titleTag = this.tag.toUpperCase()
    this.showComments = [];

    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = this.auth.userProfile;
        // console.log(this.profile);
        this.cardservice.createUser(this.profile.nickname).subscribe(userResponse => {});
      });
    }
    this.cardservice.getCards(this.tag).subscribe(cardsResponse => {
      if(cardsResponse != undefined){
        this.cards = cardsResponse;
        
        for(this.i = 0; this.i < this.cards.length; this.i++){
          this.showComments.push(false);
          
          
        }
      }
     
    });


    
    
    
    


  }

  logComment(nickname: string, message: string, userComment: string, commentValue: string){
    // this.commentValue = $("#commentMessage").text();
    if(commentValue != undefined && commentValue != ""){
      this.cardservice.postComment(nickname, message, userComment, commentValue).subscribe(cardResponse => {
        this.cardservice.getCards(this.tag).subscribe(thecardsResponse => {
          this.cards = thecardsResponse;
        });
      });
    }
    
  }

  logPost(){
    this.cardservice.postCard(this.textValue, this.profile.nickname, this.tag).subscribe(cardResponse => {
      this.cardservice.getCards(this.tag).subscribe(thecardsResponse => {
        this.cards = thecardsResponse;
      });
    });
    
    // console.log(this.cards);
    // console.log(this.textValue);
  }


  upvote(message:string){
    this.cardservice.upvote(message, this.profile.nickname).subscribe(cardResponse => {
      this.cardservice.getCards(this.tag).subscribe(thecardsResponse => {
        this.cards = thecardsResponse;
      });
    });

    
  }

  downvote(message:string){
    this.cardservice.downvote(message, this.profile.nickname).subscribe(cardResponse => {
      this.cardservice.getCards(this.tag).subscribe(thecardsResponse => {
        this.cards = thecardsResponse;
      });
    });
  }



}
