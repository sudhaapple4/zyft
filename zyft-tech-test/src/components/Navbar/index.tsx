import zyftlogo from '../../assets/zyft.png'
//navbar header component
const Navbar = () => {
  return (
    <nav className="bg-white-500 p-4">
      <div className="container mx-20 flex">
        <img src={zyftlogo} alt="zyft-logo" className="block h-12  md:mx-0 sm:mx-0 pb-2"></img>
        <div className="text-zorg text-3xl font-extrabold">Zyft</div>
      </div>
    </nav>
  );
};

export default Navbar;