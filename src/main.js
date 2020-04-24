import swal from 'sweetalert2';
import { Currency } from './../src/currency.js';
import $ from 'jquery';
import './../src/style.css';


$(document).ready(function () {
$("#montey").submit(function (event){
  event.preventDefault();
  let input = $("input").val();
  let type = $("#type").val();
  console.log(input);
  (async () => {
    let currency = new Currency(input);
    const response = await currency.getExchangeInfo();
    getElements(response,type);
  })();

  function getElements(response, type) {
  
  
   
  if (response && type === "AED") {
      console.log(response);
      $("#output").text(`${type}` + ":" + " " + `${response.conversion_rates.AED}` * input);
    } else if (response && type === "EUR") {
      $("#output").text(`${type}` + ":" + " " + `${response.conversion_rates.EUR}` * input);
    } else if (response && type === "KRW") {
      $("#output").text(`${type}` + ":" + " " + `${response.conversion_rates.KRW}` * input);
    
    } else if (response && type === "CNY") {
      $("#output").text(`${type}` + ":" + " " + `${response.conversion_rates.KRW}` * input);
    } else if (response && type === "BGN") {
       $("#output").text(`${type}` + ":" + " " + `${response.conversion_rates.BGN}` * input);
    } else {
      swal.fire("whoops sorry currency doesn't exist");
    }
  }

  });
});