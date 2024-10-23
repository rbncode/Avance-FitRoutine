<template>

    <head>
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">
    </head>
    
    <footer>
        <div class="footer-content">
            <div class="footer-title">
                <h3 class="logo-footer">FitRoutine</h3>
                <p>Únete a nuestra comunidad y alcanza tus objetivos fitness con nosotros</p>
                <div class="footer-info">
                    <div class="footer-item">
                        <i class='bx bxs-location-plus'></i>
                        <p>Los patos #123</p>
                    </div>
                    <div class="footer-item">
                        <i class='bx bxl-gmail'></i>
                        <p>fitroutine@gmail.com</p>
                    </div>
                    <div class="footer-item">
                        <i class='bx bxs-phone-call'></i>
                        <p>+56912345678</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
}

.footer-content {
    padding: 20px;
}

.footer-title .logo-footer {
    position: relative;
    display: inline-block;
    margin-bottom: 10px;
}

.footer-title .logo-footer::before,
.footer-title .logo-footer::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 80px;
    height: 2px;
    background-color: #fff;
}

.footer-title .logo-footer::before {
    left: -100px;
}

.footer-title .logo-footer::after {
    right: -100px;
}

.footer-info {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 10px;
}

.footer-item {
    display: flex;
    align-items: center;
    gap: 10px;
}

footer p {
    margin: 0;
}
</style>