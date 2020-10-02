// without base
const myUrl = new URL("https://myworld.com/index.php?id=1&name=sjk");

const myUrlWithBase = new URL("index.php?id=1&name=sjk", "https://myworld.com:3000/");

// serialize URL
console.log(myUrl.href);

//toString
console.log(myUrlWithBase);


//Host name
console.log(myUrlWithBase.hostname);

// Host with port address
console.log(myUrlWithBase.host);

// Only port number
console.log(myUrlWithBase.port);

// Parameters
console.log(myUrlWithBase.search);

// Parameters as an array
console.log(myUrlWithBase.searchParams);
