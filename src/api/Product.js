export const getMyProducts = async email => {
    const url = `${process.env.REACT_APP_API_URL}/addproduct?email=${email}`

    const response = await fetch(url)

    const data = await response.json()

    return data
}