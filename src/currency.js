export class Currency {
  async getExchangeInfo() {
    try {
      let exchange = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`,
  {
    "result": "success",
    "documentation": "https://www.exchangerate-api.com/docs",
    "terms_of_use": "https://www.exchangerate-api.com/terms",
    "time_zone": "UTC",
    "time_last_update": 1587686403,
    "time_next_update": 1587772923,
    "base": "USD",
    "conversion_rates": {
        "USD": 1,
        "AED": 3.6721,
        "ARS": 66.2421,
        "AUD": 1.5726,
        "BGN": 1.8143,
        "BRL": 5.4418,
        "BSD": 1.0000,
        "CAD": 1.4117,
        "CHF": 0.9748,
        "CLP": 857.6761,
        "CNY": 7.0814,
        "COP": 4078.6190,
        "CZK": 25.5479,
        "DKK": 6.9130,
        "DOP": 54.7641,
        "EGP": 15.7187,
        "EUR": 0.9268,
        "FJD": 2.2753,
        "GBP": 0.8099,
        "GTQ": 7.7107,
        "HKD": 7.7510,
        "HRK": 7.0266,
        "HUF": 331.0257,
        "IDR": 15280.0886,
        "ILS": 3.5468,
        "INR": 76.1661,
        "ISK": 146.9648,
        "JPY": 107.5855,
        "KRW": 1229.8659,
        "KZT": 436.9949,
        "MXN": 24.5727,
        "MYR": 4.3599,
        "NOK": 10.6774,
        "NZD": 1.6687,
        "PAB": 1.0000,
        "PEN": 3.3686,
        "PHP": 50.6676,
        "PKR": 160.0953,
        "PLN": 4.2108,
        "PYG": 6588.5385,
        "RON": 4.4883,
        "RUB": 75.0858,
        "SAR": 3.7554,
        "SEK": 10.0914,
        "SGD": 1.4242,
        "THB": 32.3226,
        "TRY": 6.9596,
        "TWD": 30.0646,
        "UAH": 26.9813,
        "UYU": 43.0191,
        "ZAR": 19.0757
      }
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
}