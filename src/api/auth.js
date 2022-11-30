export const setAuthToken = (user, seller) => {
    let currentUser = {};
    if (seller) {
        currentUser = {
            email: user.email,
            seller: seller === 'seller' ? true : false,
        }
    } else {
        currentUser = {
            email: user.email,
        }
    }

    // save user in db & gat token

    fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            //Save token
            localStorage.setItem("oldLaptop-token", data.token)
        })
}