import { useState, useEffect } from 'react';
import { Users, Search, CreditCard as Edit, Mail, Calendar, DollarSign } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import AdminLayout from '../../components/admin/AdminLayout';

interface Customer {
  id: string;
  email: string;
  created_at: string;
  orders_count?: number;
  total_spent?: number;
}

export default function Customers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const { data: usersData, error } = await supabase.auth.admin.listUsers();

      if (error) throw error;

      const customersWithStats = await Promise.all(
        (usersData?.users || []).map(async (user) => {
          const { data: orders } = await supabase
            .from('orders')
            .select('total')
            .eq('user_id', user.id);

          const totalSpent = orders?.reduce((sum, order) => sum + Number(order.total), 0) || 0;

          return {
            id: user.id,
            email: user.email || 'N/A',
            created_at: user.created_at,
            orders_count: orders?.length || 0,
            total_spent: totalSpent,
          };
        })
      );

      setCustomers(customersWithStats);
    } catch (error) {
      console.error('Error fetching customers:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-96">
          <div className="w-16 h-16 border-4 border-gray-500/30 border-t-gray-500 rounded-full animate-spin" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-8 h-8 text-blue-400" />
          <h1 className="text-4xl font-bold">Customers</h1>
        </div>
        <p className="text-gray-400">Manage customer accounts and information</p>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-gray-700 focus:outline-none"
          />
        </div>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50 border-b border-gray-700">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Email</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Joined</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Orders</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Total Spent</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{customer.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {new Date(customer.created_at).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm">{customer.orders_count}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-green-400 font-medium">
                      <DollarSign className="w-4 h-4" />
                      {customer.total_spent?.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedCustomer(customer)}
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      title="View details"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCustomers.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400">No customers found</p>
          </div>
        )}
      </div>

      {selectedCustomer && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          onClick={() => setSelectedCustomer(null)}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Customer Details</h2>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <p className="text-lg font-medium">{selectedCustomer.email}</p>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Customer ID</label>
                <p className="text-sm font-mono text-gray-300">{selectedCustomer.id}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Total Orders</label>
                  <p className="text-2xl font-bold">{selectedCustomer.orders_count}</p>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Total Spent</label>
                  <p className="text-2xl font-bold text-green-400">
                    ${selectedCustomer.total_spent?.toFixed(2)}
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Joined Date</label>
                <p className="text-lg">{new Date(selectedCustomer.created_at).toLocaleString()}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  /* Navigate to invoice creation */
                }}
                className="flex-1 bg-gradient-to-r from-gray-600 to-gray-500 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-500 hover:to-gray-400 transition-all"
              >
                Create Invoice
              </button>
              <button
                onClick={() => setSelectedCustomer(null)}
                className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
