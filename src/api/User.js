
export const getAllBuyer = async seller => {
    const url = `${process.env.REACT_APP_API_URL}/oldlaptopuser`

    const response = await fetch(url)

    const data = await response.json()

    return data.filter(item => !item.seller && !item.admin)
}


// filterSellerBuyer = data.filter(item => !item.admin)
// filterSeller = data.filter(item => item.seller && !item.admin)
// filterBuyer = data.filter(item => !item.seller && !admin)
//admin data gate

export const getAllSeller = async seller => {
    const url = `${process.env.REACT_APP_API_URL}/oldlaptopuser`

    const response = await fetch(url)

    const data = await response.json()

    return data.filter(item => item.seller)
}
