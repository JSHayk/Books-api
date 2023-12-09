import express from 'express';

const data = {
    list: [
        {
            id: 1,
            title: "all the light we cannot see",
            author: "by anthony doerr",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique",
            largeDescription: "1"
        },
        {
            id: 2,
            title: "where the crawdads sing",
            author: "by delia owens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
            largeDescription: "2"

        },
        {
            id: 3,
            title: "where the crawdads sing",
            author: "by delia owens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
            largeDescription: "3"
        },
        {
            id: 4,
            title: "where the crawdads sing",
            author: "by delia owens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
            largeDescription: "4"
        },
        {
            id: 5,
            title: "where the crawdads sing",
            author: "by delia owens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
            largeDescription: "5"
        },
        {
            id: 6,
            title: "where the crawdads sing",
            author: "by delia owens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
            largeDescription: "6"
        },
    ],
    totalCount: 7
}

const router = express();

router.get('/books', (req, res) => {
    res.send(data);
});

router.get('/books/:id', (req, res) => {
    const { id } = req.params; 

    if (!id) {
        return res.status(403).send({message: "invalid id!"});
    }
    const book = data.list.find(book => book.id === Number(id));

    if (!book) {
        return res.status(200).send({message: "there is no book with this id!"})
    }

    res.status(200).send(book);
})

export default router;