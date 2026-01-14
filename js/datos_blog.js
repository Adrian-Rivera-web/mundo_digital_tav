const reseñas = [
            {
                id: 1,
                titulo: "Sony WH-1000XM5: ¿El rey del silencio?",
                fecha: "10 Ene, 2026",
                autor: "Admin",
                categoria: "Audio",
                imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
                contenido: `
                    <p class="intro">Los audífonos con cancelación de ruido de Sony han sido el estándar de oro durante años. Con la llegada del modelo XM5, el diseño cambió radicalmente.</p>
                    <h2>Diseño y Comodidad</h2>
                    <p>A diferencia de sus predecesores, los XM5 tienen un diseño más limpio y moderno. Las almohadillas son increíblemente suaves.</p>
                    <h2>Calidad de Sonido</h2>
                    <p>La cancelación de ruido activa (ANC) es simplemente mágica. Desaparece el ruido del tráfico y el sonido es equilibrado.</p>
                    
                    <div class="pros-contras">
                        <div class="caja-pros">
                            <h3><i class="fa-solid fa-thumbs-up"></i> Lo Bueno</h3>
                            <ul><li>Cancelación líder.</li><li>Batería 30h.</li></ul>
                        </div>
                        <div class="caja-contras">
                            <h3><i class="fa-solid fa-thumbs-down"></i> Lo Malo</h3>
                            <ul><li>Precio elevado.</li><li>No plegables.</li></ul>
                        </div>
                    </div>
                    
                    <h2>Conclusión</h2>
                    <p>Si buscas el mejor silencio del mercado, estos son los audífonos que debes comprar.</p>
                `
            },
            {
                id: 2,
                titulo: "Samsung S24 Ultra: Potencia Pura",
                fecha: "05 Ene, 2026",
                autor: "Admin",
                categoria: "Móviles",
                imagen: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000",
                contenido: `
                    <p class="intro">Analizamos la cámara de 200MP y el rendimiento en juegos del nuevo buque insignia de Samsung.</p>
                    <h2>Pantalla y Diseño</h2>
                    <p>La pantalla plana es un acierto total para usar el S-Pen. El brillo máximo es impresionante bajo el sol.</p>
                    <h2>Rendimiento</h2>
                    <p>Con el nuevo procesador Snapdragon, no hay juego que se le resista. La batería dura todo el día sin problemas.</p>
                    <h2>Conclusión</h2>
                    <p>El mejor Android del año si buscas productividad y fotografía.</p>
                `
            },
            {
                id: 3,
                titulo: "Monitores Curvos vs Planos",
                fecha: "28 Dic, 2025",
                autor: "Admin",
                categoria: "Hardware",
                imagen: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000",
                contenido: `
                    <p class="intro">¿Cuál es mejor para trabajar y cuál para jugar? Comparamos las ventajas y desventajas.</p>
                    <h2>Para Gaming</h2>
                    <p>Los curvos ofrecen mayor inmersión, especialmente en juegos de carreras o simuladores.</p>
                    <h2>Para Trabajo</h2>
                    <p>Los planos suelen ser mejores para diseño gráfico porque no deforman las líneas rectas.</p>
                    <h2>Veredicto</h2>
                    <p>Elige curvo para inmersión, plano para precisión.</p>
                `
            }
        ];

        // 2. DETECTAR ID DE LA URL
        const params = new URLSearchParams(window.location.search);
        const idBuscado = parseInt(params.get('id')); 

        // 3. BUSCAR EN LA "BASE DE DATOS"
        const reseñaEncontrada = reseñas.find(r => r.id === idBuscado);

        // 4. RELLENAR HTML
        if (reseñaEncontrada) {
            document.title = reseñaEncontrada.titulo + " - Mundo Digital";
            document.getElementById("titulo-detalle").textContent = reseñaEncontrada.titulo;
            document.getElementById("categoria-detalle").textContent = reseñaEncontrada.categoria;
            document.getElementById("fecha-detalle").innerHTML = `<i class="fa-regular fa-calendar"></i> ${reseñaEncontrada.fecha}`;
            document.getElementById("autor-detalle").innerHTML = `<i class="fa-regular fa-user"></i> Por ${reseñaEncontrada.autor}`;
            document.getElementById("img-detalle").src = reseñaEncontrada.imagen;
            document.getElementById("contenido-detalle").innerHTML = reseñaEncontrada.contenido;
        } else {
            document.querySelector(".articulo-container").innerHTML = "<h1>Reseña no encontrada o ID incorrecto.</h1><a href='blog.html'>Volver</a>";
        }