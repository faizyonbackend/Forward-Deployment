/* ========================================
   AMAZON CLONE - MAIN JAVASCRIPT
   ======================================== */

// Product Data
const products = {
    electronics: [
        { id: 1, name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones", price: 24990, originalPrice: 34990, rating: 4.5, reviews: 12843, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", badge: "deal", prime: true, category: "electronics" },
        { id: 2, name: "Apple iPhone 15 Pro (128GB) - Natural Titanium", price: 134900, originalPrice: 134900, rating: 4.7, reviews: 8921, image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=80", badge: "new", prime: true, category: "electronics" },
        { id: 3, name: "Samsung 55\" 4K Smart TV (UA55CU7000)", price: 48990, originalPrice: 72990, rating: 4.3, reviews: 5632, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80", badge: "deal", prime: true, category: "electronics" },
        { id: 4, name: "MacBook Air M2 Chip (13.6\", 8GB/256GB)", price: 99900, originalPrice: 114900, rating: 4.8, reviews: 4128, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80", badge: "deal", prime: true, category: "electronics" },
        { id: 5, name: "boAt Airdopes 141 ANC TWS Earbuds", price: 1799, originalPrice: 3990, rating: 4.2, reviews: 45210, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80", badge: "deal", prime: true, category: "electronics" },
        { id: 6, name: "OnePlus 12R 5G (16GB/256GB) - Iron Gray", price: 39999, originalPrice: 42999, rating: 4.4, reviews: 3210, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", badge: "limited", prime: true, category: "electronics" },
        { id: 7, name: "JBL Flip 6 Portable Bluetooth Speaker", price: 9999, originalPrice: 13999, rating: 4.6, reviews: 8743, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80", badge: "deal", prime: true, category: "electronics" },
        { id: 8, name: "Dell XPS 13 Plus (Intel i7, 16GB/512GB)", price: 118990, originalPrice: 139990, rating: 4.5, reviews: 1876, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80", badge: "", prime: true, category: "electronics" }
    ],
    fashion: [
        { id: 9, name: "Levi's Men's 511 Slim Fit Jeans", price: 2499, originalPrice: 3999, rating: 4.4, reviews: 15620, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80", badge: "deal", prime: true, category: "fashion" },
        { id: 10, name: "Nike Air Max 270 Running Shoes", price: 8995, originalPrice: 12995, rating: 4.6, reviews: 23410, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", badge: "deal", prime: true, category: "fashion" },
        { id: 11, name: "Zara Women's Oversized Blazer", price: 3590, originalPrice: 4990, rating: 4.3, reviews: 8721, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80", badge: "", prime: true, category: "fashion" },
        { id: 12, name: "Adidas Originals Hoodie", price: 4499, originalPrice: 5999, rating: 4.5, reviews: 12340, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80", badge: "deal", prime: true, category: "fashion" },
        { id: 13, name: "Ray-Ban Classic Aviator Sunglasses", price: 12990, originalPrice: 16990, rating: 4.7, reviews: 5621, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80", badge: "new", prime: true, category: "fashion" },
        { id: 14, name: "Puma RS-X Sneakers", price: 6499, originalPrice: 8999, rating: 4.4, reviews: 9876, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80", badge: "deal", prime: true, category: "fashion" },
        { id: 15, name: "H&M Cotton Blend T-Shirt Pack (3pcs)", price: 799, originalPrice: 1299, rating: 4.2, reviews: 34210, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80", badge: "deal", prime: false, category: "fashion" },
        { id: 16, name: "Fossil Gen 6 Smartwatch", price: 18995, originalPrice: 24995, rating: 4.3, reviews: 4321, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", badge: "limited", prime: true, category: "fashion" }
    ],
    home: [
        { id: 17, name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker", price: 8999, originalPrice: 12999, rating: 4.7, reviews: 28940, image: "https://images.unsplash.com/photo-1584990353308-2c55c95b4b6e?w=400&q=80", badge: "deal", prime: true, category: "home" },
        { id: 18, name: "Dyson V15 Detect Cordless Vacuum", price: 52990, originalPrice: 62900, rating: 4.6, reviews: 12340, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", badge: "", prime: true, category: "home" },
        { id: 19, name: "Philips Hue White & Color Ambiance Starter Kit", price: 12999, originalPrice: 16999, rating: 4.5, reviews: 8721, image: "https://images.unsplash.com/photo-1558002038-1055e091b23b?w=400&q=80", badge: "deal", prime: true, category: "home" },
        { id: 20, name: "Cuisinart 12-Piece Knife Set with Block", price: 4999, originalPrice: 7999, rating: 4.4, reviews: 6543, image: "https://images.unsplash.com/photo-1593618998160-e34019e1d8b4?w=400&q=80", badge: "deal", prime: true, category: "home" },
        { id: 21, name: "Nest Learning Thermostat (3rd Gen)", price: 19999, originalPrice: 24999, rating: 4.5, reviews: 5432, image: "https://images.unsplash.com/photo-1558002038-10559091b23b?w=400&q=80", badge: "", prime: true, category: "home" },
        { id: 22, name: "KitchenAid Stand Mixer (4.5 Qt)", price: 34999, originalPrice: 42999, rating: 4.8, reviews: 18765, image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&q=80", badge: "new", prime: true, category: "home" },
        { id: 23, name: "Weighted Blanket (15 lbs)", price: 3499, originalPrice: 4999, rating: 4.4, reviews: 12340, image: "https://images.unsplash.com/photo-1584100936595-c0654b55b4b4?w=400&q=80", badge: "deal", prime: true, category: "home" },
        { id: 24, name: "Robot Vacuum Cleaner with Mapping", price: 18999, originalPrice: 29999, rating: 4.3, reviews: 8765, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", badge: "limited", prime: true, category: "home" }
    ],
    bestsellers: [
        { id: 25, name: "Fire TV Stick 4K Max", price: 3999, originalPrice: 5999, rating: 4.6, reviews: 89210, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80", badge: "deal", prime: true, category: "electronics" },
        { id: 26, name: "Echo Dot (5th Gen) Smart Speaker", price: 4499, originalPrice: 5499, rating: 4.5, reviews: 123450, image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=400&q=80", badge: "deal", prime: true, category: "electronics" },
        { id: 27, name: "Kindle Paperwhite (16GB)", price: 13999, originalPrice: 14999, rating: 4.7, reviews: 56780, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80", badge: "", prime: true, category: "electronics" },
        { id: 28, name: "Apple AirPods Pro (2nd Gen)", price: 22900, originalPrice: 26900, rating: 4.8, reviews: 78920, image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400&q=80", badge: "deal", prime: true, category: "electronics" },
        { id: 29, name: "Samsung Galaxy Watch 6", price: 26999, originalPrice: 31999, rating: 4.4, reviews: 34210, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", badge: "", prime: true, category: "electronics" },
        { id: 30, name: "Instant Pot Duo 7-in-1", price: 8999, originalPrice: 12999, rating: 4.7, reviews: 28940, image: "https://images.unsplash.com/photo-1584990353308-2c55c95b4b6e?w=400&q=80", badge: "deal", prime: true, category: "home" }
    ]
};

// All products flat array
const allProducts = [...products.electronics, ...products.fashion, ...products.home, ...products.bestsellers];

// State
let cart = JSON.parse(localStorage.getItem('amazonCloneCart')) || [];
let currentSlide = 0;
let slideInterval;
let dealTimeRemaining = 23 * 3600 + 45 * 60 + 12; // 23:45:12 in seconds

// DOM Elements
const elements = {};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    cacheElements();
    initHeroSlider();
    initDealTimer();
    renderProducts();
    renderBestsellers();
    updateCartUI();
    initEventListeners();
    initBackToTop();
    initSearch();
    initMobileNav();
    initCategoryDrawer();
});

// Cache DOM elements
function cacheElements() {
    elements.heroSlider = document.querySelector('.hero-slider');
    elements.slides = document.querySelectorAll('.slide');
    elements.sliderDots = document.querySelector('.slider-dots');
    elements.prevBtn = document.querySelector('.slider-btn.prev');
    elements.nextBtn = document.querySelector('.slider-btn.next');
    elements.dealTimer = document.getElementById('dealTimer');
    elements.electronicsGrid = document.getElementById('electronicsGrid');
    elements.fashionGrid = document.getElementById('fashionGrid');
    elements.homeGrid = document.getElementById('homeGrid');
    elements.bestsellersTrack = document.getElementById('bestsellersTrack');
    elements.cartBtn = document.querySelector('.nav-item.cart');
    elements.cartDropdown = document.querySelector('.cart-dropdown');
    elements.cartCount = document.querySelector('.cart-count');
    elements.cartItems = document.querySelector('.cart-items');
    elements.cartEmpty = document.querySelector('.cart-empty');
    elements.cartFooter = document.querySelector('.cart-footer');
    elements.subtotalAmount = document.querySelector('.subtotal-amount');
    elements.continueShopping = document.querySelector('.continue-shopping');
    elements.checkoutBtn = document.querySelector('.checkout-btn');
    elements.backToTop = document.getElementById('backToTop');
    elements.toastContainer = document.getElementById('toastContainer');
    elements.quickViewModal = document.getElementById('quickViewModal');
    elements.modalBody = document.getElementById('modalBody');
    elements.modalClose = document.querySelector('.modal-close');
    elements.navToggle = document.querySelector('.nav-toggle');
    elements.navMenu = document.querySelector('.nav-menu');
    elements.categoryDrawer = document.getElementById('categoryDrawer');
    elements.drawerOverlay = document.getElementById('drawerOverlay');
    elements.drawerClose = document.querySelector('.drawer-close');
    elements.searchInput = document.querySelector('.search-input');
    elements.searchCategory = document.querySelector('.search-category');
    elements.searchSuggestions = document.querySelector('.search-suggestions');
    elements.accountBtn = document.querySelector('.nav-item.account');
}

// ========================================
// HERO SLIDER
// ========================================
function initHeroSlider() {
    const slides = elements.slides;
    const dotsContainer = elements.sliderDots;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Slide ${index + 1}`);
        dot.setAttribute('aria-selected', index === 0);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    elements.dots = document.querySelectorAll('.slider-dot');
    
    // Event listeners
    elements.prevBtn.addEventListener('click', prevSlide);
    elements.nextBtn.addEventListener('click', nextSlide);
    
    // Auto slide
    startSlideInterval();
    
    // Pause on hover
    elements.heroSlider.addEventListener('mouseenter', stopSlideInterval);
    elements.heroSlider.addEventListener('mouseleave', startSlideInterval);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}

function goToSlide(index) {
    const slides = elements.slides;
    const dots = elements.dots;
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    dots[currentSlide].setAttribute('aria-selected', 'false');
    
    currentSlide = (index + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    dots[currentSlide].setAttribute('aria-selected', 'true');
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startSlideInterval() {
    stopSlideInterval();
    slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideInterval() {
    clearInterval(slideInterval);
}

// ========================================
// DEAL TIMER
// ========================================
function initDealTimer() {
    updateDealTimer();
    setInterval(updateDealTimer, 1000);
}

function updateDealTimer() {
    if (dealTimeRemaining <= 0) {
        elements.dealTimer.textContent = '00:00:00';
        return;
    }
    
    dealTimeRemaining--;
    
    const hours = Math.floor(dealTimeRemaining / 3600);
    const minutes = Math.floor((dealTimeRemaining % 3600) / 60);
    const seconds = dealTimeRemaining % 60;
    
    elements.dealTimer.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// ========================================
// PRODUCT RENDERING
// ========================================
function renderProducts() {
    renderProductGrid('electronics', elements.electronicsGrid);
    renderProductGrid('fashion', elements.fashionGrid);
    renderProductGrid('home', elements.homeGrid);
}

function renderProductGrid(category, container) {
    if (!container) return;
    
    const categoryProducts = products[category] || [];
    
    container.innerHTML = categoryProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners to new elements
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.productId);
            addToCart(productId);
        });
    });
    
    container.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.closest('.product-card').querySelector('.add-to-cart-btn').dataset.productId);
            if (btn.querySelector('.fa-heart')) {
                toggleWishlist(productId, btn);
            } else if (btn.querySelector('.fa-eye')) {
                openQuickView(productId);
            }
        });
    });
    
    container.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.product-actions') && !e.target.closest('.add-to-cart-btn')) {
                const productId = parseInt(card.querySelector('.add-to-cart-btn').dataset.productId);
                openQuickView(productId);
            }
        });
        
        // Keyboard accessibility
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const productId = parseInt(card.querySelector('.add-to-cart-btn').dataset.productId);
                openQuickView(productId);
            }
        });
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `View ${card.querySelector('.product-title').textContent}`);
    });
}

function createProductCard(product) {
    const discount = product.originalPrice > product.price 
        ? Math.round((1 - product.price / product.originalPrice) * 100) 
        : 0;
    
    const badgeHtml = product.badge ? `<div class="product-badge"><span class="badge badge-${product.badge}">${getBadgeText(product.badge)}</span></div>` : '';
    
    const starsHtml = createStars(product.rating);
    
    return `
        <article class="product-card" role="listitem">
            ${badgeHtml}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="action-btn" aria-label="Add to wishlist" title="Add to Wishlist">
                        <i class="far fa-heart"></i>
                    </button>
                    <button class="action-btn" aria-label="Quick view" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars" aria-label="${product.rating} out of 5 stars">${starsHtml}</div>
                    <span class="count">(${product.reviews.toLocaleString()})</span>
                </div>
                <div class="product-price">
                    <span class="current">₹${product.price.toLocaleString()}</span>
                    ${product.originalPrice > product.price ? `<span class="original">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                    ${discount ? `<span class="discount">${discount}% off</span>` : ''}
                </div>
                <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
                ${product.prime ? '<p class="prime-tag"><i class="fab fa-amazon"></i> Prime</p>' : ''}
            </div>
        </article>
    `;
}

function getBadgeText(badge) {
    const texts = { deal: 'Deal', new: 'New', limited: 'Limited' };
    return texts[badge] || badge;
}

function createStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalf) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// ========================================
// BESTSELLERS CAROUSEL
// ========================================
function renderBestsellers() {
    if (!elements.bestsellersTrack) return;
    
    elements.bestsellersTrack.innerHTML = products.bestsellers.map(product => `
        <article class="carousel-item product-card" role="listitem">
            ${product.badge ? `<div class="product-badge"><span class="badge badge-${product.badge}">${getBadgeText(product.badge)}</span></div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-actions">
                    <button class="action-btn" aria-label="Add to wishlist"><i class="far fa-heart"></i></button>
                    <button class="action-btn" aria-label="Quick view"><i class="fas fa-eye"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars" aria-label="${product.rating} out of 5 stars">${createStars(product.rating)}</div>
                    <span class="count">(${product.reviews.toLocaleString()})</span>
                </div>
                <div class="product-price">
                    <span class="current">₹${product.price.toLocaleString()}</span>
                    ${product.originalPrice > product.price ? `<span class="original">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                ${product.prime ? '<p class="prime-tag"><i class="fab fa-amazon"></i> Prime</p>' : ''}
            </div>
        </article>
    `).join('');
    
    // Add event listeners
    elements.bestsellersTrack.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(btn.dataset.productId));
        });
    });
    
    elements.bestsellersTrack.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.closest('.product-card').querySelector('.add-to-cart-btn').dataset.productId);
            if (btn.querySelector('.fa-heart')) toggleWishlist(productId, btn);
            else if (btn.querySelector('.fa-eye')) openQuickView(productId);
        });
    });
    
    // Carousel navigation
    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = carouselContainer.querySelector('.carousel-btn.prev');
    const nextBtn = carouselContainer.querySelector('.carousel-btn.next');
    
    prevBtn.addEventListener('click', () => scrollCarousel(-1));
    nextBtn.addEventListener('click', () => scrollCarousel(1));
}

function scrollCarousel(direction) {
    const track = elements.bestsellersTrack;
    const itemWidth = 210; // item width + gap
    track.scrollBy({ left: direction * itemWidth * 3, behavior: 'smooth' });
}

// ========================================
// CART FUNCTIONALITY
// ========================================
function addToCart(productId, quantity = 1) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    saveCart();
    updateCartUI();
    showToast('success', 'Added to cart', `${product.name} has been added to your cart.`);
    
    // Animate cart icon
    elements.cartBtn.classList.add('cart-bounce');
    setTimeout(() => elements.cartBtn.classList.remove('cart-bounce'), 300);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('info', 'Removed', 'Item removed from cart.');
}

function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    item.quantity = quantity;
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('amazonCloneCart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    // Update cart count
    elements.cartCount.textContent = totalItems;
    elements.cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Update dropdown
    if (cart.length === 0) {
        elements.cartEmpty.style.display = 'block';
        elements.cartItems.style.display = 'none';
        elements.cartFooter.style.display = 'none';
    } else {
        elements.cartEmpty.style.display = 'none';
        elements.cartItems.style.display = 'block';
        elements.cartFooter.style.display = 'block';
        
        elements.cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString()}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" data-action="decrease" aria-label="Decrease quantity">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" data-action="increase" aria-label="Increase quantity">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" aria-label="Remove ${item.name}"><i class="fas fa-trash"></i></button>
            </div>
        `).join('');
        
        elements.subtotalAmount.textContent = `₹${subtotal.toLocaleString()}`;
        
        // Add event listeners to cart items
        elements.cartItems.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = parseInt(btn.closest('.cart-item').dataset.id);
                const action = btn.dataset.action;
                const item = cart.find(i => i.id === itemId);
                if (item) {
                    updateQuantity(itemId, action === 'increase' ? item.quantity + 1 : item.quantity - 1);
                }
            });
        });
        
        elements.cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                const itemId = parseInt(btn.closest('.cart-item').dataset.id);
                removeFromCart(itemId);
            });
        });
    }
}

// Cart dropdown toggle
let cartDropdownOpen = false;
elements.cartBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleCartDropdown();
});

elements.cartBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCartDropdown();
    }
});

function toggleCartDropdown() {
    cartDropdownOpen = !cartDropdownOpen;
    elements.cartDropdown.style.display = cartDropdownOpen ? 'block' : 'none';
    elements.cartBtn.setAttribute('aria-expanded', cartDropdownOpen);
}

elements.continueShopping.addEventListener('click', () => {
    toggleCartDropdown();
});

elements.checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        showToast('info', 'Checkout', 'Redirecting to checkout...');
        toggleCartDropdown();
    }
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (cartDropdownOpen && !elements.cartBtn.contains(e.target) && !elements.cartDropdown.contains(e.target)) {
        toggleCartDropdown();
    }
});

// ========================================
// WISHLIST
// ========================================
function toggleWishlist(productId, btn) {
    const icon = btn.querySelector('i');
    const isInWishlist = icon.classList.contains('fas');
    
    if (isInWishlist) {
        icon.classList.replace('fas', 'far');
        icon.classList.replace('fa-heart', 'fa-heart');
        btn.setAttribute('aria-label', 'Add to wishlist');
        showToast('info', 'Removed from Wishlist', 'Item removed from your wishlist.');
    } else {
        icon.classList.replace('far', 'fas');
        icon.classList.replace('fa-heart', 'fa-heart');
        btn.setAttribute('aria-label', 'Remove from wishlist');
        showToast('success', 'Added to Wishlist', 'Item added to your wishlist.');
    }
    
    // Animation
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => btn.style.transform = '', 200);
}

// ========================================
// QUICK VIEW MODAL
// ========================================
function openQuickView(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const discount = product.originalPrice > product.price 
        ? Math.round((1 - product.price / product.originalPrice) * 100) 
        : 0;
    
    elements.modalBody.innerHTML = `
        <div class="modal-gallery">
            <img src="${product.image}" alt="${product.name}" class="modal-main-img" id="modalMainImg">
            <div class="modal-thumbs">
                <img src="${product.image}" alt="${product.name}" class="modal-thumb active" data-src="${product.image}">
                <img src="${product.image.replace('w=400', 'w=400&q=60')}" alt="${product.name} view 2" class="modal-thumb" data-src="${product.image.replace('w=400', 'w=400&q=60')}">
                <img src="${product.image.replace('w=400', 'w=400&q=70')}" alt="${product.name} view 3" class="modal-thumb" data-src="${product.image.replace('w=400', 'w=400&q=70')}">
            </div>
        </div>
        <div class="modal-info">
            ${product.badge ? `<span class="badge badge-${product.badge}">${getBadgeText(product.badge)}</span>` : ''}
            <h2 id="modalTitle">${product.name}</h2>
            <div class="modal-rating">
                <div class="stars" aria-label="${product.rating} out of 5 stars">${createStars(product.rating)}</div>
                <span class="count">(${product.reviews.toLocaleString()} reviews)</span>
            </div>
            <div class="modal-price">₹${product.price.toLocaleString()}${product.originalPrice > product.price ? ` <span class="original" style="font-size: 1.25rem; font-weight: 400;">₹${product.originalPrice.toLocaleString()}</span> <span class="discount" style="font-size: 1rem;">${discount}% off</span>` : ''}</div>
            <p class="modal-desc">${getProductDescription(product)}</p>
            
            <div class="modal-options">
                <div class="option-group">
                    <label class="option-label">Color</label>
                    <div class="option-buttons">
                        <button class="option-btn selected" data-value="Black">Black</button>
                        <button class="option-btn" data-value="White">White</button>
                        <button class="option-btn" data-value="Blue">Blue</button>
                        <button class="option-btn" data-value="Silver">Silver</button>
                    </div>
                </div>
                <div class="option-group">
                    <label class="option-label">${product.category === 'fashion' ? 'Size' : 'Storage'}</label>
                    <div class="option-buttons">
                        ${product.category === 'fashion' 
                            ? ['S', 'M', 'L', 'XL', 'XXL'].map(s => `<button class="option-btn${s === 'M' ? ' selected' : ''}" data-value="${s}">${s}</button>`).join('')
                            : ['128GB', '256GB', '512GB', '1TB'].map(s => `<button class="option-btn${s === '256GB' ? ' selected' : ''}" data-value="${s}">${s}</button>`).join('')
                        }
                    </div>
                </div>
            </div>
            
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id}); closeQuickView();">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
                <button class="btn btn-secondary" onclick="toggleWishlist(${product.id}, document.querySelector('.modal-info .action-btn')); closeQuickView();">
                    <i class="far fa-heart"></i> Save for Later
                </button>
            </div>
            
            ${product.prime ? '<p class="prime-tag"><i class="fab fa-amazon"></i> Prime - FREE One-Day Delivery</p>' : ''}
        </div>
    `;
    
    // Thumbnail click handlers
    elements.modalBody.querySelectorAll('.modal-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            document.getElementById('modalMainImg').src = thumb.dataset.src;
            elements.modalBody.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });
    
    // Option button handlers
    elements.modalBody.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });
    
    elements.quickViewModal.hidden = false;
    document.body.style.overflow = 'hidden';
    
    // Focus management
    setTimeout(() => elements.modalClose.focus(), 100);
    
    // Trap focus
    trapFocus(elements.quickViewModal);
}

function closeQuickView() {
    elements.quickViewModal.hidden = true;
    document.body.style.overflow = '';
}

elements.modalClose.addEventListener('click', closeQuickView);
elements.quickViewModal.addEventListener('click', (e) => {
    if (e.target === elements.quickViewModal) closeQuickView();
});

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !elements.quickViewModal.hidden) closeQuickView();
});

// Focus trapping
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function handleTab(e) {
        if (e.key !== 'Tab') return;
        
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
}

// ========================================
// SEARCH
// ========================================
const searchSuggestions = [
    'iPhone 15', 'Samsung Galaxy', 'MacBook Air', 'Sony Headphones',
    'Nike Shoes', 'Levi Jeans', 'Instant Pot', 'Dyson Vacuum',
    'Kindle Paperwhite', 'AirPods Pro', 'Apple Watch', 'Gaming Laptop'
];

function initSearch() {
    let debounceTimer;
    
    elements.searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        const query = elements.searchInput.value.toLowerCase().trim();
        
        if (query.length < 2) {
            elements.searchSuggestions.classList.remove('active');
            return;
        }
        
        debounceTimer = setTimeout(() => {
            const matches = searchSuggestions.filter(s => 
                s.toLowerCase().includes(query)
            ).slice(0, 6);
            
            if (matches.length > 0) {
                elements.searchSuggestions.innerHTML = matches.map(s => `
                    <div class="suggestion-item" data-value="${s}">
                        <i class="fas fa-search"></i>
                        <span>${s}</span>
                    </div>
                `).join('');
                elements.searchSuggestions.classList.add('active');
                
                elements.searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
                    item.addEventListener('click', () => {
                        elements.searchInput.value = item.dataset.value;
                        elements.searchSuggestions.classList.remove('active');
                        performSearch(item.dataset.value);
                    });
                });
            } else {
                elements.searchSuggestions.classList.remove('active');
            }
        }, 150);
    });
    
    elements.searchInput.addEventListener('focus', () => {
        if (elements.searchInput.value.length >= 2) {
            elements.searchSuggestions.classList.add('active');
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!elements.searchInput.contains(e.target) && !elements.searchSuggestions.contains(e.target)) {
            elements.searchSuggestions.classList.remove('active');
        }
    });
    
    elements.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(elements.searchInput.value);
            elements.searchSuggestions.classList.remove('active');
        }
    });
    
    elements.searchBtn.addEventListener('click', () => {
        performSearch(elements.searchInput.value);
        elements.searchSuggestions.classList.remove('active');
    });
}

function performSearch(query) {
    if (!query.trim()) return;
    showToast('info', 'Search', `Searching for "${query}"...`);
    // In a real app, this would navigate to search results page
}

// ========================================
// MOBILE NAVIGATION
// ========================================
function initMobileNav() {
    elements.navToggle.addEventListener('click', () => {
        const isOpen = elements.navMenu.classList.toggle('open');
        elements.navToggle.setAttribute('aria-expanded', isOpen);
    });
}

// ========================================
// CATEGORY DRAWER
// ========================================
function initCategoryDrawer() {
    const navToggle = document.querySelector('.nav-toggle');
    
    navToggle.addEventListener('click', () => {
        elements.categoryDrawer.classList.add('open');
        elements.drawerOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        elements.drawerClose.focus();
    });
    
    elements.drawerClose.addEventListener('click', closeCategoryDrawer);
    elements.drawerOverlay.addEventListener('click', closeCategoryDrawer);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.categoryDrawer.classList.contains('open')) {
            closeCategoryDrawer();
        }
    });
}

function closeCategoryDrawer() {
    elements.categoryDrawer.classList.remove('open');
    elements.drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
    elements.navToggle.focus();
}

// ========================================
// BACK TO TOP
// ========================================
function initBackToTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            elements.backToTop.classList.add('visible');
        } else {
            elements.backToTop.classList.remove('visible');
        }
    });
    
    elements.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.querySelector('.footer-back-top').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// TOAST NOTIFICATIONS
// ========================================
function showToast(type, title, message) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="toast-icon fas ${getToastIcon(type)}"></i>
        <div class="toast-message">
            <strong>${title}</strong>
            <p>${message}</p>
        </div>
        <button class="toast-close" aria-label="Dismiss"><i class="fas fa-times"></i></button>
    `;
    
    elements.toastContainer.appendChild(toast);
    
    toast.querySelector('.toast-close').addEventListener('click', () => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    });
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => toast.remove(), 300);
        }
    }, 4000);
}

function getToastIcon(type) {
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
    return icons[type] || 'fa-info-circle';
}

// ========================================
// EVENT LISTENERS
// ========================================
function initEventListeners() {
    // Account dropdown
    elements.accountBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = elements.accountBtn.querySelector('.account-dropdown');
        const isOpen = dropdown.style.display === 'block';
        dropdown.style.display = isOpen ? 'none' : 'block';
        elements.accountBtn.setAttribute('aria-expanded', !isOpen);
    });
    
    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
        if (!elements.accountBtn.contains(e.target)) {
            elements.accountBtn.querySelector('.account-dropdown').style.display = 'none';
            elements.accountBtn.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Language selector
    document.querySelector('.nav-item.language').addEventListener('click', () => {
        showToast('info', 'Language', 'Language selector would open here.');
    });
    
    // Returns & Orders
    document.querySelector('.nav-item.returns').addEventListener('click', () => {
        showToast('info', 'Orders', 'Redirecting to your orders...');
    });
    
    // Prime navigation
    document.querySelector('.nav-link.prime').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('info', 'Prime', 'Amazon Prime benefits page would open here.');
    });
    
    // See all links
    document.querySelectorAll('.see-all').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.closest('.products-section').querySelector('.section-title').textContent;
            showToast('info', 'View All', `View all ${section}...`);
        });
    });
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.querySelector('h3').textContent;
            showToast('info', 'Category', `Browsing ${category}...`);
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ========================================
// PRODUCT DESCRIPTIONS
// ========================================
function getProductDescription(product) {
    const descriptions = {
        1: 'Industry-leading noise cancellation with Auto NC Optimizer. 30-hour battery life with quick charging. Multipoint connection for seamless switching between devices.',
        2: 'A17 Pro chip for next-level performance. Titanium design with Ceramic Shield. Pro camera system with 48MP Main. USB-C with USB 3 speeds.',
        3: 'Crystal 4K UHD display with PurColor. Smart Hub with multiple OTT apps. Gaming Hub for cloud gaming. Slim design with 3 bezel-less sides.',
        4: 'M2 chip with 8-core CPU and 10-core GPU. 13.6" Liquid Retina display. 18-hour battery life. Silent, fanless design. 1080p FaceTime HD camera.',
        5: 'Active Noise Cancellation up to 25dB. 42H total playback with case. ENx Tech for clear calls. IPX4 water resistance. ASAP Charge - 10 min = 150 min.',
        6: 'Snapdragon 8 Gen 2 Mobile Platform. 120Hz Super Fluid AMOLED display. 100W SUPERVOOC charging. 50MP Sony IMX890 main camera.',
        7: 'IP67 waterproof and dustproof. 12 hours playtime. PartyBoost for multi-speaker pairing. Bold JBL Original Pro Sound.',
        8: '13.4" 3.5K OLED touch display. Intel Core i7-1360P. Intel Iris Xe Graphics. 16GB LPDDR5 RAM. 512GB SSD. Windows 11 Home.',
        9: 'Classic 511 slim fit. Stretch denim for comfort. Five-pocket styling. Button fly. Machine washable.',
        10: 'Max Air unit for lightweight cushioning. Knit upper for breathability. Rubber outsole for traction. Foam midsole for comfort.',
        11: 'Oversized fit with notched lapels. Double-breasted front. Flap pockets. Fully lined. 100% polyester.',
        12: 'Regular fit. Brushed fleece interior. Kangaroo pocket. Ribbed cuffs and hem. Trefoil logo on chest.',
        13: 'Classic aviator shape. G-15 green lenses. 100% UV protection. Metal frame with gold finish. Includes case.',
        14: 'RS-X retro runner design. Mesh and leather upper. PUMA branding. Rubber outsole for grip.',
        15: 'Pack of 3 basic tees. Soft cotton blend. Crew neck. Regular fit. Machine washable.',
        16: 'Wear OS by Google. Snapdragon Wear 4100+. SpO2, heart rate, sleep tracking. 5ATM water resistance. Always-on display.',
        17: '7-in-1: Pressure cook, slow cook, rice cooker, steamer, sauté, yogurt maker, warmer. 6-quart capacity. 13 smart programs.',
        18: 'Laser dust detection. 230AW suction. LCD screen shows particle count. 60 min run time. HEPA filtration.',
        19: '4 smart color bulbs + bridge. 16 million colors. Voice control (Alexa, Google, Siri). Bluetooth & Zigbee.',
        20: 'High-carbon stainless steel blades. Triple-riveted handles. Built-in sharpener. Wooden block. Lifetime warranty.',
        21: 'Auto-schedule learns your temps. Home/Away Assist. Energy History. Works with Alexa/Google. Farsight display.',
        22: '4.5 quart stainless steel bowl. 10 speeds. 59 touchpoints. Tilt-head design. 10+ attachments available.',
        23: 'Premium glass beads. 100% cotton cover. Removable washable cover. Even weight distribution. Reduces anxiety.',
        24: 'LiDAR navigation. 3000Pa suction. Multi-floor mapping. App & voice control. 150 min runtime. Auto-recharge.',
        25: 'Wi-Fi 6 support. 4K Ultra HD streaming. Alexa Voice Remote. Dolby Vision/Atmos. 16GB storage.',
        26: 'Improved audio quality. Tap to snooze alarm. Temperature sensor. Eero built-in. Matter compatible.',
        27: '6.8" 300 ppi glare-free display. Adjustable warm light. 16GB storage. Waterproof (IPX8). Weeks of battery.',
        28: 'Active Noise Cancellation x2. Transparency mode. Adaptive Audio. Personalized Spatial Audio. USB-C charging.',
        29: '40mm aluminum case. Sapphire crystal. BioActive Sensor. Sleep coaching. ECG & BP monitoring. 40hr battery.',
        30: '7-in-1: Pressure cook, slow cook, rice cooker, steamer, sauté, yogurt maker, warmer. 6-quart capacity. 13 smart programs.'
    };
    
    return descriptions[product.id] || 'High-quality product with excellent features and great value for money.';
}

// ========================================
// INITIALIZATION COMPLETE
// ========================================

// Make functions globally accessible for inline handlers
window.addToCart = addToCart;
window.toggleWishlist = toggleWishlist;
window.closeQuickView = closeQuickView;
window.openQuickView = openQuickView;

// Add cart bounce animation
const style = document.createElement('style');
style.textContent = `
    @keyframes cartBounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }
    .cart-bounce .fa-shopping-cart { animation: cartBounce 0.3s ease; }
`;
document.head.appendChild(style);

console.log('Amazon Clone initialized successfully! 🛒');