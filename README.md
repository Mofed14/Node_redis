# Redis

## Redis Basic Commands

### Set And Get

1. SET key value
2. GET key
3. KEYS \*
   - get all keys in database

### Check And Delete All

4. EXISTS key
   - Check if exist
5. flushall
   - delete all

### Handling expirations

6. ttl key
   - stands for time to live
7. expire key seconds
   - Eample: expire name 10
8. setex key second value

### Lists (Array)

9. lpush arrayName item
   - To push element in array
10. lrange listname start stop
    - Eample lrange friends 0 -1 :- get all elements
11. rpush arrayName item
    - Add item to the end of array
12. rpop arrayName
    - Eample : rpop friends
    - Delete The Last Item In Array
13. lpop arrayName
    - Delete The First Item In Array

### Sets (Unique Array)

14. SADD setName Member

    - (SADD) Stands For Set add
    - Eample:

```bash
      - SADD hobbies "Weight lifting"
```

15. SMEMBERS setName
    - To return all data.

```bash
    - SMEMBERS hobbies

```

- If I try to add the "Weight lifting" again like SADD hobbies "Weight lifting". It is not working and return (integer) 0.

16. SREM setName value
    - This (SREM) stands for set remove
    - To remove specific item.

```bash
    - SREM hobbies "Weight lifting".
```

### Hashs

```
    - Hashs is another key value pairs.
    - You can thing of it as key value pair inside
    of key value pair
    - You cann't have hashes inside of hashes so it's like a json object
    but you can not have any nesting at all inside of it. it's
    just one set of key value pairs
    - So to do any thing with hashes you're going to prefix every command
    with an [H]
    - It is like an Object
```

17. HSET hashName fiel value

```bash
Example
    - HSET person name mofed
    - HSET person age 24
```

18. HGETALL hashname

```bash
Example
    - HGETALL person
    Return
        - 1) "name"
        - 2) "mofed"
        - 3) "age"
        - 4) "24"
```

19. HGET hasname field

```bash
Example
    - HGET person name
    Return
        - "mofed"

    -  HGET person age
    Return
        - "24"
```

20. HDEL hashName field

```bash
Example
    - HDEL person age
    Return
        - (integer) 1

    - HGET person age
    Return
        - (nil)
```

21. HEXISTS hashName field

```bash
    - To Check if the field exists
```

# Nodejs & Redis

. To use redis

```bash
    npm install redis
```
