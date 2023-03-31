import { Component, Input } from '@angular/core';
import { NhomQuyenMenuService } from './service/nhom-quyen-menu/nhom-quyen-menu.service';
import { NhomQuyenService } from './service/nhom-quyen/nhom-quyen.service';
import { RightService } from './service/right/right.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() nameNhomQuyen!: any;
  check !: boolean;
  nhomQuyen: any;
  nhomQuyenMenu: any;
  rights: any;
  listDSNhomQuyenMenu : any;
  constructor(private nhomQuyenService: NhomQuyenService,private nhomQuyenMenuService: NhomQuyenMenuService, private rightService: RightService) { }

  ngOnInit() {
   this.getAllNhomQuyen();
   this.getAllNhomQuyenMenu();
   this.getAllRight();
  }
  getAllNhomQuyen() {
    this.nhomQuyenService.getAllNhomQuyen().subscribe(data => {
      this.nhomQuyen = data;
      console.log(this.nhomQuyen);
    });
  }


  getAllNhomQuyenMenu() {
    this.nhomQuyenMenuService.getAllNhomQuyenMenu().subscribe(data => {
      this.nhomQuyenMenu = data;
      console.log(this.nhomQuyenMenu);
    });
  }
  getNhomQuyenMenuById(id: number) {
    this.check = true;
    this.nhomQuyenMenuService.getNhomQuyenMenuById(id).subscribe(data => {
      this.nhomQuyenMenu = data;
      this.nameNhomQuyen = this.nhomQuyenMenu[0].nhom_quyen.name;
      console.log(this.nhomQuyenMenu);
    });
  }

  getAllRight() {
    this.rightService.getRightAll().subscribe(data => {
      this.rights = data;
      console.log(this.rights);
    });
  }
  getCheck(value: any) {
    this.nhomQuyenMenu.right = value;
    console.log(this.nhomQuyenMenu.right);
  }
  getRole(value: any) {
    this.listDSNhomQuyenMenu = value;
    console.log(value);
  }
  getRight(value: any) {
    this.rights.forEach((element: any) => {
      if (element.id == value) {
        this.nhomQuyenMenu.right = element;
        console.log(this.nhomQuyenMenu.right);
      }
    });
   }
   equal(list: any, name: string) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name == name) {
        return true;
      }
    }
    return false;
  }
  value = {
      id: 0,
      nhom_quyen: {
          id: 0,
          name: ""
      },
      menu_item: {
          id: 0,
          name: "",
          menu: {
              id: 0 ,
              name: ""
          }
      },
      right_id: []

  }
  updateRightNhomQuyenMenu(data: any) {
    data = this.value;
    data.id = this.nhomQuyenMenu[0].id;
    data.nhom_quyen.id = this.nhomQuyenMenu[0].nhom_quyen.id;
    data.nhom_quyen.name = this.nhomQuyenMenu[0].nhom_quyen.name;
    data.menu_item.id = this.nhomQuyenMenu[0].menu_item.id;
    data.menu_item.name = this.nhomQuyenMenu[0].menu_item.name;
    data.menu_item.menu.id = this.nhomQuyenMenu[0].menu_item.menu.id;
    data.menu_item.menu.name = this.nhomQuyenMenu[0].menu_item.menu.name;
    data.right_id = this.listDSNhomQuyenMenu;
    console.log('data',data);
    this.nhomQuyenMenuService.updateRightNhomQuyenMenu(data).subscribe(data => {
      console.log('data',data);
    }
    );
  }

}
