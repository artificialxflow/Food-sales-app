import React from 'react';
import { Shield, DollarSign, Wallet, ShoppingCart, Lock, FileText } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Admin-Only Registration',
      description: 'Exclusive access control with administrator approval for enhanced security and quality assurance.',
      color: 'bg-blue-500'
    },
    {
      icon: DollarSign,
      title: 'Dedicated Pricing',
      description: 'Personalized pricing structures tailored to each customer based on volume and relationship.',
      color: 'bg-green-500'
    },
    {
      icon: Wallet,
      title: 'Internal Credit System',
      description: 'Flexible payment options with internal wallet and credit management for seamless transactions.',
      color: 'bg-purple-500'
    },
    {
      icon: ShoppingCart,
      title: 'Fast & Easy Ordering',
      description: 'Streamlined ordering process with quick reorder options and bulk purchase capabilities.',
      color: 'bg-orange-500'
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Enterprise-grade security with encrypted data transmission and secure information storage.',
      color: 'bg-red-500'
    },
    {
      icon: FileText,
      title: 'Comprehensive Reporting',
      description: 'Detailed order history, analytics, and reporting tools for better business insights.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make our B2B platform the perfect choice 
            for your business needs and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white px-8 py-6 rounded-xl shadow-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Active Clients</div>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;