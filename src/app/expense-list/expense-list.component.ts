import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Array<any>;
  constructor(private expenseservice: ExpenseService) { }

  ngOnInit() {
    this.expenseservice.getAll().subscribe(data => {
      this.expenses = data;
    });
  }

}
