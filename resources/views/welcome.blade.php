{{-- resources/views/home.blade.php --}}
@extends('layouts.app')

@section('title', 'Nuestras Carreras')

@section('content')
     <div class="barra-busqueda">
        <div class="logo-enfasis">
            <!-- Puedes poner un logo SVG o imagen aquí si quieres -->
            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="40" viewBox="0 0 37 40" fill="none">
              <path d="M17.605 0.250553C15.3279 1.51805 14.0825 2.21076 11.9307 3.38983C8.3493 5.35741 7.04495 6.08696 4.00884 7.81135C2.52763 8.65144 1.02432 9.49889 0.663228 9.69786C0.294768 9.89683 0 10.0884 0 10.1326C0 10.1695 0.781135 10.6043 1.73176 11.0906C2.68239 11.577 3.65512 12.0929 3.8983 12.2255L4.34046 12.476L5.03316 12.0929C5.41636 11.8865 5.75534 11.717 5.79219 11.717C5.82166 11.717 5.85114 11.1717 5.85114 10.5085V9.29256L6.05748 9.15254C6.30066 8.98305 7.35446 8.40088 7.42078 8.40088C7.45026 8.40088 7.47236 8.93147 7.47236 9.58732V10.7738L8.1577 10.4053C8.52616 10.2063 9.46942 9.69786 10.2358 9.28519C11.0096 8.86514 12.3287 8.15033 13.1835 7.69344L14.7237 6.86072L15.2837 7.16286C16.2122 7.67133 16.2049 7.59027 15.3058 8.09138C14.871 8.33456 13.552 9.04937 12.3729 9.67575C11.2012 10.3095 9.67575 11.1422 8.98305 11.5254C8.29772 11.916 6.86072 12.7045 5.79956 13.2867L3.86146 14.3331V24.5173V34.7089H3.19823C2.58659 34.7089 2.5129 34.7237 2.35077 34.8931C2.16654 35.07 2.16654 35.0847 2.16654 36.3965C2.16654 37.126 2.14444 37.7671 2.12233 37.8335C2.08548 37.9293 1.94547 37.9514 1.40015 37.9514C1.03169 37.9514 0.692704 37.9808 0.648489 38.0103C0.464259 38.1356 0.397937 38.423 0.397937 39.1525V39.9189L1.34119 39.9632C1.85704 39.9853 9.81577 40 19.0273 40H35.7701V39.1673C35.7701 38.4451 35.748 38.3125 35.6153 38.143C35.4753 37.9587 35.4311 37.9514 34.7679 37.9514H34.0752V36.6175C34.0752 35.7848 34.0457 35.2321 33.9941 35.129C33.8172 34.79 33.633 34.7089 32.9919 34.7089H32.3802L32.3655 32.1076C32.3581 30.6853 32.3508 26.0943 32.3508 21.9234L32.3434 14.3331L31.2012 13.7214C30.5748 13.3825 29.2999 12.6824 28.364 12.1665C27.4355 11.6433 25.6743 10.6706 24.4584 10C22.4613 8.90199 21.1201 8.1577 20.4643 7.76713C20.3316 7.69344 20.2211 7.61238 20.2211 7.59027C20.2211 7.56079 21.0022 7.1039 21.4001 6.90494C21.4812 6.86072 21.6581 6.91967 21.9602 7.09653C22.196 7.22918 22.9772 7.65659 23.6846 8.03242C24.392 8.41562 25.7996 9.18202 26.8091 9.74208C27.8187 10.3021 28.6514 10.759 28.6662 10.759C28.6809 10.759 28.6957 10.2284 28.6957 9.57259C28.6957 8.9241 28.7178 8.40088 28.7546 8.41562C28.7841 8.42299 29.1452 8.62196 29.5652 8.84303L30.3169 9.24834V10.4643V11.6802L30.7811 11.9455C31.0317 12.0929 31.3633 12.2697 31.5181 12.336L31.8055 12.4539L32.7561 11.9602C33.2719 11.6875 33.7214 11.4812 33.7362 11.5033C33.7583 11.5254 33.7804 13.3898 33.7804 15.6448C33.7878 19.6758 33.7878 19.7568 33.633 19.9484C33.493 20.1253 33.4856 20.2358 33.4856 21.7465C33.4856 23.7067 33.4046 23.5814 34.6721 23.5814C35.409 23.5814 35.5416 23.5593 35.6448 23.4488C35.7553 23.3309 35.7701 23.0951 35.7701 21.7318C35.7701 20.1769 35.7701 20.1474 35.5858 19.8895C35.49 19.7421 35.4237 19.6021 35.4458 19.58C35.4679 19.5578 35.4827 17.7892 35.4753 15.6374C35.4753 13.493 35.49 11.4591 35.5195 11.1275L35.5711 10.5306L35.9396 10.339L36.308 10.1548L36.0943 10.0221C35.6374 9.74945 29.661 6.37436 27.7377 5.30582C26.6249 4.68681 25.0847 3.82461 24.311 3.38983C20.8327 1.42962 18.2314 0 18.143 0C18.0914 0.00736618 17.8482 0.117905 17.605 0.250553ZM19.1304 9.36625C20.1105 9.88946 22.734 11.3338 25.1584 12.675C25.8659 13.0656 27.1481 13.7657 27.9956 14.2225C30.2137 15.4237 30.3537 15.5048 30.3463 15.6448C30.3463 15.7111 30.339 16.1164 30.3316 16.5438L30.3169 17.3176H26.9418C23.3751 17.3176 22.7487 17.3545 21.717 17.6566C20.8917 17.885 19.4473 18.6072 18.7915 19.101C18.5114 19.3147 18.2388 19.521 18.1798 19.5652C18.1135 19.6168 18.0619 19.6168 18.0251 19.5652C17.9366 19.4252 16.9492 18.7472 16.4038 18.4377C16.1091 18.2682 15.5711 18.0177 15.21 17.8703C13.9646 17.3692 13.9573 17.3692 9.70523 17.3397L5.85114 17.3102V16.4112V15.5122L6.14591 15.3427C6.30803 15.2469 7.41341 14.65 8.59985 14.0088C11.3043 12.5497 16.4186 9.75681 17.3471 9.24097C17.7303 9.02727 18.0693 8.8504 18.0987 8.8504C18.1282 8.84303 18.5925 9.07885 19.1304 9.36625ZM11.3191 21.4223C11.3265 22.5497 11.3191 25.5122 11.3117 28.0103C11.297 30.5158 11.3117 32.6603 11.3412 32.7856L11.3928 33.014H12.7487H14.1046V26.2712C14.1046 21.9013 14.1267 19.5284 14.1783 19.5284C14.3036 19.5284 17.1408 20.9801 17.7303 21.3486C17.885 21.4444 18.0251 21.5181 18.0472 21.5181C18.0693 21.5181 18.9388 21.0759 19.9853 20.5306C21.0243 19.9853 21.9528 19.521 22.0486 19.4915L22.2181 19.4399L22.2108 25.9543C22.2034 29.5357 22.2034 32.5866 22.2108 32.734V33.014H23.5372H24.8637V26.1975V19.381H27.5903H30.3169L30.3242 23.5814C30.3316 25.888 30.339 28.2314 30.339 28.7767C30.339 29.322 30.3316 30.0368 30.3242 30.3611L30.3169 30.9506H29.9926C29.8231 30.9506 29.4694 30.9285 29.2189 30.9064L28.7693 30.8548V25.969V21.0759H27.7008H26.6323V27.045V33.014H28.4746H30.3169V33.7509V34.4878H18.084H5.85114V33.7509V33.014H7.69344H9.53574V27.045V21.0759H8.46721H7.39867V25.969V30.8696L7.08917 30.9064C6.91231 30.9359 6.62491 30.9359 6.44068 30.9211C6.25645 30.9064 6.05011 30.8917 5.98379 30.8843C5.85851 30.8769 5.85114 30.5527 5.85114 25.129V19.381H8.57774H11.3043L11.3191 21.4223ZM31.997 36.787C32.0118 36.9197 32.0044 37.2366 31.9749 37.4871L31.9234 37.9514H18.0398H4.15623V37.2292V36.5144L18.0619 36.5291L31.9749 36.5512L31.997 36.787Z" fill="#FDFDFE"/>
            </svg>
            <span>UNIVERSIDAD <br>AUTONOMA</span>
        </div>
        <div class="input-busqueda-app">
            <input type="text" placeholder="Buscar...">
        </div>
    </div>

    <div class="container" style="height: 500px;">
        <div class="row ">
            <div class="col-sm-6">
                <titulo-app size="grande">Nuestras Carreras</titulo-app>
                <imagen-app src="{{ asset('imagenes/uaslp.png') }}" alt="Foto de la carrera" style="height: 619px; width: 619px"></imagen-app>
                <img src="{{ asset('imagenes/uaslp.png') }}" alt="Prueba directa" style="width:100%; height: 400px;">


            </div>
            <div class="col-sm-6" style="frame-2">
                <titulo-app size="grande">Facultad de Ingenieria</titulo-app>
                <selector-app>
                    <option-app value="1">Ingeniería Mecanica Administrativa</option-app>
                    <option-app value="2">Ingeniera Electricidad </option-app>
                    <option-app value="3">Ingenieria en sistemas inteligentes</option-app>
                    <option-app value="4">Ingenieria computación</option-app>
                    <option-app value="5">Ingenieria en informática</option-app>
                    <option-app value="6">Ingeniería en Róbotica</option-app>
                    <option-app value="7">Ingenieria Ambiental</option-app>
                    <option-app value="8">Ingenieria en mecánica</option-app>
                    <option-app value="9">Ingenieria en sofmatica</option-app>
                    <option-app value="0">Ingenieria en Diseño UI/UX</option-app>
                </selector-app>

            </div>
        </div>
    </div>

    <div class="contenedor" style="height: 300px; ">
        <div class=" row contenedor-card">
            <div class="col-sm-12">
                <titulo-app size="grande">Descripción De la carrera</titulo-app>
                <parrafo-app>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                     veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</parrafo-app>
            </div>
        </div>
    </div>

    <div class="container mt-5">
         <mini-card-app title="¿Preguntas frecuentes?">
            <svg slot="icon" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#EEE"/>
            <circle cx="20" cy="15" r="7" fill="#BBB"/>
            <ellipse cx="20" cy="28" rx="11" ry="7" fill="#BBB"/>
            </svg>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem 
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </mini-card-app>
    </div>
       

    <div class="container mt-5">
         <mini-card-app title="¿Preguntas frecuentes?">
            <svg slot="icon" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#EEE"/>
            <circle cx="20" cy="15" r="7" fill="#BBB"/>
            <ellipse cx="20" cy="28" rx="11" ry="7" fill="#BBB"/>
            </svg>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem 
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </mini-card-app>
    </div>

    
    {{-- Aquí puedes poner más contenido y componentes --}}
@endsection
