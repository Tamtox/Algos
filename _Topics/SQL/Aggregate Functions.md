```sql
-- COUNT() is used to count the number of rows in a table.
SELECT COUNT(*) AS count
-- SUM() is used to calculate the sum of a column.
SELECT SUM(column_name) AS sum
-- AVG() is used to calculate the average of a column.
SELECT AVG(column_name) AS average
-- MIN() is used to find the minimum value of a column.
SELECT MIN(column_name) AS minimum
-- MAX() is used to find the maximum value of a column.
SELECT MAX(column_name) AS maximum
-- CONCAT() is used to concatenate two or more strings.
SELECT CONCAT(column1, column2) AS concatenated
-- HAVING is used to filter the result set based on a group.
SELECT column_name
FROM table_name
GROUP BY column_name
HAVING COUNT(column_name) > 1;
-- GROUP BY is used to group rows that have the same values into summary rows.
SELECT column_name, COUNT(column_name)
FROM table_name
GROUP BY column_name;
```