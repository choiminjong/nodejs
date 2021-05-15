#POST
- curl -d "name=value1&author=value2" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/api/books

#Get
- curl -H "Content-Type: application/x-www-form-urlencoded" -X GET http://localhost:3000/api/books