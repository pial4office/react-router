# `<Link>`

A `<Link>` is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a `<Link>` renders an accessible `<a>` element with a real href that points to the resource it's linking to.
This means that things like right-clicking a `<Link>` work as you'd expect. You can use `<Link reloadDocument>` to skip client side routing and let the browser handle the transition normally (as if it were an `<a href>`).

A relative `<Link to>` value (that does not begin with /) resolves relative to the parent route, which means that it builds upon the URL path that was matched by the route that rendered that `<Link>`. It may contain .. to link to routes further up the hierarchy. In these cases, .. works exactly like the command-line cd function; each .. removes one segment of the parent path.

`<Link to>` with a .. behaves differently from a normal `<a href>` when the current URL ends with /. `<Link to>` ignores the trailing slash, and removes one URL segment for each ... But an `<a href>` value handles .. differently when the current URL ends with / vs when it does not.

# `<NavLink>`
