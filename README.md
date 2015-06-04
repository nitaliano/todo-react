# todo-react
A simple todo app built with express, react, and bootstrap.
 
### Install
```npm install```

### Env file setup
I'm using [dotenv](https://github.com/motdotla/dotenv) for my enviroment file.
All you'll need to do is create a file called .env and set the port in the file.

Here is an example
```
PORT=80
```

Express is looking for this config under process.env.PORT
(I'll be adding a gulp task for this soon)
