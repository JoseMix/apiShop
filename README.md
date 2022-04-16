# apishop

##How To
cd to the cloned directory

docker-compose build to generate node and mongo imgs

docker-compose up

The app runs in localhost:5000

Yo can test the api with postman and check the db with mongo compass mongodb://localhost:27017

# Endpoints
Get and Post
localhost:5000/v1/customers

Delete Put
localhost:5000/v1/customers/:emailOfCustomer
