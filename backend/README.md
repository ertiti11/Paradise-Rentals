<p align="center"><a href="https://laravel.com" target="_blank"><img src="../src/assets/posibleLogo.webp" width="400" alt="Laravel Logo"></a></p>




## Acerca de Laravel

Laravel es un framework de aplicaciones web con una sintaxis expresiva y elegante. Creemos que el desarrollo debe ser una experiencia agradable y creativa para ser verdaderamente satisfactorio. Laravel intenta quitar el dolor del desarrollo facilitando tareas comunes utilizadas en la mayoría de los proyectos web.

## Características

- Sistema de enrutamiento simple y expresivo
- Potente ORM (Eloquent)
- Sistema de migraciones y seeding
- Autenticación y autorización
- Sistema de colas y trabajos en segundo plano
- Integración con servicios de terceros

## Requisitos del Sistema

- PHP >= 7.3
- Composer
- Extensiones de PHP: OpenSSL, PDO, Mbstring, Tokenizer, XML, Ctype, JSON, BCMath

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/tu-proyecto.git
    cd tu-proyecto
    ```

2. Instala las dependencias:
    ```sh
    composer install
    ```

3. Copia el archivo de entorno y genera la clave de la aplicación:
    ```sh
    cp .env.example .env
    php artisan key:generate
    ```

4. Configura tu archivo `.env` con las credenciales de tu base de datos.

5. Ejecuta las migraciones y seeders:
    ```sh
    php artisan migrate --seed
    ```

6. Inicia el servidor de desarrollo:
    ```sh
    php artisan serve
    ```

## Pruebas

Para ejecutar las pruebas, usa el siguiente comando:
```sh
php artisan test
