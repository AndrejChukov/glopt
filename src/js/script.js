function validateForms(form) {
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа!")
            },
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильтно введен адрес почты"
            }
        }
    })
}

function initMap() {
    const coordinates = {lat: 47.212325, lng: 38.933663},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        }),

        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: src = '../icons/logo/logo2.png'
        });
}