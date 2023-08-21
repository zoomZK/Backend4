import { promises as fs } from 'fs'

const addProduct = async () => {
    await fs.readFile('ruta', 'utf-8')
}

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
    }

    async addProduct() {
        await fs.readFile(this.path, 'utf-8')
    }
}

import http from 'http'

const server = http.createServer((req, res) => {
    res.end("Hola, bienvenido")
})


server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

import express from 'express'

const PORT = 4000

const app = express()

const prods = [
    { id: 1, nombre: "Vacio", categoria: "Carne" },
    { id: 2, nombre: "Fideos", categoria: "Pastas" },
    { id: 3, nombre: "Papas fritas", categoria: "Snacks" }
]

app.get('/', (req, res) => {
    res.send("Hola, bienvenido")
})

app.get('/products', (req, res) => {
    console.log(req.query)
    const { categoria } = req.query
    if (categoria) {
        const products = prods.filter(prod => prod.categoria === categoria)
        
        res.send(products)
    }

    res.send(prods) 

})

app.get('/products/:id', (req, res) => {
    const prod = prods.find(prod => prod.id === parseInt(req.params.id))

    if (prod)
        res.send(prod)
    else
        res.send("Producto no encontrado")
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})