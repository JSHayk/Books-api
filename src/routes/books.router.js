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

const pageSize = 10;

const router = express();
const getPaginatedBooks = (page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.list.slice(startIndex, endIndex);
};

router.get('/books', (req, res) => {
    const page = parseInt(req.query.page) || 1;

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedItems = data.list.slice(startIndex, endIndex);

    res.json({
        page,
        pageSize,
        totalItems: data.list.length,
        totalPages: Math.ceil(data.list.length / pageSize),
        data: paginatedItems,
    });
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


function filterBooks(q) {
    const result = data.list.filter(book => {
        const author = book.author;

        return author.toLowerCase().includes(q.toLowerCase());
    });

    return result;
}
router.get('/search', (req, res) => {
    const query = req.query.q;

    const found = filterBooks(query);

    if (!found.length) {
        return res.status(404).send({
            message: "There is no book with such author"
        });
    }

    res.status(200).send({
        list: found
    });
});

export default router;