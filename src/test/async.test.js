const fetchProduct = require("../async");

describe("Async", () => {
  it("async-done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });
  it("async-return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });
  it("async-await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async-resolves", () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });
  it("async-reject", () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});

// 해결 방법
// 1. 수동적으로 끝나는 시간을 명시한다 (done)
// describe("Async", () => {
//   it("async", (done) => {
//     fetchProduct().then((item) => {
//       expect(item).toEqual({ item: "Milk", price: 200 });
//       done();
//     });
//   });
// });

// 2. return을 이용한다
// it("async-return", () => {
//   return fetchProduct().then((item) => {
//     expect(item).toEqual({ item: "Milk", price: 200 });
//   });
// });

// 3. async - await을 사용한다
// it("async-await", async () => {
//   const product = await fetchProduct();
//   expect(product).toEqual({ item: "Milk", price: 200 });
// });

// 4. resolve와 reject
// it("async-resolves", () => {
//   return expect(fetchProduct()).resolves.toEqual({
//     item: "Milk",
//     price: 200,
//   });
// });
// it("async-reject", () => {
//   return expect(fetchProduct("error")).rejects.toBe("network error");
// });
