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
    $('#balance1').text(CurrentAccount);
  })
  $('#deposit2').on('click', function(e) {
    SavingsAccount = SavingsAccount + numSavings;
    $('#balance2').text(SavingsAccount);
  })

}// end of event listerners declaration

