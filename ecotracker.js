
const usuarios = [];

// Función principal
function iniciarEcoTracker() {
    alert("Bienvenido a EcoTracker: Aprende sobre el cambio climático y cómo reducir tu impacto en el medio ambiente.");
    let continuar = true;

    while (continuar) {
        const opcion = prompt(
            "Selecciona un tema para aprender:\n" +
            "1. Introducción al Cambio Climático\n" +
            "2. Huella de Carbono Personal\n" +
            "3. Consejos Prácticos para Reducir tu Impacto\n" +
            "4. Salir"
        );

        switch (opcion) {
            case "1":
                mostrarIntroduccion();
                break;
            case "2":
                calcularHuella();
                break;
            case "3":
                mostrarConsejos();
                break;
            case "4":
                continuar = false;
                alert("Gracias por usar EcoTracker. ¡Hasta pronto!");
                break;
            default:
                alert("Opción no válida. Inténtalo de nuevo.");
        }
    }
}

// Función introducción al cambio climatico
function mostrarIntroduccion() {
    alert(
        "El cambio climático es causado por actividades humanas como:\n" +
        "- Quema de combustibles fósiles.\n" +
        "- Deforestación.\n\n" +
        "Consecuencias:\n" +
        "- Calentamiento global.\n" +
        "- Pérdida de biodiversidad."
    );
}

// Función para calcular la huella de carbono del usuario
function calcularHuella() {
    const usuario = {
        transporte: "",
        carne: "",
        avion: "",
        huella: 0,
    };

    usuario.transporte = prompt("¿Con qué frecuencia usas transporte público? (diario/semanal/nunca)").toLowerCase();
    usuario.carne = prompt("¿Consumes carne roja más de 3 veces por semana? (sí/no)").toLowerCase();
    usuario.avion = prompt("¿Viajas en avión más de 2 veces al año? (sí/no)").toLowerCase();

    // Calcula la huella de carbono
    usuario.huella += usuario.transporte === "nunca" ? 2 : usuario.transporte === "semanal" ? 1 : 0;
    usuario.huella += usuario.carne === "sí" ? 1.5 : 0;
    usuario.huella += usuario.avion === "sí" ? 3 : 0;

    alert(`Tu huella de carbono estimada es de ${usuario.huella} toneladas de CO2 al año.`);
    usuarios.push(usuario);
}

// Función para mostrar consejos practicos
function mostrarConsejos() {
    if (usuarios.length === 0) {
        alert("Contesta la huella para darte los consejos más acordes a tu situación.");
        return;
    }

    const ultimoUsuario = usuarios[usuarios.length - 1]; // Obtener el último usuario que respondio
    const consejos = [];

    if (ultimoUsuario.transporte === "nunca") {
        consejos.push("Usar transporte público o bicicleta puede reducir significativamente tu huella de carbono.");
    } else if (ultimoUsuario.transporte === "semanal") {
        consejos.push("Considera aumentar el uso del transporte público para reducir aún más tu impacto.");
    }

    if (ultimoUsuario.carne === "sí") {
        consejos.push("Reducir el consumo de carne roja a una vez por semana puede disminuir tu huella de carbono en 0.8 toneladas al año.");
    }

    if (ultimoUsuario.avion === "sí") {
        consejos.push("Reducir la frecuencia de los vuelos o elegir transporte terrestre en trayectos cortos puede minimizar tus emisiones.");
    }

    if (consejos.length > 0) {
        alert("Consejos para reducir tu impacto:\n\n" + consejos.join("\n"));
    } else {
        alert("¡Buen trabajo! Tus respuestas indican que ya estás adoptando hábitos sostenibles. Sigue así.");
    }
}

iniciarEcoTracker();
