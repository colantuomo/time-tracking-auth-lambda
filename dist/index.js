var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/login.ts
function login() {
  return "login works!";
}

// src/register.ts
function register() {
  return "register works!";
}

// index.ts
var handler = (event, context) => __async(void 0, null, function* () {
  return `Hello, world! Your request was received at ${event.requestContext.requestTime}! - ${register()} - ${login()}`;
});
export {
  handler
};
