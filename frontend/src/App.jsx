import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='products' element={<Products />} />
						<Route path='products/:productId' element={<SingleProduct />} />
						<Route path='posts' element={<Posts />} />
						<Route path='*' element={<Error />} />
					</Route>
    </Routes>
    </BrowserRouter>
  </div>
  
}

export default App;