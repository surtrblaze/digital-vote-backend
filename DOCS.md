# API Usage Documentation

The API will be available at http://localhost:3000. You can use tools like Postman or cURL of your choice to make requests to the API.

## Table of Contents 

1. [Candidates](#candidates)

## Candidates

### Create a Candidate

You can add a candidate to the list of voting options using the following endpoint. Please note that you need to be authenticated to perform this operation:

**Method:** POST 

**Endpoint:** `/candidates` 

**Request Body (JSON):**

```json 
{
	"list": "Candidate list number",
    "party": "Candidate name"
}
```

### Edit a Candidate

To update a candidate's information, use the following endpoint. Be sure to include the candidate's list in the URL and provide the new data in the request body:

**Method:** PUT


**Endpoint:** `/candidates/list` 


**Request Body (JSON):**

```json
{
  "list": "New List",
  "name": "New Candidate name"
}
``` 

### Delete a Candidate

You can remove a candidate from the list of voting options using the following endpoint. Make sure you are authenticated and provide the candidate's list in the URL:

**Method:** DELETE 


**Endpoint:** `/candidates/list`

