export const ROUTES = {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    PRODUCTS: "/products",
    AUTHORS: "/authors",
    ABOUT: "/about",
    BLOG: "/blog",
    FAQ: "/faq",
    SINGLE_PRODUCT: {
        STATIC: "/products/:id",
        DYNAMIC: (id) => `/products/${id}`,
    },
  };
  