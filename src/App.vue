<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ecomers</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Inicio</a>
      <a class="navbar-brand" href="#">Servicios</a>
      <a class="navbar-brand" href="#">Habilidades</a>
      <a class="navbar-brand" href="#">Perfil</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="drowpdown-item" to="/viewP">Ver productos</router-link>
              </li>
              <li>
                <router-link class="drowpdown-item" to="/createP">Crear productos</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</template>
