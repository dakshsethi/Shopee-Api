# Shopee-API
This is the backend API for [Shopee Website](https://shopee-dakshsethi.vercel.app/). It has certain endpoints to request and to upload data to the Firebase Firestore through this API. Different routes will be stored in different folders.

## Different Routes:
##### /api -> Generalise Route
```js
  |
  |
  |--->> /auth
  |        |
  |        |
  |        |--->> /:method == add OR update or delete
  |        |          |
  |        |          |
  |        |          |--->> /:id = product_id
  |       
  |
  |--->> /product == Get List of all products
  |         |
  |         |
  |         |--->> /:id == Get details of a particular product
```

##### /api/auth
##### /api/auth/:method/:id
```js
    method = [add, update , delete]
    id = product_id

    request_type = POST
    FOR update/delete:
        body = {
            auth: {
                email,
                password
            },
            product_id
            product_details: {
                ...allDetails
            }
        }

    FOR add:
        body = {
            auth: {
                email,
                password
            },
            product_details: {
                ...allDetails
            }
        }
    
    RETURN:
        body = {
            status: 200,
            message: "Item Added/Updated/Deleted"
        }
```

##### /api/product
```js
    request_type = GET
    body = {
        products: [
            {
                productDetails: {
                    ...allDetails
                }
            }.
            {
                productDetails: {
                    ...allDetails
                }
            },...
        ]
    }
```

##### /api/product/:id
```js
    request_type = GET
    body = {
        productDetails: {
            ..allDetails
        }
    }
```
