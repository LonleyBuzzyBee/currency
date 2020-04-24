// import swal from 'sweetalert2';
import { Currency } from './../src/currency.js';
import $ from 'jquery';
import './style.css';
import Swal from 'sweetalert2';

$(document).ready(function () {
$("#montey").submit(function (event){
  event.preventDefault();
  let input = parseInt($("input").val());
  let type = $("#type").val();
  console.log(input);
  (async () => {
    let currency = new Currency(input);
    const response = await currency.getExchangeInfo();
    getElements(response,type);
  })();

  function getElements(response, type) {
  
    if (!response && type === null) {
     
      Swal.fire("whoops sorry currency doesn't exist");
  
  }else if (response && type === "AED") {
    console.log(response);
    $("#output").text(`${type}`+":"+`${response.conversion_rates.AED}`*input);
  } else if (response && type === "EUR") {
     $("#output").text(`${type}`+":"+`${response.conversion_rates.EUR}`*input);
  } else if (response && type === "KRW") {
    $("#output").text(`${type}` + ":" + `${response.conversion_rates.KRW}` * input);
    
  } else if (response && type === "CNY") {
     $("#output").text(`${type}` + ":" + `${response.conversion_rates.KRW}` * input);
    } else {
      swal.fire("Error Error ERROR ERROR");
    }
  }

  });
});