class StubProductClient {
  async fetchItems() {
    return [
      { item: "🥛", available: true },
      { item: "🍌", available: false },
    ];
  }
}
// product client와 비슷하지만
// 데이터를 네트워크를 이용해 받아오는 것이 아니라
// 바로 return한다는 차이점이 있다.

module.exports = StubProductClient;
