@extends('layouts.app')
@vite('resources/js/components/box_text.js')

@section('title', 'Plan de estudio')

@section('content')
<body style="padding: 2rem; font-family: sans-serif;">
    <h1 style="font-size: 24px; text-align: center; font-weight: bold;">Plan de estudios</h1>
    <div style="max-width: 300px; position: absolute; top: 250px; left: 60px;">
        <custom-button label="Semestre 1"></custom-button>
        <custom-button label="Semestre 2"></custom-button>
        <custom-button label="Semestre 3"></custom-button>
        <custom-button label="Semestre 4"></custom-button>
        <custom-button label="Semestre 5"></custom-button>
        <custom-button label="Semestre 6"></custom-button>
        <custom-button label="Semestre 7"></custom-button>
        <custom-button label="Semestre 8"></custom-button>
    </div>

    <div style="display: flex; gap: 20px; max-width: 1300px; position: absolute; top: 210px; left: 450px;">
        <div style="width: 200px; aspect-ratio: 1;">
            <custom-square-button
                title="Materia"
                subtitle="Párrafo"
                icon="https://cdn-icons-png.flaticon.com/512/25/25694.png"
            ></custom-square-button>
        </div>
        <div style="width: 200px; aspect-ratio: 1;">
            <custom-square-button
                title="Materia"
                subtitle="Tus datos"
                icon="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            ></custom-square-button>
        </div>
        <div style="width: 200px; aspect-ratio: 1;">
            <custom-square-button
                title="Materia"
                subtitle="Configuración"
                icon="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
            ></custom-square-button>
        </div>
        <div style="width: 200px; aspect-ratio: 1;">
            <custom-square-button
                title="Materia"
                subtitle="Cerrar sesión"
                icon="https://cdn-icons-png.flaticon.com/512/1828/1828479.png"
            ></custom-square-button>
        </div>
    </div>
    
</body>
@endsection