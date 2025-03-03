import React, { useState, useEffect } from 'react';
import { CSSTransition } from "react-transition-group";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Ad from '../Ad/Ad';
import Follow from '../Follow/Follow';
import Footer from '../Footer/Footer';
import Subcribe from '../Subcribe/Subcribe';
import ScrollToTop from '../../Ui/ScrollToTop';
import Arrow from '../../Img/Logo/Arrow.svg';
import Search from '../../Img/Logo/Search.svg';
import Market from '../../Img/Logo/Market.svg';
import Star from '../../Img/Logo/Star.svg';
import User from '../../Img/Logo/User.svg';
import product1 from '../../Img/People/product1.svg';
import product2 from '../../Img/People/product2.svg';
import product3 from '../../Img/People/product3.svg';
import product4 from '../../Img/People/product4.svg';
import product5 from '../../Img/People/product5.svg';
import eye from '../../Img/Logo/eye.svg';
import Compare from '../../Img/Logo/Compare.svg';
import Question from '../../Img/Logo/Question.svg';
import Share from '../../Img/Logo/Share.svg';
import Delivery from '../../Img/Logo/Delivery.svg';
import Shipping from '../../Img/Logo/Shipping.svg';
import Cards from '../../Img/Logo/Cards.svg';

export default function Product() {

    const [check, setCheck] = useState(false);

    const [cart, setCart] = useState(false); 

    const [count, setCount] = useState(1);

    const [modalCount, setModalCount] = useState(count);

    const [photo, setPhoto] = useState(0);

    const [time, setTime] = useState(5 * 24 * 60 * 60 * 1000);

    const [randomViewers, setRandomViewers] = useState(0);

    const [clickStar , setClickStar] = useState(false);

    const location = useLocation();

    const navigate = useNavigate();

    const product = location.state;

    const [index, setIndex] = useState(0);

    const [selectedSize, setSelectedSize] = useState(product.size[0]);

    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
        if (!product) {
            navigate('/shop', { replace: true }); 
        }
    }, [product, navigate]);

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleCheckout = () => {
        navigate("/cart", { state: product });
      };
    

    const calculatePercentageDecrease = (initialValue, finalValue) => {
        if (!initialValue || !finalValue) return 0;
        const percentageDecrease = Math.round(((initialValue - finalValue) / initialValue) * 100);
        return parseInt(percentageDecrease, 10);
    };

    if (!product) {
        return null;
    }

    const result = product.discount && product.price
        ? calculatePercentageDecrease(product.discount, product.price)
        : null;


    useEffect(() => {
        const min = 10;
        const max = 150;
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomViewers(random);
      }, []);
    

    const handleClickStar = (e) => {
        e.preventDefault()
        setClickStar(!clickStar)
    }
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTime((prev) => Math.max(prev - 1000, 0));
        }, 1000);
        return () => clearInterval(timer);
      }, []);

      useEffect(() => {
        if (cart) {
            setModalCount(count);
        }
    }, [cart, count]);


    
      const calculateValue = (remainingItems, initialStock) => {
        if (!remainingItems || !initialStock) return 0;
        const percentage = Math.round(((initialStock - remainingItems) / initialStock) * 100);
        return Math.max(0, Math.min(percentage, 100));
    };

    const resultValue = product.items && 500
        ? calculateValue(product.items, 500)
        : 0;


    const handleClickButton = (size, sizeIndex) => {
        setIndex(sizeIndex); 
        setSelectedSize(size); 
      };
     
      const handleActive = (index) => {
        setActiveIndex(index); 
      };

    const updateCount = (delta) => {
        setCount((prev) => Math.max(1, Math.min(prev + delta, product.items)));
    };

    const handleClickPhoto = (index) => {
        setPhoto(index); 
    };
    
    const handleClickToCart = () =>{
        setCart(!cart);
    };
    
    const handleModalIncrement = () => {
        setModalCount((prev) => Math.min(prev + 1, product.items));
    };
    
    const handleModalDecrement = () => {
        setModalCount((prev) => Math.max(1, prev - 1));
    };

    const formatNumber = (num) => num.toString().padStart(2, '0');
    
    const resultColor = (color) => {
        if(activeIndex == 1) {
            color = product.colors[0];
        }
        if(activeIndex == 2) {
            color = product.colors[1];
        }
        if(activeIndex == 3) {
            color = product.colors[2];
        }
        const parts = color.split('-');
        const colorClass = parts.slice(1).join('-');
        return colorClass.toLowerCase();
    };

    const fullPrice = () => {
        let price = product.price;
        let result = price * modalCount;
        if (check) {
            result += 10;
        }
        return result;
    };

    return (
        <>
        <main className='pt-[52px] container'>
            <header className="flex justify-between items-center">
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
            <section className="flex pt-14">
                <aside className="flex items-center pl-8">
                    <div className="grid items-center gap-3">
                        <img src={product1} alt="" className="w-[58px] h-[77px] hover:scale-105 duration-500" onClick={() => handleClickPhoto(2)} />
                        <img src={product.img} alt={product.title} className={`w-[58px] h-[77px] hover:scale-105 duration-500`} onClick={() => handleClickPhoto(1)}/>
                        <img src={product2} alt="" className="w-[58px] h-[77px] hover:scale-105 duration-500" onClick={() => handleClickPhoto(3)}/>
                        <img src={product3} alt="" className="w-[58px] h-[77px] hover:scale-105 duration-500" onClick={() => handleClickPhoto(4)} />
                        <img src={product4} alt="" className="w-[58px] h-[77px] hover:scale-105 duration-500" onClick={() => handleClickPhoto(5)}/>
                        <img src={product5} alt="" className="w-[58px] h-[77px] hover:scale-105 duration-500" onClick={() => handleClickPhoto(6)}/>
                    </div>
                    <div className="pl-4">
                        <img src={product.img} alt={product.title} className={`h-[520px] hover:scale-105 duration-500`}  onClick={() => handleClickPhoto(1)}/>
                    </div>
                    {photo === 1 && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                            onClick={() => handleClickPhoto(0)}
                        >
                            <img src={product.img} alt={product.title} className="max-h-full max-w-full" />
                        </div>
                    )}
                    {photo === 2 && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                            onClick={() => handleClickPhoto(0)}
                        >
                            <img src={product1} alt={``} className="max-h-full max-w-full" />
                        </div>
                    )}
                    {photo === 3 && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                            onClick={() => handleClickPhoto(0)}
                        >
                            <img src={product2} alt={''} className="max-h-full max-w-full" />
                        </div>
                    )}
                    {photo === 4 && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                            onClick={() => handleClickPhoto(0)}
                        >
                            <img src={product3} alt={''} className="max-h-full max-w-full" />
                        </div>
                    )}
                    {photo === 5 && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                            onClick={() => handleClickPhoto(0)}
                        >
                            <img src={product4} alt={''} className="max-h-full max-w-full" />
                        </div>
                    )}
                    {photo === 6 && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
                            onClick={() => handleClickPhoto(0)}
                        >
                            <img src={product5} alt={''} className="max-h-full max-w-full" />
                        </div>
                    )}
                </aside>
                <div className="pl-14">
                    <span className="text-lg volkhov text-midNight">FASCO</span>
                    <div className="flex items-center justify-between">
                        <h3 className="text-4xl font-medium pr-6">{product.title}</h3>
                        <button className=" w-[45px] h-[45px] rounded-full border border-Gray" onClick={handleClickStar}>
                            <span className={`text-2xl ${clickStar ? 'text-yellow' : ''}`}>★</span>
                        </button>
                    </div>
                    <div className="flex items-center">
                        {Array(5).fill().map((_, starIndex) => (
                            <span key={`star-${starIndex}`} className="text-black text-xl">★</span>
                        ))}
                        <span className="pl-2">(3)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <h4 className="text-2xl font-medium">{`$${product.price}.00`}</h4>
                        {result !== null && (
                            <>
                                <span className="text-lg line-through text-Gray">{`$${product.discount}.00`}</span>
                                <button className="hover:opacity-85 duration-500 bg-red px-2 py-1 rounded-xl text-white text-lg font-medium">
                                    Save {result}%
                                </button>
                            </>
                        )}
                    </div>
                    <div className='flex items-center pt-4 pb-4'><img src={eye} alt="" className='pr-4'/><span className='text-lg text-Gray'>{randomViewers} people are viewing this right now</span></div>
                    <div className='flex items-center justify-between text-xl font-medium pt-2 pb-2 pl-2 pr-2 rounded-lg bg-pastelPink text-coralPink border-softPastelPink border-2'>
                        <h3 className='pr-2'>Hurry up! Sale ends in:</h3>
                        <div className='flex items-center'>
                            <span className='pr-2'>{String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0')}: </span>
                            <span className='pr-2'>{String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0')}: </span>
                            <span className='pr-2'>{String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')}: </span>
                            <span className='pr-2'>{String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0')}</span>
                        </div>
                    </div>
                    <h4 className='pt-2'>Only <span className='font-medium'>{product.items}</span>  item(s) left in stock!</h4>
                    <div className="relative w-[370px] rounded-lg bg-red h-[5px] overflow-hidden">
                        <div
                            className="absolute bottom-0 h-[5px] bg-Gray right-0"
                            style={{ width: `${resultValue}%` }}
                        ></div>
                    </div>
                    <h4 className='pt-4 text-black text-lg font-medium'>
                        {selectedSize ? `Size: ${selectedSize}` : `Size: ${selectedSize}`}
                    </h4>
                    <div className="flex gap-4 pt-4">
                        {product.size &&
                            product.size.map((availableSize, sizeIndex) => (
                            <button
                                key={sizeIndex}
                                className={`${
                                    index === sizeIndex ? 'text-white bg-black' : ''
                                    } text-lg font-medium w-[45px] h-[45px] rounded-lg`}
                                    onClick={() => handleClickButton(availableSize, sizeIndex)}
                            >
                                {availableSize}
                            </button>
                        ))}
                    </div>
                    <div className="flex gap-2 pt-4">
                        <button
                            onClick={() => handleActive(1)}
                            className={`${product.colors[0]} ${activeIndex === 1 ? "ring-offset-4 ring-1 ring-black" : "ring-0"} w-[30px] h-[30px] rounded-full`}
                        ></button>
                        <button
                            onClick={() => handleActive(2)}
                            className={`${product.colors[1]} ${activeIndex === 2 ? "ring-offset-4 ring-1 ring-black" : "ring-0"} w-[30px] h-[30px] rounded-full`}
                        ></button>
                        <button
                            onClick={() => handleActive(3)}
                            className={`${product.colors[2]} ${activeIndex === 3 ? "ring-offset-4 ring-1 ring-black" : "ring-0"} w-[30px] h-[30px] rounded-full`}
                        ></button>
                    </div>
                    <h4 className='text-lg text-black font-medium pb-2 pt-2'>Quantity</h4>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-6'>
                            <button className='text-2xl' onClick={() => updateCount(-1)}>-</button><span className='text-lg text-black font-medium'>{count}</span><button className='text-2xl' onClick={() => updateCount(1)}>+</button>
                        </div>
                        <button className='hover:bg-black hover:text-white duration-500 border-[2px] rounded-lg pt-2 pb-2 pr-[80px] pl-[80px] border-black text-lg font-medium text-black' onClick={handleClickToCart}>Add to cart</button>
                    </div>
                    <div className='flex items-center gap-6 pt-4'>
                        <div className='flex items-center gap-2 text-lg font-medium text-black hover:text-midNight duration-500 cursor-pointer'><img src={Compare} alt="" /><span>Compare</span></div>
                        <div className='flex items-center gap-2 text-lg font-medium text-black hover:text-midNight duration-500 cursor-pointer'><img src={Question} alt="" /><span>Ask a question</span></div>
                        <div className='flex items-center gap-2 text-lg font-medium text-black hover:text-midNight duration-500 cursor-pointer'><img src={Share} alt="" /><span>Share</span></div>
                    </div>
                    <div className='flex items-center gap-2 text-black pt-4'>
                        <img src={Delivery} alt="" />
                        <div className='flex items-center text-lg gap-2'><h5 className='font-medium'>Estimated Delivery:</h5><span>Jul 30 - Aug 03</span></div>
                    </div>
                    <div className='flex items-center gap-2 text-black pt-4'>
                        <img src={Shipping} alt="" />
                        <div className='flex items-center text-lg gap-2'><h5 className='font-medium'>Free Shipping & Returns:</h5><span>On all orders over $75</span></div>
                    </div>
                    <div className='grid justify-center items-center'>
                        <div className='flex justify-center items-center pt-8'>
                            <img src={Cards} alt="" />
                        </div>
                        <h5 className='flex justify-center text-lg text-black pt-4 font-medium'>Guarantee safe & secure checkout</h5>
                    </div>
                </div>
            </section>
        </main>
    <CSSTransition 
        in={cart}
        timeout={300}
        classNames="cart"
        unmountOnExit
    >
        {cart == true ? 
            <div className='fixed inset-0 bg-midNight bg-opacity-70 z-50 flex items-center justify-center'>
                <div className='fixed top-0 right-0 bg-white h-full w-2/4 pl-12 pr-12 pt-1  overflow-y-auto'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-4xl text-black font-medium pb-4'>Shopping Cart</h3>
                        <button className='flex items-center' onClick={() => setCart(false)}>
                            <div className='h-6 w-[2px] bg-black rotate-[43deg]'></div>
                            <div className='h-6 w-[2px] bg-black -rotate-[43deg]'></div>
                        </button>
                    </div>
                    <div className='flex items-center text-2xl gap-2'><span>Buy</span><h4 className='text-black font-medium'>$122</h4>More and Get <h4 className='text-black font-medium'>Free Shipping</h4></div>
                    <div className='flex pt-8 gap-6'>
                        <img src={product.img} alt="" className='w-1/2 hover:scale-105 duration-500'/>
                        <div>
                            <h4 className='text-black font-medium text-2xl pt-4'>{product.title}</h4>
                            <div className='text-2xl pb-2 pt-4'>Color: {resultColor()}</div>
                            <span className='text-2xl text-black font-medium'>${product.price}.00</span>
                            <div className="flex items-center gap-6 pt-12">
                                <button className="text-4xl text-black" onClick={handleModalDecrement}>-</button>
                                <span className="text-3xl  font-medium">{formatNumber(modalCount)}</span>
                                <button className="text-4xl text-black" onClick={handleModalIncrement}>+</button>
                            </div>
                        </div>
                    </div>
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
        : <></>}
    </CSSTransition>
        <div className='z-0'><Ad /></div>
        <Follow />
        <Subcribe />
        <Footer />
        </>
    );
}