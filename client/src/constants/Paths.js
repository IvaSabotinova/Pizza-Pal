
export const BaseUrl = 'https://pizza-pal-act4.onrender.com';

//export const BaseUrl = 'http://localhost:4000';

const Paths = {
    Home: '/',
    Menu: '/menu',
    About: '/about',
    Register: '/register',
    Login: '/login',
    Logout: '/logout',
    CreatePizza: '/create-custom-pizza',
    CustomPizzaList: '/custom-pizzas',
    CustomPizzaDetails: '/customPizzas/details/:pizzaId',
    CustomPizzaEdit: '/customPizzas/edit/:pizzaId',
    MyCustomPizzas: '/customPizzas/all/:_ownerId',
    ProductCreate: 'products/product-create',
    ProductDetails: '/products/details/:productId',
    ProductEdit: '/products/edit/:productId',
    NotFound: '*'
}

export default Paths;