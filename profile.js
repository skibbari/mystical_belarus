document.addEventListener('DOMContentLoaded', function() {
    const changeAvatarBtn = document.getElementById('changeAvatarBtn');
    const avatarInput = document.getElementById('avatarInput');
    const editProfileBtn = document.getElementById('editProfileBtn');
    const createPostBtn = document.getElementById('createPostBtn');
    const profileForm = document.getElementById('profile-form');
    const postForm = document.getElementById('post-form');
    
    const editProfileModal = document.getElementById('edit-profile-modal');
    const createPostModal = document.getElementById('create-post-modal');

    // Смена аватара
    changeAvatarBtn.addEventListener('click', function() {
        avatarInput.click();
    });

    avatarInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('userAvatar').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Редактирование профиля
    editProfileBtn.addEventListener('click', function() {
        document.getElementById('editName').value = document.getElementById('userName').textContent;
        document.getElementById('editDescription').value = document.getElementById('userDescription').textContent;
        editProfileModal.classList.remove('hidden');
    });

    // Создание публикации
    createPostBtn.addEventListener('click', function() {
        createPostModal.classList.remove('hidden');
    });

    // Сохранение профиля
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        document.getElementById('userName').textContent = document.getElementById('editName').value;
        document.getElementById('userDescription').textContent = document.getElementById('editDescription').value;
        editProfileModal.classList.add('hidden');
    });

    // Создание поста
    postForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Здесь будет логика сохранения поста
        alert('Публикация создана!');
        createPostModal.classList.add('hidden');
        postForm.reset();
    });

    // Закрытие модальных окон
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.add('hidden');
        });
    });

    // Закрытие по клику вне окна
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.classList.add('hidden');
        }
    });
});