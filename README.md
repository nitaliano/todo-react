# todo-react
A simple todo app built with express, react, and bootstrap.
 
### Install
```
npm install
```

### Env file setup
I'm using [dotenv](https://github.com/motdotla/dotenv) for my enviroment file.
All you'll need to do is create a file called .env and set the port in the file.

Here is an example
```
PORT=80
```

Express is looking for this config under process.env.PORT
I'll be adding a gulp task for this soon

### Run
```
npm start
```

This will start the watch task, and the node server. You'll see more information
in the terminal if you're curious

### UI Routes
```/``` The default route is where you can create a new list<br>
```/list/:id``` This route is where you can update a list

### Api Routes
```/api/todolist``` - POST, create a new list<br>
```/api/todolist/:id``` - GET, get your list<br>
```/api/todolist/:id``` - PUT, update your list
