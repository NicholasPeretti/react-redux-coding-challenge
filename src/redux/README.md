# How to read this directory

This folder contains two main directories:
  * ducks
  * middleware

If you are already familiar with the concept of `duck` you should already now
what there is inside. If it's the first time that you read that term you should
read [this](https://github.com/erikras/ducks-modular-redux)

The `middleware` directory is a little more complicated to understand. A good
idea is to to watch [this talk](https://www.youtube.com/watch?v=5gl3cCB_26M&t=690s) that gives you the basic knowledge to understand
why I chose this architecture.

## Middleware
The directory is splitted in two folders:
  * core
  * app

I put in the `core` directory all the generic and reusable code. For example
you can find an `api.js` file that contains the middleware that allows me to
fetch data via HTTP.

I'm aware that there are middlewares like `redux-thunk` or `redux-saga` out there.
I've been able to test them in other projects but this time I was inspired
from Nir and his talk and I wanted to try a new way to build an application.

Anyway, in the `app` directory I put all the code related to the ducks.
These middlewares' duty is to "catch" some kind of actions and react to them.

For example, when I fetch the cars I emit an `API_REQUEST` action with a
`NAMESPACE` to understand who dispatch the request.

With the `type` and the `NAMESPACE`, every middleware is able to undestrand who
dispatch an action and why.
So in the `Cars` middleware I can set the `fetching` property to true and when
the response action is detected I can set it back to false.

### Why this?
The biggest benefit that I noticed is that all the business logics are
separated.

With this architecture the reducers just need to provide an api to set and get
his properties, nothing more.

All the async and 'complicated' logics stay in the middlewares, and every
middleware can access and edit every part of the store using the reducers api.

Another good example is the fetch action to get the cars.
When this action is dispatched, the `colorsFilter` and `manufacturerFilter`
middlewares catch the action and edit it.

They add the `color` and the `manufacturer` params, without editing the logic
inside the `cars` middleware.

This is super scalable because if we need to add more filters we just need to
create a new middleware that appends his parameter to the action.

### Cons?
When you write a middleware you have to be very careful.

If your middleware has a bug, it could stop the hole action propagation and
freeze your app. So maybe the best thing to do is to keep the middlewares as
simple and small as possible (according to the KISS principle).