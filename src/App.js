import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// contexts
import {ProductContext} from './contexts/ProductContext.js';
import {CartContext} from './contexts/CartContext.js';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart}}>
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					{/* old way to pass props */}
					{/* <Route
						exact
						path="/"
						render={() => (
							<Products
								products={products}
								addItem={addItem}
							/>
						)}
					/> */}
					{/* new way to pass props */}
					<Route 
						exact 
						path="/" 
						component={Products} 
					/>

					<Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
				</div>
			</CartContext.Provider>

		</ProductContext.Provider>
		
	);
}

export default App;
