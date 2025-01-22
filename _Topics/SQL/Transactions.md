- Transaction - is a sequence of one or more SQL operations that are evaluated as a single unit of work. A transaction can be a single SQL statement or a group of SQL statements that are executed together. Transactions are used to ensure data integrity and consistency in a database. 

- Transaction adheres to the ACID properties:
  - Atomicity: A transaction is atomic, meaning that it is an all-or-nothing operation. Either all the operations in the transaction are completed successfully, or none of them are completed.
  - Consistency: A transaction is consistent if it takes the database from one consistent state to another consistent state. The database should be in a consistent state before and after the transaction.
  - Isolation: A transaction is isolated if it appears to be the only operation that is being executed on the database. This means that the changes made by one transaction are not visible to other transactions until the transaction is completed.
  - Durability: A transaction is durable if the changes made by the transaction are permanent and cannot be undone. Once a transaction is committed, the changes made by the transaction are stored in the database and cannot be rolled back.

``` sql
START TRANSACTION;
WITH cte AS (
  SELECT * FROM table_name WHERE column1 = value1
)
INSERT INTO table_name (column1, column2) VALUES (value1, value2);
UPDATE table_name SET column1 = value1 WHERE column2 = value2;
DELETE FROM table_name WHERE column1 = value1;
COMMIT;
```