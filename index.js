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

async function post(end,a,b,c){
    try {
        const product = {title: a, price: b, category: c};
        //product = { title: 'T-Shirt-Rex', price: 300, category: 'remeras' };
        const promesa= await fetch(url+end, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        const data= await promesa.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

async function del(end){
    try {
        const promesa= await fetch(url+end,{method: 'DELETE'})
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
const title= args[4]
const price= args[5]
const category= args[6]

switch (metodo.toUpperCase()){
    case "GET":
        get(endpoint)
        break

    case "POST":
        if (args.length>=7){
            post(endpoint,title,price,category)
            break
        }else{
            console.log("Por favor ingresar datos necesarios para agregar el producto")
            break
        }
    
    case "DELETE":
        del(endpoint)
        break    
}

