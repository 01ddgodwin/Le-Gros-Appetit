exports.getMenu = (req, res, next) => {
    res.status(200).json({
        menu: [{item: 'Menu Item', description: 'This is the menu item description!'}]
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