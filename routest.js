/*
Different Routes:
/api -> Generalise Route
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

/api
/api/auth
/api/auth/:method/:id
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
/api/product
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


/api/product/:id
    request_type = GET
    body = {
        productDetails: {
            ..allDetails
        }
    }
*/