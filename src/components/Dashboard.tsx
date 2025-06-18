import React from 'react';
import { Plus, TrendingUp, Eye, Calendar, BarChart3 } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const stats = [
    { label: 'Total Posts', value: '0', icon: BarChart3, change: '+0%' },
    { label: 'Views This Month', value: '0', icon: Eye, change: '+0%' },
    { label: 'Engagement Rate', value: '0%', icon: TrendingUp, change: '+0%' },
    { label: 'Scheduled Posts', value: '0', icon: Calendar, change: '+0' },
  ];

  const recentPosts = [
    // Empty array - will be populated when real posts are created
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
          <p className="text-gray-600">Manage your real estate content and track performance.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Create New Post Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white shadow-lg">
              <h2 className="text-2xl font-bold mb-3">Ready to create?</h2>
              <p className="text-blue-100 mb-6">Generate AI-powered content for your latest property listings.</p>
              <button
                onClick={() => onNavigate('create')}
                className="w-full bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 group"
              >
                <Plus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Create New Post</span>
              </button>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Recent Posts</h2>
              </div>
              {recentPosts.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
                  <p className="text-gray-600 mb-4">Create your first property post to get started.</p>
                  <button
                    onClick={() => onNavigate('create')}
                    className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create First Post
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">{post.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="bg-gray-100 px-2 py-1 rounded-full">{post.type}</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.status === 'Published' ? 'bg-green-100 text-green-800' :
                            post.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {post.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};