import Navbar from "../features/navbar/Nvabar";
import Product from "../features/product-list/ProductList";

function Home() {
    return ( <div>
        <Navbar>
            <Product/>
        </Navbar>
    </div> );
}

export default Home;