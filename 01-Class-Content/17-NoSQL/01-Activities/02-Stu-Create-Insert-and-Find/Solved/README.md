# Create, Read and Find in MongoDB

**Create a classroom db and insert a classmate**
```
use classroom
db.students.insert({name: 'Steve', row:3, os:'Mac', hobbies:['Coding', 'Reading', 'Running'] })
```

**Find all students in row 3**
```
db.students.find({row:3})
```

**Find students named Steve**
```
db.students.find({name:'Steve'})
```

**Find students in row 3 that use Mac's**
```
db.students.find({row:3, os:'Mac'})
```

**BONUS: Find by entry in an array**
```
db.students.find({"hobbies": {$in: ["Coding"]}})
```
