import React from 'react';
import { FileText, UserCheck, Key, ArrowRight } from 'lucide-react';

const RegistrationProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Request',
      description: 'Fill out our comprehensive registration form with your business details and requirements.',
      color: 'bg-blue-500'
    },
    {
      icon: UserCheck,
      title: 'Admin Review',
      description: 'Our team reviews your application and verifies your business credentials for approval.',
      color: 'bg-green-500'
    },
    {
      icon: Key,
      title: 'Account Access',
      description: 'Receive your login credentials and start accessing our platform with personalized pricing.',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How to Get Started
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple three-step registration process ensures quality partnerships 
            while maintaining platform security and exclusivity.
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center group">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-lg font-bold text-gray-600 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-4 text-gray-300">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Connecting Line for Mobile */}
          <div className="md:hidden absolute left-1/2 top-12 bottom-12 w-px bg-gray-200 transform -translate-x-1/2"></div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Platform?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start your journey with us today. Our team is ready to help you get set up 
              with a customized B2B solution that fits your business needs.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg inline-flex items-center space-x-2">
              <span>Start Registration Process</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationProcess;