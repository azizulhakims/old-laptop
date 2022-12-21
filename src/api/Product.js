export const getMyProducts = async email => {
    const url = `https://nodejs-express-lemon.vercel.app/addproduct?email=${email}`

    const response = await fetch(url)

    const data = await response.json()

    return data
}