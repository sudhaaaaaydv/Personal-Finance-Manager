
# Personal Finanace Manager

This is a simple web application to track daily incomes and expenses, where user can sign up, sign in, add, remove or edit the income or expense details.






## Features

- sign up, sign in
- email verification, forgot password
- responsive web design
- pagination
- secured REST end points
- jwt token based authentication
- CRUD operations


## Built With

- React.js 16
- Bootstrap 4
- Spring Boot 2.3.0
- MySQL


## Prerequisites

* Maven
* Node package manager(npm)
* MySQL Workbench ([click here for download](https://dev.mysql.com/downloads/workbench/))

## Open and Run Project

**For Database:**
1. open MySQL Workbench.
2. create a new database named as "db_budget_manager".

**For Spring Boot application:**
1. open application.properties and replace all "TODO" with your configuration.
3. run command "mvn install".
4. run command "mvn spring-boot:run".

**For React.js application:**
2. run command "npm install".
3. run command "npm start".


# RESTful API ##
 
 
**1. API Description for User related action**
<br />
base = /api
 
METHOD | PATH | DESCRIPTION
------------|-----|------------
POST | /api/auth/register | new user registration
POST | /api/auth/login | user login
GET | /api/auth/email-verification | verifying email address
POST | /api/auth/request-password-reset | sending password reset link to registered email
POST | /api/auth/password-reset | reset the password
 
**2. API Description for Transaction(Income or Expense)**
 
 
METHOD | PATH | DESCRIPTION
------------|-----|------------
GET /api/categories / | get all categories
POST /api/categories | create new categories
PUT | /{category}/{id} | update categories
DELETE /api/categories/{name}  | delete categories
 
METHOD | PATH | DESCRIPTION
------------|-----|------------
GET /api/transactions / | get all transactions
POST /api/transactions | create new transactions
PUT /api/transactions/{id}  | update transactions
DELETE /api/transactions/{id} | delete transactions
 
METHOD | PATH | DESCRIPTION
------------|-----|------------
GET /api/goals / | get all goals
POST /api/goals | create new goals
PUT /api/goals/{id}  | update goals
DELETE /api/goals/{id} | delete goals
 
GET /api/reports/monthly/{year}/{month}
GET /api/reports/yearly/{year}
 



## License

- This project is licensed under the **[MIT license](http://opensource.org/licenses/mit-license.php)**.




## Author

- Sudha Yadav <br/>


