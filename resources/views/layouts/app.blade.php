<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'Mi Proyecto')</title>
    @vite(['resources/js/app.js', 'resources/css/app.css'])
</head>
<body>
    {{-- Aquí puedes poner tu barra de navegación como web component --}}
    <barra-busqueda>
    <logo-enfasis slot="logo">UNIVERSIDAD <br>AUTONOMA DE SAN LUIS POTOSÍ :D</logo-enfasis>
    <input-busqueda-app slot="input" placeholder="Buscar..."></input-busqueda-app>
    </barra-busqueda>


    
    <main style="padding: 2rem 0;">
        @yield('content')
    </main>
    
<!--
    {{-- Footer opcional --}}
    <footer>
        <small>© 2024 Mi Proyecto</small>
    </footer>
-->
</body>
</html>
