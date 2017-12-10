import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {DataService} from '../services/data.service';

declare var $: any;

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  
})
export class TagsComponent implements OnInit, AfterViewChecked {

  tag: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.tag = message);
  }



  ngAfterViewChecked(){
    // Increments the delay on each item.
    $('.rolldown-list li').each(function () {
      var delay = ($(this).index() / 4) + 's';
      $(this).css({
        webkitAnimationDelay: delay,
        mozAnimationDelay: delay,
        animationDelay: delay
      });
    });

    $('.rolldown-list li').click(function(){
      $('.rolldown-list li').css({
        "background-color": "#444"
      }).removeClass("selected");
      $(this).css({
        background: "#001f3f"
      }).addClass("selected");
    });




    // $('#btnReload').click(function () {
    //   // $('#myList').removeClass('rolldown-list');
    //   // setTimeout(function () {
    //   //   $('#myList').addClass('rolldown-list');
    //   // }, 1);
    //   console.log("value: " , $(".selected").text());
    //   this.changeTag($(".selected").text());


    // });

    


  }

  changeTag(){
    this.data.changeMessage($(".selected").text().toLowerCase() || "#funny");
  }

}
