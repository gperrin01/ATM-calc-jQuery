// PLEASE EXPLAIN WHEN WE  HAVE TO USE () AND WHEN NOT

// 1) THE CODE
$(document).ready(function() {
  setupEventListerners();
})
var numCurrent = 0; var numSavings = 0;
var CurrentAccount = 0; var SavingsAccount = 0;

// 2) Declare EVENT LISTENERS
var setupEventListerners = function() {

  $('#amount1').on('keyup', function(e) {
   numCurrent = Number($(this).val());
  })
  $('#amount2').on('keyup', function(e) {
   numSavings = Number($(this).val());
  })
  $('#deposit1').on('click', depositCurrent);
  $('#deposit2').on('click', depositSavings);
  $('#withdraw1').on('click', withdrawCurent);
  $('#withdraw2').on('click', withdrawSavings);
}// end of event listerners declaration

// 3) declare functions to be called by the event Listerners

function updateDisplay(item) {
  if (item === '#balance1')
    $(item).text('$'+CurrentAccount);
  else if (item === '#balance2')
    $(item).text('$'+SavingsAccount);
}

function depositCurrent(item) {
  CurrentAccount = CurrentAccount + numCurrent;
  updateDisplay('#balance1');
  toggleRedBorder();
}

function depositSavings() {
  SavingsAccount = SavingsAccount + numSavings;
  updateDisplay('#balance2')
  toggleRedBorder();
}

function withdrawCurent() {
  // withdraw amount = numCurrent, if > Current Account then take from savings
  if (numCurrent <= CurrentAccount) {
    CurrentAccount -= numCurrent;
    updateDisplay('#balance1');
  } 
  else if (numCurrent <= (CurrentAccount + SavingsAccount)) {
    SavingsAccount = SavingsAccount - (numCurrent - CurrentAccount);
    CurrentAccount = 0;
    updateDisplay('#balance1');
    updateDisplay('#balance2');
  }
  else alertPoor(CurrentAccount+SavingsAccount);
  toggleRedBorder();
}

function withdrawSavings() {
  if (numSavings <= SavingsAccount) {
    SavingsAccount -= numSavings;
    updateDisplay('#balance2');
  }
  else alertPoor(SavingsAccount);
  toggleRedBorder();
}

function alertPoor(item) {
  alert('You do not have sufficient funds to perform this operation.\n' + 'The maximum amount you can withdraw is $' + item +'\n\nGet a job!!')
}

function toggleRedBorder() {
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
}; // end of functions to be called



/* inside my event listerners def, this DOESNT WORK
WHYYYYYY

  $('#deposit1').on('click', deposit('CurrentAccount'));
  $('#deposit2').on('click', deposit('SavingsAccount'));
  $('#withdraw1').on('click', withdrawCurent);
  $('#withdraw2').on('click', withdrawSavings);
// end of event listerners declaration

----functions to be called by the event Listerners

var deposit = function(item) {
  if (item === 'CurrentAccount') {
    CurrentAccount = CurrentAccount + numCurrent;
    $('#balance1').text('$'+CurrentAccount);
  }
  else if (item === 'SavingsAccount') {
    SavingsAccount = SavingsAccount + numSavings;
    $('#balance2').text('$'+SavingsAccount);
  }
  toggleRedBorder();
}
 */

