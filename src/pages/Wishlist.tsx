import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { addToCart } from '../utils/cart';

interface WishlistItem {
  id: string;
  created_at: string;
  products: {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    stock_status: string;
  };
}

export default function Wishlist() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchWishlist();
    }
  }, [user]);

  const fetchWishlist = async () => {
    try {
      const { data, error } = await supabase
        .from('wishlists')
        .select(`
          id,
          created_at,
          products (
            id,
            name,
            description,
            price,
            image_url,
            stock_status
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setWishlist(data || []);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (wishlistId: string) => {
    try {
      const { error } = await supabase
        .from('wishlists')
        .delete()
        .eq('id', wishlistId);

      if (error) throw error;
      setWishlist(wishlist.filter(item => item.id !== wishlistId));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image_url: product.image_url
    });
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-6 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-500"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            My Wishlist
          </h1>
          <p className="text-gray-400">Save your favorite items for later</p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-16 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-lg">
            <Heart className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-400 mb-6">Add items you love to your wishlist</p>
            <button
              onClick={() => navigate('/products')}
              className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-500 hover:to-gray-400 transition-all"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map(item => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-lg overflow-hidden group hover:border-gray-700 transition-all"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-800">
                  <img
                    src={item.products.image_url}
                    alt={item.products.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 p-2 bg-red-500/90 hover:bg-red-500 text-white rounded-full transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{item.products.name}</h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{item.products.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold">${Number(item.products.price).toFixed(2)}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.products.stock_status === 'in_stock'
                        ? 'bg-green-500/20 text-green-400'
                        : item.products.stock_status === 'low_stock'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {item.products.stock_status.replace('_', ' ')}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(item.products)}
                    disabled={item.products.stock_status === 'out_of_stock'}
                    className="w-full bg-gradient-to-r from-gray-600 to-gray-500 text-white py-3 rounded-lg font-medium hover:from-gray-500 hover:to-gray-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
