import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CustomerServiceService } from "../customer-service.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.sass']
})
export class CustomersComponent implements OnInit {

  public form = {
    c_name: null,
    nic: null,
    address: null,
    telephone: null
};

public error = null;

  constructor(
    private router: Router,
    private CustomerServiceService:CustomerServiceService
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    var LoadBtn = 'Saving <i class="fa fa-spinner fa-spin"></i>';
    var Saving = document.getElementById("SaveBtn");
    Saving.setAttribute("disabled", "true");
    Saving.innerHTML = LoadBtn;

    this.CustomerServiceService.SaveData(this.form).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
    );
  }

handleResponse(data) {
  this.router.navigateByUrl('/Issue');
}

handleError(error) {
  //this.error = error.error.error;
  console.log(error);
}

  TelAddBtn()
  {
    var TelInput = '<input type="text" class="form-control" id="telephone" name="telephone" placeholder="Enter telephone">';
    document.getElementById("TelephoneNumSection").innerHTML = TelInput;
  }

  TelRemoveBtn()
  {
    var TelInput = '<input type="text" class="form-control" id="telephone" name="telephone" placeholder="Enter telephone">';
    document.getElementById("TelephoneNumSection").innerHTML = "";
  }
}
