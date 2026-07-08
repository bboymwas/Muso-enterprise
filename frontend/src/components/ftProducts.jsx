// Import the CSS file that styles this component.
import "./ftProducts.css";

/*
    This is our temporary product data.

    We store products inside an ARRAY because there are many products.

    Each product is an OBJECT because one product has
    multiple pieces of information like:

    - id
    - badge
    - name
    - description
    - image

    Later this array will come from:

    MySQL Database
          ↓
    Express Backend
          ↓
    React Frontend

    Instead of writing the array ourselves.
*/

const products = [
  {
    id: 1,
    badge: "Best Seller",
    name: "Multipurpose Soap",
    description:
      "Effective everyday cleaning solution for homes and businesses.",
    image: "https://placehold.co/600x400"
  },

  {
    id: 2,
    badge: "Personal Care",
    name: "Beauty Bar Soap",
    description:
      "Gentle, quality bathing soap designed for everyday freshness.",
    image: "https://placehold.co/600x400"
  },

  {
    id: 3,
    badge: "Power Clean",
    name: "Jik (Bleach)",
    description:
      "Strong disinfecting bleach for homes, schools and institutions.",
    image: "https://placehold.co/600x400"
  },

  {
    id: 4,
    badge: "Hygiene",
    name: "Hand Wash",
    description:
      "Gentle hand washing solution that removes germs while protecting the skin.",
    image: "https://placehold.co/600x400"
  },

  {
    id: 5,
    badge: "Customer Favourite",
    name: "Multipurpose Liquid Soap",
    description:
      "Suitable for kitchens, offices, restaurants and homes.",
    image: "https://placehold.co/600x400"
  },

  {
    id: 6,
    badge: "99.9% Protection",
    name: "Hand Sanitizer",
    description:
      "Fast-acting sanitizer for maintaining hygiene anywhere.",
    image: "https://placehold.co/600x400"
  }
];

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

            <button>
              View Details
            </button>

          </div>

        ))}

      </div>

      {/* Bottom Button */}

      <div className="products-button">

        <button>
          View All Products →
        </button>

      </div>

    </section>

  );

}

export default FtProducts;