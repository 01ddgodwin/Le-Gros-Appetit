// MENU API

// MENU LAYOUT
// -Image 
// -Title
// -Description
// -Add To Cart

exports.getMenu = (req, res, next) => {
    res.status(200).json({
        menu: [
            {
                image: "",
                item: "Item 1",
                description: "Item 1 Description!"
            },
            {
                image: "",
                item: "Item 2",
                description: "Item 2 Description!"
            },
            {
                image: "",
                item: "Item 3",
                description: "Item 3 Description!"
            },
            {
                image: "",
                item: "Item 4",
                description: "Item 4 Description!"
            },
            {
                image: "",
                item: "Item 5",
                description: "Item 5 Description!"
            }
        ]
    });
};

exports.createMenu = (req, res, next) => {
    const item = req.body.item;
    const description = req.body.description;
    //Create post in db
    res.status(201).json({
        message: 'Post created successfully!',
        menu: { id: new Date().toISOString(), item: item, description: description}
    });
};


// EMPLOYEE API

// STAFF LAYOUT
// -Name
// -Description
// -Username
// -Password

exports.getStaff = (req, res, next) => {
    res.status(200).json({
        staff: [
            {
                item: "Employee 1",
                description: "Employee 1 Description!",
                username: "",
                password: ""
            },
            {
                item: "Employee 2",
                description: "Employee 2 Description!",
                username: "",
                password: ""
            },
            {
                item: "Employee 3",
                description: "Employee 3 Description!",
                username: "",
                password: ""
            },
            {
                item: "Employee 4",
                description: "Employee 4 Description!",
                username: "",
                password: ""
            },
            {
                item: "Employee 5",
                description: "Employee 5 Description!",
                username: "",
                password: ""
            }
        ]
    });
};

exports.createStaff = (req, res, next) => {
    const item = req.body.item;
    const description = req.body.description;
    //Create post in db
    res.status(201).json({
        message: 'Post created successfully!',
        staff: { id: new Date().toISOString(), item: item, description: description}
    });
};