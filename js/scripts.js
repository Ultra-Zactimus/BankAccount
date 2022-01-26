function Account() {
  this.name = {};
  // this.currentId = 0;
}

// Account.prototype.assignId = function() {
//   this.id += 1;
//   return this.currentId;
// }


function User(name, balance) {
  this.name = name;
  this.startDeposit = startDeposit;
  this.balance = balance;
}

User.prototype.deposit = function(deposit, balance) {
  const deposit = $("input#depo").val();
  this.user.balance = (this.user.balance + deposit);
  
}

User.prototype.withdrawal = function(withdrawal, balance) {
  const withdrawal = $("input#with").val();
  this.user.balance = (this.user.balance - withdrawal);
}




$(document).ready(function() {
  $("form#submitAccount").submit(function(event) {
    event.preventDefault();
    const name = $("#userName").val();
    const startDeposit = $("#initDepo").val();
    let newAccount = new User(name, startDeposit);
  

  });
  $("form#withDepo").submit(function(event) {
    event.preventDefault();
    
  
  
  });
});



