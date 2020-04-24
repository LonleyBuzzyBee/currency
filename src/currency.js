export class Currency {
  async getExchangeInfo() {
    try {
      let exchange = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`, {
        "method":"GET"
    
        });
      let jsonifiedResponse;
      if (exchange.ok && exchange.status == 200) {
        jsonifiedResponse = await exchange.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;

    } catch (error) {
      return false;
    }
  }
  // async getElements(input) {
   
  
  // if (response) {
  //   console.log(response);
  //   $("#output").text(`${response.conversion_rates.AED}`);
  //   }
  // }
}