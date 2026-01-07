// Данные статей блога
const blogPosts = {
    '1': {
        title: 'Ночное посещение Гольшанского замка: ходили по коридорам с мурашками',
        author: 'Анна Петрова',
        date: '15 мая 2024',
        category: 'Отчеты о путешествиях',
        content: `
            <p>Решились на ночную экскурсию в Гольшанский замок и не пожалели! Рассказываю, какие ощущения испытываешь, бродя по темным коридорам, где по легендам до сих пор обитают призраки...</p>
            
            <h3>Подготовка к экскурсии</h3>
            <p>Забронировали экскурсию заранее через официальный сайт. Группа была небольшой - всего 8 человек, что создавало особую атмосферу интимности. Нам выдали фонарики и предупредили о правилах поведения.</p>
            
            <h3>Первые впечатления</h3>
            <p>Уже при входе в замок почувствовали странное ощущение - воздух стал noticeably холоднее, хотя на улице была теплая летняя ночь. Наш гид, местный историк, рассказал, что это обычное явление для Гольшанского замка.</p>
            
            <h3>Самое запоминающееся</h3>
            <p>В подземелье, где находится легендарный камень Святополка, у нескольких участников группы одновременно перестали работать электронные устройства. Часы показывали разное время, телефоны разрядились моментально.</p>
            
            <h3>Выводы</h3>
            <p>Однозначно рекомендую ночную экскурсию всем любителям мистики! Это совершенно другой опыт compared to дневному посещению.</p>
        `,
        image: 'https://via.placeholder.com/600x400'
    },
    '2': {
        title: 'В поисках Черного Монаха: историческое расследование',
        author: 'Иван Сидорович',
        date: '8 мая 2024',
        category: 'Исследования легенд',
        content: `
            <p>Провел несколько недель в архивах, пытаясь найти исторические корни легенды о Черном Монахе Мирского замка. Удалось обнаружить интересные документы XVI века...</p>
            <!-- Полный текст статьи -->
        `,
        image: 'https://via.placeholder.com/600x400'
    }
    // Добавьте остальные статьи по аналогии
};

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const modal = document.getElementById('post-modal');
    const closeBtn = modal.querySelector('.close-btn');

    // Фильтрация статей
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            filterPosts(filter);
        });
    });

    // Чтение статей
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const postId = this.getAttribute('data-post');
            showPost(postId);
        });
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    // Закрытие по клику вне окна
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

function filterPosts(filter) {
    const posts = document.querySelectorAll('.blog-post');
    
    posts.forEach(post => {
        if (filter === 'all' || post.getAttribute('data-category') === filter) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}

function showPost(postId) {
    const post = blogPosts[postId];
    const container = document.getElementById('post-container');
    
    if (post) {
        container.innerHTML = `
            <article class="full-post">
                <h2>${post.title}</h2>
                <div class="post-meta">
                    <span class="author">${post.author}</span>
                    <span class="date">${post.date}</span>
                    <span class="category">${post.category}</span>
                </div>
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="post-content">
                    ${post.content}
                </div>
            </article>
        `;
        
        document.getElementById('post-modal').classList.remove('hidden');
    }
}