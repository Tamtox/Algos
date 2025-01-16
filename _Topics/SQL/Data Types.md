### Boolean Type 
  - `BOOLEAN` or `BOOL` is a synonym for `TINYINT(1)`, used to store true/false values.
  - BOOL NOT NULL DEFAULT TRUE
  - SELECT FROM example WHERE is_active = TRUE;
### CHAR, VARCHAR, TEXT
  - `CHAR` is fixed-length string type, padded with spaces to the specified length when stored.
  - `VARCHAR` is variable-length string type, stores non-binary strings.
  - `TEXT` is text with a maximum length of 65,535 characters.
### Numeric Types
  - `TINYINT`, `SMALLINT`, `MEDIUMINT`, `INT`, `BIGINT` are integer types.
  - `FLOAT`, `DOUBLE` are floating-point types.
  - `DECIMAL` is a fixed-point type.
  - `NUMERIC` is a synonym for `DECIMAL`.
  - `SERIAL` is an alias for 'BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE'.
### Date and Time Types