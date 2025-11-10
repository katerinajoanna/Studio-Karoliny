# API Documentation 

> ⚠️ **Note:**  
> This API is currently running in a **local test environment** (`localhost:5000`).  
> It is **not yet deployed to production** and should be used **for internal testing only**.

## Endpoint: Get All Offers
GET: `http://localhost:5000/offers`

**Description:**
Returns all offers.
(No authentication required)

**Response Example:**
```json
[
  {
    "_id": "67309e1...",
    "category": "category name",
    "services": [
      {
        "_id": "67309e2...",
        "service": "offer name",
        "price": 49.99,
        "description": "service description",
        "duration": "1,5h"
      }
    ]
  }
]
```

## Endpoint: Create a New Offer or Category
POST: `http://localhost:5000/offers`

### Authorization:
Required — Admin only

**Headers:**
```
Authorization: Bearer admin345
Content-Type: application/json
```

**Request Body (JSON):**
```
{
    "category": "category name",
  "service": "offer name",
  "price": 49.99,
  "description": "service description",
  "duration": "0,5h"
}
```

**Description:**
If the category already exists, the new service will be added to that category.

If the category does not exist, a new category will be created.

**Response Exemple:**
```json
{
  "_id": "67309e1...",
  "category": "category name",
  "services": [
    {
      "_id": "67309e2...",
      "service": "offer name",
      "price": 49.99,
      "description": "service description",
      "duration": "0,5h"
    }
  ]
}
```

## Endpoint: Update an Existing Service
PUT: `http://localhost:5000/offers/:serviceId`

### Authorization:
Required — Admin only

**Headers:**
```
Authorization: Bearer admin345
Content-Type: application/json
```

**Request Body (JSON):**
```
{
  "service": "Updated offer name",
  "description": "Updated offer description",
  "price": 109.99,
  "duration": "1h"
}
```

**Description:**
Updates the details of a single service by its serviceId.

**Response Example:**
```json
{
  "message": "Service updated successfully",
  "offer": {
    "_id": "67309e1...",
    "category": "category name",
    "services": [
      {
        "_id": "67309e2...",
        "service": "offer name",
        "price": 59.99,
        "description": "Updated description",
        "duration": "updated duration"
      }
    ]
  }
}
```

## Endpoint: Delete a Category
DELETE: `http://localhost:5000/offers/category/:id`
### Authorization:
Required — Admin only

**Headers:**
```
Authorization: Bearer admin345
```

**Description:**
Deletes an entire offer category by its category ID.

**Response Example:**
```json
{
  "message": "Category deleted successfully"
}
```

## Endpoint: Delete an Offer
DELETE: `http://localhost:5000/offers/:id`

### Authorization:
Required — Admin only

**Headers:**
```
Authorization: Bearer admin345
```

**Description:**
Deletes a specific service by its ID (not the entire category).

**Response Example:**
```json
{
	"message": "Service deleted",
	"offer": {
		"_id": "690c6159fe0359560ff89b29",
		"category": "category name",
		"services": [],
	}
}
```