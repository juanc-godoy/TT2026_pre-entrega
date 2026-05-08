//GET || GET product<id> || POST ||DELETE product<id>
//FUNCIONES

async function get(end){
    try {
        const promesa= await fetch(url+end)
        const data= await promesa.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const url= "https://fakestoreapi.com/"
const args= process.argv
//const {,, metodo, endpoint}= args
const metodo = args[2]
const endpoint= args[3]

switch (metodo.toUpperCase()){
    case "GET":
        get(endpoint)
        break
    case "POST":
        console.log("POST")
        break
    case "DELETE":
        console.log("DELETE")
        break    
}

