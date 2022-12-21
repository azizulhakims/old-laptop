export const saveBooking = async bookingData => {
    const url = `https://nodejs-express-lemon.vercel.app/oldLaptopCategory`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    })

    const data = await response.json()
    return data
}

export const getAllBooked = async email => {
    const url = `https://nodejs-express-lemon.vercel.app/productbook?email=${email}`

    const response = await fetch(url)

    const data = await response.json()

    return data
}

// filterSellerBuyer = data.filter(item => !item.admin)
// filterSeller = data.filter(item => item.seller && !item.admin)
// filterBuyer = data.filter(item => !item.seller && !admin)
//admin data gate
export const getAllBookedAdmin = async () => {
    const url = `https://nodejs-express-lemon.vercel.app/productbook`

    const response = await fetch(url)

    const data = await response.json()

    return data
}


