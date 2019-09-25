
**Heroku App URL (need before each method url):`https://mypartyplanner.herokuapp.com`**

**Register and Login**

| Method | Endpoint             | Description                                                                                                                                                                                                                                                            |
| ------ | -------------        | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/auth/register        |    Require `username` , `password`  / must be < 255 characters /`username` must be unique                                                                                                                      |
| POST   | /api/auth/login           | Require `username` , `password` /  |


**Categories**
| Method | Endpoint             | Description                                                                                                                                                                                                                                                            |
| ------ | -------------        | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET   | /api/categories        | |
| POST   | /api/categories          | Require `category`  |
| GET   | /api/categories/:id          | Require validated id  |
| PUT   | /api/categories/:id          | Require validated id  |
| DELETE   | /api/categories/:id          | Require validated id  |

*Example /GET `/api/categories`*
```[
  {
    "id": 1,
    "category": "Birthday Party"
  },
  {
    "id": 2,
    "category": "Dinner Party"
  },
  {
    "id": 3,
    "category": "Garden party"
  },
  {
    "id": 4,
    "category": "Helloween Party"
  },
  {
    "id": 5,
    "category": "Bachelor Party"
  }
]

test
