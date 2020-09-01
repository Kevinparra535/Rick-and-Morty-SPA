const Header = () => {
  const view = `
  <div class="Header-main">
    <div class="Header-logo">
        <a href="/">
        <img src="../../logo.png" alt="logo">
      </a>
    </div>
    <h1>Rick and Morty</h1>
    <div class="Header-nav">
      <a href="/">Inicio</a>
      <a href="#/about">Acerca de</a>
    </div>
  </div >
  `;
  return view;
};

export default Header;
