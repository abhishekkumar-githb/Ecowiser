const products = [
  {
    id: 1,
    name: "Nike Air Shoe",
    category: "Shoes",
    stock: 220,
    price: 122.27,
    image: "./assets/nike shoe.jpg",
  },
  {
    id: 2,
    name: "Nike Sportswear Heritage Cap",
    category: "Caps",
    stock: 999,
    price: 15.95,
    image: "./assets/nikeCap.jpg",
  },
  {
    id: 3,
    name: "Nike Air Max Penny Shoe",
    category: "Shoes",
    stock: 75,
    price: 182.5,
    image: "./assets/nike shoe1.jpg",
  },
  {
    id: 4,
    name: "Nike Dri-FIT T-Shirt",
    category: "Clothing",
    stock: 340,
    price: 35.99,
    image: "./assets/niketshit.webp",
  },
  {
    id: 5,
    name: "Nike Sports Water Bottle",
    category: "Accessories",
    stock: 500,
    price: 12.49,
    image: "./assets/nikeBottle.jpg",
  },
  {
    id: 6,
    name: "Nike Running Shorts",
    category: "Clothing",
    stock: 150,
    price: 29.99,
    image: "./assets/nikeshorts.png",
  },
  {
    id: 7,
    name: "Nike Gym Backpack",
    category: "Bags",
    stock: 95,
    price: 45.75,
    image: "./assets/nikegymbackpack.jpg",
  },
];

const customers = [
  {
    id: 1,
    name: "Abhishek",
    email: "abhishek@example.com",
    orders: 15,
    spent: 1250.0,
  },
  {
    id: 2,
    name: "Aman",
    email: "aman@example.com",
    orders: 8,
    spent: 750.5,
  },
  {
    id: 3,
    name: "Mike ",
    email: "mike@example.com",
    orders: 20,
    spent: 2100.75,
  },
];

const categories = [
  { id: 1, name: "Shoes", products: 2, totalStock: 295 },
  { id: 2, name: "Caps", products: 1, totalStock: 999 },
  { id: 3, name: "Clothing", products: 2, totalStock: 490 },
  { id: 4, name: "Accessories", products: 1, totalStock: 500 },
  { id: 5, name: "Bags", products: 1, totalStock: 95 },
];

const orders = [
  {
    id: "ORD001",
    customer: "Abhishek",
    items: 3,
    total: 366.81,
    status: "Delivered",
  },
  {
    id: "ORD002",
    customer: "Aman",
    items: 1,
    total: 122.27,
    status: "Processing",
  },
  {
    id: "ORD003",
    customer: "Mike",
    items: 2,
    total: 198.45,
    status: "Shipped",
  },
];

const coupons = [
  {
    code: "SUMMER20",
    discount: "20%",
    validUntil: "2024-08-31",
    status: "Active",
  },
  {
    code: "WELCOME10",
    discount: "10%",
    validUntil: "2024-12-31",
    status: "Active",
  },
  {
    code: "FLASH50",
    discount: "50%",
    validUntil: "2024-06-30",
    status: "Inactive",
  },
];

