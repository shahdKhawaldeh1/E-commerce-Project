import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {Outlet, useLocation} from 'react-router-dom';

const Layout = () => {
    const [section, setSection] = useState('');
    const location = useLocation();

    useEffect(() => {

        const pageTitle = getTitleForLocation(location.pathname);
        const pageDescription = getDescriptionForLocation(location.pathname);


        document.title = pageTitle;
        document.querySelector('meta[name="description"]').content = pageDescription;
        setSection('');
    }, [location.pathname]);

    const getTitleForLocation = (pathname) => {
        switch (pathname) {
            case '/my-cart':
                return 'Cora\'l App - My Cart';
            case '/checkout':
                return 'Cora\'l App - Checkout';
            case '/user-profile/info':
                return 'Cora\'l App - Personal Information';
            case '/user-profile/orders':
                return 'Cora\'l App - My Orders';
            case '/user-profile/addresses':
                return 'Cora\'l App - Addresses';
            case '/my-wishlist':
                return 'Cora\'l App - My Wishlist';
            case '/products':
                const categoryName = getCategoryNameById();
                return `Cora'l App - ${categoryName || 'Products'}`;
            case '/about':
                return 'Cora\'l App - About';
            case '/sign-in':
                return 'Cora\'l App - Sign In';
            case '/sign-up':
                return 'Cora\'l App - Sign Up';
            default:
                return 'Cora\'l App - Home Page';
        }
    };

    const getDescriptionForLocation = (pathname) => {
        switch (pathname) {
            case '/my-cart':
                return 'Review and manage items in your shopping cart at Cora\'l App.';
            case '/checkout':
                return 'Complete your purchase and proceed to checkout at Cora\'l App.';
            case '/user-profile/info':
                return 'View and edit your personal information at Cora\'l App.';
            case '/user-profile/orders':
                return 'Track and view your order history at Cora\'l App.';
            case '/user-profile/addresses':
                return 'Manage your saved addresses for shipping and billing at Cora\'l App.';
            case '/my-wishlist':
                return 'Explore and manage your wishlist at Cora\'l App.';
            case '/products':
                const categoryName = getCategoryNameById();
                return `Discover the latest trends and products of ${categoryName || 'Products'} at Cora'l App. Cora'l App`;

            case '/about':
                return 'Learn more about Cora\'l App and our mission.';
            case '/sign-in':
                return 'Sign in to your Cora\'l App account.';
            case '/sign-up':
                return 'Create a new account and join Cora\'l App.';
            default:
                return 'Explore a wide range of products at Cora\'l App. Find the latest trends in fashion, electronics, and more. Shop now for great deals and discounts!';
        }
    };

    const getCategoryNameById = () => {

        const queryParams = new URLSearchParams(window.location.search);

        const idToUse = queryParams.get('categoryId')

        const categoryMapping = {
            '1': 'Handbags',
            '2': 'Watches',
            '3': 'Skincare',
            '4': 'Jewellery',
            '5': 'Apparels',
            '6': 'Personal Care',
            '7': 'Eye Wear',
        };

        return categoryMapping[idToUse]
    };


    return (
        <>
            <Helmet>
                <title>{getTitleForLocation(location.pathname)}</title>
                <meta name="description" content={getDescriptionForLocation(location.pathname)} />

            </Helmet>
            <Header />
            <main role="main" style={{ width: '100%', maxWidth: '1440px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
                <Outlet context={{ section: section, setSection: setSection }} />
            </main>
            <Footer setSection={setSection} />
        </>
    );
};

export default Layout;
