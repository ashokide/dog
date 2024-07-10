const url = document.getElementById('url')

const getDogData = async () => {
    const raw_data = await fetch('https://api.thedogapi.com/v1/images/search')
    const data = await raw_data.json()
    return await data
}

const reloadData = () => {
    getDogData().then(result => {
        url.src = result[0].url ? result[0].url : "loading.png"
    })
}

reloadData()
document.getElementById('next-btn').addEventListener('click', () => {
    url.src = "loading.png";
    reloadData()
})
