import React, { useEffect, useState } from 'react'
import ScrollToTop from '../../Ui/ScrollToTop';
import Arrow from '../../Img/Logo/Arrow.svg';
import Search from '../../Img/Logo/Search.svg';
import Market from '../../Img/Logo/Market.svg';
import Star from '../../Img/Logo/Star.svg';
import User from '../../Img/Logo/User.svg';
import { Link, useLocation, useNavigate } from 'react-router';
import Subscribe from '../Subcribe/Subcribe';
import Footer from '../Footer/Footer';

export default function Cart() {

    const [count, setCount] = useState(1);
    
    const [check, setCheck] = useState(false);
    

    const [open, setOpen] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    const product = location.state;

    const handleClick = () => {
        setOpen(!open);
    };

     useEffect(() => {
        if (!product) {
        navigate("/shop", { replace: true });
        }
    }, [product, navigate]);

    if (!product) {
        return null;
    }

    const handleModalIncrement = () => {
        setCount((prev) => Math.min(prev + 1, product.items));
    };
    
    const handleModalDecrement = () => {
        setCount((prev) => Math.max(1, prev - 1));
    };

    const handleCheckout = () => {
        navigate("/cart", { state: product });
      };

    const formatNumber = (num) => num.toString().padStart(2, '0');

    const fullPrice = () => {
        let price = product.price;
        let result = price * count;
        if (check) {
            result += 10;
        }
        return result;
    };

  return (
    <div>
        <header className="pt-[52px] flex justify-between items-center">
            <div className="pl-8">
                <h3 className="text-5xl volkhov-bold">FASCO</h3>
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
                <div className="flex gap-4 pr-8">
                    <img src={Search} alt="Search" className="hover:opacity-85 duration-500 cursor-pointer" />
                    <img src={User} alt="User" className="hover:opacity-85 duration-500 cursor-pointer" />
                    <img src={Star} alt="Star" className="hover:opacity-85 duration-500 cursor-pointer" />
                    <img src={Market} alt="Market" className="hover:opacity-85 duration-500 cursor-pointer" />
                </div>
            </header>
            <section>
                <div className='grid justify-center pt-20'>
                    <h1 className='flex justify-center text-black font-medium text-5xl'>Shopping Cart</h1>
                    <div className='flex items-center justify-center text-black pt-4 gap-6'><a href="" className='link'>Home</a><img src={Arrow} alt="" className='flex justify-center -rotate-90 w-3'/> <a href="" className='link'>Your Shopping Cart</a></div>
                </div>
                <div className='pt-14 pr-8 pl-8'>
                    <div className=' text-black font-medium text-lg flex justify-between'>
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Total</span>
                    </div>
                    <div className='pt-14'>
                        <div className='flex justify-between '>
                            <div className='grid gap-4 text-xl text-black font-medium w-[25%]'>
                                <img src={product.img} alt="" />
                                <div>
                                    <h3 className='text-black text-xl font-medium'>{product.title}</h3>
                                </div>
                            </div>
                            <span className='w-[25%] text-black text-xl font-medium'>{product.price}.00$</span>
                            <div className="w-[25%] gap-6">
                                <button className="text-2xl pr-2 text-black" onClick={handleModalDecrement}>-</button>
                                <span className="text-2xl font-medium">{formatNumber(count)}</span>
                                <button className="text-2xl pl-2 text-black" onClick={handleModalIncrement}>+</button>
                            </div>
                            <span className='text-black text-xl font-medium'>${fullPrice()}.00</span>
                        </div>
                    </div>
                    <div className='grid justify-evenly'>
                    <div className='flex items-center text-3xl font-medium gap-2 pt-[120px]'>
                        <input type="checkbox" name="" id="" className='w-[24px] h-[24px]' checked={check} onChange={() => setCheck(!check)} />
                        <div className='flex items-center gap-2'>For<span className='text-black'>$10.00</span>Please Wrap The Product</div>
                    </div>
                    <div className='flex items-center justify-between pt-14 text-2xl text-black font-medium'>
                        <span>
                            Subtotal
                        </span>
                        <span>${fullPrice()}.00</span>
                    </div>
                    <button onClick={handleCheckout} className='w-full mt-4 bg-black text-xl text-white pt-4 pb-4 rounded-lg hover:opacity-80 duration-500'><Link to={'/cart'}>Checkout</Link></button>
                    <span className='flex items-center justify-center pt-4 text-xl text-black underline cursor-pointer hover:text-midNight duration-500 pb-4'>View Cart</span>
                </div>
                </div>
            </section>
            <Subscribe />
            <Footer />
    </div>
  )
}
