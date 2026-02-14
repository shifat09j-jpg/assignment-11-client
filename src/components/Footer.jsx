import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">Foodsss</h2>
          <p className="mt-3 text-sm text-gray-400">
            Discover top-rated foods and honest reviews from real food lovers.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/all-meals" className="hover:text-white">All Reviews</Link></li>
            <li><Link to="/addFood" className="hover:text-white">Add Review</Link></li>
            <li><Link to="/auth/login" className="hover:text-white">Login</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">📍 Dhaka, Bangladesh</p>
          <p className="text-sm mt-2">📧 support@foodreview.com</p>
          <p className="text-sm mt-2">📞 +880 1234-567890</p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">📸</a>
            <a href="#" className="hover:text-white">🐦</a>
          </div>
        </div>

      </div>

      
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FoodReview. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
