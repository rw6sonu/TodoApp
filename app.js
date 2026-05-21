const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let tasks = [];

app.get("/", (req, res) => {

    const totalTasks = tasks.length;

    const pendingTasks = tasks.filter(
        task => task.status === "Pending"
    ).length;

    const completedTasks = tasks.filter(
        task => task.status === "Completed"
    ).length;

    res.render("dashboard", {
        tasks,
        totalTasks,
        pendingTasks,
        completedTasks
    });
});


app.get("/add", (req, res) => {
    res.render("add-task");
});


app.post("/addTask", (req, res) => {

    const { title, description, priority,status } = req.body;

    const newTask = {
        id: Date.now(),
        title,
        description,    
       priority: priority,
        status: status
    };

    tasks.push(newTask);

    res.redirect("/");
});


app.get("/edit/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(task => task.id === id);
     if (!task) return res.redirect("/");

    res.render("edit-task", { task });
});


app.post("/update/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(task => task.id === id);

     if (!task) return res.redirect("/");

    const { title, description, priority,status  } = req.body;

    task.title = title;
    task.description = description; 
    task.priority = priority;
    task.status = status;
    res.redirect("/");
});


app.get("/delete/:id", (req, res) => {

    const id = parseInt(req.params.id);

    tasks = tasks.filter(task => task.id !== id);

    res.redirect("/");
});

app.listen(8000, () => {
    console.log("Server Running On Port 8000");
});