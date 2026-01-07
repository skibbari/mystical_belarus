<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Маршруты - Mystical Belarus</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Montserrat', sans-serif;
            background: linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #1a0b2e 100%);
            color: #e6e6fa; 
            line-height: 1.5; 
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        
        /* УМЕНЬШЕННАЯ ШАПКА */
        header {
            background: linear-gradient(135deg, #2d1b4e 0%, #4a2c7a 100%);
            padding: 1rem; 
            text-align: center; 
            position: relative;
            box-shadow: 0 2px 10px rgba(74, 44, 122, 0.3);
        }
        .header-content {
            display: flex; 
            justify-content: space-between; 
            align-items: center;
            max-width: 1200px; 
            margin: 0 auto 1rem; 
            position: relative;
        }
        .logo { 
            height: 80px; 
            width: auto; 
        }
        .language-switcher {
            display: flex; 
            gap: 0.3rem; 
            position: absolute;
            left: 50%; 
            transform: translateX(-50%);
        }
        .lang-btn {
            background: rgba(255, 255, 255, 0.1); 
            border: 1px solid #8a6bb8;
            color: #d8c7ff; 
            padding: 0.3rem 0.8rem; 
            cursor: pointer;
            font-family: 'Montserrat', sans-serif; 
            font-size: 0.8rem;
            transition: all 0.3s ease; 
            border-radius: 15px;
        }
        .lang-btn.active { 
            background: #8a6bb8; 
            border-color: #8a6bb8; 
            color: #fff; 
        }
        
        /* ИКОНКА ПОЛЬЗОВАТЕЛЯ И ВЫПАДАЮЩЕЕ МЕНЮ */
        .user-icon { 
            color: #d8c7ff; 
            cursor: pointer; 
            transition: all 0.3s ease; 
            padding: 0.3rem; 
            width: 32px; 
            height: 32px;
            position: relative;
        }
        .user-icon.logged-in {
            color: #8a6bb8;
        }
        .user-dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            background: rgba(42, 21, 85, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(138, 107, 184, 0.5);
            border-radius: 8px;
            padding: 0.5rem;
            min-width: 180px;
            display: none;
            z-index: 1000;
            margin-top: 5px;
        }
        .user-dropdown.show {
            display: block;
            animation: slideDown 0.3s ease;
        }
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .user-info {
            padding: 0.5rem;
            border-bottom: 1px solid rgba(138, 107, 184, 0.3);
            margin-bottom: 0.5rem;
        }
        .user-name {
            font-weight: 600;
            color: #fff;
            font-size: 0.9rem;
        }
        .user-email {
            font-size: 0.8rem;
            color: #b8a9d9;
            margin-top: 0.2rem;
        }
        .user-dropdown-divider {
            height: 1px;
            background: rgba(138, 107, 184, 0.3);
            margin: 0.5rem 0;
        }
        .user-dropdown-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 0.8rem;
            color: #d8c7ff;
            text-decoration: none;
            background: none;
            border: none;
            width: 100%;
            text-align: left;
            cursor: pointer;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.9rem;
            border-radius: 4px;
            transition: all 0.3s ease;
        }
        .user-dropdown-item:hover {
            background: rgba(138, 107, 184, 0.3);
            color: #fff;
        }
        .user-dropdown-item i {
            width: 16px;
        }
        
        .main-title {
            font-family: 'Playfair Display', serif; 
            font-size: 2.2rem; 
            color: #fff;
            margin-bottom: 0.5rem; 
            font-weight: 600; 
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        }
        .subtitle { 
            font-size: 0.9rem; 
            max-width: 600px; 
            margin: 0 auto; 
            color: #d8c7ff; 
            line-height: 1.4; 
        }
        
        /* КОМПАКТНАЯ НАВИГАЦИЯ */
        .main-nav {
            display: flex; 
            justify-content: center; 
            gap: 1rem; 
            padding: 0.8rem;
            background: rgba(42, 21, 85, 0.9); 
            backdrop-filter: blur(10px);
            position: relative;
        }
        .nav-btn {
            color: #e6e6fa; 
            text-decoration: none; 
            font-size: 0.9rem;
            padding: 0.6rem 1.2rem; 
            border: 1px solid transparent; 
            border-radius: 20px;
            transition: all 0.3s ease; 
            font-weight: 500;
        }
        .nav-btn:hover { 
            background: rgba(138, 107, 184, 0.3); 
            border-color: #8a6bb8; 
            color: #fff;
            box-shadow: 0 0 15px rgba(138, 107, 184, 0.5);
        }
        .profile-nav-btn {
            background: rgba(138, 107, 184, 0.2);
            border: 1px solid #8a6bb8;
        }
        
        /* ОСНОВНОЙ КОНТЕНТ */
        main { 
            max-width: 1200px; 
            margin: 0 auto; 
            padding: 1.5rem 1rem;
            flex: 1;
        }
        
        /* КНОПКА ДОБАВЛЕНИЯ МАРШРУТА */
        .add-route-section {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem;
            background: rgba(42, 21, 85, 0.6);
            border-radius: 15px;
            border: 2px dashed rgba(138, 107, 184, 0.5);
        }
        .add-route-btn {
            background: linear-gradient(135deg, #8a6bb8 0%, #7e57c2 100%);
            color: white;
            border: none;
            padding: 1rem 2rem;
            font-size: 1.1rem;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
        }
        .add-route-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(138, 107, 184, 0.4);
            background: linear-gradient(135deg, #9a7bc8 0%, #8e67d2 100%);
        }
        .add-route-btn i {
            margin-right: 0.5rem;
        }
        
        /* ФОРМА ДОБАВЛЕНИЯ МАРШРУТА */
        .add-route-form {
            display: none;
            background: rgba(42, 21, 85, 0.9);
            padding: 2rem;
            border-radius: 15px;
            margin-top: 2rem;
            border: 1px solid rgba(138, 107, 184, 0.3);
        }
        .add-route-form.show {
            display: block;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #d8c7ff;
            font-weight: 500;
        }
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.8rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(138, 107, 184, 0.5);
            border-radius: 8px;
            color: #fff;
            font-family: 'Montserrat', sans-serif;
        }
        .form-group textarea {
            min-height: 150px;
            resize: vertical;
        }
        .form-actions {
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
        }
        
        /* СТИЛИ ДЛЯ МАРШРУТОВ */
        .route-item {
            margin-bottom: 2.5rem; 
            padding: 1.5rem; 
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px; 
            backdrop-filter: blur(10px); 
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            position: relative;
        }
        
        .user-route {
            border-left: 4px solid #8a6bb8;
            background: rgba(138, 107, 184, 0.05);
        }
        
        .user-route-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: #8a6bb8;
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .route-item h2 {
            color: #fff; 
            margin-bottom: 1rem; 
            font-family: 'Playfair Display', serif; 
            font-size: 1.6rem;
        }
        
        .route-points {
            margin-bottom: 1.2rem;
        }
        
        .route-main-points {
            color: #8a6bb8;
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .route-content {
            display: flex; 
            gap: 1.5rem; 
            align-items: flex-start; 
            margin-bottom: 1rem;
        }
        
        .route-image {
            flex: 0 0 300px; 
            position: relative; 
            overflow: hidden; 
            border-radius: 10px;
        }
        
        .route-image img {
            width: 100%; 
            height: 200px; 
            object-fit: cover; 
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        .route-text { 
            flex: 1; 
        }
        
        .route-text p { 
            color: #d8c7ff; 
            line-height: 1.5; 
            margin-bottom: 1rem; 
            font-size: 0.95rem; 
        }
        
        /* КНОПКИ */
        .details-btn, .collapse-btn, .form-btn {
            background: linear-gradient(135deg, #8a6bb8 0%, #7e57c2 100%); 
            color: white; 
            border: none; 
            padding: 0.8rem 1.5rem; 
            cursor: pointer; 
            border-radius: 25px; 
            font-family: 'Montserrat', sans-serif; 
            font-size: 0.9rem; 
            transition: all 0.3s ease; 
            font-weight: 500;
            position: relative; 
            overflow: hidden;
        }
        
        .secondary-btn {
            background: transparent;
            border: 1px solid #8a6bb8;
            color: #d8c7ff;
        }
        
        .details-btn:hover, .collapse-btn:hover, .form-btn:hover {
            transform: translateY(-2px);
            box-shadow: 
                0 5px 15px rgba(138, 107, 184, 0.4),
                0 0 20px rgba(138, 107, 184, 0.3),
                0 0 30px rgba(138, 107, 184, 0.2);
            background: linear-gradient(135deg, #9a7bc8 0%, #8e67d2 100%);
        }
        
        .secondary-btn:hover {
            background: rgba(138, 107, 184, 0.1);
        }
        
        .details-content {
            margin-top: 1.5rem; 
            padding: 1.5rem; 
            background: rgba(42, 21, 85, 0.6);
            border-radius: 12px; 
            border-left: 3px solid #8a6bb8;
        }
        
        .route-detail-section {
            margin-bottom: 2rem; 
            padding-bottom: 1.5rem;
            border-bottom: 1px solid rgba(138, 107, 184, 0.3);
        }
        
        .route-detail-section:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        
        .route-detail-section h3 {
            color: #fff; 
            margin-bottom: 1rem; 
            font-family: 'Playfair Display', serif; 
            font-size: 1.3rem;
        }
        
        .route-detail-section p { 
            color: #d8c7ff; 
            line-height: 1.5; 
            margin-bottom: 1rem; 
            font-size: 0.95rem; 
        }
        
        .detail-image {
            width: 100%; 
            margin-bottom: 1rem; 
            border-radius: 8px; 
            overflow: hidden;
        }
        
        .detail-image img {
            width: 100%; 
            height: 200px; 
            object-fit: cover;
        }
        
        .hidden {
            display: none;
        }
        
        /* МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 2000;
            align-items: center;
            justify-content: center;
        }
        
        .modal.active {
            display: flex;
        }
        
        .modal-content {
            background: linear-gradient(135deg, #2d1b4e 0%, #1a0b2e 100%);
            padding: 2rem;
            border-radius: 15px;
            width: 90%;
            max-width: 450px;
            border: 1px solid rgba(138, 107, 184, 0.5);
            position: relative;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
        
        .close-modal {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            color: #d8c7ff;
            font-size: 1.5rem;
            cursor: pointer;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .close-modal:hover {
            background: rgba(138, 107, 184, 0.2);
            color: #fff;
        }
        
        .modal h2 {
            color: #fff;
            margin-bottom: 1.5rem;
            text-align: center;
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
        }
        
        .auth-tabs {
            display: flex;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid rgba(138, 107, 184, 0.3);
        }
        
        .auth-tab {
            flex: 1;
            padding: 0.8rem;
            background: none;
            border: none;
            color: #d8c7ff;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
            border-bottom: 2px solid transparent;
            transition: all 0.3s ease;
        }
        
        .auth-tab.active {
            color: #8a6bb8;
            border-bottom: 2px solid #8a6bb8;
        }
        
        .auth-form {
            display: none;
        }
        
        .auth-form.active {
            display: block;
        }
        
        .auth-form input {
            width: 100%;
            padding: 0.8rem 1rem;
            margin-bottom: 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(138, 107, 184, 0.5);
            border-radius: 8px;
            color: #fff;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.95rem;
        }
        
        .auth-form input:focus {
            outline: none;
            border-color: #8a6bb8;
            box-shadow: 0 0 0 2px rgba(138, 107, 184, 0.2);
        }
        
        .auth-btn {
            width: 100%;
            padding: 0.8rem;
            background: linear-gradient(135deg, #8a6bb8 0%, #7e57c2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            font-weight: 600;
            margin-top: 0.5rem;
            transition: all 0.3s ease;
        }
        
        .auth-btn:hover {
            background: linear-gradient(135deg, #9a7bc8 0%, #8e67d2 100%);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(138, 107, 184, 0.4);
        }
        
        /* УВЕДОМЛЕНИЯ */
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(42, 21, 85, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(138, 107, 184, 0.5);
            border-radius: 8px;
            padding: 1rem 1.5rem;
            max-width: 350px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 3000;
            transform: translateX(150%);
            transition: transform 0.3s ease;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            border-left: 4px solid #4CAF50;
        }
        
        .notification.error {
            border-left: 4px solid #f44336;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            flex: 1;
        }
        
        .notification-content i {
            font-size: 1.2rem;
        }
        
        .notification.success .notification-content i {
            color: #4CAF50;
        }
        
        .notification.error .notification-content i {
            color: #f44336;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: #d8c7ff;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0.2rem;
            margin-left: 1rem;
        }
        
        /* КРАСИВЫЙ ПОДВАЛ */
        footer {
            background: linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 100%);
            padding: 3rem 1rem 1.5rem;
            border-top: 1px solid rgba(138, 107, 184, 0.3);
            margin-top: auto;
        }
        
        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 2rem;
            align-items: start;
        }
        
        .footer-brand {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .footer-logo {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 0.5rem;
        }
        
        .footer-logo-img {
            height: 50px;
            width: auto;
            filter: brightness(0) invert(1);
        }
        
        .footer-brand-text {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .footer-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            color: #fff;
            font-weight: 600;
        }
        
        .footer-description {
            color: #b8a9d9;
            font-size: 0.9rem;
            line-height: 1.5;
            max-width: 300px;
        }
        
        .footer-social {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid #8a6bb8;
            border-radius: 50%;
            color: #d8c7ff;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 1.1rem;
        }
        
        .social-link:hover {
            background: #8a6bb8;
            color: #fff;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(138, 107, 184, 0.4);
        }
        
        .footer-section {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .footer-heading {
            color: #fff;
            font-family: 'Playfair Display', serif;
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            position: relative;
        }
        
        .footer-heading::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 30px;
            height: 2px;
            background: #8a6bb8;
            border-radius: 2px;
        }
        
        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
        }
        
        .footer-link {
            color: #b8a9d9;
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .footer-link:hover {
            color: #fff;
            transform: translateX(5px);
        }
        
        .footer-link i {
            width: 16px;
            text-align: center;
            font-size: 0.8rem;
        }
        
        .footer-contact {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            color: #b8a9d9;
            font-size: 0.9rem;
        }
        
        .contact-item i {
            width: 16px;
            text-align: center;
            color: #8a6bb8;
        }
        
        .footer-bottom {
            max-width: 1200px;
            margin: 2rem auto 0;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(138, 107, 184, 0.2);
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }
        
        .copyright {
            color: #8a6bb8;
            font-size: 0.8rem;
        }
        
        .back-to-top {
            background: rgba(138, 107, 184, 0.2);
            border: 1px solid #8a6bb8;
            color: #d8c7ff;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            text-decoration: none;
            font-size: 0.8rem;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .back-to-top:hover {
            background: #8a6bb8;
            color: #fff;
            transform: translateY(-2px);
        }
        
        /* АДАПТИВНОСТЬ */
        @media (max-width: 768px) {
            .header-content { 
                flex-direction: column; 
                gap: 0.8rem; 
            }
            .language-switcher { 
                position: static; 
                transform: none; 
            }
            .main-title { 
                font-size: 1.8rem; 
            }
            .logo { 
                height: 60px; 
            }
            .main-nav { 
                flex-wrap: wrap; 
                gap: 0.5rem; 
                padding: 0.6rem; 
            }
            .nav-btn { 
                padding: 0.5rem 1rem; 
                font-size: 0.8rem; 
            }
            .route-content { 
                flex-direction: column; 
                gap: 1rem; 
            }
            .route-image { 
                flex: 0 0 auto; 
                width: 100%; 
            }
            .route-image img { 
                height: 200px; 
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                gap: 2rem;
                text-align: center;
            }
            
            .footer-brand {
                align-items: center;
            }
            
            .footer-logo {
                justify-content: center;
            }
            
            .footer-heading::after {
                left: 50%;
                transform: translateX(-50%);
            }
            
            .footer-bottom {
                flex-direction: column;
                text-align: center;
                gap: 1rem;
            }
        }
        
        @media (max-width: 480px) {
            .footer-social {
                justify-content: center;
            }
            
            .social-link {
                width: 35px;
                height: 35px;
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-content">
            <a href="index.html"><img src="1.png" alt="Логотип Mystical Belarus" class="logo"></a>
            <div class="language-switcher">
                <button class="lang-btn active" data-lang="ru">Рус</button>
                <button class="lang-btn" data-lang="by">Бел</button>
                <button class="lang-btn" data-lang="en">Eng</button>
            </div>
            <div class="user-icon" id="userIcon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M20 22C20 17.5817 16.4183 14 12 14C7.58172 14 4 17.5817 4 22H20Z" stroke="currentColor" stroke-width="2"/>
                </svg>
                <div class="user-dropdown" id="userDropdown">
                    <!-- Контент будет заполняться динамически -->
                </div>
            </div>
        </div>
        <h1 class="main-title">Маршруты</h1>
        <p class="subtitle">Откройте для себя лучшие дороги Беларуси! В этом разделе мы собрали тщательно продуманные маршруты, которые проведут вас через самые живописные уголки страны. Ваше идеальное путешествие начинается здесь!</p>
    </header>

    <nav class="main-nav" id="mainNav">
        <a href="index.html" class="nav-btn">Главная</a>
        <a href="legends.html" class="nav-btn">Легенды</a>
        <a href="blog.html" class="nav-btn">Блог</a>
        <a href="quizzes.html" class="nav-btn">Викторины</a>
        <a href="routes.html" class="nav-btn">Маршруты</a>
        <!-- Кнопка профиля будет добавлена динамически -->
    </nav>

    <main>
        <!-- Секция для добавления маршрута -->
        <section class="add-route-section" id="addRouteSection" style="display: none;">
            <button class="add-route-btn" id="addRouteBtn">
                <i class="fas fa-plus-circle"></i> Добавить маршрут
            </button>
            
            <div class="add-route-form" id="addRouteForm">
                <div class="form-group">
                    <label for="routeName">Название маршрута</label>
                    <input type="text" id="routeName" placeholder="Введите название маршрута">
                </div>
                <div class="form-group">
                    <label for="routePoints">Основные точки маршрута</label>
                    <input type="text" id="routePoints" placeholder="Например: Минск — Мир — Несвиж — Минск">
                </div>
                <div class="form-group">
                    <label for="routeImage">Ссылка на изображение</label>
                    <input type="text" id="routeImage" placeholder="https://example.com/image.jpg">
                </div>
                <div class="form-group">
                    <label for="routeDescription">Описание маршрута</label>
                    <textarea id="routeDescription" placeholder="Подробное описание вашего маршрута..."></textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="form-btn secondary-btn" id="cancelRouteBtn">Отмена</button>
                    <button type="button" class="form-btn" id="saveRouteBtn">Сохранить маршрут</button>
                </div>
            </div>
        </section>

        <!-- Контейнер для пользовательских маршрутов -->
        <div id="userRoutesContainer"></div>

        <!-- Предустановленные маршруты -->
        <section class="route-item">
            <h2>Восточная мозаика: от древних храмов до стеклянных шедевров</h2>
            <div class="route-points">
                <span class="route-main-points">Минск — Могилёв — Гомель — Минск</span>
            </div>
            <div class="route-content">
                <div class="route-image">
                    <img src="https://via.placeholder.com/400x300/2d1b4e/ffffff?text=Восточная+мозаика" alt="Восточная мозаика">
                </div>
                <div class="route-text">
                    <p>Откройте Беларусь с другой стороны — восточную, гостеприимную и полную сюрпризов. Этот маршрут проведет вас через величественные дворцы, один из старейших театров Европы и уникальное предприятие, где рождается хрусталь, известный на весь мир. Погрузитесь в атмосферу дворянской усадебной жизни и почувствуйте пульс Полесья.</p>
                    <button class="details-btn" data-target="route1-details">Подробнее</button>
                </div>
            </div>
            <div id="route1-details" class="details-content hidden">
                <div class="route-detail-section">
                    <h3>Могилёв</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/4a2c7a/ffffff?text=Могилёв" alt="Могилёв">
                    </div>
                    <p>В Могилёве вас ждёт атмосфера уютного губернского города с богатой историей. Поднимитесь на смотровую площадку Ратуши, чтобы полюбоваться панорамой Днепра, прогуляйтесь по пешеходной Ленинской с её старинной архитектурой и загадайте желание у необычного памятника «Звездочет». Здесь царит спокойная, почти нетронутая временем атмосфера, а мемориал «Буйничское поле» напомнит о героическом прошлом этих мест.</p>
                </div>
                
                <div class="route-detail-section">
                    <h3>Гомель</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/1a0b2e/ffffff?text=Гомель" alt="Гомель">
                    </div>
                    <p>Гомель встретит вас дворцовой роскошью и элегантностью. Вы погрузитесь в атмосфер аристократической резиденции, прогуливаясь по залам дворца Румянцевых-Паскевичей и тенистым аллеям старинного парка. Величественный Петропавловский собор и готическая часовня-усыпальница создают уникальный архитектурный ансамбль, а набережная реки Сож идеальна для вечерних прогулок. Это город с особым южным шармом и ухоженными парками.</p>
                </div>
                
                <div class="route-detail-section">
                    <h3>Минск</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/2d1b4e/ffffff?text=Минск" alt="Минск">
                    </div>
                    <p>Столица встретит вас монументальной советской архитектурой и современными ритмами жизни. Вы увидите широкие проспекты и ансамбль площади Независимости, прогуляетесь по живописному Троицкому предместью с его разноцветными домиками и ощутите контрасты времени. Обязательно посетите Национальную библиотеку — символ современной Беларуси, и Музей истории ВОВ — мощный мемориал, рассказывающий о героизме народа. Минск удивляет своим простором, чистотой и гармонией разных эпох.</p>
                </div>
                
                <button class="collapse-btn" data-target="route1-details">Свернуть</button>
            </div>
        </section>

        <section class="route-item">
            <h2>Замковое кольцо: путешествие в средневековье</h2>
            <div class="route-points">
                <span class="route-main-points">Минск — Мир — Несвиж — Минск</span>
            </div>
            <div class="route-content">
                <div class="route-image">
                    <img src="https://via.placeholder.com/400x300/4a2c7a/ffffff?text=Замковое+кольцо" alt="Замковое кольцо">
                </div>
                <div class="route-text">
                    <p>Погрузитесь в атмосферу рыцарских турниров, княжеских балов и древних легенд. Этот маршрут проведет вас через самые знаменитые замки Беларуси, где камень дышит историей, а стены хранят многовековые тайны.</p>
                    <button class="details-btn" data-target="route2-details">Подробнее</button>
                </div>
            </div>
            <div id="route2-details" class="details-content hidden">
                <div class="route-detail-section">
                    <h3>Мирский замок</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/1a0b2e/ffffff?text=Мирский+замок" alt="Мирский замок">
                    </div>
                    <p>Величественный Мирский замок, включенный в список Всемирного наследия ЮНЕСКО, поражает своей архитектурой. Здесь вы услышите легенду о Черном Монахе, прогуляетесь по итальянскому саду и почувствуете дух эпохи Возрождения. Не пропустите подземные ходы и башни, откуда открывается потрясающий вид на окрестности.</p>
                </div>
                
                <div class="route-detail-section">
                    <h3>Несвижский замок</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/2d1b4e/ffffff?text=Несвижский+замок" alt="Несвижский замок">
                    </div>
                    <p>Резиденция могущественного рода Радзивиллов встретит вас роскошью и величием. Исследуйте парадные залы, тайные переходы и знаменитые парки. Узнайте историю призрака Барбары Радзивилл - Белой Дамы, чей образ до сих пор будоражит воображение посетителей.</p>
                </div>
                
                <div class="route-detail-section">
                    <h3>Минск</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/4a2c7a/ffffff?text=Минск" alt="Минск">
                    </div>
                    <p>Возвращаясь в столицу, посетите Музей древнебелорусской культуры, где собраны уникальные артефакты, связанные с историей замкового строительства в Беларуси.</p>
                </div>
                
                <button class="collapse-btn" data-target="route2-details">Свернуть</button>
            </div>
        </section>

        <section class="route-item">
            <h2>Тайны Полесья: по следам древних легенд</h2>
            <div class="route-points">
                <span class="route-main-points">Минск — Пинск — Туров — Мозырь — Минск</span>
            </div>
            <div class="route-content">
                <div class="route-image">
                    <img src="https://via.placeholder.com/400x300/1a0b2e/ffffff?text=Тайны+Полесья" alt="Тайны Полесья">
                </div>
                <div class="route-text">
                    <p>Отправьтесь в загадочный край болот, древних городищ и уникальных традиций. Полесье - земля, где до сих пор живут легенды о водяных, болотниках и древних божествах.</p>
                    <button class="details-btn" data-target="route3-details">Подробнее</button>
                </div>
            </div>
            <div id="route3-details" class="details-content hidden">
                <div class="route-detail-section">
                    <h3>Пинск</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/2d1b4e/ffffff?text=Пинск" alt="Пинск">
                    </div>
                    <p>"Полесский Париж" встретит вас изящной архитектурой и особым шармом. Посетите иезуитский коллегиум, дворец Бутримовича и почувствуйте атмосферу города, стоящего на слиянии рек Пина и Припять. Узнайте легенды о подземных ходах, соединяющих древние здания.</p>
                </div>
                
                <div class="route-detail-section">
                    <h3>Туров</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/4a2c7a/ffffff?text=Туров" alt="Туров">
                    </div>
                    <p>Древнейший город Беларуси, где история оживает на каждом шагу. Увидьте уникальные каменные кресты, растущие из земли, посетите городище и музей природы. Местные жители расскажут вам легенды о подземном городе и загадочных явлениях, происходящих в этих местах.</p>
                </div>
                
                <div class="route-detail-section">
                    <h3>Мозырь</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/1a0b2e/ffffff?text=Мозырь" alt="Мозырь">
                    </div>
                    <p>Город на живописных холмах над Припятью поразит вас панорамными видами и уникальным Мозырским озерным краем. Посетите этнографический музей под открытым небом и узнайте о традициях и верованиях полешуков.</p>
                </div>
                
                <button class="collapse-btn" data-target="route3-details">Свернуть</button>
            </div>
        </section>

        <section class="route-item">
            <h2>По следам проклятия: мистический треугольник</h2>
            <div class="route-points">
                <span class="route-main-points">Минск — Гольшаны — Крево — Минск</span>
            </div>
            <div class="route-content">
                <div class="route-image">
                    <img src="https://via.placeholder.com/400x300/2d1b4e/ffffff?text=Мистический+треугольник" alt="Мистический треугольник">
                </div>
                <div class="route-text">
                    <p>Маршрут для смелых исследователей паранормального! Посетите места, окутанные самыми мрачными легендами Беларуси, где до сих пор происходят необъяснимые явления.</p>
                    <button class="details-btn" data-target="route4-details">Подробнее</button>
                </div>
            </div>
            <div id="route4-details" class="details-content hidden">
                <div class="route-detail-section">
                    <h3>Гольшаны</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/4a2c7a/ffffff?text=Гольшаны" alt="Гольшаны">
                    </div>
                    <p>Руины Гольшанского замка хранят одну из самых страшных легенд - историю о проклятом камне князя Святополка. Спуститесь в подземелья, где по преданию замурован валун с заточенной душой предателя. Местные жители расскажут о ночных стонах и призрачных видениях.</p>
                </div>
                
                <div class="route-detail-section">
                    <h3>Крево</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/1a0b2e/ffffff?text=Крево" alt="Крево">
                    </div>
                    <p>Кревский замок - место трагической смерти князя Кейстута. Здесь вы услышите историю о братоубийственной борьбе за власть и призраке Белой Дамы, появляющемся в лунные ночи. Подземные ходы замка до сих пор хранят множество неразгаданных тайн.</p>
                </div>
                
                <div class="route-detail-section">
                    <h3>Советы путешественникам</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/2d1b4e/ffffff?text=Советы" alt="Советы">
                    </div>
                    <p>Рекомендуется посещать эти места днем и в составе группы. Возьмите с собой фонарики, теплую одежду (в подземельях всегда холодно) и фотоаппарат - кто знает, может именно вам удастся запечатлеть нечто необычное!</p>
                </div>
                
                <button class="collapse-btn" data-target="route4-details">Свернуть</button>
            </div>
        </section>

        <section class="route-item">
            <h2>Северные сокровища: озерный край и старинные усадьбы</h2>
            <div class="route-points">
                <span class="route-main-points">Минск — Нарочь — Глубокое — Браслав — Минск</span>
            </div>
            <div class="route-content">
                <div class="route-image">
                    <img src="https://via.placeholder.com/400x300/4a2c7a/ffffff?text=Северные+сокровища" alt="Северные сокровища">
                </div>
                <div class="route-text">
                    <p>Откройте для себя "Белорусскую Швейцарию" - край кристально чистых озер, сосновых боров и аутентичной архитектуры. Идеальный маршрут для любителей природы и уединения.</p>
                    <button class="details-btn" data-target="route5-details">Подробнее</button>
                </div>
            </div>
            <div id="route5-details" class="details-content hidden">
                <div class="route-detail-section">
                    <h3>Нарочь</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/1a0b2e/ffffff?text=Нарочь" alt="Нарочь">
                    </div>
                    <p>Крупнейшее озеро Беларуси поражает своими размерами и красотой. Посетите курортный поселок, совершите прогулку на катере и узнайте легенду о прекрасной деве Нарочь, в честь которой названо озеро.</p>
                </div>
                
                <div class="route-detail-section">
                    <h3>Глубокое</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/2d1b4e/ffffff?text=Глубокое" alt="Глубокое">
                    </div>
                    <p>Город с поэтичным названием удивит вас гармоничным сочетанием католических и православных храмов. Посетите знаменитый костел Святой Троицы и узнайте историю чудотворной иконы.</p>
                </div>
                
                <div class="route-detail-section">
                    <h3>Браслав</h3>
                    <div class="detail-image">
                        <img src="https://via.placeholder.com/600x300/4a2c7a/ffffff?text=Браслав" alt="Браслав">
                    </div>
                    <p>Столица Браславских озер предложит вам незабываемые пейзажи и богатую программу активного отдыха. Восхождение на Замковую гору, посещение музея и, конечно, рыбалка - здесь каждый найдет занятие по душе.</p>
                </div>
                
                <button class="collapse-btn" data-target="route5-details">Свернуть</button>
            </div>
        </section>
    </main>

    <!-- Модальное окно для входа/регистрации -->
    <div class="modal" id="auth-modal">
        <div class="modal-content">
            <button class="close-modal">&times;</button>
            <h2>Вход в систему</h2>
            
            <div class="auth-tabs">
                <button class="auth-tab active" data-tab="login">Вход</button>
                <button class="auth-tab" data-tab="register">Регистрация</button>
            </div>
            
            <form class="auth-form active" id="login-form">
                <input type="email" id="login-email" placeholder="Email" required>
                <input type="password" id="login-password" placeholder="Пароль" required>
                <button type="submit" class="auth-btn">Войти</button>
            </form>
            
            <form class="auth-form" id="register-form">
                <input type="text" id="register-name" placeholder="Имя" required>
                <input type="email" id="register-email" placeholder="Email" required>
                <input type="password" id="register-password" placeholder="Пароль (минимум 6 символов)" required>
                <input type="password" id="register-password-confirm" placeholder="Подтвердите пароль" required>
                <button type="submit" class="auth-btn">Зарегистрироваться</button>
            </form>
        </div>
    </div>

    <footer>
        <div class="footer-content">
            <!-- Бренд и описание -->
            <div class="footer-brand">
                <div class="footer-logo">
                    <img src="1.png" alt="Mystical Belarus" class="footer-logo-img">
                    <div class="footer-brand-text">
                        <h3 class="footer-title">Mystical Belarus</h3>
                        <p class="footer-description">
                            Откройте тайную сторону Беларуси. Исследуйте легенды, 
                            загадочные места и мистические истории нашей страны.
                        </p>
                    </div>
                </div>
                <div class="footer-social">
                    <a href="#" class="social-link" aria-label="ВКонтакте">
                        <i class="fab fa-vk"></i>
                    </a>
                    <a href="#" class="social-link" aria-label="Telegram">
                        <i class="fab fa-telegram"></i>
                    </a>
                    <a href="#" class="social-link" aria-label="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="social-link" aria-label="YouTube">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>

            <!-- Навигация -->
            <div class="footer-section">
                <h4 class="footer-heading">Навигация</h4>
                <div class="footer-links">
                    <a href="index.html" class="footer-link">
                        <i class="fas fa-home"></i>Главная
                    </a>
                    <a href="legends.html" class="footer-link">
                        <i class="fas fa-ghost"></i>Легенды
                    </a>
                    <a href="routes.html" class="footer-link">
                        <i class="fas fa-route"></i>Маршруты
                    </a>
                    <a href="blog.html" class="footer-link">
                        <i class="fas fa-blog"></i>Блог
                    </a>
                    <a href="quizzes.html" class="footer-link">
                        <i class="fas fa-puzzle-piece"></i>Викторины
                    </a>
                </div>
            </div>

            <!-- Контакты -->
            <div class="footer-section">
                <h4 class="footer-heading">Контакты</h4>
                <div class="footer-contact">
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>info@mystical-belarus.by</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>+375 (29) 123-45-67</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Минск, Беларусь</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-clock"></i>
                        <span>Пн-Пт: 9:00-18:00</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="copyright">
                &copy; 2025 Mystical Belarus. Все права защищены.
            </div>
            <a href="#" class="back-to-top">
                <i class="fas fa-arrow-up"></i>Наверх
            </a>
        </div>
    </footer>

    <script>
        // Система управления пользователями (совместимая с другими страницами)
        class UserSystem {
            constructor() {
                this.usersKey = 'mysticalBelarusUsers';
                this.routesKey = 'mysticalBelarusRoutes';
                this.currentUser = null;
                this.init();
            }

            init() {
                // Проверяем авторизацию из localStorage (совместимо со всеми страницами)
                const savedUser = localStorage.getItem('mysticalBelarusCurrentUser');
                if (savedUser) {
                    this.currentUser = JSON.parse(savedUser);
                    this.updateUIAfterLogin();
                }
                
                this.setupEventListeners();
                this.setupAuthEventListeners();
                this.setupDemoData();
                
                // Обновляем интерфейс страницы
                this.updatePageUI();
            }

            updateUserDropdown() {
                const dropdown = document.getElementById('userDropdown');
                if (!dropdown) return;
                
                if (this.currentUser) {
                    dropdown.innerHTML = `
                        <div class="user-info">
                            <div class="user-name">${this.currentUser.name}</div>
                            <div class="user-email">${this.currentUser.email}</div>
                        </div>
                        <div class="user-dropdown-divider"></div>
                        <a href="profile.html" class="user-dropdown-item">
                            <i class="fas fa-user"></i>Мой профиль
                        </a>
                        <button class="user-dropdown-item" id="logout-dropdown-btn">
                            <i class="fas fa-sign-out-alt"></i>Выйти
                        </button>
                    `;
                    
                    // Добавляем обработчики для новых элементов
                    setTimeout(() => {
                        const logoutBtn = document.getElementById('logout-dropdown-btn');
                        
                        if (logoutBtn) {
                            logoutBtn.addEventListener('click', () => {
                                this.logout();
                                dropdown.classList.remove('show');
                            });
                        }
                    }, 10);
                } else {
                    dropdown.innerHTML = `
                        <button class="user-dropdown-item" id="login-dropdown-btn">
                            <i class="fas fa-sign-in-alt"></i>Войти / Зарегистрироваться
                        </button>
                    `;
                    
                    // Добавляем обработчик для кнопки входа
                    setTimeout(() => {
                        const loginBtn = document.getElementById('login-dropdown-btn');
                        if (loginBtn) {
                            loginBtn.addEventListener('click', () => {
                                this.openAuthModal();
                                dropdown.classList.remove('show');
                            });
                        }
                    }, 10);
                }
            }

            updateNavigation() {
                const navContainer = document.getElementById('mainNav');
                if (!navContainer) return;
                
                // Удаляем старую кнопку профиля, если есть
                const oldProfileBtn = navContainer.querySelector('.profile-nav-btn');
                if (oldProfileBtn) {
                    oldProfileBtn.remove();
                }
                
                // Добавляем кнопку "Мой профиль" если пользователь авторизован
                if (this.currentUser) {
                    const profileBtn = document.createElement('a');
                    profileBtn.href = 'profile.html';
                    profileBtn.className = 'nav-btn profile-nav-btn';
                    profileBtn.textContent = 'Мой профиль';
                    navContainer.appendChild(profileBtn);
                }
            }

            updateUIAfterLogin() {
                // Обновляем иконку пользователя
                const userIcon = document.getElementById('userIcon');
                if (userIcon) {
                    userIcon.classList.add('logged-in');
                }
                
                // Обновляем выпадающее меню и навигацию
                this.updateUserDropdown();
                this.updateNavigation();
            }

            setupEventListeners() {
                // Обработчик для иконки пользователя
                const userIcon = document.getElementById('userIcon');
                if (userIcon) {
                    userIcon.addEventListener('click', (e) => {
                        e.stopPropagation();
                        
                        if (this.currentUser) {
                            // Если пользователь авторизован, показываем выпадающее меню
                            const dropdown = document.getElementById('userDropdown');
                            dropdown.classList.toggle('show');
                        } else {
                            // Если не авторизован, открываем модальное окно авторизации
                            this.openAuthModal();
                        }
                    });
                }
                
                // Закрытие выпадающего меню при клике вне его
                document.addEventListener('click', (e) => {
                    const dropdown = document.getElementById('userDropdown');
                    const userIcon = document.getElementById('userIcon');
                    
                    if (dropdown && !dropdown.contains(e.target) && userIcon && !userIcon.contains(e.target)) {
                        dropdown.classList.remove('show');
                    }
                });
            }

            setupAuthEventListeners() {
                // Переключение вкладок входа/регистрации
                const authTabs = document.querySelectorAll('.auth-tab');
                authTabs.forEach(tab => {
                    tab.addEventListener('click', () => {
                        const tabName = tab.getAttribute('data-tab');
                        
                        // Обновляем активную вкладку
                        authTabs.forEach(t => t.classList.remove('active'));
                        tab.classList.add('active');
                        
                        // Показываем соответствующую форму
                        document.querySelectorAll('.auth-form').forEach(form => {
                            form.classList.remove('active');
                        });
                        document.getElementById(`${tabName}-form`).classList.add('active');
                    });
                });
                
                // Форма входа
                const loginForm = document.getElementById('login-form');
                if (loginForm) {
                    loginForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        this.login();
                    });
                }
                
                // Форма регистрации
                const registerForm = document.getElementById('register-form');
                if (registerForm) {
                    registerForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        this.register();
                    });
                }
                
                // Закрытие модальных окон авторизации
                const authModal = document.getElementById('auth-modal');
                const closeAuthBtns = document.querySelectorAll('#auth-modal .close-modal');
                
                closeAuthBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        authModal.classList.remove('active');
                    });
                });
                
                // Закрытие модального окна при клике на оверлей
                window.addEventListener('click', (e) => {
                    if (e.target === authModal) {
                        authModal.classList.remove('active');
                    }
                });
            }

            openAuthModal() {
                const authModal = document.getElementById('auth-modal');
                authModal.classList.add('active');
                
                // Сбрасываем формы
                document.getElementById('login-form').reset();
                document.getElementById('register-form').reset();
                
                // Устанавливаем активной вкладку входа
                document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.remove('active'));
                document.querySelector('.auth-tab[data-tab="login"]').classList.add('active');
                
                document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
                document.getElementById('login-form').classList.add('active');
            }

            login() {
                const email = document.getElementById('login-email').value.trim();
                const password = document.getElementById('login-password').value.trim();
                
                if (!email || !password) {
                    this.showNotification('Пожалуйста, заполните все поля.', 'error');
                    return;
                }
                
                const users = JSON.parse(localStorage.getItem(this.usersKey)) || [];
                const user = users.find(u => u.email === email && u.password === password);
                
                if (!user) {
                    this.showNotification('Неверный email или пароль.', 'error');
                    return;
                }
                
                // Сохраняем текущего пользователя (совместимо со всеми страницами)
                this.currentUser = {
                    id: user.id,
                    name: user.name,
                    email: user.email
                };
                
                localStorage.setItem('mysticalBelarusCurrentUser', JSON.stringify(this.currentUser));
                
                // Закрываем модальное окно
                document.getElementById('auth-modal').classList.remove('active');
                document.getElementById('login-form').reset();
                
                this.updateUIAfterLogin();
                this.updatePageUI();
                
                this.showNotification(`Добро пожаловать, ${user.name}!`, 'success');
            }

            register() {
                const name = document.getElementById('register-name').value.trim();
                const email = document.getElementById('register-email').value.trim();
                const password = document.getElementById('register-password').value.trim();
                const confirmPassword = document.getElementById('register-password-confirm').value.trim();
                
                if (!name || !email || !password || !confirmPassword) {
                    this.showNotification('Пожалуйста, заполните все поля.', 'error');
                    return;
                }
                
                if (password !== confirmPassword) {
                    this.showNotification('Пароли не совпадают.', 'error');
                    return;
                }
                
                if (password.length < 6) {
                    this.showNotification('Пароль должен содержать не менее 6 символов.', 'error');
                    return;
                }
                
                const users = JSON.parse(localStorage.getItem(this.usersKey)) || [];
                
                // Проверяем, есть ли уже пользователь с таким email
                if (users.some(u => u.email === email)) {
                    this.showNotification('Пользователь с таким email уже зарегистрирован.', 'error');
                    return;
                }
                
                // Создаем нового пользователя
                const newUser = {
                    id: Date.now(),
                    name: name,
                    email: email,
                    password: password
                };
                
                users.push(newUser);
                localStorage.setItem(this.usersKey, JSON.stringify(users));
                
                // Автоматически входим после регистрации
                this.currentUser = {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email
                };
                
                localStorage.setItem('mysticalBelarusCurrentUser', JSON.stringify(this.currentUser));
                
                // Закрываем модальное окно
                document.getElementById('auth-modal').classList.remove('active');
                document.getElementById('register-form').reset();
                
                this.updateUIAfterLogin();
                this.updatePageUI();
                
                this.showNotification(`Регистрация успешна! Добро пожаловать, ${name}!`, 'success');
            }

            logout() {
                if (confirm('Вы уверены, что хотите выйти из аккаунта?')) {
                    this.currentUser = null;
                    localStorage.removeItem('mysticalBelarusCurrentUser');
                    
                    // Закрываем выпадающее меню
                    const dropdown = document.getElementById('userDropdown');
                    if (dropdown) {
                        dropdown.classList.remove('show');
                    }
                    
                    // Обновляем интерфейс
                    const userIcon = document.getElementById('userIcon');
                    if (userIcon) {
                        userIcon.classList.remove('logged-in');
                    }
                    
                    this.updateUserDropdown();
                    this.updateNavigation();
                    this.updatePageUI();
                    
                    this.showNotification('Вы вышли из аккаунта.', 'success');
                }
            }

            showNotification(message, type = 'success') {
                // Удаляем старые уведомления
                const oldNotifications = document.querySelectorAll('.notification');
                oldNotifications.forEach(notification => {
                    notification.remove();
                });
                
                // Создаем уведомление
                const notification = document.createElement('div');
                notification.className = `notification ${type}`;
                notification.innerHTML = `
                    <div class="notification-content">
                        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                        <span>${message}</span>
                    </div>
                    <button class="notification-close">&times;</button>
                `;
                
                document.body.appendChild(notification);
                
                // Показываем уведомление
                setTimeout(() => {
                    notification.classList.add('show');
                }, 10);
                
                // Закрытие уведомления
                const closeBtn = notification.querySelector('.notification-close');
                closeBtn.addEventListener('click', () => {
                    notification.classList.remove('show');
                    setTimeout(() => {
                        notification.remove();
                    }, 300);
                });
                
                // Автоматическое закрытие через 5 секунд
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.classList.remove('show');
                        setTimeout(() => {
                            notification.remove();
                        }, 300);
                    }
                }, 5000);
            }

            setupDemoData() {
                const users = JSON.parse(localStorage.getItem(this.usersKey)) || [];
                
                // Создаем демо-пользователей, если их нет
                if (users.length === 0) {
                    const demoUsers = [
                        {
                            id: 101,
                            name: "Анна Иванова",
                            email: "anna@example.com",
                            password: "password123"
                        },
                        {
                            id: 102,
                            name: "Дмитрий Смирнов",
                            email: "dmitry@example.com",
                            password: "password123"
                        },
                        {
                            id: 103,
                            name: "Максим Петров",
                            email: "maxim@example.com",
                            password: "password123"
                        }
                    ];
                    
                    localStorage.setItem(this.usersKey, JSON.stringify(demoUsers));
                }
            }
            
            updatePageUI() {
                const addRouteSection = document.getElementById('addRouteSection');
                
                if (this.currentUser) {
                    // Пользователь авторизован
                    if (addRouteSection) {
                        addRouteSection.style.display = 'block';
                    }
                    
                    // Загружаем маршруты пользователя
                    this.loadUserRoutes();
                } else {
                    // Пользователь не авторизован
                    if (addRouteSection) {
                        addRouteSection.style.display = 'none';
                    }
                    
                    // Очищаем контейнер пользовательских маршрутов
                    const userRoutesContainer = document.getElementById('userRoutesContainer');
                    if (userRoutesContainer) {
                        userRoutesContainer.innerHTML = '';
                    }
                }
            }
            
            // Функция для получения маршрутов из localStorage
            getRoutes() {
                const routes = localStorage.getItem(this.routesKey);
                return routes ? JSON.parse(routes) : [];
            }
            
            // Функция для сохранения маршрутов в localStorage
            saveRoutes(routes) {
                localStorage.setItem(this.routesKey, JSON.stringify(routes));
            }
            
            // Функция для добавления маршрута
            addUserRoute(routeData) {
                if (!this.currentUser) {
                    this.showNotification('Для добавления маршрута необходимо войти в систему', 'error');
                    return false;
                }
                
                const routes = this.getRoutes();
                const newRoute = {
                    id: Date.now(),
                    userId: this.currentUser.id,
                    name: routeData.name,
                    points: routeData.points,
                    image: routeData.image || 'https://via.placeholder.com/400x300/2d1b4e/ffffff?text=Маршрут+пользователя',
                    description: routeData.description,
                    createdAt: new Date().toISOString()
                };
                
                routes.push(newRoute);
                this.saveRoutes(routes);
                
                return newRoute;
            }
            
            // Функция для загрузки маршрутов пользователя
            loadUserRoutes() {
                if (!this.currentUser) return;
                
                const routes = this.getRoutes();
                const userRoutes = routes.filter(route => route.userId === this.currentUser.id);
                
                const container = document.getElementById('userRoutesContainer');
                if (!container) return;
                
                container.innerHTML = '';
                
                userRoutes.forEach(route => {
                    this.displayUserRoute(route);
                });
            }
            
            // Функция для отображения маршрута пользователя
            displayUserRoute(route) {
                const container = document.getElementById('userRoutesContainer');
                if (!container) return;
                
                const routeElement = document.createElement('div');
                routeElement.className = 'route-item user-route';
                routeElement.innerHTML = `
                    <div class="user-route-badge">Ваш маршрут</div>
                    <h2>${route.name}</h2>
                    <div class="route-points">
                        <span class="route-main-points">${route.points}</span>
                    </div>
                    <div class="route-content">
                        <div class="route-image">
                            <img src="${route.image}" alt="${route.name}">
                        </div>
                        <div class="route-text">
                            <p>${route.description}</p>
                            <button class="details-btn" data-target="user-route-${route.id}">Подробнее</button>
                        </div>
                    </div>
                    <div id="user-route-${route.id}" class="details-content hidden">
                        <div class="route-detail-section">
                            <h3>Описание маршрута</h3>
                            <div class="detail-image">
                                <img src="${route.image}" alt="${route.name}">
                            </div>
                            <p>${route.description}</p>
                        </div>
                        <button class="collapse-btn" data-target="user-route-${route.id}">Свернуть</button>
                    </div>
                `;
                
                container.appendChild(routeElement);
                
                // Добавляем обработчики для кнопок
                setTimeout(() => {
                    const detailsBtn = routeElement.querySelector(`.details-btn[data-target="user-route-${route.id}"]`);
                    const collapseBtn = routeElement.querySelector(`.collapse-btn[data-target="user-route-${route.id}"]`);
                    
                    if (detailsBtn) {
                        detailsBtn.addEventListener('click', () => {
                            const target = document.getElementById(`user-route-${route.id}`);
                            if (target && target.classList.contains('hidden')) {
                                target.classList.remove('hidden');
                                detailsBtn.textContent = 'Скрыть';
                            } else if (target) {
                                target.classList.add('hidden');
                                detailsBtn.textContent = 'Подробнее';
                            }
                        });
                    }
                    
                    if (collapseBtn) {
                        collapseBtn.addEventListener('click', () => {
                            const target = document.getElementById(`user-route-${route.id}`);
                            const detailsBtn = document.querySelector(`.details-btn[data-target="user-route-${route.id}"]`);
                            
                            if (target) {
                                target.classList.add('hidden');
                            }
                            if (detailsBtn) {
                                detailsBtn.textContent = 'Подробнее';
                            }
                        });
                    }
                }, 10);
            }
        }

        // Инициализация системы пользователей
        let userSystem;

        // Основная инициализация при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            userSystem = new UserSystem();
            
            // Переключение языков
            document.querySelectorAll('.lang-btn').forEach(function(button) {
                button.addEventListener('click', function() {
                    document.querySelectorAll('.lang-btn').forEach(function(btn) {
                        btn.classList.remove('active');
                    });
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
            
            // Обработчики для кнопок добавления маршрута
            const addRouteBtn = document.getElementById('addRouteBtn');
            const addRouteForm = document.getElementById('addRouteForm');
            const saveRouteBtn = document.getElementById('saveRouteBtn');
            const cancelRouteBtn = document.getElementById('cancelRouteBtn');
            
            if (addRouteBtn) {
                addRouteBtn.addEventListener('click', function() {
                    if (!userSystem.currentUser) {
                        userSystem.showNotification('Для добавления маршрута необходимо войти в систему', 'error');
                        userSystem.openAuthModal();
                        return;
                    }
                    
                    if (addRouteForm) {
                        addRouteForm.classList.toggle('show');
                    }
                });
            }
            
            if (saveRouteBtn) {
                saveRouteBtn.addEventListener('click', function() {
                    const name = document.getElementById('routeName') ? document.getElementById('routeName').value : '';
                    const points = document.getElementById('routePoints') ? document.getElementById('routePoints').value : '';
                    const image = document.getElementById('routeImage') ? document.getElementById('routeImage').value : '';
                    const description = document.getElementById('routeDescription') ? document.getElementById('routeDescription').value : '';
                    
                    if (!name || !points || !description) {
                        userSystem.showNotification('Заполните обязательные поля: название, точки маршрута и описание', 'error');
                        return;
                    }
                    
                    const routeData = {
                        name: name,
                        points: points,
                        image: image,
                        description: description
                    };
                    
                    const newRoute = userSystem.addUserRoute(routeData);
                    
                    if (newRoute) {
                        // Очистка формы
                        document.getElementById('routeName').value = '';
                        document.getElementById('routePoints').value = '';
                        document.getElementById('routeImage').value = '';
                        document.getElementById('routeDescription').value = '';
                        
                        // Скрытие формы
                        if (addRouteForm) {
                            addRouteForm.classList.remove('show');
                        }
                        
                        // Отображение нового маршрута
                        userSystem.displayUserRoute(newRoute);
                        
                        userSystem.showNotification('Маршрут успешно добавлен!', 'success');
                    }
                });
            }
            
            if (cancelRouteBtn) {
                cancelRouteBtn.addEventListener('click', function() {
                    if (addRouteForm) {
                        addRouteForm.classList.remove('show');
                    }
                });
            }
            
            // Функциональность кнопок "Подробнее" и "Свернуть" для предустановленных маршрутов
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('details-btn')) {
                    const targetId = e.target.getAttribute('data-target');
                    const targetContent = document.getElementById(targetId);
                    
                    if (targetContent && targetContent.classList.contains('hidden')) {
                        targetContent.classList.remove('hidden');
                        e.target.textContent = 'Скрыть';
                    } else if (targetContent) {
                        targetContent.classList.add('hidden');
                        e.target.textContent = 'Подробнее';
                    }
                }
                
                if (e.target.classList.contains('collapse-btn')) {
                    const targetId = e.target.getAttribute('data-target');
                    const targetContent = document.getElementById(targetId);
                    const detailsBtn = targetId ? document.querySelector('.details-btn[data-target="' + targetId + '"]') : null;
                    
                    if (targetContent) {
                        targetContent.classList.add('hidden');
                    }
                    if (detailsBtn) {
                        detailsBtn.textContent = 'Подробнее';
                    }
                }
            });
            
            // Плавная прокрутка для ссылок
            document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
            
            console.log('Страница маршрутов успешно загружена!');
        });
    </script>
</body>
</html>