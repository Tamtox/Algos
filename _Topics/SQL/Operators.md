``` sql
-- And clause : is a logical operator that combines two conditions.
SELECT * FROM table_name WHERE column1 = value1 AND column2 = value2;
-- Or clause : is a logical operator that combines two conditions.
SELECT * FROM table_name WHERE column1 = value1 OR column2 = value2;
-- Not clause : is a logical operator that negates a condition.
SELECT * FROM table_name WHERE NOT column1 = value1;
-- In clause : is a logical operator that allows you to specify multiple values in a WHERE clause.
SELECT * FROM table_name WHERE column1 IN (value1, value2, ...);
-- Between clause : is a logical operator that allows you to specify a range of values in a WHERE clause.
SELECT * FROM table_name WHERE column1 BETWEEN value1 AND value2;
-- Like clause : is a logical operator that allows you to perform pattern matching in a WHERE clause.
SELECT * FROM table_name WHERE column1 LIKE 'value%';
-- Is (Not) Null clause : is a logical operator that allows you to test whether a column is NULL.
SELECT * FROM table_name WHERE column1 IS NULL AND column2 IS NOT NULL;
-- Exists clause : is a logical operator that allows you to test whether a subquery returns any row.
SELECT * FROM table_name WHERE EXISTS (SELECT * FROM table_name WHERE column1 = value1);
-- Any, All clause : is a logical operator that allows you to compare a value to a set of values returned by a subquery.
SELECT * FROM table_name WHERE column1 > ANY (SELECT column1 FROM table_name WHERE column2 = value2);
-- Some clause : is a synonym for the ANY clause.
SELECT * FROM table_name WHERE column1 > SOME (SELECT column1 FROM table_name WHERE column2 = value2);
-- All clause : is a logical operator that allows you to compare a value to a set of values returned by a subquery.
SELECT * FROM table_name WHERE column1 > ALL (SELECT column1 FROM table_name WHERE column2 = value2);

```