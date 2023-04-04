import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>Aqui logo</h3>
      <div>
        <button>Perfumes</button>
        <button>Maquillaje</button>
        <button>Cuidado Diario</button>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
