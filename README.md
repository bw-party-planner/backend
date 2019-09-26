
**Heroku App URL (need before each method url):`https://mypartyplanner.herokuapp.com`**

**Register and Login**


| Method | Endpoint             | Description 
|--------|----------------------|--------------------------------------------------------------------------------------|
| POST   | /api/auth/register        |    Require `username` , `password`  / must be < 255 characters /`username` must be unique                                                                                                                      |
| POST   | /api/auth/login           | Require `username` , `password`  |



**Categories**

| Method | Endpoint             | Description 
|--------|----------------------|--------------------------------------------------------------------------------------|           
| GET   | /api/categories        | see example|
| POST  | /api/categories        | Require `category`  |
| GET   | /api/categories/:id    | Muse be validated id  |
| PUT   | /api/categories/:id    | Muse be validated id  |
| DELETE| /api/categories/:id    | Muse be validated id  |



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
```

**Parties**

| Method | Endpoint             | Description 
|--------|----------------------|--------------------------------------------------------------------------------------|               
| GET   | /api/parties        |    see example   |
| POST   | /api/parties           | Require `party_name`, `guests`, `category_id`   |
| GET   | /api/parties/:id           | Muse be validated id  |
| PUT   | /api/parties/:id           | Muse be validated id  |
| DELETE| /api/parties/:id           | Muse be validated id  |

**Example /GET `/api/parties`
```
[
  {
    "id": 1,
    "party_name": "Jasmine's 5 year old birthday",
    "guests": "15",
    "theme": "Princess",
    "date": "10/10/2019",
    "budget": "$500",
    "category_id": 1
  }
]
```


**Party shopping List**

| Method | Endpoint             | Description 
|--------|----------------------|--------------------------------------------------------------------------------------|
| GET   | /api/parties/:id/shoppingList           | Muse be validated party id / see example |
| POST   | /api/parties/:id/shoppingList           | Muse be validated party id / Require `item`, `price`, `party_id` |
| GET   | /api/parties/:id/shoppingList/:itemId           | Muse be validated party id / Muse be validated item id |
| PUT   | /api/parties/:id/shoppingList/:itemId           | Muse be validated party id / Muse be validated item id |
| DELETE   | /api/parties/:id/shoppingList/:itemId           | Muse be validated party id / Muse be validated item id |

**Example /GET `/api/parties/:id/shoppingList`**
```
[
  {
    "id": 1,
    "item": "Cake",
    "price": "50"
  },
  {
    "id": 2,
    "item": "Balloon",
    "price": "10"
  },
  {
    "id": 3,
    "item": "Food",
    "price": "150"
  }
]
```

**Party Todo List**

| Method | Endpoint             | Description   
|--------|----------------------|--------------------------------------------------------------------------------------|
| GET   | /api/parties/:id/todoList           | Muse be validated party id / see example |
| POST   | /api/parties/:id/todoList           | Muse be validated party id / Require `task`, `party_id` |
| GET   | /api/parties/:id/todoList/:taskId           | Muse be validated party id / Muse be validated task id |
| PUT   | /api/parties/:id/todoList/:taskId           | Muse be validated party id / Muse be validated task id |
| DELETE   | /api/parties/:id/todoList/:taskId           | Muse be validated party id / Muse be validated task id |

**Example GET `/api/parties/:id/todoList`
```
[
  {
    "id": 1,
    "task": "Shopping"
  },
  {
    "id": 2,
    "task": "Invite Jasmine's frinds"
  },
  {
    "id": 3,
    "task": "Decorate"
  }
]
```


**Party Pictures**

| Method | Endpoint             | Description 
|--------|----------------------|--------------------------------------------------------------------------------------|
| GET   | /api/parties/:id/pictures           | Muse be validated party id / see example |
| POST   | /api/parties/:id/pictures          | Muse be validated party id / Require `url`,`party_id` |
| GET   | /api/parties/:id/pictures/:picId           | Muse be validated party id / Muse be validated url id |
| DELETE   | /api/parties/:id/pictures/:picId           | Muse be validated party id / Muse be validated url id |

**Example GET /api/pictures**
```
[
  {
    "id": 1,
    "url": "https://i.ibb.co/pyzv4Tc/birthday-cake.jpg"
  },
  {
    "id": 2,
    "url": "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  }
]
```
