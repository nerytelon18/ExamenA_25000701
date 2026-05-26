<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>examenA_25000701 - Logística y Cadenas de Suministro</title>
    
    <!-- Tailwind CSS para Responsive Design rápido -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Configuración dinámica del Manifest para la PWA -->
    <script>
        const manifestJSON = {
            "name": "Logística examenA_25000701",
            "short_name": "LogísticaExamen",
            "start_url": ".",
            "display": "standalone",
            "background_color": "#f0f4f8",
            "theme_color": "#a5b4fc",
            "icons": [
                {
                    "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iI2E1YjRmYyIvPjwvc3ZnPg==",
                    "sizes": "192x192",
                    "type": "image/svg+xml"
                }
            ]
        };
        const manifestData = "data:application/manifest+json;charset=utf-8," + encodeURIComponent(JSON.stringify(manifestJSON));
        const link = document.createElement('link');
        link.rel = 'manifest';
        link.href = manifestData;
        document.head.appendChild(link);
    </script>

    <style>
        /* Paletas de Colores Pastel en Variables CSS */
        :root {
            --bg-color: #f0f4f8;         /* Fondo azul-grisáceo muy suave */
            --text-color: #2c3e50;       /* Texto gris oscuro suave */
            --card-bg: #ffffff;          /* Tarjetas blanco puro */
            --border-color: #e2e8f0;     /* Bordes pastel tenues */
            --primary: #a5b4fc;          /* Violeta pastel */
            --primary-hover: #c7d2fe;    /* Violeta pastel claro */
            --secondary: #93c5fd;        /* Celeste pastel */
            --secondary-hover: #bfdbfe;  /* Celeste pastel claro */
            --accent: #fbcfe8;           /* Rosa pastel */
            --accent-dark: #f472b6;      /* Rosa pastel más fuerte */
            --btn-text: #2c3e50;         /* Texto para botones en modo claro */
            --welcome-text: #eab308;     /* Amarillo pastel legible para el modo claro */
        }

        body.dark {
            --bg-color: #0f172a;         /* Azul noche profundo */
            --text-color: #f1f5f9;       /* Texto crema muy claro */
            --card-bg: #1e293b;          /* Tarjetas gris azulado oscuro */
            --border-color: #334155;     /* Bordes oscuros suaves */
            --primary: #818cf8;          /* Índigo pastel vibrante */
            --primary-hover: #4f46e5;    
            --secondary: #38bdf8;        /* Cyan pastel vibrante */
            --secondary-hover: #0284c7;  
            --accent: #f472b6;           
            --accent-dark: #ec4899;
            --btn-text: #ffffff;         /* Texto para botones en modo oscuro */
            --welcome-text: #ffffff;     /* Blanco puro en modo oscuro */
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Contenedores con estética pastel */
        .contenedor-seccion {
            background-color: var(--card-bg);
            border: 2px solid var(--border-color);
            border-radius: 1.25rem;
            transition: background-color 0.4s ease, border-color 0.4s ease;
        }

        /* Botones y Enlaces Interactivos */
        .enlace-interactivo {
            display: inline-flex;
            align-items: center;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            font-weight: 600;
            text-decoration: none;
            color: var(--btn-text);
            background: var(--primary);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .enlace-interactivo:hover {
            transform: translateY(-3px) scale(1.05);
            background: var(--primary-hover);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        /* Estilo para los botones secundarios */
        .btn-secundario {
            background-color: var(--secondary);
            color: var(--btn-text);
        }

        .btn-secundario:hover {
            background-color: var(--secondary-hover);
        }

        /* Modal personalizado */
        #customModal {
            display: none;
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(8px);
        }
    </style>
</head>
<body class="min-h-screen flex flex-col">

    <!-- Header y Toggle de Modo -->
    <header class="p-4 shadow-md bg-opacity-90 backdrop-blur-md text-slate-800 dark:text-white flex justify-between items-center sticky top-0 z-40 border-b border-opacity-20 border-white" style="background-color: var(--card-bg); transition: background-color 0.4s;">
        <div class="flex items-center gap-3">
            <img src="https://static.wixstatic.com/media/ce35a6_6238472a58874e879580b1984889e892~mv2.jpeg/v1/fill/w_212,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo.jpeg" alt="Logo Universidad Galileo" class="h-12 w-auto rounded-lg shadow-sm">
            <h1 class="text-xl md:text-2xl font-extrabold tracking-wider bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Logística Pro</h1>
        </div>
        <button id="themeToggle" class="bg-indigo-100 hover:bg-indigo-200 dark:bg-slate-800 dark:hover:bg-slate-700 px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 border border-indigo-200 dark:border-slate-700 text-slate-800 dark:text-indigo-200">
            <span id="themeIcon">🌙</span> <span class="hidden sm:inline font-semibold text-sm">Modo Oscuro</span>
        </button>
    </header>

    <!-- Contenido Principal (Modo Inicio) -->
    <main id="contenidoPrincipal" class="flex-grow p-4 md:p-8 space-y-8 max-w-7xl mx-auto w-full transition-all duration-300">

        <!-- A) y B) Bienvenida (Web Speech API) -->
        <section id="bienvenida" class="contenedor-seccion p-6 shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div class="flex-shrink-0 w-full md:w-auto flex justify-center">
                <!-- Imagen Logística Solicitada -->
                <img src="https://i.pinimg.com/736x/9e/96/02/9e9602badbbb86942b3681d31909e608.jpg" 
                     alt="Ilustración Logística y Transporte" 
                     class="h-48 w-48 md:h-56 md:w-56 object-cover rounded-2xl shadow-md border-4 border-indigo-100 dark:border-slate-700 transition-colors duration-400"
                     onerror="this.src='https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400'">
            </div>
            <div class="flex-grow text-center md:text-left">
                <!-- Letras del panel de bienvenida usando la variable de color dinámico -->
                <span class="text-xs font-bold uppercase tracking-widest opacity-90 transition-colors duration-300" style="color: var(--welcome-text);">Plataforma Logística</span>
                
                <!-- Título Adaptable: Amarillo Pastel en Modo Claro, Blanco en Modo Oscuro -->
                <h2 class="text-3xl md:text-4xl font-extrabold mb-3 mt-1 transition-colors duration-300" style="color: var(--welcome-text); text-shadow: 1px 1px 1px rgba(0,0,0,0.15);">
                    Bienvenida a la Red Global
                </h2>
                
                <!-- Cuerpo del mensaje adaptado al mismo color contrastado -->
                <p class="mb-5 text-base md:text-lg opacity-100 leading-relaxed transition-colors duration-300" style="color: var(--welcome-text); text-shadow: 0.5px 0.5px 1px rgba(0,0,0,0.1);">
                    <strong>Misión:</strong> Nuestra misión es optimizar las cadenas de suministro mediante integraciones tecnológicas de vanguardia, garantizando trazabilidad en tiempo real, reducción de costos y entrega puntual en cada destino de la red global.
                </p>
                <button onclick="leerEslogan()" class="enlace-interactivo btn-secundario flex items-center gap-2 transform hover:scale-105">
                    🔊 Escuchar Misión / Eslogan
                </button>
            </div>
        </section>

        <!-- C) Tienda / Formulario -->
        <section id="tienda" class="contenedor-seccion p-6 shadow-lg">
            <h2 class="text-2xl font-bold mb-4 border-b pb-2 border-dashed border-slate-300 dark:border-slate-600">Registro de Carga (Tienda)</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <form id="formularioCarga" class="space-y-4 w-full">
                    <div>
                        <label class="block text-sm font-semibold mb-1 opacity-90" for="nombreCliente">Nombre del Cliente / Empresa:</label>
                        <input type="text" id="nombreCliente" class="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white transition-colors" placeholder="Ej. Logística Global SA">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold mb-1 opacity-90" for="volumenCarga">Volumen de Carga (Metros Cúbicos):</label>
                        <input type="number" id="volumenCarga" oninput="actualizarEstimacionTransito()" class="w-full px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white transition-colors" placeholder="Ej. 150">
                    </div>
                    <button type="submit" class="w-full enlace-interactivo justify-center font-bold py-3">
                        Registrar Envío
                    </button>
                </form>

                <!-- Tarjeta de Estimación Dinámica de Tránsito -->
                <div class="p-6 rounded-2xl border-2 border-dashed border-indigo-200 dark:border-slate-700 bg-indigo-50 bg-opacity-30 dark:bg-slate-850 flex flex-col justify-between h-full min-h-[220px]">
                    <div>
                        <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-2">
                            <span>⏱️</span> Tránsito Estimado de Distribución
                        </h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                            Cálculo heurístico en base al volumen de carga, origen del remitente y despacho hacia el centro logístico final (Universidad Galileo, Zona 10).
                        </p>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-semibold uppercase tracking-wider text-slate-400 block">Tiempo de entrega</span>
                            <span id="textoDiasEstimados" class="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">2 días hábiles</span>
                        </div>
                        <div class="text-3xl" id="iconoEstimado">🚚</div>
                    </div>
                    <p class="text-[11px] opacity-75 mt-2 italic text-slate-600 dark:text-slate-400" id="notaEstimacion">
                        *Estimación estándar de envío local. Obtén coordenadas GPS para cálculo satelital de ruta.
                    </p>
                </div>
            </div>
        </section>

        <!-- D) Geolocalización -->
        <section id="geolocalizacion" class="contenedor-seccion p-6 shadow-lg text-center">
            <h2 class="text-2xl font-bold mb-4 border-b pb-2 border-dashed border-slate-300 dark:border-slate-600">Ubicación del Almacén de Origen</h2>
            <p class="mb-4 opacity-80">Determine la ubicación actual para calcular la ruta de distribución logística.</p>
            <button onclick="solicitarPermisoGPS()" class="enlace-interactivo btn-secundario py-3 px-8 hover:scale-105 mb-4">
                📍 Capturar Coordenadas Actuales
            </button>
            <div id="resultadoUbicacion" class="text-lg font-mono p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl hidden transition-all border border-slate-200 dark:border-slate-700">
                <!-- Coordenadas, Dirección y Mapa se inyectarán aquí -->
            </div>
        </section>

        <!-- E) Multimedia y Autoría -->
        <section id="enlaces" class="contenedor-seccion p-6 shadow-lg">
            <h2 class="text-2xl font-bold mb-6 border-b pb-2 border-dashed border-slate-300 dark:border-slate-600">Recursos y Multimedia</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Enlaces Interactivos -->
                <div class="flex flex-col gap-4 justify-center">
                    <a href="https://robertotelon.wixsite.com/my-site-5" target="_blank" class="enlace-interactivo justify-between">
                        <span>🌐 Mi Sitio en Wix (T14)</span>
                        <span class="text-xs bg-white bg-opacity-30 px-2 py-0.5 rounded-full">Visitar</span>
                    </a>
                    <a href="https://www.youtube.com/watch?v=a5MttjQpu5g" target="_blank" class="enlace-interactivo justify-between" style="background-color: #fca5a5; color: #7f1d1d;">
                        <span>▶️ Video en YouTube</span>
                        <span class="text-xs bg-white bg-opacity-45 px-2 py-0.5 rounded-full">Ver</span>
                    </a>
                    <a href="#" onclick="mostrarSubpaginaRedes(event)" class="enlace-interactivo justify-between" style="background-color: #bae6fd; color: #0369a1;">
                        <span>📱 Redes Sociales (T15)</span>
                        <span class="text-xs bg-white bg-opacity-45 px-2 py-0.5 rounded-full">Abrir</span>
                    </a>
                    <a href="https://www.galileo.edu/" target="_blank" class="enlace-interactivo justify-between" style="background-color: #fed7aa; color: #7c2d12;">
                        <span class="flex gap-2 items-center">
                            <!-- Logo SVG simplificado de Universidad Galileo -->
                            <svg class="w-6 h-6 bg-white rounded-full p-1" viewBox="0 0 24 24" fill="#ea580c"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                            Universidad Galileo
                        </span>
                        <span class="text-xs bg-white bg-opacity-45 px-2 py-0.5 rounded-full">Portal</span>
                    </a>
                </div>

                <!-- Canvas -->
                <div class="flex flex-col items-center justify-center">
                    <h3 class="text-lg font-bold mb-2">Firma Creativa del Autor</h3>
                    <canvas id="miCanvas" width="300" height="150" class="border-2 border-dashed border-indigo-200 dark:border-slate-600 rounded-2xl bg-indigo-50 bg-opacity-30 dark:bg-slate-800 shadow-inner"></canvas>
                    <p class="text-xs mt-2 opacity-75">Canvas API - Movimiento Dinámico Pastel</p>
                </div>
            </div>
        </section>

    </main>

    <!-- Subpágina Redes Sociales (Oculta por defecto) -->
    <main id="subpaginaRedes" class="hidden flex-grow p-4 md:p-8 space-y-8 max-w-7xl mx-auto w-full transition-opacity duration-300">
        <section class="contenedor-seccion rounded-2xl p-8 shadow-lg text-center max-w-3xl mx-auto mt-10">
            <h2 class="text-3xl md:text-4xl font-extrabold mb-2 text-indigo-500 dark:text-indigo-400">Nuestras Redes Sociales</h2>
            <p class="mb-8 opacity-80 text-sm md:text-base">Conéctate con nuestros canales de soporte global</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <a href="https://www.facebook.com/" target="_blank" class="enlace-interactivo justify-center text-lg py-4 border-none" style="background-color: #bfdbfe; color: #1e40af;">
                    📘 Facebook
                </a>
                <a href="https://www.instagram.com/" target="_blank" class="enlace-interactivo justify-center text-lg py-4 border-none" style="background-color: #fbcfe8; color: #9d174d;">
                    📸 Instagram
                </a>
                <a href="https://x.com/" target="_blank" class="enlace-interactivo justify-center text-lg py-4 border-none" style="background-color: #e2e8f0; color: #0f172a;">
                    𝕏 X (Twitter)
                </a>
                <a href="https://www.tiktok.com/" target="_blank" class="enlace-interactivo justify-center text-lg py-4 border-none" style="background-color: #ccfbf1; color: #115e59;">
                    🎵 TikTok
                </a>
            </div>
            <button onclick="ocultarSubpaginaRedes()" class="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white px-8 py-3 rounded-full font-bold shadow-md transition-all">
                ⬅️ Volver al Inicio
            </button>
        </section>
    </main>

    <!-- Pantalla de Despedida / Salida Activa (Oculta por defecto) -->
    <main id="pantallaSalida" class="hidden flex-grow p-4 md:p-8 flex items-center justify-center min-h-[60vh]">
        <section class="contenedor-seccion rounded-2xl p-8 shadow-2xl text-center max-w-md mx-auto border-t-4 border-t-red-400">
            <div class="w-20 h-20 bg-red-100 dark:bg-red-950/40 rounded-full flex items-center justify-center mx-auto mb-6">
                <span class="text-4xl">🚪</span>
            </div>
            <h2 class="text-3xl font-extrabold mb-3 text-rose-500 dark:text-rose-400">¡Sesión Finalizada!</h2>
            <p class="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed">
                Has salido de forma segura de la plataforma **Logística Pro (examenA_25000701)**. Toda la cola de distribución y datos de geolocalización temporal han sido limpiados de tu navegador de forma exitosa.
            </p>
            <button onclick="reiniciarPlataforma()" class="enlace-interactivo justify-center bg-emerald-200 text-emerald-900 border-emerald-300 font-bold px-6 py-2.5 rounded-full hover:bg-emerald-300 transition-all">
                🔄 Reingresar a la Plataforma
            </button>
        </section>
    </main>

    <!-- Salida / Footer -->
    <footer id="salida" class="bg-slate-900 text-slate-300 py-6 text-center mt-auto border-t border-slate-800 flex flex-col items-center justify-center gap-4 px-4">
        <div>
            <p class="mb-1 font-semibold">&copy; 2026 - Proyecto: examenA_25000701.</p>
            <p class="text-xs opacity-70">Logística y Cadenas de Suministro | Guatemala</p>
        </div>

        <!-- Botón Salir con la Imagen SVG Solicitada adjunta -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 my-2">
            <button onclick="salirPlataforma()" class="enlace-interactivo justify-center font-bold py-2.5 px-6" style="background-color: #fca5a5; color: #7f1d1d;">
                🚪 Salir de la Plataforma
            </button>
            
            <!-- Logotipo SVG Vectorial de Transporte y Éxito de Logística Pro -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12 text-rose-400 dark:text-rose-300 bg-rose-50 dark:bg-slate-800 p-2.5 rounded-2xl border border-rose-200 dark:border-slate-700 shadow-md transition-transform hover:scale-110 duration-300">
                <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
                <path d="M18 4l2 2 4-4" stroke="#10b981" />
            </svg>
        </div>

        <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="mt-4 text-indigo-400 hover:text-indigo-300 text-sm font-semibold underline transition-colors">
            Volver Arriba
        </button>
    </footer>

    <!-- Custom Message Box (Modal) para reemplazar alert() -->
    <div id="customModal" class="fixed inset-0 z-50 flex items-center justify-center">
        <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl max-w-sm w-full mx-4 border border-slate-200 dark:border-slate-700">
            <h3 id="modalTitle" class="text-xl font-bold mb-2 text-slate-900 dark:text-white">Notificación</h3>
            <p id="modalMessage" class="text-slate-600 dark:text-slate-300 mb-6 text-sm"></p>
            <button onclick="cerrarModal()" class="w-full enlace-interactivo justify-center font-bold py-2 px-4 rounded-xl border-none">
                Aceptar
            </button>
        </div>
    </div>

    <!-- Custom Confirm Box (Modal) para permisos GPS -->
    <div id="confirmModal" class="fixed inset-0 z-50 items-center justify-center animate-fade-in" style="display: none; background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(8px);">
        <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl max-w-sm w-full mx-4 border border-slate-200 dark:border-slate-700">
            <h3 class="text-xl font-bold mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                <span>📍 Permiso GPS</span>
            </h3>
            <p class="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed">¿Autoriza a la aplicación a utilizar el GPS para calcular la ruta exacta de distribución hacia la Universidad Galileo?</p>
            <div class="flex gap-4">
                <button onclick="ejecutarGPS()" class="w-full bg-emerald-200 hover:bg-emerald-300 text-emerald-900 font-bold py-2.5 px-4 rounded-xl transition-all border border-emerald-300">
                    Sí, permitir
                </button>
                <button onclick="cerrarConfirmModal()" class="w-full bg-rose-200 hover:bg-rose-300 text-rose-900 font-bold py-2.5 px-4 rounded-xl transition-all border border-rose-300">
                    No, cancelar
                </button>
            </div>
        </div>
    </div>

    <!-- SCRIPTS LÓGICOS -->
    <script>
        // --- Variables Globales de Ubicación ---
        let userLat = null;
        let userLon = null;
        const galileoCoords = { lat: 14.603808, lon: -90.505215 }; // Ubicación de Universidad Galileo Zona 10

        // --- 1. Modo Claro / Oscuro ---
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            const isDark = body.classList.contains('dark');
            themeIcon.textContent = isDark ? '☀️' : '🌙';
            themeToggle.querySelector('span:not(#themeIcon)').textContent = isDark ? 'Modo Claro' : 'Modo Oscuro';
            dibujarNombreEnCanvas(); // Redibujar canvas para ajustar fondos de inmediato
        });

        // --- 2. Funciones de Modal Personalizado (Sustituto de Alert) ---
        const modal = document.getElementById('customModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalMessage = document.getElementById('modalMessage');

        function mostrarModal(titulo, mensaje) {
            modalTitle.textContent = titulo;
            modalMessage.textContent = mensaje;
            modal.style.display = 'flex';
        }

        function cerrarModal() {
            modal.style.display = 'none';
        }

        // --- 3. Web Speech API (Bienvenida) ---
        function leerEslogan() {
            const eslogan = "Nuestra misión es optimizar las cadenas de suministro mediante integraciones tecnológicas de vanguardia, garantizando trazabilidad en tiempo real, reducción de costos y entrega puntual en cada destino de la red global.";
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(eslogan);
                utterance.lang = 'es-ES';
                utterance.rate = 0.95;
                window.speechSynthesis.speak(utterance);
            } else {
                mostrarModal('Error', 'Tu navegador no soporta la síntesis de voz de Web Speech API.');
            }
        }

        // --- Heurística de cálculo de días aproximados de entrega ---
        function calcularDiasDeTransito() {
            const volumenInput = document.getElementById('volumenCarga').value;
            const volumen = parseFloat(volumenInput) || 0;
            
            let diasBase = 2; // Por defecto asumimos un tránsito base nacional de 2 días hábiles
            
            // 1. Modificador por distancia (si tenemos coordenadas GPS capturadas)
            if (userLat !== null && userLon !== null) {
                const distKm = calcularDistanciaHaversine(userLat, userLon, galileoCoords.lat, galileoCoords.lon);
                
                if (distKm < 15) {
                    diasBase = 1; // Entrega express local
                } else if (distKm >= 15 && distKm < 80) {
                    diasBase = 2; // Distribución metropolitana extendida
                } else if (distKm >= 80 && distKm < 250) {
                    diasBase = 3; // Tránsito regional interdepartamental
                } else {
                    diasBase = 5; // Envíos de larga distancia / fronterizos
                }
            }
            
            // 2. Modificador por volumen de carga (Logística pesada)
            if (volumen > 100 && volumen <= 500) {
                diasBase += 1; // Requiere consolidación en almacén
            } else if (volumen > 500) {
                diasBase += 2; // Requiere convoy pesado o aduana interna
            }
            
            return diasBase;
        }

        // Haversine formula para calcular distancia entre coordenadas en KM
        function calcularDistanciaHaversine(lat1, lon1, lat2, lon2) {
            const R = 6371; // Radio de la tierra en km
            const dLat = deg2rad(lat2 - lat1);
            const dLon = deg2rad(lon2 - lon1);
            const a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2); 
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            return R * c; // Distancia en km
        }

        function deg2rad(deg) {
            return deg * (Math.PI/180);
        }

        // Actualiza el indicador visual de manera dinámica
        function actualizarEstimacionTransito() {
            const dias = calcularDiasDeTransito();
            const textoDias = document.getElementById('textoDiasEstimados');
            const iconoEstimado = document.getElementById('iconoEstimado');
            const notaEstimacion = document.getElementById('notaEstimacion');
            const volumen = parseFloat(document.getElementById('volumenCarga').value) || 0;

            textoDias.textContent = `${dias} ${dias === 1 ? 'día hábil' : 'días hábiles'}`;

            // Actualizar iconos y notas dependiendo de la velocidad y volumen
            if (dias <= 1) {
                iconoEstimado.textContent = '⚡'; // Express
            } else if (volumen > 100) {
                iconoEstimado.textContent = '🚛'; // Flota Pesada
            } else {
                iconoEstimado.textContent = '📦'; // Estándar
            }

            if (userLat !== null && userLon !== null) {
                const dist = calcularDistanciaHaversine(userLat, userLon, galileoCoords.lat, galileoCoords.lon).toFixed(1);
                notaEstimacion.textContent = `*Cálculo satelital activo. Distancia al destino final: ${dist} km. Carga de ${volumen} m³.`;
            } else {
                notaEstimacion.textContent = `*Estimación estándar de envío nacional. Captura coordenadas GPS en la sección de abajo para cálculo exacto.`;
            }
        }

        // --- 4. Validación de Formulario (Tienda) ---
        const form = document.getElementById('formularioCarga');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombreCliente').value.trim();
            const volumen = document.getElementById('volumenCarga').value.trim();

            if (nombre === '' || volumen === '') {
                mostrarModal('Error de Validación', 'Por favor, complete todos los campos (Nombre y Volumen) para proceder.');
            } else if (volumen <= 0) {
                mostrarModal('Error', 'El volumen de carga debe ser una cantidad positiva mayor a 0.');
            } else {
                const diasTransito = calcularDiasDeTransito();
                mostrarModal(
                    'Registro Exitoso', 
                    `¡Hola, ${nombre}! Tu carga de ${volumen} m³ ha sido registrada con éxito. Estimamos un tiempo de llegada de ${diasTransito} ${diasTransito === 1 ? 'día hábil' : 'días hábiles'} al almacén de la Universidad Galileo en la Zona 10.`
                );
                form.reset();
                actualizarEstimacionTransito();
            }
        });

        // --- 5. Geolocalización API ---
        function solicitarPermisoGPS() {
            document.getElementById('confirmModal').style.display = 'flex';
        }

        function cerrarConfirmModal() {
            document.getElementById('confirmModal').style.display = 'none';
            const resultadoDiv = document.getElementById('resultadoUbicacion');
            resultadoDiv.style.display = 'block';
            resultadoDiv.innerHTML = '<span class="text-rose-500 font-semibold text-sm">❌ Permiso de GPS denegado por el usuario.</span>';
        }

        function ejecutarGPS() {
            document.getElementById('confirmModal').style.display = 'none';
            obtenerUbicacion();
        }

        function obtenerUbicacion() {
            const resultadoDiv = document.getElementById('resultadoUbicacion');
            resultadoDiv.style.display = 'block';
            resultadoDiv.innerHTML = '<span class="animate-pulse text-indigo-500 dark:text-indigo-400 font-semibold text-sm">📍 Solicitando GPS del sistema y calculando ruta...</span>';

            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        userLat = position.coords.latitude;
                        userLon = position.coords.longitude;
                        
                        // Actualizar estimación del formulario de carga con las nuevas coordenadas
                        actualizarEstimacionTransito();

                        const latStr = userLat.toFixed(6);
                        const lonStr = userLon.toFixed(6);
                        
                        // Generación del Iframe con Google Maps incrustado
                        const mapUrl = `https://maps.google.com/maps?q=${latStr},${lonStr}&z=15&output=embed`;

                        resultadoDiv.innerHTML = `
                            <div class="text-left space-y-4 font-sans text-base">
                                <div class="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800 transition-colors">
                                    <span class="text-emerald-800 dark:text-emerald-200 font-bold block mb-1">✅ Origen Capturado (Tu ubicación actual)</span>
                                    <p class="text-xs md:text-sm dark:text-gray-200"><strong>Latitud:</strong> ${latStr} | <strong>Longitud:</strong> ${lonStr}</p>
                                </div>
                                
                                <div class="p-4 bg-sky-50 dark:bg-sky-950/40 rounded-xl border border-sky-200 dark:border-sky-800 transition-colors">
                                    <span class="text-sky-800 dark:text-sky-200 font-bold block mb-1">🏢 Destino Logístico</span>
                                    <p class="text-xs md:text-sm dark:text-gray-200">Universidad Galileo, 7a Avenida, Calle Dr. Eduardo Suger Cofiño, Zona 10, Ciudad de Guatemala.</p>
                                    <p class="text-xs italic mt-2 opacity-80 text-sky-900 dark:text-sky-100">¡Tiempo de tránsito calculado y recalculado dinámicamente en el formulario de arriba!</p>
                                </div>

                                <div class="w-full h-64 md:h-80 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-inner">
                                    <iframe 
                                        width="100%" 
                                        height="100%" 
                                        frameborder="0" 
                                        scrolling="no" 
                                        marginheight="0" 
                                        marginwidth="0" 
                                        src="${mapUrl}">
                                    </iframe>
                                </div>
                            </div>
                        `;
                    },
                    (error) => {
                        resultadoDiv.innerHTML = `<span class="text-rose-500 font-sans text-sm">Error de GPS: ${error.message}</span>`;
                    }
                );
            } else {
                resultadoDiv.innerHTML = '<span class="text-rose-500 font-sans text-sm">La geolocalización no es soportada por este dispositivo.</span>';
            }
        }

        // --- NAVEGACIÓN SUBPÁGINA REDES ---
        function mostrarSubpaginaRedes(e) {
            e.preventDefault();
            document.getElementById('contenidoPrincipal').classList.add('hidden');
            document.getElementById('subpaginaRedes').classList.remove('hidden');
            document.getElementById('pantallaSalida').classList.add('hidden');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        function ocultarSubpaginaRedes() {
            document.getElementById('subpaginaRedes').classList.add('hidden');
            document.getElementById('contenidoPrincipal').classList.remove('hidden');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // --- SISTEMA DE SALIDA DE LA PLATAFORMA ---
        function salirPlataforma() {
            // Cancelar voz si está hablando
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
            // Limpiar formularios y variables de geolocalización temporal
            form.reset();
            userLat = null;
            userLon = null;
            const resultadoDiv = document.getElementById('resultadoUbicacion');
            resultadoDiv.innerHTML = '';
            resultadoDiv.classList.add('hidden');
            actualizarEstimacionTransito();

            // Cambiar vistas de Main
            document.getElementById('contenidoPrincipal').classList.add('hidden');
            document.getElementById('subpaginaRedes').classList.add('hidden');
            document.getElementById('pantallaSalida').classList.remove('hidden');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        function reiniciarPlataforma() {
            document.getElementById('pantallaSalida').classList.add('hidden');
            document.getElementById('contenidoPrincipal').classList.remove('hidden');
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // --- 6. Canvas API (Firma "ISMATUL" con Movimiento Creativo Pastel) ---
        let animacionCanvasId;
        let tiempoAnimacion = 0;

        function dibujarNombreEnCanvas() {
            const canvas = document.getElementById('miCanvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            
            if (animacionCanvasId) {
                cancelAnimationFrame(animacionCanvasId);
            }

            function animar() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                const isDark = document.body.classList.contains('dark');
                
                // Fondo sutil acoplado al tema pastel
                ctx.fillStyle = isDark ? '#1e293b' : '#f8fafc';
                ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20);

                // Dibujar un borde interior elegante
                ctx.strokeStyle = isDark ? '#334155' : '#e2e8f0';
                ctx.lineWidth = 2;
                ctx.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);

                const texto = "ISMATUL";
                ctx.font = 'bold 38px "Segoe UI", sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Calcular espaciado dinámico de las letras
                let anchoTotal = 0;
                for(let i = 0; i < texto.length; i++) {
                    anchoTotal += ctx.measureText(texto[i]).width + 4;
                }
                let startX = (canvas.width - anchoTotal) / 2 + 10;

                // Dibujar letras con efecto ola y ciclo de color pastel
                for (let i = 0; i < texto.length; i++) {
                    const char = texto[i];
                    
                    // Movimiento armónico vertical individual
                    const offsetY = Math.sin(tiempoAnimacion + i * 0.6) * 12;
                    
                    // Ciclo de color pastel (mantenemos brillo alto y saturación balanceada)
                    const hue = (tiempoAnimacion * 50 + i * 35) % 360;
                    ctx.fillStyle = `hsl(${hue}, 80%, ${isDark ? 75 : 55}%)`;
                    
                    // Sombras suaves difuminadas
                    ctx.shadowColor = isDark ? 'rgba(0, 0, 0, 0.6)' : 'rgba(129, 140, 248, 0.2)';
                    ctx.shadowBlur = 6;
                    ctx.shadowOffsetX = 3;
                    ctx.shadowOffsetY = 3;

                    ctx.fillText(char, startX, canvas.height / 2 + offsetY);
                    
                    // Reiniciar sombra por iteración para evitar sobreposición
                    ctx.shadowBlur = 0;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;

                    startX += ctx.measureText(char).width + 4;
                }

                tiempoAnimacion += 0.04;
                animacionCanvasId = requestAnimationFrame(animar);
            }
            
            animar();
        }

        // --- 7. Service Worker (PWA Instalable) ---
        const serviceWorkerCode = `
            const CACHE_NAME = 'logistica-v3';
            self.addEventListener('install', event => {
                console.log('[Service Worker] Instalado');
                self.skipWaiting();
            });
            self.addEventListener('activate', event => {
                console.log('[Service Worker] Activado');
                return self.clients.claim();
            });
            self.addEventListener('fetch', event => {
                event.respondWith(fetch(event.request).catch(() => new Response("Offline")));
            });
        `;

        function registrarPWA() {
            if ('serviceWorker' in navigator) {
                const blob = new Blob([serviceWorkerCode], { type: 'application/javascript' });
                const swUrl = URL.createObjectURL(blob);

                window.addEventListener('load', () => {
                    navigator.serviceWorker.register(swUrl)
                        .then(registration => {
                            console.log('PWA: Service Worker registrado con éxito.', registration.scope);
                        })
                        .catch(err => {
                            console.log('PWA: Fallo al registrar el Service Worker: ', err);
                        });
                });
            }
        }

        // Inicialización
        document.addEventListener('DOMContentLoaded', () => {
            dibujarNombreEnCanvas();
            registrarPWA();
            actualizarEstimacionTransito();
        });

    </script>
</body>
</html>