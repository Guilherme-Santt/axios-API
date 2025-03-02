
// solicitando dados da API
const getData = async () => {
    try {
        const response = await axios.get(
            "http://jsonplaceholder.typicode.com/users",
            {
                haders: {
                    "Content-type": "application/json",
                    custom: "header",
                },
            }
        );        
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
getData()

// Imprimindo dados na tela pelo método GET
function getDados(){
    const ListName = document.querySelector("#user-container");
    const tittle = document.createElement("h2")
    tittle.textContent = "Dados";

    const printData = async () => {
        const ul = document.createElement("ul")
        const data = await getData();   
        ListName.appendChild(ul)
        ul.appendChild(tittle)
        
        data.forEach((element) => {
            // Criando elementos para impressão
            const nameElement = document.createElement("h3")
            const userElement = document.createElement("li")
            const emailElement = document.createElement("li")
            const phoneElement = document.createElement("li")
            const siteElement = document.createElement("li")

            // Imprimindo dados da API e informando após qual elemento o dado vai ficar
            // Nome:
            nameElement.textContent = `${element.name}`
            ul.appendChild(nameElement) 

            // Apelido:
            userElement.textContent = `Apelido:${element.username}`
            ul.appendChild(userElement);

            // E-mail:
            emailElement.textContent = `Email: ${element.email}`
            ul.appendChild(emailElement) 

            // Telefone:
            phoneElement.textContent = `Telefone: ${element.phone}`
            ul.appendChild(phoneElement) 

            // WebSite:
            siteElement.textContent = `Site: ${element.website}`
            ul.appendChild(siteElement) 

        });
    }
    printData()
}
getDados()