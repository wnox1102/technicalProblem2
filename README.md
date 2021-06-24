# Problem 2 convertidor de zona horaria

## Instalación de Requisitos

Para instalar este proyecto deberán contar con [node.js](https://nodejs.org) mayor que `v10.20.x` y [npm](https://npmjs.com)y [git](https://git-scm.com/).

### Instalar Node.js

Para instalar `node.js` es un ambiente linux recomendamos utilizar [nvm](https://github.com/nvm-sh/nvm) de acuerdo a las instrucción de `nvm` su instalación es realmente sencilla, solamente hay que ejecutar el siguiente comando:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```

Luego hay que cerrar la terminal y volverla abrir (para recargar las variables) y al ejecutar el comando:

```shell
nvm --version
```

Debería imprimirse un numero de version en la terminal por ejemplo: `0.37.0`, luego hay que ejecutar el comando, para instalar la version `lts` de `node.js`

```shell
nvm install --lts
```

Podemos verificar la instalación al ejecutar, esto debería imprimir dos números de versiones diferente la primera correspondiente a `node.js` y la segunda a `npm`

```shell
node -v && npm -v
```

---

## Instalar proyecto

Para instalar este proyecto lo primero que debera hacer es clonar el repositorio utilizando el siguiente comando:

```shell
git clone https://github.com/wnox1102/technicalProblem2.git
```

**Nota:** Si utilizas ssh puedes clonar con este comando

```shell
git clone https://github.com/wnox1102/technicalProblem2.git
```
Luego deberás instalar las dependencias para ello ejecuta

```shell
npm ci
```

**Nota:** Se ejecuta el comando `npm ci` y no `npm install` para que `npm` instale las versiones correctas de las dependencias y nos las ultimas versiones. Si se desea instalar las nuevas, puede utilizar `npm install` en vez de `npm ci`

Luego hay que renombrar el archivo `src/variables.env.example` a `src/variables.env` para ello puede ejecutar el siguiente comando. Para efectos de la prueba se puede obviar este paso ya que por default el proyecto se inicia en el puerto 5555.

---

## Ejecución

### Desarrollo

Para ejecutar el proyecto en ambiente de desarrollo o prueba deberá ejecutar, el comando:

```shell
npm run dev
```

Esto compilara el código de TypeScript a JavaScript y ejecutara un servido en la dirección [http://localhost:5555](http://localhost:5555) en el cual se podrán hacer las prueba

## Autores

- [Wilmer Montilla](mailto:w.montilla3007@gmail.com)
