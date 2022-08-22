async function start() {
  return await Promise.resolve("async is working");
}

start().then(console.log);
const unused = a;
class Util {
  static id = Date.now();
}

console.log(Util.id);
