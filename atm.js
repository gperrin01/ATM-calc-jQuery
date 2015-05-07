// PLEASE EXPLAIN WHEN WE  HAVE TO USE () AND WHEN NOT

$(document).ready(function() {
  setupEventListerners();
})

var numCurrent = 0; var numSavings = 0;
var CurrentAccount = 0; var SavingsAccount = 0;

// declare function for all EVENT LISTENERS
var setupEventListerners = function() {

  $('#amount1').on('keyup', function(e) {
   numCurrent = Number($(this).val());
  })
  $('#amount2').on('keyup', function(e) {
   numSavings = Number($(this).val());
  })
  $('#deposit1').on('click', function(e) {
    CurrentAccount = CurrentAccount + numCurrent;
    $('#balance1').text('$'+CurrentAccount);
    toggleRedBorder();
  })
  $('#deposit2').on('click', function(e) {
    SavingsAccount = SavingsAccount + numSavings;
    $('#balance2').text('$'+SavingsAccount);
    toggleRedBorder();
  })

  // withdrawal from current account
  $('#withdraw1').on('click', function(e) {
    // withdraw amount = numCurrent, if > Current Account then take from savings
    if (numCurrent <= CurrentAccount) {
      CurrentAccount -= numCurrent;
      $('#balance1').text('$'+CurrentAccount);
    } 
    else if (numCurrent <= (CurrentAccount + SavingsAccount)) {
      SavingsAccount = SavingsAccount - (numCurrent - CurrentAccount);
      CurrentAccount = 0;
      $('#balance1').text('$'+CurrentAccount);
      $('#balance2').text('$'+SavingsAccount);
    }
      else {alert('You do not have sufficient funds to perform this operation.\n' + 'The maximum amount you can withdraw is $' + CurrentAccount+SavingsAccount +'\n\nGet a job!!')}
    toggleRedBorder();
  })

  // withdrawal from savings account
  $('#withdraw2').on('click', function(e) {
    if (numSavings <= SavingsAccount) {
      SavingsAccount -= numSavings;
      $('#balance2').text('$'+SavingsAccount);
    }
    else {alert('You do not have sufficient funds to perform this operation.\n' + 'The maximum amount you can withdraw is $' + SavingsAccount +'\n\nGet a job!!')}
    toggleRedBorder();
  })


}// end of event listerners declaration

// functions to be called by the event Listerners
var toggleRedBorder = function () {
  if (CurrentAccount===0) {
    $('#balance1').addClass('zero');
    $('#balance1').removeClass('account');
  } else {
      $('#balance1').addClass('account');
      $('#balance1').removeClass('zero')
    }
  
  if (SavingsAccount===0) {
    $('#balance2').addClass('zero');
    $('#balance2').removeClass('account')
  } else {
      $('#balance2').addClass('account');
      $('#balance2').removeClass('zero') 
    }
};
