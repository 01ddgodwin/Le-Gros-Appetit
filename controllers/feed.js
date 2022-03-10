// MENU API

exports.getMenu = (req, res, next) => {
    res.status(200).json({
        menu: [
            {
                item: "Item 1",
                description: "Item 1 Description!"
            },
            {
                item: "Item 2",
                description: "Item 2 Description!"
            },
            {
                item: "Item 3",
                description: "Item 3 Description!"
            },
            {
                item: "Item 4",
                description: "Item 4 Description!"
            },
            {
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

exports.getStaff = (req, res, next) => {
    res.status(200).json({
        staff: [
            {
                item: "Employee 1",
                description: "Employee 1 Description!"
            },
            {
                item: "Employee 2",
                description: "Employee 2 Description!"
            },
            {
                item: "Employee 3",
                description: "Employee 3 Description!"
            },
            {
                item: "Employee 4",
                description: "Employee 4 Description!"
            },
            {
                item: "Employee 5",
                description: "Employee 5 Description!"
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