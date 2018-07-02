import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {
//依赖注入
// constructor(private router:Router){
// }
//点击跳转
// doClick(){
//   this.router.navigate(['/product']);
// }
  constructor() { }

  ngOnInit() {
  }

}
