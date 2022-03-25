## Endpoints

- GET /companies
- POST /companies
- DELETE /companies/:id

### GET /companies
Get all the companies data

#### Response
200 - OK

- Body
    ```json
    {
      "statusCode": 200,
      "data": [
        {
          "id": Integer,
          "name": String,
          "address": String,
          "zipCode": String,
          "createdAt": Date,
          "updatedAt": Date
        },
        ...
      ]
    }
    ```


### POST /companies
Create a new company data

#### Request
- Headers
    ```json
    {
      "Content-Type": "application/x-www-form-urlencoded"
    }
- Body
    ```json
    {
      "name": String,
      "address": String,
      "zipCode": String
    }
    ```
#### Response
201 - Created
- Body
    ```json
    {
      "statusCode": 201,
      "message": "Company created successfully",
      "data": {
        "id": Integer,
        "name": String,
        "address": String,
        "zipCode": String,
        "createdAt": Date,
        "updatedAt": Date
      }
    }
    ```

400 - Bad Request
- Body
    ```json
    {
      "statusCode": 400,
      "error": {
        "message": String
      }
    }
    ```

### DELETE /companies/:id
Remove a company data based on given id

#### Response
200 - OK
- Body
    ```json
    {
      "statusCode": 200,
      "message": "Company {id} deleted successfully"
    }
    ```
