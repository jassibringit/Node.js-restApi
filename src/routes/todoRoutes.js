import { addNewTodo, getTodos ,getTodoWithID } from "../controllers/todoControllers"
const routes = (app) => {
  
  app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  app.route("/todo")
    .get((req, res, next) => {
      //middleware
      console.log(`Request from : ${req.originalUrl}`)
      console.log(`Request type : ${req.method}`)
      next();
    }, getTodos)

    .post(addNewTodo);

    app.route("/todo/:todoId")
      .get(getTodoWithID)

    .put((req, res) =>
      res.send("PUT request succcessfull"))

    .delete((req, res) =>
      res.send("DELETE request successfull"));
}

export default routes;
    


