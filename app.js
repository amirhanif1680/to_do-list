(async () => {
    let tasks = [{
            id: 1,
            name: "Task1",
            description: "learn HTML"
        },
        {
            id: 2,
            name: "Task2",
            description: "learn CSS"
        }, {
            id: 3,
            name: "Task3",
            description: "learn Javascript"
        },
    ];
    tasks.push({
        id: 4,
        name: "Task4",
        description: "Practice"
    });
    tasks.forEach((item) => {
        console.log(item.id);
        console.log(item.name);
        console.log(item.description);
        console.log("----------------------");
    });
    const deleteTodo = (id) => {
        const index = tasks.findIndex((obj) => obj.id === id);
        tasks.splice(index, 2);
    };
    deleteTodo(1);
    console.log(tasks);
})();
export {};
