import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList({ setShowProductList }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  // 3 distinct categories with at least 6 unique houseplants each
  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night and removes toxins, enhancing indoor air quality.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Resilient and easy to grow, effectively filters formaldehyde and xylene.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Graceful white blooms that absorb mold spores and airborne chemicals.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Lush arching fronds that boost indoor humidity and filter pollutants.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Broad glossy burgundy leaves, exceptionally sturdy and air-cleaning.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Medicinal succulent that purifies air and provides natural skin-soothing gel.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1000&auto=format&fit=crop',
          description: 'Soothing floral scent widely celebrated for stress relief and relaxation.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1000&auto=format&fit=crop',
          description: 'Sweet intoxicating fragrance that perfumes rooms and promotes restful sleep.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Woody aromatic herb that sharpens focus and adds flavor to culinary dishes.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description: 'Crisp refreshing scent, ideal for home herbal teas and kitchen gardens.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description: 'Bright citrus aroma known to calm nerves and uplift daily mood.',
          cost: '$14',
        },
        {
          name: 'Chamomile',
          image: 'https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg',
          description: 'Delicate daisy-like flowers with sweet apple scent, perfect for relaxation.',
          cost: '$15',
        },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=600&auto=format&fit=crop',
          description: 'Virtually indestructible with waxy green foliage; tolerates deep shade.',
          cost: '$25',
        },
        {
          name: 'Golden Pothos',
          image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
          description: 'Fast-growing trailing vine with variegated leaves; thrives on minimal care.',
          cost: '$10',
        },
        {
          name: 'Jade Plant',
          image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
          description: 'Traditional symbol of prosperity with plump succulent jade-green pads.',
          cost: '$15',
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
          description: 'Extremely resilient foliage plant that endures low light and irregular watering.',
          cost: '$20',
        },
        {
          name: 'Haworthia Zebra',
          image: 'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg',
          description: 'Compact miniature succulent with striking white horizontal stripes.',
          cost: '$16',
        },
        {
          name: 'Aglaonema',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Colorful patterned leaves that brighten dim corners with almost zero effort.',
          cost: '$22',
        },
      ],
    },
  ];

  // Add to cart handler
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true, // Disable button and update UI
    }));
  };

  // Navigation handlers
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (setShowProductList) {
      setShowProductList(false);
    }
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  // Calculate total count of items in cart dynamically
  const totalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div>
      {/* Shared Navigation Bar across Product List & Cart */}
      <nav className="navbar">
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt="Paradise Nursery Logo"
            />
            <a href="/" onClick={handleHomeClick} className="brand-link">
              <div>
                <h3 className="brand-title">Paradise Nursery</h3>
                <i className="brand-tagline">Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>

        <div className="nav-menu">
          <div>
            <a href="#home" onClick={handleHomeClick} className="nav-link">
              Home
            </a>
          </div>
          <div>
            <a href="#plants" onClick={handlePlantsClick} className="nav-link">
              Plants
            </a>
          </div>
          <div>
            <a href="#cart" onClick={handleCartClick} className="nav-link cart-link">
              <span className="cart_quantity_count">{totalItems()}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                height="44"
                width="44"
                className="cart-icon"
              >
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="80" cy="216" r="16" fill="#ffffff"></circle>
                <circle cx="184" cy="216" r="16" fill="#ffffff"></circle>
                <path
                  d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Main View: Product Grid OR Shopping Cart */}
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((categoryObj, catIdx) => (
            <div key={catIdx} className="category-section">
              <h2 className="category-heading">{categoryObj.category}</h2>
              <div className="product-list">
                {categoryObj.plants.map((plant, plantIdx) => {
                  const isItemInCart = cart.some((item) => item.name === plant.name);
                  const isAdded = addedToCart[plant.name] || isItemInCart;

                  return (
                    <div className="product-card" key={plantIdx}>
                      <div className="product-image-wrapper">
                        <img
                          className="product-image"
                          src={plant.image}
                          alt={plant.name}
                          loading="lazy"
                        />
                      </div>
                      <div className="product-title">{plant.name}</div>
                      <div className="product-description">{plant.description}</div>
                      <div className="product-price">{plant.cost}</div>

                      <button
                        className={`product-button ${isAdded ? 'added-to-cart' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem
          onContinueShopping={handleContinueShopping}
          setAddedToCart={setAddedToCart}
        />
      )}
    </div>
  );
}

export default ProductList;
