import express from 'express';

const data = {
    list: [
        {
            id: 1,
            title: "all the light we cannot see",
            author: "by anthony doerr",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique",
        },
        {
            id: 2,
            title: "where the crawdads sing",
            author: "by delia owens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
        },
        {
            id: 3,
            title: "where the crawdads sing",
            author: "by delia owens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
        },
        {
            id: 4,
            title: "where the crawdads sing",
            author: "by delia owens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
        },
        {
            id: 5,
            title: "where the crawdads sing",
            author: "by delia owens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
        },
        {
            id: 6,
            title: "where the crawdads sing",
            author: "by delia owens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus morbi eleifend enim, tristique ",
        },
    ],
    totalCount: 7
}

const router = express();

router.get('/books', (req, res) => {
    res.send(data);
});

export default router;