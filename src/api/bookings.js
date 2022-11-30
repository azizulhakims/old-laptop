export const saveBooking = async bookingData => {
    const url = `${process.env.REACT_APP_API_URL}/oldLaptopCategory`

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
    const url = `${process.env.REACT_APP_API_URL}/`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(),
    })

    const data = await response.json()

    return data
}