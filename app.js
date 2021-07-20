const url = document.getElementById('url')
const name = document.getElementById('name')
const bred_for = document.getElementById('bred_for')
const breed_group = document.getElementById('breed_group')
const life_span = document.getElementById('life_span')
const temperament = document.getElementById('temperament')

const getDogData = async () => {
    const raw_data = await fetch('https://api.thedogapi.com/v1/images/search')
    const data = await raw_data.json()
    return data
}

const reloadData = () => {
    getDogData().then(result => {
        if (result[0].breeds[0] === undefined) {
            reloadData()
        }
        else {
            url.src = result[0].url
            name.innerText = result[0].breeds[0].name
            bred_for.innerText = result[0].breeds[0].bred_for
            breed_group.innerText = result[0].breeds[0].breed_group
            life_span.innerText = result[0].breeds[0].life_span
            temperament.innerText = result[0].breeds[0].temperament
        }
    })
}

reloadData()
document.getElementById('next-btn').addEventListener('click', () => {
    reloadData()
})