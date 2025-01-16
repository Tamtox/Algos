```sql
SELECT customer_id, COUNT(customer_id) as count_no_trans
FROM Visits AS V
LEFT JOIN Transactions AS T
ON  V.visit_id = T.visit_id
WHERE transaction_id IS NULL
GROUP BY customer_id;
```