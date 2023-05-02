# Redis

## Redis Basic Commands

### Set And Get

1. SET key value
2. GET key
3. KEYS \*
   // get all keys in database

### Check And Delete All

4. EXISTS key
   // Check if exist
5. flushall
   // delete all

### Handling expirations

6. ttl key
   // stands for time to live
7. expire key seconds
   // Eample: expire name 10
8. setex key second value

### Lists

9. lpush arrayName item
   // To push element in array
10. lrange listname start stop
    // Eample lrange friends 0 -1 :- get all elements
11. rpush arrayName item
    // Add item to the end of array
12. rpop arrayName
    // Eample : rpop friends
    // Delete The Last Item In Array
13. lpop arrayName
    // Delete The First Item In Array

### Sets (Unique Array)

14. SADD setName Member
    // (SADD) Stands For Set add
    // Eample: SADD hobbies "Weight lifting"
15. SMEMBERS setName
    // SMEMBERS hobbies : "Weight lifting"
    - If I try to add the "Weight lifting" again like SADD hobbies "Weight lifting". It is not working and return (integer) 0.
