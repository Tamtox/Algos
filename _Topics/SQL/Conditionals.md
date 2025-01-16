``` sql
-- CASE statement : is a conditional statement that allows you to perform different actions based on different conditions.
SELECT employee_id , 
 CASE 
    WHEN employee_id % 2 = 0 AND name LIKE 'M%' THEN 0
    ELSE salary
  END AS bonus
FROM Employees;
```