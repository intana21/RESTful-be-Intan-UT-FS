const { PrismaClient } = require("@prisma/client")
var express = require('express');
var router = express.Router();

const prisma = new PrismaClient()

router.get("/employee/:id", async (req, res) => {
    const { id } = req.params
  
    try {
      const employee = await prisma.employee.findUnique({
        where: { id_employee: parseInt(id)},
      })
  
      if (employee) {
        res.json(employee)
      } else {
        res.status(404).json({ error: "Data Employee Tidak Ditemukan."
      })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: "Gagal Mengambil Data Employee!"})
    }
  })

  module.exports = router;