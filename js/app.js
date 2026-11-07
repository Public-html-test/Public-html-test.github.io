/* HINA Shop - Shared Frontend Logic */
const PRODUCTS = [
  { id: 1, name: 'نایک ایر فورس ۱', brand: 'Nike', price: 4850000, oldPrice: null, rating: 4.8, reviews: 234, sizes: ['۳۹', '۴۰', '۴۱', '۴۲', '۴۳', '۴۴'], category: 'sport', image: '/assets/products/911f1130-54d4-11ee-80d3-ff44d253152a.jpg', badge: null, color: 'سفید', material: 'چرم مصنوعی', gender: 'مردانه / زنانه', sku: 'HN-NK-001', stock: 24, desc: 'کفش کلاسیک نایک با طراحی ماندگار و راحتی بی‌نظیر برای استفاده روزانه. رویه چرم مصنوعی با دوخت دقیق و کفی نرم.' },
  { id: 2, name: 'آدیداس سوپراستار', brand: 'Adidas', price: 3200000, oldPrice: null, rating: 4.7, reviews: 189, sizes: ['۳۸', '۳۹', '۴۰', '۴۱', '۴۲', '۴۳'], category: 'casual', image: '/assets/products/QJEC1181-2.webp', badge: null, color: 'سفید / مشکی', material: 'چرم', gender: 'یونیسکس', sku: 'HN-AD-002', stock: 18, desc: 'اسنیکر نمادین آدیداس با پوسته صدفی و استایل خیابانی. مناسب استفاده روزانه و استایل کژوال.' },
  { id: 3, name: 'ایر جردن ۴ رترو', brand: 'Jordan', price: 8900000, oldPrice: 10500000, rating: 4.9, reviews: 312, sizes: ['۴۰', '۴۱', '۴۲', '۴۳'], category: 'sport', image: '/assets/products/nody-مدل-کتونی-جدید-۱۴۰۳-زیبایی-راحتی-این-مدل-ها-خیره-کننده-است-1747641614.jpg', badge: 'sale', color: 'مشکی / قرمز', material: 'چرم و مش', gender: 'مردانه', sku: 'HN-JD-003', stock: 7, desc: 'نسخه رترو جردن ۴ با کیفیت بالا و طراحی افسانه‌ای. اصالت تضمینی و بسته‌بندی اورجینال.' },
  { id: 4, name: 'نیو بالانس ۵۳۰', brand: 'New Balance', price: 4100000, oldPrice: null, rating: 4.6, reviews: 980, sizes: ['۳۹', '۴۰', '۴۱', '۴۲', '۴۳', '۴۴'], category: 'casual', image: '/assets/products/911f1130-54d4-11ee-80d3-ff44d253152a.jpg', badge: null, color: 'خاکستری', material: 'مش و چرم', gender: 'یونیسکس', sku: 'HN-NB-004', stock: 31, desc: 'کفش رانینگ-لایف‌استایل با راحتی فوق‌العاده و ظاهر مدرن. مناسب پیاده‌روی طولانی.' },
  { id: 5, name: 'ونس اولد اسکول', brand: 'Vans', price: 2450000, oldPrice: null, rating: 4.7, reviews: 1126, sizes: ['۳۷', '۳۸', '۳۹', '۴۰', '۴۱', '۴۲'], category: 'casual', image: '/assets/products/QJEC1181-2.webp', badge: null, color: 'مشکی', material: 'بوم و جیر', gender: 'یونیسکس', sku: 'HN-VN-005', stock: 42, desc: 'اسنیکر کلاسیک اسکیت با دوام بالا و استایل جاودانه. مناسب استفاده روزمره.' },
  { id: 6, name: 'پوما آر اس-ایکس', brand: 'Puma', price: 3750000, oldPrice: null, rating: 4.5, reviews: 156, sizes: ['۴۰', '۴۱', '۴۲', '۴۳'], category: 'sport', image: '/assets/products/nody-مدل-کتونی-جدید-۱۴۰۳-زیبایی-راحتی-این-مدل-ها-خیره-کننده-است-1747641614.jpg', badge: 'new', color: 'سفید / سبز', material: 'مش', gender: 'مردانه', sku: 'HN-PM-006', stock: 15, desc: 'طراحی آینده‌نگر پوما با بالشتک نرم و ظاهر اسپرت. مناسب تمرین و استایل خیابانی.' },
  { id: 7, name: 'نایک ایر مکس ۲۷۰', brand: 'Nike', price: 5600000, oldPrice: null, rating: 4.8, reviews: 445, sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'], category: 'sport', image: '/assets/products/911f1130-54d4-11ee-80d3-ff44d253152a.jpg', badge: null, color: 'قرمز / مشکی', material: 'مش و فوم', gender: 'مردانه', sku: 'HN-NK-007', stock: 12, desc: 'حداکثر راحتی با واحد ایر بزرگ و طراحی مدرن. ایده‌آل برای دویدن و پیاده‌روی.' },
  { id: 8, name: 'کانورس چاک تیلور', brand: 'Converse', price: 2100000, oldPrice: null, rating: 4.6, reviews: 890, sizes: ['۳۶', '۳۷', '۳۸', '۳۹', '۴۰', '۴۱', '۴۲'], category: 'casual', image: '/assets/products/QJEC1181-2.webp', badge: null, color: 'سفید', material: 'بوم', gender: 'یونیسکس', sku: 'HN-CV-008', stock: 50, desc: 'کفش بوم کلاسیک مناسب هر استایل. سبک، بادوام و همیشه مد.' },
  { id: 9, name: 'آدیداس اولترابوست', brand: 'Adidas', price: 6200000, oldPrice: null, rating: 4.9, reviews: 78, sizes: ['۴۰', '۴۱', '۴۲', '۴۳'], category: 'sport', image: '/assets/products/nody-مدل-کتونی-جدید-۱۴۰۳-زیبایی-راحتی-این-مدل-ها-خیره-کننده-است-1747641614.jpg', badge: 'new', color: 'مشکی', material: 'بافت پریم‌نیت', gender: 'مردانه / زنانه', sku: 'HN-AD-009', stock: 9, desc: 'فناوری بوست برای دویدن و پیاده‌روی طولانی. بازگشت انرژی بالا و راحتی بی‌نظیر.' },
  { id: 10, name: 'نایک ایر جردن ۱ مید', brand: 'Jordan', price: 7500000, oldPrice: null, rating: 4.8, reviews: 203, sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'], category: 'sport', image: '/assets/products/QJEC1181-2.webp', badge: 'new', color: 'سفید / آبی', material: 'چرم', gender: 'مردانه', sku: 'HN-JD-010', stock: 11, desc: 'جردن ۱ مید با کیفیت پریمیوم و رنگ‌بندی جذاب. انتخاب محبوب علاقه‌مندان استریت‌ویر.' },
  { id: 11, name: 'کفش کودک قلبی', brand: 'HINA Kids', price: 1850000, oldPrice: null, rating: 4.9, reviews: 67, sizes: ['۲۸', '۲۹', '۳۰', '۳۱', '۳۲'], category: 'kids', image: '/assets/products/911f1130-54d4-11ee-80d3-ff44d253152a.jpg', badge: 'new', color: 'صورتی / کرم', material: 'پارچه نرم', gender: 'دخترانه', sku: 'HN-KD-011', stock: 28, desc: 'کفش سبک و راحت مخصوص کودکان با طراحی دوست‌داشتنی. مناسب مهدکودک و پیاده‌روی.' },
  { id: 12, name: 'کفش رسمی مردانه', brand: 'HINA', price: 4200000, oldPrice: null, rating: 4.7, reviews: 112, sizes: ['۴۰', '۴۱', '۴۲', '۴۳', '۴۴'], category: 'formal', image: '/assets/products/QJEC1181-2.webp', badge: null, color: 'مشکی', material: 'چرم طبیعی', gender: 'مردانه', sku: 'HN-FR-012', stock: 16, desc: 'کفش چرمی رسمی مناسب مجالس و محیط کار. دوخت دستی و ظاهر شیک.' }
];

function formatPrice(n) {
  return (n || 0).toLocaleString('fa-IR') + ' تومان';
}

function renderStars(r) {
  const full = Math.floor(r);
  let s = '★'.repeat(full);
  if (r % 1 >= 0.5) s += '½';
  return s + '☆'.repeat(5 - full - (r % 1 >= 0.5 ? 1 : 0));
}

function getCart() {
  try { return JSON.parse(localStorage.getItem('hina_cart') || '[]'); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('hina_cart', JSON.stringify(cart));
  updateCartBadge();
}
function updateCartBadge() {
  const cart = getCart();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount, .cart-count').forEach(el => {
    if (el) el.textContent = count.toLocaleString('fa-IR');
  });
}

function addToCart(id, size = null, qty = 1) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  let cart = getCart();
  const key = size || 'default';
  const existing = cart.find(i => i.id === id && i.size === key);
  if (existing) existing.qty += qty;
  else cart.push({ id: p.id, name: p.name, price: p.price, image: p.image, size: key, qty });
  saveCart(cart);
  showToast('محصول به سبد اضافه شد ✓');
}

