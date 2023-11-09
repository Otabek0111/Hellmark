import './App.css';
import { Outlet, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';

// Uncomment import statement below after building queries and mutations
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function App() {
  return (
    <div className="flex-column justify-center align-center min-100-vh">
      {/* <Outlet /> */}
      <Outlet>
        <Routes>
          <Route index element={<Shop />}/>
        </Routes>
      </Outlet>
    
    </div>
  );
}

export default App;
