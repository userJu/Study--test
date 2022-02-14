const ProductClient = require("./product_client.js");

class ProductService {
  constructor(productClient) {
    this.productClient = new ProductClient();
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;

// no di : no dependency injection. 안좋음
