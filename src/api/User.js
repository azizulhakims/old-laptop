
export const getAllBuyer = async seller => {
    const url = `https://nodejs-express-lemon.vercel.app/oldlaptopuser`

    const response = await fetch(url)

    const data = await response.json()

    return data.filter(item => !item.seller && !item.admin)
}


// filterSellerBuyer = data.filter(item => !item.admin)
// filterSeller = data.filter(item => item.seller && !item.admin)
// filterBuyer = data.filter(item => !item.seller && !admin)
//admin data gate

export const getAllSeller = async seller => {
    const url = `https://nodejs-express-lemon.vercel.app/oldlaptopuser`

    const response = await fetch(url)

    const data = await response.json()

    return data.filter(item => item.seller)
}
