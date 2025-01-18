import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../Img/Logo/Arrow.svg';
import Ad from '../Ad/Ad';
import Follow from '../Follow/Follow';
import Footer from '../Footer/Footer';
import Subcribe from '../Subcribe/Subcribe';
import Search from '../../Img/Logo/Search.svg';
import Market from '../../Img/Logo/Market.svg';
import Star from '../../Img/Logo/Star.svg';
import User from '../../Img/Logo/User.svg';
import Card from '../../Ui/Card';
import RedHat from '../../Img/People/RedHat.svg';
import BlendShirt from '../../Img/People/BlendShirt.svg';
import Coar from '../../Img/People/Coar.svg';
import DenimHat from '../../Img/People/DenimHat.svg';
import Top from '../../Img/People/Top.svg';
import TShirt from '../../Img/People/T-shirt.svg';
import Sunglasses from '../../Img/People/Sunglasses.svg';
import Jacket from '../../Img/People/Jacket.svg';
import DottedDress from '../../Img/People/DottedDress.svg';
import { Link } from 'react-router';
import ScrollToTop from '../../Ui/ScrollToTop';

export default function Fashion() {
  const [arrow, setArrow] = useState(false);

  const [collections, setCollections] = useState(false);

  const [page, setPage] = useState(1);

  const [open, setOpen] = useState(false)

  const [switching, setSwitching] = useState(2);

  const navigate = useNavigate();

  const handleCardClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  const [filters, setFilters] = useState({
    size: null,
    color: null,
    price: null,
  });

  const products = [
    { id: 1, title: 'Rounded Red Hat', img: RedHat, price: 8, size: ['S', 'M'], colors: ['bg-lemon', 'bg-black', 'bg-teaGreen'], items: 14 },
    { id: 2, title: 'Linen-blend Shirt', img: BlendShirt, price: 17, size: ['S', 'M', 'XL'], colors: ['bg-CoolBlue', 'bg-pastelPink', 'bg-powderGray'],  items: 26 },
    { id: 3, title: 'Long-sleeve Coat', img: Coar, price: 106, size: ['XL'], colors: ['bg-beige', 'bg-teaGreen', 'bg-navyBlue'],  items: 65 },
    { id: 4, title: 'Boxy Denim Hat', img: DenimHat, price: 25, size: ['M'], colors: ['bg-powderGray', 'bg-navyBlue', 'bg-coffee'],  items: 23 },
    { id: 5, title: 'Linen Plain Top', img: Top, price: 55, size: ['S', 'L'], colors: ['bg-teaGreen', 'bg-black', 'bg-softCyan'],  items: 356 },
    { id: 6, title: 'Oversized T-shirt', discount: 14, img: TShirt, price: 11, size: ['S', 'M'], colors: ['bg-black', 'bg-softCyan', 'bg-pinkRed'],  items: 92 },
    { id: 7, title: 'Polarised Sunglasses', img: Sunglasses, price: 18, size: ['S', 'M', 'XL'], colors: ['bg-black', 'bg-coffee', 'bg-powderGray'],  items: 52},
    { id: 8, title: 'Rockstar Jacket', img: Jacket, discount: 287,  price: 150, size: ['S', 'M', 'L', 'XL'], colors: ['bg-pastelPink', 'bg-softCyan', 'bg-black'],  items: 128 },
    { id: 9, title: 'Dotted Black Dress', img: DottedDress, price: 20, size: ['M', 'L', 'XL'], colors: ['bg-navyBlue', 'bg-black', 'bg-softCyan'],  items: 5 },
  ];

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const filteredProducts = products.filter((product) => {
    const matchesSize = !filters.size || product.size.includes(filters.size);
    const matchesColor = !filters.color || product.colors.includes(filters.color);
    const matchesPrice =
      !filters.price ||
      (filters.price[0] <= product.price && product.price <= filters.price[1]);
    return matchesSize && matchesColor && matchesPrice;
  });

  const handleClickArrow = () => {
    setArrow(!arrow);
  };

  const handleClickCollections = () => {
    setCollections(!collections);
  };
  const handleClickPage = (index) => {
    setPage(index);
  };
  const handleClickSwitching = (index) => {
    setSwitching(index);
  };
  const handleClick = () =>{
    setOpen(!open);
  };
  

  const result = products.discount ? `$${products.discount}.00` : '';

  

  return (
    <>    
      <div className='pt-[52px] container'>
        <div className='flex justify-between items-center'>
          <div className='pl-8'>
            <h3 className='text-5xl volkhov-bold'>FASCO</h3>
          </div>
          <nav className="flex items-center gap-12 text-lg mx-auto">
  <ScrollToTop />
  <Link to="/" className="link">Home</Link>
  <Link to="/" className="link">Shop</Link>
  <Link to="/" className="link">Products</Link>
  <div className="grid items-center relative" style={{ minHeight: "50px" }}>
    <div className="flex items-center">
      <span className="pr-2">Pages</span>
      <button className={open ? 'rotate-180' : ''} onClick={handleClick}>
        <img src={Arrow} alt="Toggle" />
      </button>
    </div>
    {open && (
      <div className="absolute top-full left-0 grid bg-white">
        <span className="link cursor-pointer">Page 1</span>
        <span className="link cursor-pointer">Page 2</span>
        <span className="link cursor-pointer">Page 3</span>
      </div>
    )}
  </div>
</nav>

      <div className='flex gap-4 pr-8'>
        <img src={Search} alt="" className='hover:opacity-85 duration-500 cursor-pointer'/>
        <img src={User} alt="" className='hover:opacity-85 duration-500 cursor-pointer'/>
        <img src={Star} alt="" className='hover:opacity-85 duration-500 cursor-pointer'/>
        <img src={Market} alt="" className='hover:opacity-85 duration-500 cursor-pointer'/>
      </div>
    </div>
  </div>
  <div className='grid justify-center pt-20'>
    <h1 className='flex justify-center text-black font-medium text-5xl'>Fashion</h1>
    <div className='flex items-center justify-center text-black pt-4 gap-6'><a href="" className='link'>Home</a><img src={Arrow} alt="" className='flex justify-center -rotate-90 w-3'/> <a href="" className='link'>Fashion</a></div>
  </div>
      <div className="flex">
        <div className="w-1/4 pl-8">
          <h3 className="text-black font-medium text-3xl pb-8">Filters</h3>
          <div>
            <span className="text-black text-lg font-medium">Size</span>
            <div className="grid grid-cols-5 gap-2 pt-4">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`border-[1px] rounded-lg w-[50px] h-[50px] ${
                    filters.size === size ? 'border-black text-black' : 'border-Gray'
                  } hover:border-black hover:text-black duration-500`}
                  onClick={() => handleFilterChange('size', size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="pt-6">
            <span className="text-black text-lg font-medium">Colors</span>
            <div className="grid grid-flow-col grid-rows-2 gap-2 pt-4">
              {[
                'bg-pinkRed',
                'bg-orange',
                'bg-lemon',
                'bg-lettuce',
                'bg-teaGreen',
                'bg-sky',
                'bg-blue',
                'bg-lightBlue',
                'bg-nightBlue',
                'bg-nightPurple',
                'bg-purple',
                'bg-lavander',
                'bg-pink',
                'bg-black',
              ].map((color) => (
                <button
                  key={color}
                  className={`${color} w-[40px] h-[40px] rounded-[50%] ${
                    filters.color === color ? 'border-2 border-black' : ''
                  } hover:opacity-85 duration-500`}
                  onClick={() => handleFilterChange('color', color)}
                />
              ))}
            </div>
          </div>
          <div className="pt-4">
            <span className="text-black text-lg font-medium">Prices</span>
            <div className="grid text-Gray text-xl gap-4">
              {[
                [0, 50],
                [50, 100],
                [100, 150],
                [150, 200],
                [0, 1000]
              ].map(([min, max]) => (
                <button
                  key={`${min}-${max}`}
                  className={`hover:text-black duration-500 ${
                    filters.price && filters.price[0] === min
                      ? 'text-black font-medium'
                      : ''
                  }`}
                  onClick={() => handleFilterChange('price', [min, max])}
                >
                  ${min}-${max}
                </button>
              ))}
            </div>
          </div>
          <div className="pt-4">
            <div className="flex justify-between w-1/2 items-center">
              <span className="text-black text-lg font-medium">Brands</span>
              <button
                className={arrow ? 'rotate-180' : ''}
                onClick={handleClickArrow}
              >
                <img src={Arrow} alt="Toggle brands" className="w-3" />
              </button>
            </div>
            {arrow && (
              <div className="grid grid-flow-col grid-rows-2 text-Gray pt-4">
                <span>Minimog</span>
                <span>Learts</span>
                <span>Retrolie Brook</span>
                <span>Vagabond</span>
                <span>Abby</span>
              </div>
            )}
          </div>
          <div className="pt-4">
            <div className="flex justify-between w-1/2 items-center">
              <span className="text-black text-lg font-medium">Collections</span>
              <button
                className={collections ? 'rotate-180' : ''}
                onClick={handleClickCollections}
              >
                <img src={Arrow} alt="Toggle collections" className="w-3" />
              </button>
            </div>
            {collections && (
              <div className="grid grid-flow-col grid-rows-4 gap-2 text-Gray pt-4">
                <span>All products</span>
                <span>Best sellers</span>
                <span>New arrivals</span>
                <span>Accessories</span>
              </div>
            )}
          </div>
          <div className='pt-4'>
          <span className='text-black font-medium text-lg'>Tags</span>
          <div className='grid grid-flow-col grid-rows-3 pt-4'>
            <span>Fashion</span>
            <span>Hats</span>
            <span>Sandal</span>
            <span>Belt</span>
            <span>Bags</span>
            <span>Snacker</span>
            <span>Denim</span>
            <span>Minimog</span>
            <span>Vagabond</span>
            <span>Sunglasses</span>
            <span>Beachwear</span>
          </div>
        </div>
        </div>
        <div className="w-3/4 pl-14">
        <div className={page === 1 ? 'grid grid-cols-3 gap-2 pt-6' : 'hidden'}>
        {filteredProducts.map((product) => (
          <div key={product.id} onClick={() => handleCardClick(product)} className="cursor-pointer">
            <Card
              title={product.title}
              img={product.img}
              price={`$${product.price}.00`}
              discount={product.discount ? `$${product.discount}.00` : null}
              color1={product.colors[0]}
              color2={product.colors[1]}
              color3={product.colors[2]}
              items={product.items}
            />
          </div>
        ))}

        </div>
        <div className={page === 2 ? 'flex justify-center items-center' : 'hidden'}>
            <h2 className='flex justify-center items-center text-8xl font-medium'>None</h2>
        </div>
        <div className={page === 3 ? 'flex justify-center items-center' : 'hidden'}>
              <h2 className='flex justify-center items-center text-8xl font-medium'>None</h2>
        </div>
        <div className={page === 6 ? 'flex justify-center items-center' : 'hidden'}>
              <h2 className='flex justify-center items-center text-8xl font-medium'>None</h2>
        </div>
        <div className={page === 7 ? 'flex justify-center items-center' : 'hidden'}>
              <div className='flex justify-center items-center text-8xl font-medium'>None</div>
        </div>
        <div className={page === 8 ? 'flex justify-center items-center' : 'hidden'}>
              <h2 className='flex justify-center items-center text-8xl font-medium'>None</h2>
        </div>
        <div className='pt-14'>
          <div className={`flex justify-center items-center  gap-4 ${switching === 1 ? 'hidden' : 'flex'}`}>
          <button onClick={() => handleClickPage(1)} className={`flex justify-center items-center w-[44px] h-[44px] rounded-[50%] text-lg font-medium ${page === 1 ? 'bg-beige': 'bg-none'}`}>1</button>
          <button onClick={() => handleClickPage(2)} className={`flex justify-center items-center w-[44px] h-[44px] rounded-[50%] text-lg font-medium ${page === 2 ? 'bg-beige': 'bg-none'}`}>2</button>
          <button onClick={() => handleClickPage(3)} className={`flex justify-center items-center w-[44px] h-[44px] rounded-[50%] text-lg font-medium ${page === 3 ? 'bg-beige': 'bg-none'}`}>3</button>
          <button onClick={() => handleClickSwitching(1)} className={`flex justify-center items-center w-[44px] h-[44px] rounded-[50%] text-lg font-medium ${switching === 1 ? 'bg-beige': 'bg-none'}`}>&gt;</button>
          </div>
          <div className={`flex justify-center items-center  gap-4 ${switching === 2 ? 'hidden' : 'flex'}`}>
            <button onClick={() => handleClickSwitching(2)} className={`flex justify-center items-center w-[44px] h-[44px] rounded-[50%] text-lg font-medium ${switching === 2 ? 'bg-beige': 'bg-none'}`}>&lt;</button>
            <button onClick={() => handleClickPage(6)} className={`flex justify-center items-center w-[44px] h-[44px] rounded-[50%] text-lg font-medium ${page === 6 ? 'bg-beige': 'bg-none'}`}>4</button>
            <button onClick={() => handleClickPage(7)} className={`flex justify-center items-center w-[44px] h-[44px] rounded-[50%] text-lg font-medium ${page === 7 ? 'bg-beige': 'bg-none'}`}>5</button>
            <button onClick={() => handleClickPage(8)} className={`flex justify-center items-center w-[44px] h-[44px] rounded-[50%] text-lg font-medium ${page === 8 ? 'bg-beige': 'bg-none'}`}>6</button>
          </div>
        </div>
      </div>
      </div>
        <Ad />
        <Follow />
        <Subcribe />
        <Footer />
      </>
  );
}