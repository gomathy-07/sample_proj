import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit {
  ngOnInit(){}
  

  defaultQuestion = 'Advanced';
  a;
  b;
  c;

  constructor(private appservice:AppserviceService,private router:Router){
    
  }
  onSubmit(frm)
  {
    this.a=frm.value.email;
    this.b=frm.value.sub;
    this.c=frm.value.password;
    this.appservice.getdetails(this.a,this.b,this.c);
    this.router.navigate(['/sample2']);
  }
 clean()
 {
  if(confirm("Are you sure to Clear this Form ?")) 
  {
  }
 }

}
