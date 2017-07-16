# js-04


## Create user

* **URL**

  /user

* **Method:**

  `POST`

* **Data Params**

 ```javascript
{
	"name":"name",
	"surname":"surname",
	"email":"email"
}
```
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `"596b697154929d2408fef934"`
    <_id added user_>


## Read user

* **URL**

  /user/:id

* **Method:**

  `GET`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      "_id": "596b4cb62ef7c92f748b4c1d",
      "name": "vasya",
      "surname": "pupkin",
      "email": "em@ai.l"
    } 
    ```
    
## Update user

* **URL**

  /user/:id

* **Method:**

  `PUT`

* **Data Params**

 ```javascript
{
	"name":"name",
	"surname":"surname",
	"email":"email"
}
```

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      "n": 1,
      "nModified": 1,
      "ok": 1
    }
    ```

## Delete user

* **URL**

  /user/:id

* **Method:**

  `DELETE`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      "n": 1,
      "ok": 1
    }
    ```

## Create message

* **URL**

  /msg

* **Method:**

  `POST`

* **Data Params**

 ```javascript
{
	"senderID":"593b697154a29d3408fef934",
	"receiveID":"596b4b4060cac602e0702ea0",
	"payload":"hi"
}
```
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `"596b697154929d2408fef934"`
    <_id added msg>

## Read message

* **URL**

  /msg/:id

* **Method:**

  `GET`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      "_id": "596b6f1854929d2408fef935",
      "senderID": "596b4cb62ef7c92f748b4c1d",
      "receiveID": "596b4b4060cac602e0702ea0",
      "payload": "hi"
    } 
    ```
    
 ## Update message

* **URL**

  /msg/:id

* **Method:**

  `PUT`

* **Data Params**

 ```javascript
{
	"senderID":"593b697154a29d3408fef934",
	"receiveID":"596b4b4060cac602e0702ea0",
	"payload":"hi"
}
```

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      "n": 1,
      "nModified": 1,
      "ok": 1
    }
    ```

## Delete message

* **URL**

  /msg/:id

* **Method:**

  `DELETE`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      "n": 1,
      "ok": 1
    }
    ```
    
## Get all users

* **URL**

  /user

* **Method:**

  `GET`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
      {
        "_id": "596b4b4060cac602e0702ea0",
        "name": "name1",
        "surname": "surname1",
        "email": "email1"
      },
      {
        "_id": "596b4bae60cac602e0702ea1",
        "name": "name2",
        "surname": "surname2",
        "email": "email2"
      }
    ]
    ```
    
## Get all messages

* **URL**

  /msg

* **Method:**

  `GET`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
      {
      	"_id": "596b6f1854929d2408fef935",
      	"senderID": "596b4cb62ef7c92f748b4c1d",
      	"receiveID": "596b4b4060cac602e0702ea0",
      	"payload": "hi"
    } ,
      {
     	"_id": "596b6f1854929d2408fef935",
      	"senderID": "596b4cb62ef7c92f748b4c1d",
      	"receiveID": "596b4b4060cac602e0702ea0",
      	"payload": "hi"
      } 
    ]
    ```

## Get all users with whom this user has been rewritten

* **URL**

  /user/:id/receivers

* **Method:**

  `GET`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
      {
        "_id": "596b4b4060cac602e0702ea0",
        "name": "name1",
        "surname": "surname1",
        "email": "email1"
      },
      {
        "_id": "596b4bae60cac602e0702ea1",
        "name": "name2",
        "surname": "surname2",
        "email": "email2"
      }
    ]
    ```
