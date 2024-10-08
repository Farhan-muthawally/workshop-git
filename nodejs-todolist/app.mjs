import http, { Server } from "http";
import { TodoListService } from "./todolist-service.mjs";

const service = new TodoListService();

const server = http.createServer((req, res) =>{
    // res.write ("todolist API\n");

    if (req.method == "GET"){
        service.GetTodoList(req, res);
    } else if (req.method === "POST") {
        service.PostTodoList(req, res);
    } else if (req.method === "PUT") {
        service.PutTodoList(req, res);
    } else if (req.method === "DELETE") {
        service.delTodolist(req, res);
    }

    res.end();
});

server.listen(3000, () => console.log("server running on port 3000"));