import swal from 'sweetalert2';
import { Currency } from './../src/currency.js';
import $ from 'jquery';
import './style.css';

$(document).ready(function () {
$("#montey").submit(function (event){
  event.preventDefault();
  let input = $("input").val();
  console.log(input);
  (async () => {
    let currency = new Currency();
    const response = await currency.getExchangeInfo(input);
    getElements(response);
  })();
  function getElements(response) {
    
  
  if (response) {
    console.log(response);
    swal.fire("yooooo");
    }
  }
  });
});