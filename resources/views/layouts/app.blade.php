<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'Mi Proyecto')</title>
    @vite(['resources/js/app.js', 'resources/css/app.css', 'resources/css/estilos.css'])
    <!-- Bootstrap CSS (CDN por ejemplo) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
    {{-- Aquí puedes poner tu barra de navegación como web component --}}  
    <main>
        @yield('content')
    </main>
    
    {{-- Footer opcional --}}
    <footer>
        <small>© 2024 Mi Proyecto</small>
    </footer>


</body>
</html>
