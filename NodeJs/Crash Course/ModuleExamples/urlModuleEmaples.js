const url = require('url');

const exampleUrl = new URL('http://web.com:8080/index.html?id=3&status=active');

//Serialized Url
console.log(exampleUrl.href);

//Root domain
console.log(exampleUrl.host);

//HostName (no ports)
console.log(exampleUrl.hostname);

//PathName
console.log(exampleUrl.pathname);

//Queries
console.log(exampleUrl.search);

//Adding queries 
exampleUrl.searchParams.append("hotel","trivago");
console.log(exampleUrl.searchParams);

//Loop through params
exampleUrl.searchParams.forEach((value,name) => {
    console.log(name + ":" + value);
})
