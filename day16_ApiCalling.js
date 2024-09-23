//4 ways to call api - XMLHttpRequest, fetch, axios, jquery but Axios is more popular

/*
Axios is a promise-based HTTP Client for node.js and the browser. It can run in the browser and nodejs with the same codebase). 
On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
Features:
Make XMLHttpRequests from the browser
Make http requests from node.js
Supports the Promise API
Intercept request and response
Transform request and response data
Cancel requests
Automatic request body serialization to:
-JSON (application/json)
-Multipart / FormData (multipart/form-data)
-URL encoded form (application/x-www-form-urlencoded)

Installing: $ npm install axios    or use CDN

// axios(config)
// axios(url [, config])

// axios.get(url [, config])
// axios.post(url [, config])
// axios.put(url [, config])
// axios.patch(url [, config])
// axios.delete(url [, config])

*/

// axios returns response object - data, status, statusText, headers, config
console.clear();

/*
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
      id: 1,
      title: "fooan",
      body: "barr",
      userId: 1,
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

axios
  .patch("https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
      title: "atikkkkkkkkkkkkk",
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

axios
  .delete("https://jsonplaceholder.typicode.com/posts/1", {})
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
*/

// To simply the above code:

const makeRequest = async (config) => {
  return await axios(config);
};

const getData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "get",
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
getData();

/*
const createData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

createData();
*/

/*
const updateData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "put",
    data: JSON.stringify({
      id: 1,
      title: "atik",
      body: "ariyan",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
updateData();
*/

const deleteData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "delete",
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
deleteData();

// To see the result run Index4.html file
