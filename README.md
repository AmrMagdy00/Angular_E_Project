# 🛍️ Angular E-Commerce Application

A modern, full-featured e-commerce application built with Angular 20, featuring product listings, shopping cart, favorites, and user authentication.

## ✨ Features

- 🏪 **Product Catalog** - Browse and search through a comprehensive product catalog
- 📱 **Product Details** - View detailed information about each product including images, reviews, and specifications
- 🛒 **Shopping Cart** - Add products to cart and manage your shopping items
- ❤️ **Favorites** - Save your favorite products for quick access
- 🔐 **User Authentication** - Secure login system with route guards
- 🎨 **Modern UI** - Clean and responsive user interface
- 🔍 **Custom Pipes** - Price formatting and text slicing utilities
- 🎯 **Custom Directives** - Reusable shadow directive for enhanced styling

## 🚀 Tech Stack

- **Framework:** Angular 20.3.0
- **Language:** TypeScript 5.9.2
- **State Management:** Angular Signals
- **HTTP Client:** Angular HttpClient
- **Routing:** Angular Router with Guards
- **Styling:** CSS3
- **Build Tool:** Angular CLI

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **Angular CLI** (v20.3.7 or higher)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Angular_Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 📁 Project Structure

```
src/
├── app/
│   ├── cart-product/          # Shopping cart component
│   ├── favorite-product/      # Favorites component
│   ├── product-card/          # Product card with shadow directive
│   ├── product-details/       # Product details page
│   ├── product-list/          # Main product listing page
│   ├── user-login/           # User authentication
│   ├── not-found/            # 404 error page
│   ├── guards/               # Route guards (auth-guard)
│   ├── services/             # Product service and interfaces
│   ├── Shared/               # Shared components and pipes
│   │   ├── header/           # Navigation header
│   │   └── pipes/            # Custom pipes (price, slice)
│   ├── app.routes.ts         # Application routes
│   └── app.ts                # Root component
├── index.html
├── main.ts
└── styles.css
```

## 🛣️ Routes

- `/` - Redirects to products
- `/products` - Product listing (protected route)
- `/product/:id` - Product details page
- `/cart` - Shopping cart
- `/favourites` - Favorite products
- `/login` - User login (lazy loaded)
- `/**` - 404 Not Found page

## 💻 Development

### Build for production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Watch mode

```bash
npm run watch
```

### Run tests

```bash
npm test
```

## 🎨 Custom Features

### Custom Pipes

- **Price Pipe** - Formats product prices with currency symbols
- **Slice Pipe** - Truncates text with ellipsis

### Custom Directives

- **Shadow Directive** - Applies custom shadow effects to elements

### Services

- **ProductService** - Manages product data and API interactions
- Uses Angular Signals for reactive state management

## 🔐 Authentication

The application includes route protection using Angular guards. The `/products` route is protected and requires authentication.

## 📦 API Integration

The application integrates with the [DummyJSON API](https://dummyjson.com/products) for product data.

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is private and proprietary.

## 👨‍💻 Author

Built with ❤️ using Angular

---

**Note:** This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.3.7.
