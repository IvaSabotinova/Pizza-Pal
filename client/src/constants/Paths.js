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
    ProductDetails: '/products/details/:productId',
    NotFound: '*'
}

export default Paths;