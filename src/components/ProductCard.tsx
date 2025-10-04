import { Product } from '../lib/supabase';
import { ShoppingCart, Check, Tag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const getStockBadge = () => {
    switch (product.stock_status) {
      case 'in_stock':
        return <span className="text-green-400 text-sm flex items-center gap-1"><Check className="w-3 h-3" /> In Stock</span>;
      case 'low_stock':
        return <span className="text-yellow-400 text-sm flex items-center gap-1"><Tag className="w-3 h-3" /> Low Stock</span>;
      case 'out_of_stock':
        return <span className="text-red-400 text-sm">Out of Stock</span>;
    }
  };

  return (
    <div className={`bg-gray-900/50 border border-gray-800 rounded-sm overflow-hidden hover:border-gray-700 transition-all group ${featured ? 'lg:col-span-1' : ''}`}>
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.is_featured && (
          <div className="absolute top-3 left-3 bg-white text-black px-3 py-1 text-xs font-bold rounded-sm">
            FEATURED
          </div>
        )}
        <div className="absolute top-3 right-3">
          {getStockBadge()}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-gray-300 transition-colors">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
          </div>
          <div className="text-2xl font-bold whitespace-nowrap ml-4">${product.price}</div>
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="space-y-2 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
              <Check className="w-4 h-4 text-gray-600 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button
          disabled={product.stock_status === 'out_of_stock'}
          className={`w-full py-3 rounded-sm font-medium transition-all flex items-center justify-center gap-2 ${
            product.stock_status === 'out_of_stock'
              ? 'bg-gray-800 text-gray-600 cursor-not-allowed'
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          {product.stock_status === 'out_of_stock' ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
