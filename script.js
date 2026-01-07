// Глобальная переменная для карты
let map;
let markers = [];

document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    // Переключение языка
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Кнопка пользователя - просто переход в профиль
    const userIcon = document.getElementById('userIcon');
    if (userIcon) {
        userIcon.addEventListener('click', function() {
            window.location.href = 'profile.html';
        });
    }

    // Раскрытие/сворачивание деталей
    const detailButtons = document.querySelectorAll('.details-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                if (targetElement.classList.contains('hidden')) {
                    targetElement.classList.remove('hidden');
                    this.textContent = 'Свернуть';
                } else {
                    targetElement.classList.add('hidden');
                    this.textContent = 'Подробнее';
                }
            }
        });
    });

    // Инициализация карты
    initMap();
}

// Карта Google Maps
function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    // Создаем карту
    map = new google.maps.Map(mapElement, {
        center: { lat: 53.9, lng: 27.5 }, // Центр Беларуси
        zoom: 7,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{ "color": "#2d1b4e" }]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#d8c7ff" }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#1a0b2e" }]
            }
        ]
    });

    // Добавляем поиск
    initSearch();

    // Добавляем метки мест
    addPlacesToMap();
}

function initSearch() {
    const searchInput = document.querySelector('.search-input');
    
    // Создаем автозаполнение для поиска
    const autocomplete = new google.maps.places.Autocomplete(searchInput, {
        types: ['geocode'],
        componentRestrictions: { country: 'by' }
    });

    // При выборе места из автозаполнения
    autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

        // Центрируем карту на выбранном месте
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(15);
        }

        // Добавляем маркер для найденного места
        addMarker(place.geometry.location, place.name, 'search');
    });

    // Обработка ручного ввода поиска
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(this.value);
        }
    });
}

function performSearch(query) {
    if (!query.trim()) return;

    const service = new google.maps.places.PlacesService(map);
    
    const request = {
        query: query + ' Беларусь',
        fields: ['name', 'geometry', 'formatted_address']
    };

    service.findPlaceFromQuery(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            // Центрируем карту на первом результате
            map.setCenter(results[0].geometry.location);
            map.setZoom(14);
            
            // Добавляем маркер
            addMarker(results[0].geometry.location, results[0].name, 'search');
        }
    });
}

function addPlacesToMap() {
    // Данные мест Беларуси
    const places = [
        // Замки (фиолетовые флажки)
        {
            position: { lat: 54.2513, lng: 26.0156 },
            title: "Гольшанский замок",
            type: "castle",
            description: "Руины замка с проклятым камнем Святополка. Одна из самых мрачных легенд Беларуси."
        },
        {
            position: { lat: 53.4515, lng: 26.4724 },
            title: "Мирский замок", 
            type: "castle",
            description: "Объект Всемирного наследия ЮНЕСКО. Известен легендой о Черном Монахе."
        },
        {
            position: { lat: 53.2228, lng: 26.6914 },
            title: "Несвижский замок",
            type: "castle",
            description: "Резиденция Радзивиллов. Место обитания призрака Белой Дамы."
        },
        {
            position: { lat: 54.3114, lng: 26.2831 },
            title: "Кревский замок",
            type: "castle",
            description: "Древние руины с богатой историей. Место заключения Кейстута."
        },
        {
            position: { lat: 53.4469, lng: 25.8236 },
            title: "Новогрудский замок",
            type: "castle",
            description: "Первая столица ВКЛ. Руины замка на Замковой горе."
        },

        // Костелы/Церкви (синие флажки)
        {
            position: { lat: 53.6754, lng: 23.8423 },
            title: "Фарный костел в Гродно",
            type: "church",
            description: "Католический костел в стиле барокко. Архитектурная жемчужина."
        },
        {
            position: { lat: 53.8946, lng: 27.5479 },
            title: "Красный костел в Минске",
            type: "church",
            description: "Костел Святых Симеона и Елены - символ Минска."
        },
        {
            position: { lat: 53.9083, lng: 27.5564 },
            title: "Свято-Духов собор",
            type: "church",
            description: "Православный кафедральный собор в Минске."
        },
        {
            position: { lat: 52.4266, lng: 31.0167 },
            title: "Петропавловский собор в Гомеле",
            type: "church",
            description: "Православный собор в дворцово-парковом ансамбле."
        },

        // Музеи (красные флажки)
        {
            position: { lat: 52.0930, lng: 23.6850 },
            title: "Брестская крепость",
            type: "museum",
            description: "Мемориальный комплекс героической обороны 1941 года."
        },
        {
            position: { lat: 53.9090, lng: 27.5613 },
            title: "Национальный исторический музей",
            type: "museum",
            description: "Крупнейший музей Беларуси с богатой коллекцией."
        },
        {
            position: { lat: 53.9175, lng: 27.5244 },
            title: "Музей ВОВ в Минске",
            type: "museum",
            description: "Музей истории Великой Отечественной войны."
        },

        // Интересные места (зеленые флажки)
        {
            position: { lat: 54.5139, lng: 26.8527 },
            title: "Озеро Нарочь",
            type: "point",
            description: "Самое большое озеро Беларуси с красивыми легендами."
        },
        {
            position: { lat: 55.4242, lng: 28.7658 },
            title: "Браславские озера",
            type: "point",
            description: "Национальный парк с уникальными пейзажами."
        },
        {
            position: { lat: 52.4089, lng: 31.0167 },
            title: "Гомельский дворцово-парковый ансамбль",
            type: "point",
            description: "Великолепный дворец Румянцевых-Паскевичей."
        },
        {
            position: { lat: 53.9086, lng: 27.5625 },
            title: "Троицкое предместье",
            type: "point",
            description: "Исторический район Минска с атмосферой старины."
        },
        {
            position: { lat: 53.8476, lng: 27.4833 },
            title: "Национальная библиотека",
            type: "point",
            description: "Архитектурный символ современной Беларуси."
        }
    ];

    // Добавляем все места на карту
    places.forEach(place => {
        addMarker(place.position, place.title, place.type, place.description);
    });
}

