Stage One
=========
Boilerplate for any NodeJS application.

> *It can scarcely be denied that the supreme goal of all theory is to make
> the irreducible basic elements as simple and as few as possible without having
> to surrender the adequate representation of a single datum of experience.*
>
> ~ Albert Einstein

Stage One is designed to bootstrap NodeJS applications by providing the minimum
platform for performing test-driven development in a containerized environment.

Deployment
----------
### Local Dependencies
- [Git](https://git-scm.com): The distributed collaboration platform.
- [Docker](https://www.docker.com): Linux container image builder and local runtime environment.

### Docker
To build a container image run:

    bin/build

To deploy a container to a local Docker daemon:

    bin/run

Testing
-------
To run all tests in a local container:

    bin/test

Versioning
----------
Stage-One applications should follow the
[Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html) specification.

An application's canonical version is found in its `package.json` file. Please
keep this up-to-date.

Directory Structure
-------------------
- `README.md` The file you are reading
- `LICENSE` License to use and create derivative works from the software
- `package.json` NPM configuration file
- `Dockerfile` Build file for Docker images
- `bin/` Directory containing development scripts
- `bin/build` Builds the project's container image
- `bin/run` Starts a container and runs `src/index.cjs`
- `bin/test` Starts a container and runs all tests
- `test/` Directory containing integration tests
- `src/` Directory containing project code
- `src/index.cjs` Application's main entry point
- `src/build-variables.cjs` Default values for build variables during development
- `.dockerignore` Files that should be ignored when building images
- `.gitignore` Files that should be ignored in git commits
- `.nvmrc` Contains the expected version of the NodeJS runtime, used by nvm
- `.prettierrc.json` Autoformatter/linter configuration/rules
- `build-variables.cjs` Generates JavaScript code containing build-time values
- `package-lock.json` NPM lock file
- `.husky/` Directory containing husky git hook configuration

Build Scripts
-------------
Inside the `bin/` directory there are some scripts containing Docker commands
for building, running, and testing the application. Use these to develop and
deploy in a platform-neutral environment.

### NPM Scripts
There are some scripts to be run via npm are defined in `package.json`:
- `test` runs all tests on local machine. `bin/test` runs this in a Docker container
- `prepare` used by husky for hook management
- `format` formats code by rules defined in `.prettierrc.json`

Build Variables
---------------
The script `build-variables.cjs` in the project root is run by Docker at build time. It generates `src/build-variables.cjs` and injects values from the environment.

Platform
--------
- [Alpine Linux](https://www.alpinelinux.org): Lightweight Linux distribution designed for containerization.
- [NodeJS](https://nodejs.org): JavaScript runtime and standard library
- [npm](https://npmjs.com): Package manager
- [nvm](https://github.com/nvm-sh/nvm): NodeJS version manager

Development Tools
-----------------
- [Husky](https://typicode.github.io/husky): Git hook manager
- [lint-staged](https://github.com/okonet/lint-staged): Runs linter against files staged in Git
- [Prettier](https://prettier.io): JavaScript autoformatter
- [Ava](https://github.com/avajs/ava): Fast, concurrent, test runner
