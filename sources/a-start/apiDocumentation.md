## Endpoints

List of Available Endpoints:
- `GET /companies`
- `POST /companies`
- `DELETE /companies/:id`

### GET /companies
#### Description
- Get all the companies data

#### Response
_200 - OK_

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
#### Description
- Create a new company data

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
_201 - Created_
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

_400 - Bad Request_
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
#### Description
- Remove a company data based on given id

#### Response
_200 - OK_
- Body
    ```json
    {
      "statusCode": 200,
      "message": "Company {id} deleted successfully"
    }
    ```
_404 - Not Found_
- Body
    ```json
    {
      "statusCode": 404,
      "error": {
        "message": "Company not found"
      }
    }
    ```

### Global Error
#### Response
_500 - Internal Server Error_
- Body
    ```json
    {
      "statusCode": 500,
      "error": {
        "message": "Internal Server Error"
      }
    }
    ```