- Operators
``` sql
-- -> is used to extract a JSON object field as JSON
SELECT data->'name' AS name FROM json_data;
-- ->> is used to extract a JSON object field as text
SELECT data->>'name' AS name FROM json_data;
-- #> is used to extract a JSON object at the specified path as JSON
SELECT data#>'{name}' AS name FROM json_data;
-- #>> is used to extract a JSON object at the specified path as text
-- ? is used to check if a JSON object has a specified key
SELECT data->'name' AS name FROM json_data WHERE data ? 'name';
-- ?| is used to check if a JSON object has any of the specified keys
SELECT data->'name' AS name FROM json_data WHERE data ?| ARRAY['name', 'age'];
-- ?& is used to check if a JSON object has all of the specified keys
SELECT data->'name' AS name FROM json_data WHERE data ?& ARRAY['name', 'age'];
-- @> is used to check if a JSON object contains the specified JSON object
SELECT data->'name' AS name FROM json_data WHERE data @> '{"name": "John"}';
-- <@ is used to check if a JSON object is contained in the specified JSON object
```

- Functions
``` sql
-- jsonb_array_elements() - is used to expand a JSON array into a set of JSON values
SELECT jsonb_array_elements(data->'names') AS name FROM json_data;
-- jsonb_object_keys() - is used to expand a JSON object into a set of key-value pairs
SELECT jsonb_object_keys(data) AS key FROM json_data;
-- jsonb_typeof() - is used to return the type of a JSON value
SELECT jsonb_typeof(data->'name') AS type FROM json_data;
-- jsonb_set() - is used to set a value in a JSON object at the specified path
UPDATE json_data SET data = jsonb_set(data, '{name}', '"John"');
-- jsonb_insert() - is used to insert a value into a JSON object at the specified path
UPDATE json_data SET data = jsonb_insert(data, '{names, 0}', '"John"');
-- jsonb_delete() - is used to delete a value from a JSON object at the specified path
UPDATE json_data SET data = jsonb_delete(data, '{name}');
-- jsonb_strip_nulls() - is used to remove null values from a JSON object
SELECT jsonb_strip_nulls(data) AS cleaned_data FROM json_data;
-- jsonb_pretty() - is used to format a JSON object for readability
SELECT jsonb_pretty(data) AS pretty_data FROM json_data;
```