const chats = [
  {
    id: 1,
    customer: "Abhishek",
    lastMessage: "When will my order arrive?",
    time: "10:30 AM",
    unread: true,
  },
  {
    id: 2,
    customer: "Mike",
    lastMessage: "Thanks for your help!",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    customer: "Aman",
    lastMessage: "I need to return an item",
    time: "2 days ago",
    unread: true,
  },
];

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }

  document.querySelectorAll(".sidebar a").forEach((link) => {
    link.classList.remove("active");
  });
  const activeLink = document.querySelector(`[data-section="${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }

  switch (sectionId) {
    case "dashboard":
      renderDashboard();
      break;
    case "products":
      renderProducts();
      break;
    case "customers":
      renderCustomers();
      break;
    case "categories":
      renderCategories();
      break;
    case "orders":
      renderOrders();
      break;
    case "coupons":
      renderCoupons();
      break;
    case "chats":
      renderChats();
      break;
    case "settings":
      renderSettings();
      break;
  }
}

function renderDashboard() {
  const content = document.getElementById("dashboard");
  content.innerHTML = `
        <div class="dashboard-stats">
            <div class="stat-card">
                <h3>Total Sales</h3>
                <p>${formatPrice(15250.75)}</p>
            </div>
            <div class="stat-card">
                <h3>Total Orders</h3>
                <p>43</p>
            </div>
            <div class="stat-card">
                <h3>Total Customers</h3>
                <p>${customers.length}</p>
            </div>
            <div class="stat-card">
                <h3>Total Products</h3>
                <p>${products.length}</p>
            </div>
        </div>
    `;
}

function renderProducts() {
  const content = document.getElementById("products");
  content.innerHTML = `
        <div class="products-header">
            <h1>Products</h1>
            <button class="add-button">Add Product</button>
        </div>
        <div class="table-container">
            <div class="search-product">
                <input type="text" placeholder="Search in product" />
            </div>
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox"></th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Stock</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${products
                      .map(
                        (product) => `
                        <tr>
                            <td><input type="checkbox"></td>
                            <td>
                                <div class="product-item">
                                    <img src="${product.image}" alt="${
                          product.name
                        }" class="product-image">
                                    <span>${product.name}</span>
                                </div>
                            </td>
                            <td>${product.category}</td>
                            <td>${product.stock}</td>
                            <td>${formatPrice(product.price)}</td>
                        </tr>
                    `
                      )
                      .join("")}
                </tbody>
            </table>
        </div>
    `;
}

function renderCustomers() {
  const content = document.getElementById("customers");
  content.innerHTML = `
        <div class="section-header">
            <h1>Customers</h1>
            <button class="add-button">Add Customer</button>
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Orders</th>
                        <th>Total Spent</th>
                    </tr>
                </thead>
                <tbody>
                    ${customers
                      .map(
                        (customer) => `
                        <tr>
                            <td>${customer.name}</td>
                            <td>${customer.email}</td>
                            <td>${customer.orders}</td>
                            <td>${formatPrice(customer.spent)}</td>
                        </tr>
                    `
                      )
                      .join("")}
                </tbody>
            </table>
        </div>
    `;
}

function renderCategories() {
  const content = document.getElementById("categories");
  content.innerHTML = `
        <div class="section-header">
            <h1>Categories</h1>
            <button class="add-button">Add Category</button>
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Total Products</th>
                        <th>Total Stock</th>
                    </tr>
                </thead>
                <tbody>
                    ${categories
                      .map(
                        (category) => `
                        <tr>
                            <td>${category.name}</td>
                            <td>${category.products}</td>
                            <td>${category.totalStock}</td>
                        </tr>
                    `
                      )
                      .join("")}
                </tbody>
            </table>
        </div>
    `;
}

function renderOrders() {
  const content = document.getElementById("orders");
  content.innerHTML = `
        <div class="section-header">
            <h1>Orders</h1>
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${orders
                      .map(
                        (order) => `
                        <tr>
                            <td>${order.id}</td>
                            <td>${order.customer}</td>
                            <td>${order.items}</td>
                            <td>${formatPrice(order.total)}</td>
                            <td><span class="status-badge ${order.status.toLowerCase()}">${
                          order.status
                        }</span></td>
                        </tr>
                    `
                      )
                      .join("")}
                </tbody>
            </table>
        </div>
    `;
}

function renderCoupons() {
  const content = document.getElementById("coupons");
  content.innerHTML = `
        <div class="section-header">
            <h1>Coupons</h1>
            <button class="add-button">Add Coupon</button>
        </div>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Discount</th>
                        <th>Valid Until</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${coupons
                      .map(
                        (coupon) => `
                        <tr>
                            <td>${coupon.code}</td>
                            <td>${coupon.discount}</td>
                            <td>${coupon.validUntil}</td>
                            <td><span class="status-badge ${coupon.status.toLowerCase()}">${
                          coupon.status
                        }</span></td>
                        </tr>
                    `
                      )
                      .join("")}
                </tbody>
            </table>
        </div>
    `;
}

function renderChats() {
  const content = document.getElementById("chats");
  content.innerHTML = `
        <div class="section-header">
            <h1>Chats</h1>
        </div>
        <div class="chats-container">
            ${chats
              .map(
                (chat) => `
                <div class="chat-item ${chat.unread ? "unread" : ""}">
                    <div class="chat-avatar">👤</div>
                    <div class="chat-content">
                        <div class="chat-header">
                            <h3>${chat.customer}</h3>
                            <span class="chat-time">${chat.time}</span>
                        </div>
                        <p class="chat-message">${chat.lastMessage}</p>
                    </div>
                </div>
            `
              )
              .join("")}
        </div>
    `;
}

function renderSettings() {
  const content = document.getElementById("settings");
  content.innerHTML = `
        <div class="settings-container">
            <h1 class="section-title">Settings</h1>
            <div class="settings-nav">
                <button class="active" data-tab="profile">Profile</button>
                <button data-tab="notifications">Notifications</button>
                <button data-tab="security">Security</button>
                <button data-tab="appearance">Appearance</button>
            </div>
            
            <div class="settings-section">
                <div class="settings-group">
                    <h3>Profile Information</h3>
                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" id="fullName" value="Abhishek Kumar" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" value="sample@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="text" id="phone" value="+91 1234567889" />
                    </div>
                </div>

                <div class="settings-group">
                    <h3>Notification Preferences</h3>
                    <div class="form-group">
                        <div class="toggle-switch">
                            <input type="checkbox" id="emailNotif" checked />
                            <label for="emailNotif">Email Notifications</label>
                        </div>
                    </div>

                </div>

                <div class="settings-group">
                    <h3>Security Settings</h3>
                    <div class="form-group">
                        <label for="currentPassword">Current Password</label>
                        <input type="password" id="currentPassword" />
                    </div>
                    <div class="form-group">
                        <label for="newPassword">New Password</label>
                        <input type="password" id="newPassword" />
                    </div>
               
                </div>



                <button class="save-button">Save Changes</button>
            </div>
        </div>
    `;

  const tabButtons = content.querySelectorAll(".settings-nav button");
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  const colorOptions = content.querySelectorAll(".color-option");
  colorOptions.forEach((option) => {
    option.addEventListener("click", () => {
      colorOptions.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sidebar a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = e.currentTarget.getAttribute("data-section");
      showSection(section);
    });
  });

  showSection("dashboard");

  const searchInput = document.querySelector(".search-product input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
      );
      renderFilteredProducts(filteredProducts);
    });
  }
});

function renderFilteredProducts(filteredProducts) {
  const tableBody = document.getElementById("productsTableBody");
  if (tableBody) {
    tableBody.innerHTML = filteredProducts
      .map(
        (product) => `
            <tr>
                <td><input type="checkbox"></td>
                <td>
                    <div class="product-item">
                        <img src="${product.image}" alt="${
          product.name
        }" class="product-image">
                        <span>${product.name}</span>
                    </div>
                </td>
                <td>${product.category}</td>
                <td>${product.stock}</td>
                <td>${formatPrice(product.price)}</td>
            </tr>
        `
      )
      .join("");
  }
}
