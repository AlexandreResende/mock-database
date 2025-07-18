# mock-database
Mock database for practicing SQL queries

## Description

The main idea is to have a script to populate the database    
and after that run some queries to practice and improve    
the knowledge about queries.

The DB that will be used is postgres for SQL queries and    
we may also have a NoSQL DB, that will be MongoDB, for also    
practicing queries there too.

## Structure of the SQL DB

There will be initially four tables. The first one will be a    
user's table, the second one will be an orders table, the    
third one will be a products table and the last one a order_items table.          
Below are the schema of the tables:    

> users    

- id PK    
- username    
- email    
- created_at    

> orders    

- id PK    
- user_id FK    
- order_date    
- amount($)  

> products  

- id PK   
- name  
- description  
- price  

> order_items

- id PK  
- order_id FK  
- product_id FK  
- quantity  
- price  

## Schema of the NoSQL DB

Like the SQL DB, the fields will be the same but    
everything will reside in the same document.    

> users (collection name)

- id        
- username    
- email    
- created_at 
- orders
  - order_date    
  - amount 
  - products
    - id
    - name
    - description   
    - quantity    
    - price    

## Queries that will be made on DBs

- Select all users.    
- Count total users.    
- Find users who made orders.    
- Total amount spent by each user.    
- Users with no orders.    
- Most recent order for each user.    
- Total orders and average order amount per user.    
- Users who spent more than a certain amount.    
- Orders in the last 30 days.    
- Top 5 users by total spending.    
- Monthly spending trend.    
- Users created in the last year.    
- Users with the highest number of orders.    
- Average order amount for each month.    
- Users who have placed orders but have not logged in recently.    
- Total revenue generated from orders.    
- Users who have placed orders in a specific date range.    
- Orders grouped by status (if applicable).    
- Users who have made repeat purchases.    
- Identify trends in order amounts over time.    
- Find the user with the highest single order amount.    
- List all users along with their first order date.    
- Calculate the total number of orders placed each month.    
- Identify users who have not placed any orders in the last 6 months.    
- Find the average time between a user's registration and their first order.    
- List users who have placed more than a specified number of orders.    
- Calculate the total number of unique users who placed orders in a specific year.    
- Find the user who has spent the least amount on orders.    
- Identify the month with the highest total order amount.    
- List users who have placed orders on a specific date.    
- Calculate the percentage of users who have made at least one order.    
- Find the total number of orders and total revenue generated by each user.    
- Identify users who have increased their spending over the last few months.    
- List all orders along with the corresponding user details.    
- Find the average order amount for users who have made multiple purchases.    
- Identify users who have placed orders but have not updated their profile information.    
- Calculate the total revenue generated from orders in a specific time frame.    
- List users who have made purchases in multiple categories (if applicable).    
- Find the most common order amount.    
- Identify users who have referred others and track their orders.    

## Queries for the NOSQL DB

- Retrieve All Users
- Find a User by Username
- Get Users Created After a Certain Date
- Count Total Users
- Retrieve Orders for a Specific User
- Find Users with Specific Product in Orders
- Calculate Total Amount Spent by a User
- List All Products Ordered by All Users
- Find Users with No Orders
- Update User Email
- Delete a User
- Find Total Number of Orders for Each User
- Find Users with Orders Exceeding a Certain Amount
- Get Users Who Ordered a Specific Product in a Date Range
- Aggregate Total Amount Spent by Each User and Sort
- Find Users with Multiple Orders for the Same Product
- Update Multiple User Emails Based on a Condition
- Find Users with Orders Containing a Specific Keyword in Product Description
- Calculate Average Order Amount for Each User
- Retrieve Users with Orders in the Last Month and Group by Product
- Find Users with the Most Orders
- Delete All Orders for a Specific User
- Find Users Who Have Ordered All Products in a Given List
- Get Users with Orders That Have a Total Quantity Exceeding a Certain Value
- Calculate Total Revenue Generated from Each Product
- Find Users Who Have Not Ordered in the Last Year
- Retrieve Users with Orders That Have a Specific Shipping Method
- Find Users with Orders That Include a Combination of Specific Products
- Calculate the Total Number of Products Ordered by Each User
- Find Users with Orders That Have a Total Weight Exceeding a Certain Value
- Get Users Who Have Reordered Products
- Retrieve Users with Orders That Have a Specific Status
- Find Users with Orders Placed on Weekends
- Calculate the Most Popular Product Based on Order Frequency