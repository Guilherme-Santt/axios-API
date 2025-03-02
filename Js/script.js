
// solicitando dados
const getData = async () => {
    try {
        const response = await axios.get(
            "http://jsonplaceholder.typicode.com/users"
        );        

        console.log(response)
        return response.data;

    } catch (error) {
        console.log(error)
    }
}
getData()

// Imprimindo dados na tela
const ListName = document.querySelector("#user-container");
const ul = document.createElement("ul")
const tittle = document.createElement("h2")
tittle.textContent = "Nomes";

const printData = async () => {
    const data = await getData();   
    
    data.forEach((element) => {
        const nameElement = document.createElement("li")
        nameElement.textContent = element.name

        ul.appendChild(nameElement) 
        ListName.appendChild(tittle)
        ListName.appendChild(ul)

    });
}

printData()