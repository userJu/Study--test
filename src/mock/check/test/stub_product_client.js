class StubProductClient {
  async fetchItems() {
    return [
      { item: "๐ฅ", available: true },
      { item: "๐", available: false },
    ];
  }
}
// product client์ ๋น์ทํ์ง๋ง
// ๋ฐ์ดํฐ๋ฅผ ๋คํธ์ํฌ๋ฅผ ์ด์ฉํด ๋ฐ์์ค๋ ๊ฒ์ด ์๋๋ผ
// ๋ฐ๋ก returnํ๋ค๋ ์ฐจ์ด์ ์ด ์๋ค.

module.exports = StubProductClient;
