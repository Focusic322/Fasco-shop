import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SDress from '../../Img/People/SDress.svg';
import WDress from '../../Img/People/WDress.svg';
import LDress from '../../Img/People/LDress.svg';
import CDress from '../../Img/People/CDress.svg';
import WShirt from '../../Img/People/WShirt.svg';
import FSweater from '../../Img/People/FSweater.svg';
import Button from '../../Ui/Button';
import Stars from '../../Ui/Stars';

export default function Arrivals() {
  const [switchTab, setSwitchTab] = useState(2);
  const [blockStyle, setBlockStyle] = useState({});
  const tabRefs = useRef([]);

  const allProducts = [
    { id: 1, image: SDress, title: 'Shiny Dress', price: '$95.50' },
    { id: 2, image: WDress, title: 'White Dress', price: '$75.50' },
    { id: 3, image: LDress, title: 'Long Dress', price: '$120.00' },
    { id: 4, image: CDress, title: 'Colorful Dress', price: '$89.90' },
    { id: 5, image: FSweater, title: 'Full Sweater', price: '$105.00' },
    { id: 6, image: WShirt, title: 'White Shirt', price: '$65.50' },
    { id: 7, image: SDress, title: 'Another Dress', price: '$95.50' },
    { id: 8, image: WDress, title: 'Elegant Dress', price: '$85.50' },
    { id: 9, image: LDress, title: 'Simple Dress', price: '$70.00' },
    { id: 10, image: CDress, title: 'Vibrant Dress', price: '$110.90' },
    { id: 11, image: FSweater, title: 'Cozy Sweater', price: '$130.00' },
    { id: 12, image: WShirt, title: 'Classic Shirt', price: '$60.50' },
  ];

  const [visibleProducts, setVisibleProducts] = useState(6);
  const [extraVisible, setExtraVisible] = useState(false);

  const toggleExtraCards = () => {
    setExtraVisible(!extraVisible);
    setVisibleProducts(extraVisible ? 6 : 12);
  };

  const switchTabs = (index) => {
    setSwitchTab(index);
    const tab = tabRefs.current[index - 1];
    if (tab) {
      setBlockStyle({
        left: tab.offsetLeft,
        top: tab.offsetTop,
        width: tab.offsetWidth,
        height: tab.offsetHeight,
      });
    }
  };

  useEffect(() => {
    switchTabs(switchTab);
  }, []);

  const tabs = [
    'Men’s Fashion',
    'Women’s Fashion',
    'Women Accessories',
    'Men Accessories',
    'Discount Deals',
  ];

  return (
    <div className="pt-12">
      <div className="grid justify-center">
        <h2 className="flex justify-center text-5xl font-medium pb-4">New Arrivals</h2>
        <span className="flex justify-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
          <br />
          ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
        </span>
      </div>
      <div className="relative">
        <ul className="flex justify-around items-center pt-14 relative">
          <div
            className="absolute bg-black rounded-lg text-white transition-all duration-500"
            style={{ ...blockStyle }}
          ></div>
          {tabs.map((label, index) => (
            <li
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`z-10 pt-3 pb-3 pr-12 pl-12 rounded-lg cursor-pointer hover:opacity-85 ${
                switchTab === index + 1 ? 'text-white' : 'text-gray-700'
              } transition duration-300`}
              onClick={() => switchTabs(index + 1)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center pt-8">
        <div className={switchTab === 2 ? 'flex' : 'hidden'}>
          <TransitionGroup className="grid grid-cols-3 gap-14">
          {allProducts.slice(0, visibleProducts).map((product) => (
            <CSSTransition key={product.id} timeout={500} classNames="fade">
              <div className="shadow-2xl shadow-lightGray w-[386px] pl-5 pt-10 rounded-xl">
                <img src={product.image} alt="" className="pb-4 hover:scale-105 duration-500" />
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium">{product.title}</h3>
                  <span className="pr-8">
                    <Stars />
                  </span>
                </div>
                <div className="text-lg text-Gray">AI Karam</div>
                <span className="text-sm font-semibold">(4.1k) Customer Reviews</span>
                <div className="flex justify-between items-center pt-4 pb-6">
                  <h4 className="text-2xl font-medium">{product.price}</h4>
                  <span className="pr-4 text-sm text-red">Almost Sold Out</span>
                </div>
              </div>
            </CSSTransition>
          ))}
          </TransitionGroup>
        </div>
        <div className={switchTab === 1 ? 'flex' : 'hidden'}>
            <h2 className='text-6xl font-bold'>Empty</h2>
        </div>
        <div className={switchTab === 3? 'flex' : 'hidden'}>
            <h2 className='text-6xl font-bold'>Empty</h2>
        </div>
        <div className={switchTab === 4 ? 'flex' : 'hidden'}>
            <h2 className='text-6xl font-bold'>Empty</h2>
        </div>
        <div className={switchTab === 5 ? 'flex' : 'hidden'}>
            <h2 className='text-6xl font-bold'>Empty</h2>
        </div>
      </div>

      <div className="flex justify-center pt-[50px]">
        <Button
          title={extraVisible ? 'Hide' : 'Show More'}
          onClick={toggleExtraCards}
        />
      </div>
    </div>
  );
}
