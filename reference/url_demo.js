const url = require('url');

const myUrl = new URL(
  'http://urlmwitu.co.ke:8080/hello.html?id=1&status=active'
);

// Serialize URL
console.log(myUrl.href);
console.log(myUrl.href.toString());

// Host/Root domain
console.log(myUrl.host);

// Host name (Does not get port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params objects
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('gender', 'M');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));
