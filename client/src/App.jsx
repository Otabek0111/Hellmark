import './App.css';
import { Routes, Route } from 'react-router-dom'; // Removed Outlet as it's not used directly here
import Shop from './pages/Shop';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound';

// If you're using Apollo Client, uncomment the imports and setup the client
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// If using Apollo Client, instantiate it here
// const client = new ApolloClient({
//   uri: 'your-backend-uri',
//   cache: new InMemoryCache(),
// });

function App() {
  // If using Apollo Client, wrap the return statement with <ApolloProvider client={client}>
  return (
    // <ApolloProvider client={client}> // Uncomment if using Apollo Client
    <div className="flex-column justify-center align-center min-100-vh bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
    // </ApolloProvider> // Uncomment if using Apollo Client
  );
}

export default App;
