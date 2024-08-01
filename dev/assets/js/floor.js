const flatArr = [{
    id: 0,
    house: '2',
    floor: '1',
    flatNumber: '1',
    rooms: '3',
    square: '82.3 м²',
    price: '720$',
    priceTotal: '57610$',
    status: 'action',
},
{
    id: 1,
    house: "2",
    floor: "1",
    flatNumber: "2",
    rooms: "2",
    square: "60,7м²",
    price: "700$",
    priceTotal: "42490$",
    status: "sold",
},
{
    id: 2,
    house: "2",
    floor: "1",
    flatNumber: "3",
    rooms: "3",
    square: "60,7м²",
    price: "700$",
    priceTotal: "42490$",
    status: "free",
},
{
    id: 3,
    house: "2",
    floor: "1",
    flatNumber: "4",
    rooms: "3",
    square: "82м²",
    price: "700$",
    priceTotal: "57400$",
    status: "booking",
},
{
    id: 4,
    house: "2",
    floor: "1",
    flatNumber: "5",
    rooms: "3",
    square: "79.7м²",
    price: "700$",
    priceTotal: "55790$",
    status: "booking",
},
{
    id: 5,
    house: "2",
    floor: "1",
    flatNumber: "6",
    rooms: "1",
    square: "39.2м²",
    price: "700$",
    priceTotal: "27440$",
    status: "free",
},
{
    id: 6,
    house: "2",
    floor: "1",
    flatNumber: "7",
    rooms: "1",
    square: "40.0м²",
    price: "700$",
    priceTotal: "29400$",
    status: "booking",
},
{
    id: 7,
    house: "2",
    floor: "1",
    flatNumber: "8",
    rooms: "1",
    square: "39.2м²",
    price: "700$",
    priceTotal: "27440$",
    status: "sold",
},
{
    id: 8,
    house: "2",
    floor: "1",
    flatNumber: "9",
    rooms: "3",
    square: "79.3м²",
    price: "700$",
    priceTotal: "55510$",
    status: "action",
},
]

const installFloor = () => {
const flats = document.querySelectorAll('.flat')
const flatInfo = document.querySelector('.floor-options')
const initialValue = [flatArr[0]]

const removeActiveClass = () => flats.forEach(item => item.classList.remove('active'))

const setInitialActiveClass = () => {
    const firstFlatSelector = document.querySelector('.flat')
    firstFlatSelector.classList.add('active')
}


const renderInformation = (array) => {
    const flatInformation = array.map(item => {
        return (`
                <div class="floor-option-item">
                    <div>Номер дому:</div>
                    <div>${item.house}</div>
                </div>
                <div class="floor-option-item">
                    <div>Поверх:</div>
                    <div>${item.floor}</div>
                </div>
                <div class="floor-option-item">
                    <div>Номер квартири:</div>
                    <div>${item.flatNumber}</div>
                </div>
                <div class="floor-option-item">
                    <div>Кількість кімнат:</div>
                    <div>${item.rooms}</div>
                </div>
                <div class="floor-option-item">
                    <div>Площа квартири:</div>
                    <div>${item.square}</div>
                </div>
                <div class="floor-option-item">
                    <div>Ціна за м²:</div>
                    <div>${item.price}</div>
                </div>
                <div class="floor-option-item">
                    <div>Ціна за квартиру:</div>
                    <div>${item.priceTotal}</div>
                </div>
                <div class="floor-option-item">
                    <div>Статус квартири:</div>
                    <div>${item.status}</div>
                </div>
            `)
    })

    flatInfo.innerHTML = flatInformation
}
renderInformation(initialValue)


flats.forEach(flat => {
    flat.addEventListener('click', () => {
        removeActiveClass()
        flat.classList.add('active')
        const thisFlat = flat.getAttribute('data-number')
        const flatNumber = flatArr.filter(item => item.flatNumber === thisFlat)
        renderInformation(flatNumber)
    })

    const setFlatStatus =()=> flatArr.find(item => {
        const thisFlat = flat.getAttribute('data-number')
      
          if (item.flatNumber === thisFlat) {
            flat.classList.add(item.status)
          }
    })
    setFlatStatus()

    if (flat.classList.contains('action')) {
        flat.querySelector('.flat-stutus-text').innerHTML = 'Акція'
    } else if (flat.classList.contains('booking')) {
        flat.querySelector('.flat-stutus-text').innerHTML = 'Бронь'
    } else if (flat.classList.contains('sold')) {
        flat.querySelector('.flat-stutus-text').innerHTML = 'Продано'
    } else {
         flat.querySelector('.flat-stutus-text').innerHTML = 'Вільна'
    }

})





setInitialActiveClass()

}

document.querySelector('.page-floor-item') ? installFloor() : null;