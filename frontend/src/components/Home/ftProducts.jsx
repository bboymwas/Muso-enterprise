// Import the CSS file that styles this component.
import "./ftProducts.css";
import {Link} from "react-router-dom";
import products from '../../data/products'


/*
    This is a React Functional Component.

    Everything inside the return()
    is what appears on the webpage.
*/

function FtProducts() {

  return (

    <section className="featured-products">

      {/* Small section label */}

      <p className="section-tag">
        FEATURED PRODUCTS
      </p>

      {/* Main heading */}

      <h2 className="section-title">
        Quality Cleaning Products
        <br />
        for Every Kenyan Home & Business
      </h2>

      {/* Section description */}

      <p className="section-description">
        From liquid soap and sanitizers to bleach and detergents,
        Muso Enterprise manufactures affordable, high-quality
        cleaning products trusted by homes, businesses and
        institutions across Kenya.
      </p>

      {/* Product Grid */}

      <div className="products-grid">

        {/*
            .map() loops through every object
            inside the products array.

            For every product,

            React creates ONE product card.

            No matter if there are:

            6 products

            or

            600 products.
        */}

        {products.map((product) => (

          /*
              key={product.id}

              React needs every repeated element
              to have a unique key.

              Since every product has a unique id,
              we use it here.
          */

          <div
            className="product-card"
            key={product.id}
          >

            {/* Product Image */}

            <img
              src={product.image}
              alt={product.name}
            />

            {/* Badge */}

            <span className="product-badge">
              {product.badge}
            </span>

            {/* Product Name */}

            <h3>
              {product.name}
            </h3>

            {/* Product Description */}

            <p>
              {product.description}
            </p>

            {/* Button */}

            <Link
  to={`/products/${product.id}`}
  className="product-details-button"
>
  View Details
</Link>
          </div>

        ))}

      </div>

      {/* Bottom Button */}

      <div className="products-button">

        <Link to= "/products"className="view-all-products">
          View All Products →
        </Link>

      </div>

    </section>

  );

}

export default FtProducts;