import express from "express";
import path from "path";
import fs from "fs";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

console.log(__dirname);

const data = {
  list: [
    {
      id: 1,
      title: "Matematikakan Alazi",
      author: "by anthony doerr",
      pdfName: "matan-1",
    },
    {
      id: 2,
      title: "Tvayin methodner",
      author: "by delia owens",
      pdfName: "tv-met",
    },
  ],
  totalCount: 7,
};

const pageSize = 10;

const router = express();
const getPaginatedBooks = (page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return data.list.slice(startIndex, endIndex);
};

router.get("/books", (req, res) => {
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

router.get("/books/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(403).send({ message: "invalid id!" });
  }
  const book = data.list.find((book) => book.id === Number(id));

  if (!book) {
    return res.status(200).send({ message: "there is no book with this id!" });
  }

  res.status(200).send(book);
});

router.get("/get-pdf/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "pdfs", filename);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Send the PDF file as a response
    res.sendFile(filePath);
  } else {
    res.status(404).send("File not found");
  }
});

function filterBooks(q) {
  const result = data.list.filter((book) => {
    const author = book.author;

    return author.toLowerCase().includes(q.toLowerCase());
  });

  return result;
}
router.get("/search", (req, res) => {
  const query = req.query.q;

  const found = filterBooks(query);

  if (!found.length) {
    return res.status(404).send({
      message: "There is no book with such author",
    });
  }

  res.status(200).send({
    list: found,
  });
});

export default router;
