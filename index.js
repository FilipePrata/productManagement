class Product {
    constructor() {
        this.id = 1;
        this.arrayProducts = [];
    }

    add() {
        let produto = this.readData()
        if (this.validate(produto) == true) {
            this.save(produto)
        }
        console.log(produto)
    }

    readData() {
        let produto = {}

        produto.id = this.id;
        produto.nome = document.getElementById("productName").value
        produto.price = document.getElementById("productPrice").value

        return produto
    }

    validate(produto) {
        let msg = "";

        if (produto.nome == "") {
            msg += "Nome Inválido \n"
        }

        if (produto.price == "") {
            msg += "Preço Inválido \n"
        }

        if (msg != "") {
            alert(msg)
            return false
        }

        return true
    }

    save(produto) {
        this.arrayProducts.push(produto)
        this.id++
    }
}

var produto = new Product();

