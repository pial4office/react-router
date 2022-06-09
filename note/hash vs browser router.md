# Router Difference

## Hash Router

```
https://developer.mozilla.org/en-US/docs/Web/API/URL#properties
```

When we visit the above page, the browser won't send the #properties value to the server. It is interpreted by the browser and accessible through JavaScript.

The above fact makes the hash a good candidate to use when creating the routing for a single-page application. With SPA, we generally provide the same initial HTML code for every page. We then use JavaScript to generate the page according to the URL.

**Advantage**

- The main selling point of the hash routing is that the browser doesn’t send the information about the route to the web server. Thanks to that, the configuration is very straightforward.

**Disadvantage**

- The issue with the hash routing is the fact that it looks a little out of place. This is because users are often accustomed to clean and simple URLs. Therefore, a hash in the middle might look strange.

## Browser router

```
https://developer.mozilla.org/en-US/docs/Web/API/URL
```

Even if we develop a single-page application, the browser sends the whole URL to the server. Even though we have defined a route using React Router, the web server we use to host our application might not know about it.

Accessing the https://app.com/posts route might lead to the 404 Not Found error. We need to configure our web server to respond with our React application regardless of the exact route for it to work. By doing that, we let React Router do all of the work needed to figure out what to present based on the URL.

The web server configuration will differ depending on whether you use nginx, Apache, Amazon S3, or something else.

**Advantage**

- A big advantage of the BrowserRouter is the fact that the URLs look cleaner. They no longer include the # character, which might also be a good thing for SEO. With the BrowserRouter, our users can no longer notice right away that they are dealing with a single-page application by looking at the URL.

**Disadvantage**

- While the BrowserRouter has a lot of advantages, it comes with the cost of requiring additional configuration. It would be cumbersome to point each URL to our React application separately. Therefore, we need to configure our web server to always respond with the same HTML for every possible URL. If we want to serve the API in the same origin, we need to create a pattern for it and don’t serve the React application if the URL contains the _/api/_ pattern, for example.

**resource**

https://wanago.io/2021/04/19/hashrouter-browserrouter-react/
