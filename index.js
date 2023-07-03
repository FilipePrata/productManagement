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
        this.list()
        this.cancel()
    }

    readData() {
        let produto = {}

        produto.id = this.id;
        produto.name = document.getElementById("productName").value
        produto.price = document.getElementById("productPrice").value

        return produto
    }

    validate(produto) {
        let msg = "";

        if (produto.name == "") {
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

    list() {
        let tbody = document.getElementById("tbody")
        tbody.innerText = ''

        for (let i = 0; i < this.arrayProducts.length; i++) {

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_name = tr.insertCell();
            let td_price = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProducts[i].id;
            td_name.innerText = this.arrayProducts[i].name; 
            td_price.innerText = this.arrayProducts[i].price;
            let imagem = document.createElement("img")
            imagem.setAttribute("onclick", "produto.delete("+this.arrayProducts[i].id+")")
            imagem.src = "./img/trash-solid.svg"
            td_del.appendChild(imagem)
        }
    }

    cancel() {
        document.getElementById("productName").value = ""
        document.getElementById("productPrice").value = ""
    }

    delete(id) {
        this.arrayProducts.splice(id-1, 1 )
        alert("O item foi apagado com sucesso")
        this.list()
    }
}

var produto = new Product();

