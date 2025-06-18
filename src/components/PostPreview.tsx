import React from 'react';
import { Calendar, Share2, Heart, MessageCircle } from 'lucide-react';

interface FormData {
  photos: File[];
  propertyType: string;
  location: string;
  price: string;
  features: string;
  cta: string;
}

interface PostPreviewProps {
  formData: FormData;
}

export const PostPreview: React.FC<PostPreviewProps> = ({ formData }) => {
  const englishCaption = `🏠 Stunning ${formData.propertyType} in ${formData.location}

✨ Features: ${formData.features}

💰 Price: $${Number(formData.price).toLocaleString()}

${formData.cta}

#RealEstate #Property #${formData.propertyType} #${formData.location.replace(/\s+/g, '')}`;

  const arabicCaption = `🏠 ${formData.propertyType} رائع في ${formData.location}

✨ المميزات: ${formData.features}

💰 السعر: $${Number(formData.price).toLocaleString()}

${formData.cta}

#عقارات #ملكية #${formData.propertyType} #${formData.location.replace(/\s+/g, '')}`;

  return (
    <div className="space-y-6">
      {/* Social Media Preview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Social Media Preview</h3>
        </div>
        
        <div className="p-4">
          {/* Mock Social Post */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex items-center space-x-3 p-3 border-b border-gray-200">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">PC</span>
              </div>
              <div>
                <p className="font-medium text-sm">PropContent</p>
                <p className="text-xs text-gray-500">2 min ago</p>
              </div>
            </div>
            
            {formData.photos.length > 0 && (
              <div className="aspect-square bg-gray-100">
                <img
                  src={URL.createObjectURL(formData.photos[0])}
                  alt="Property"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="p-3">
              <div className="flex items-center space-x-4 mb-2">
                <Heart className="w-5 h-5 text-gray-600" />
                <MessageCircle className="w-5 h-5 text-gray-600" />
                <Share2 className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-sm font-medium mb-1">1,234 likes</p>
              <p className="text-sm text-gray-900 whitespace-pre-line">{englishCaption}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Captions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Generated Captions</h3>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">English Caption</h4>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Copy
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 whitespace-pre-line">{englishCaption}</p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-900">Arabic Caption</h4>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Copy
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-4" dir="rtl">
              <p className="text-sm text-gray-700 whitespace-pre-line">{arabicCaption}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Post */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule Post</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Schedule Date & Time
            </label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="time"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Platforms</label>
            <div className="space-y-2">
              {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
                <label key={platform} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" defaultChecked />
                  <span className="text-sm text-gray-700">{platform}</span>
                </label>
              ))}
            </div>
          </div>
          
          <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all flex items-center justify-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Schedule Post</span>
          </button>
        </div>
      </div>
    </div>
  );
};