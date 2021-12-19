import Link from 'next/link'
import Layout from '../components/Layout'
import Cart from '../components/shop/Cart';
import CartSummary from '../components/shop/CartSummary';
import Products from '../components/shop/ProductsLessons';

const IndexPage = () => (
<Layout title="Shop | Next.js + TypeScript Example">
    <h1>Shop</h1>
    <p>This is the shop page</p>
    <div>
    <Cart>
          <CartSummary />
          <Products />
        </Cart>
    </div>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
