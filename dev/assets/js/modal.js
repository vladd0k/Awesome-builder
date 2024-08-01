const installModal = () => {
    const modal = document.querySelector('.modal');
    const triger = document.querySelectorAll('[data-triger-modal]')
    const modalBody = document.querySelector('.modal-body')
    const buildSold = document.querySelectorAll('.sold')

    const modalArr = [{
            id: 0,
            triger: 'sold',
            title: 'Нажаль всі квартири продані..(',
            description: 'Вільні квартири знаходяться в будинках, які не продані. Оберіть, будь ласка, іншу будівлю, щоб переглянути квартири своєї мрії!)',
            imgUrl: 'assets/img/modal-rejected.png',
        },
        {
            id: 1,
            triger: 'registrationSuccess',
            description: 'Ви успішно зареєструвалися. Ласка',
            imgUrl: 'assets/img/modal-accepted.png',
            markap: `   <form class="form">
                     <h4 class="form-title">Залишились питання? Напишіть нам!)</h4>
                     <div class="form-column">
                         <label for="name">Name</label>
                         <input id="name" type="text">
                     </div>
                     <div class="form-column">
                         <label for="tel">Telephone</label>
                         <input id="tel" type="tel">
                     </div>
                     <div class="form-column">
                         <label for="answer">You'r answer</label>
                         <textarea id="answer"></textarea>
                     </div>
                     <button class="btn btn-secondary" type="submit" data-close="modal">Ok</button>
                     <button class="btn-close" data-close="modal">х</button>
                </form>`
        },
        {
            id: 2,
            triger: 'loginSuccess',
            title: 'Успішна реєстрація22222',
            description: 'Ви успішно зареєструвалися. Ласка22222',
            imgUrl: 'assets/img/modal-accepted.png'
        },
    ]

    const closeModal = () => {
        modal.classList.remove('show')
    }

    modal.addEventListener('click', (event) => {
        event.target.classList.remove('show')
    })

    const randerModalContent = (modalContent) => {
        if (modalContent.markap) {
            
            modalBody.innerHTML = modalContent.markap
        } else {
            modalBody.innerHTML = `<h2 class="modal-title">${modalContent.title}</h2>
            <p class="modal-description">${modalContent.description}</p>
            <img src="${modalContent.imgUrl}" class="modal-img" alt="img ${modalContent.triger}">
            <div class="btn-row">
                <button class="btn btn-primary" data-triger-close="modal">close</button>
                <button class="btn btn-secondary">ok</button>
                <button class="btn-close" data-triger-close="modal">×</button>
            </div>`
        }

        const trigerClose = document.querySelectorAll('[data-triger-close="modal"]')

        trigerClose.forEach(btn => {
            btn.addEventListener('click', closeModal)
        })
    }

    const showModal = (modalType) => {
        const modalData = modalArr.find(item => item.triger === modalType)
        console.log(modalData);
        randerModalContent(modalData)
        modal.classList.add('show')
    }

    const trigerModal = triger.forEach(item => {
        item.addEventListener('click', () => {
            const modalType = item.getAttribute('data-triger-modal')
            showModal(modalType)
        })
    })
}

document.querySelector('.modal') ? installModal() : null; 