## URI Rules :
  - The Object Must Be a Noun : /users GET, /users/123 GET
  - Avoid deep nesting : /users/123/orders/456/products/789

## HTTP Methods :
  - GET : Retrieve a resource
  - POST : Create a resource
  - PUT : Update a resource
  - DELETE : Delete a resource
  - PATCH : Update a resource (not idempotent)
  - PUT: Update a resource (idempotent)
  - OPTIONS: Get information about a resource
  - HEAD: Get headers of a resource

## Status Codes :
  - Don't return status codes inside payload
  - 100 Codes : 100 Continue
  - 200 Codes : 200 OK, 201 Created, 202 Accepted, 204 No Content
  - 300 Codes : 301 Moved Permanently, 304 Not Modified
  - 400 Codes : 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 405 Method Not Allowed, 409 Conflict, 429 Too Many Requests
  - 500 Codes : 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable

## Versioning :
  - URI Versioning : /v1/users/123
  - Custom Request Header : X-API-Version: 1
  - Accept Header : Accept: application/vnd.company.app-v2+json

## Pagination :
  - Use limit and offset : /users?limit=10&offset=10
  - Use after and before : /users?after=123&before=456
  - Use page and size : /users?page=2&size=10

## Links :
  - Use HATEOAS : { "name": "John Doe", "links": [ { "rel": "self", "href": "/users/123" } ] }