function removeFromCart(id, size) {
  let cart = getCart().filter(i => !(i.id === id && i.size === size));
  saveCart(cart);
  showToast('محصول از سبد حذف شد');
  if (typeof renderCartPage === 'function') renderCartPage();
}

function changeQty(id, size, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === id && i.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => !(i.id === id && i.size === size));
  saveCart(cart);
  if (typeof renderCartPage === 'function') renderCartPage();
}

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function createProductCard(p) {
  let badge = '';
  if (p.badge === 'sale') badge = '<span class="product-badge sale">تخفیف</span>';
  else if (p.badge === 'new') badge = '<span class="product-badge new">جدید</span>';
  const sizesHtml = (p.sizes || []).slice(0, 5).map(s => `<span class="size-tag">${s}</span>`).join('');
  const oldHtml = p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : '';
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img">
        ${badge}
        <button class="wishlist-btn" onclick="toggleWish(this)" aria-label="علاقه‌مندی">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
        <a href="product.html?id=${p.id}"><img src="${p.image}" alt="${p.name}" width="160" height="160" loading="lazy" onerror="this.src='https://via.placeholder.com/160x160?text=HINA'"></a>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <a href="product.html?id=${p.id}" class="product-name">${p.name}</a>
        <div class="product-meta"><span class="stars">${renderStars(p.rating)}</span><span>${p.rating} (${p.reviews.toLocaleString('fa-IR')})</span></div>
        <div class="product-sizes">${sizesHtml}</div>
        <div class="product-price-row">
          <div><div class="price-main">${formatPrice(p.price)}</div>${oldHtml}</div>
        </div>
        <div class="product-actions">
          <button class="add-cart-btn" onclick="addToCart(${p.id})">افزودن به سبد</button>
          <a href="product.html?id=${p.id}" class="quick-view-btn" title="مشاهده">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </a>
        </div>
      </div>
    </div>`;
}

function toggleWish(btn) {
  btn.classList.toggle('active');
  showToast(btn.classList.contains('active') ? 'به علاقه‌مندی‌ها اضافه شد ♥' : 'از علاقه‌مندی‌ها حذف شد');
}

function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

function getUser() {
  try { return JSON.parse(localStorage.getItem('hina_user') || 'null'); } catch { return null; }
}
function setUser(u) {
  if (u) localStorage.setItem('hina_user', JSON.stringify(u));
  else localStorage.removeItem('hina_user');
}




document.addEventListener('DOMContentLoaded', function () {
  updateCartBadge();

  var menuBtn = document.getElementById('mobileMenuBtn');
  var navList = document.getElementById('navList');
  if (menuBtn && navList) {
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      navList.classList.toggle('mobile-open');
    });
  }

  // Products dropdown: click opens accordion
  var items = document.querySelectorAll('.nav-list > li');
  items.forEach(function (li) {
    var children = li.children;
    var link = null, dd = null;
    for (var i = 0; i < children.length; i++) {
      if (children[i].tagName === 'A') link = children[i];
      if (children[i].classList && children[i].classList.contains('nav-dropdown')) dd = children[i];
    }
    if (!link || !dd) return;

    link.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var isOpen = li.classList.contains('open');
      items.forEach(function (o) { o.classList.remove('open'); });
      if (!isOpen) li.classList.add('open');
    });
  });

  document.querySelectorAll('.nav-dropdown a').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });

  document.addEventListener('click', function () {
    items.forEach(function (o) { o.classList.remove('open'); });
  });
});
