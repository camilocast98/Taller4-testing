# PokemonShowDon

Este proyecto utiliza [Playwright](https://playwright.dev/) para automatizar pruebas de la aplicación.

## Estructura del Proyecto

- `data/`: Contiene archivos JSON con los datos de prueba.
- `Pages/`: Contiene clases que implementan el Page Object Model (POM) para cada página de la aplicación.
- `tests/`: Contiene los archivos de pruebas automatizadas.
- `playwright.config.ts`: Configuración de Playwright para el proyecto.
- `README.md`: Documentación del proyecto.
  
## Instalación

### Prerrequisitos

Asegúrate de tener instalado:
- Node.js (v14 o superior)

### Pasos de instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/camilocast98/Taller4-testing.git

2. Ve al directorio del proyecto:
    ```bash
    cd Taller4-testing
3. Instala las dependencias:
    ```bash
    npm install
4. Instala los navegadores requeridos por Playwright:
    ```bash
    npx playwright install

### Ejecución de las Pruebas 
1. Para ejecutar solo el archivo taller4.spec.ts:
    ```bash
    npx playwright test tests/taller4.spec.ts
3. Ejecutar pruebas en modo "headed" (navegador visible)
    ```bash
    npx playwright test tests/taller4.spec.ts --headed
4. Ver el reporte de pruebas
    ```bash
    npx playwright show-report

