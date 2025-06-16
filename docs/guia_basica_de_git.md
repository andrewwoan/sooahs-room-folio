# Guía Básica de Git: Deja de Desarrollar Directamente en `main`

El objetivo es aprender a trabajar con ramas (branches) para aislar los cambios y evitar problemas en la rama principal (`main`).

## Paso 1: Verifica tu rama actual

Abre la terminal o línea de comandos, navega a la carpeta de tu proyecto y ejecuta:

```bash
git status
```

Observa la línea que comienza con "On branch". Asegúrate de que diga `main`.

## Paso 2: Actualiza la rama principal

Antes de iniciar un nuevo trabajo, descarga los últimos cambios del repositorio remoto a tu rama principal local:

```bash
git pull origin main
```

## Paso 3: Crea una nueva rama

Para trabajar en una nueva función o corrección, crea una rama separada de la principal. Elige un nombre descriptivo para tu rama. Por ejemplo: `feature/interfaz-usuario-login`. Ejecuta:

```bash
git checkout -b feature/tu-nombre-de-rama
```

Esto crea la rama y te cambia a ella.

## Paso 4: Realiza tus cambios y commitea

Mientras trabajas, guarda tus cambios con commits frecuentes. Cada commit debe representar una unidad lógica de trabajo. Primero, añade los archivos modificados al área de staging:

```bash
git add .
```

Luego, guarda los cambios con un mensaje descriptivo:

```bash
git commit -m "feat: Implementación inicial de la interfaz de usuario de inicio de sesión"
```

## Paso 5: Sube tu rama al repositorio remoto (primera vez)

Para que otros vean tu trabajo y tener una copia de seguridad, sube tu rama local al repositorio remoto:

```bash
git push -u origin feature/tu-nombre-de-rama
```

La opción `-u` vincula tu rama local con la remota. En futuros `push` desde esta rama, solo necesitarás `git push`.

## Paso 6: Continúa trabajando y commiteando

Sigue desarrollando en tu rama y guarda tus avances con `git add .` y `git commit -m "Tu mensaje de commit"`.

## Paso 7: Fusiona tu rama con la rama principal

Cuando tu trabajo esté terminado y probado, intégralo a la rama principal:

1.  **Cambia a la rama principal:**

    ```bash
    git checkout main
    ```

2.  **Actualiza la rama principal:**

    ```bash
    git pull origin main
    ```

3.  **Fusiona tu rama:**

    ```bash
    git merge feature/tu-nombre-de-rama
    ```

    Si hay conflictos (cambios en las mismas líneas de código), Git te informará y deberás resolverlos editando los archivos. Luego, usa `git add <archivo>` para marcar los conflictos como resueltos.

4.  **Commitea la fusión:** Guarda la fusión de tu rama en la principal:

    ```bash
    git commit -m "Merge de la rama feature/tu-nombre-de-rama en main"
    ```

5.  **Sube la rama principal fusionada:**

    ```bash
    git push origin main
    ```

## Paso 8: Elimina la rama (opcional)

Una vez que tu rama se ha fusionado y subido, puedes eliminar la rama local:

```bash
git branch -d feature/tu-nombre-de-rama
```

Y la rama remota:

```bash
git push origin --delete feature/tu-nombre-de-rama
```

## Comandos Clave:

* `git status`: Muestra el estado del repositorio y la rama actual.
* `git pull origin main`: Descarga cambios remotos a la rama principal local.
* `git checkout -b <nombre-de-rama>`: Crea y cambia a una nueva rama.
* `git add .`: Añade todos los cambios al área de staging.
* `git commit -m "<mensaje>"`: Guarda los cambios con un mensaje.
* `git push -u origin <nombre-de-rama>`: Sube la rama local al repositorio remoto (primera vez).
* `git checkout main`: Cambia a la rama principal.
* `git merge <nombre-de-rama>`: Integra los cambios de la rama especificada en la actual.
* `git branch -d <nombre-de-rama>`: Elimina una rama local.
* `git push origin --delete <nombre-de-rama>`: Elimina una rama remota.