function addMarker(position, title, type, description = '') {
    const icon = getIconForType(type);
    
    const marker = new google.maps.Marker({
        position: position,
        map: map,
        title: title,
        icon: icon
    });

    // Информационное окно
    if (description) {
        const infowindow = new google.maps.InfoWindow({
            content: `
                <div style="color: #2d1b4e; font-family: 'Montserrat', sans-serif; max-width: 250px;">
                    <h3 style="color: #7e57c2; margin-bottom: 8px; font-family: 'Playfair Display', serif;">${title}</h3>
                    <p style="margin-bottom: 10px; line-height: 1.4; color: #4a2c7a;">${description}</p>
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem;">
                        <div style="width: 16px; height: 16px; background: ${getColorForType(type)}; border-radius: 2px;"></div>
                        <span style="color: #6a5acd; font-size: 0.9rem;">${getTypeName(type)}</span>
                    </div>
                </div>
            `
        });

        marker.addListener('click', () => {
            // Закрываем все открытые информационные окна
            markers.forEach(m => {
                if (m.infowindow) m.infowindow.close();
            });
            
            infowindow.open(map, marker);
            marker.infowindow = infowindow;
        });
    }

    markers.push(marker);
}

function getIconForType(type) {
    const colors = {
        castle: '#8a2be2', // Фиолетовый - замки
        church: '#4169e1', // Синий - костелы/церкви
        museum: '#dc143c', // Красный - музеи
        point: '#228b22',  // Зеленый - интересные места
        search: '#ff6b6b'  // Оранжевый - поиск
    };

    const color = colors[type] || '#6a5acd';
    
    // Создаем SVG флажок
    const svg = `
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <!-- Флажок -->
            <path d="M6 6 L20 6 L20 20 L6 20 Z" fill="${color}" stroke="white" stroke-width="1"/>
            <path d="M20 6 L26 10 L20 14 Z" fill="${color}" stroke="white" stroke-width="1"/>
            <!-- Древко флажка -->
            <rect x="5" y="6" width="2" height="20" fill="#8b4513"/>
        </svg>
    `;
    
    return {
        url: 'data:image/svg+xml;base64,' + btoa(svg),
        scaledSize: new google.maps.Size(32, 32),
        anchor: new google.maps.Point(6, 32)
    };
}

function getColorForType(type) {
    const colors = {
        castle: '#8a2be2', // Фиолетовый
        church: '#4169e1', // Синий
        museum: '#dc143c', // Красный
        point: '#228b22',  // Зеленый
        search: '#ff6b6b'  // Оранжевый
    };
    return colors[type] || '#6a5acd';
}

function getTypeName(type) {
    const names = {
        castle: '🏰 Замок',
        church: '⛪ Костел/Церковь',
        museum: '🏛️ Музей',
        point: '📍 Интересное место',
        search: '🔍 Найденное место'
    };
    return names[type] || '📍 Место';
}
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    // Переключение языка
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Кнопка пользователя
    const userIcon = document.getElementById('userIcon');
    if (userIcon) {
        userIcon.addEventListener('click', function() {
            window.location.href = 'profile.html';
        });
    }

    // Раскрытие/сворачивание деталей - ИСПРАВЛЕННАЯ ЛОГИКА
    const detailButtons = document.querySelectorAll('.details-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                if (targetElement.classList.contains('hidden')) {
                    // Раскрываем текст
                    targetElement.classList.remove('hidden');
                    this.textContent = 'Свернуть';
                } else {
                    // Сворачиваем текст
                    targetElement.classList.add('hidden');
                    this.textContent = 'Подробнее';
                }
            }
        });
    });

    // Листание фотографий для легенд
    const arrowButtons = document.querySelectorAll('.arrow-btn');
    arrowButtons.forEach(button => {
        button.addEventListener('click', function() {
            const container = this.closest('.legend-image');
            const images = container.querySelectorAll('img');
            const currentImg = container.querySelector('img:not(.hidden)');
            const currentIndex = Array.from(images).indexOf(currentImg);
            
            let nextIndex;
            if (this.classList.contains('next')) {
                nextIndex = (currentIndex + 1) % images.length;
            } else {
                nextIndex = (currentIndex - 1 + images.length) % images.length;
            }
            
            currentImg.classList.add('hidden');
            images[nextIndex].classList.remove('hidden');
        });
    });
}
// Общие функции для всех страниц сайта
document.addEventListener('DOMContentLoaded', function() {
    // Переключение языков
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Кнопка "Наверх" в подвале
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Показ/скрытие кнопки "Наверх" при скролле
    window.addEventListener('scroll', function() {
        if (backToTop) {
            if (window.pageYOffset > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        }
    });

    // Инициализация скрытия кнопки "Наверх" при загрузке
    if (backToTop) {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
        backToTop.style.transition = 'all 0.3s ease';
    }

    // Обработчик для иконки пользователя
    const userIcon = document.getElementById('userIcon');
    if (userIcon) {
        userIcon.addEventListener('click', function() {
            alert('Функционал пользователя будет добавлен в будущих обновлениях!');
        });
    }
});