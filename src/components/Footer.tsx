import React from 'react';
import logiquest from '../assets/logiquest.png';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function LogiQuestFooter() {
  // Placeholder for logo - replace with: import logiquest from '../assets/logiquest.png'; height='100'%3E%3Crect fill='%2306b6d4' width='100' height='100'/%3E%3Ctext x='50' y='50' font-size='40' text-anchor='middle' dy='.3em' fill='white'%3ELQ%3C/text%3E%3C/svg%3E";

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* Logo Section */}
          <div className="space-y-4 sm:space-y-6 flex justify-center sm:justify-start">
            <div className="flex items-center space-x-3">
              {/* Logo Image */}
              <img
                src={logiquest}
                alt="LogiQuest Logo"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain"
              />
            </div>
          </div>

          {/* Game Mode */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Game Mode</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Classic Mode</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Challenge Mod</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Multiplayer Mode</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Daily Challenge</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Themed Quests</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Timed Blitz</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Puzzle Mode</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Practice Mode</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Adventure Mode</a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Info</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">FAQs</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Pricing</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Status</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Blog</a>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2 mt-1 text-xs">•</span>
                <a href="#" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Policy</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4 sm:mb-6 leading-relaxed">
              Subscribe to our weekly newsletter dose for updated, Tips, Helps Info and exclusive offers.
            </p>

            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                />
                <button className="px-6 py-3 bg-teal-800 hover:bg-teal-700 text-white rounded-md transition-colors text-sm font-medium whitespace-nowrap">
                  Subscribe now
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-4 sm:mb-6">
              <a href="#" className="text-white hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-cyan-400 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 bg-transparent border border-gray-600 rounded-lg hover:border-gray-500 transition-colors">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <span className="text-sm font-medium text-white">App Store</span>
              </a>

              <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 bg-transparent border border-gray-600 rounded-lg hover:border-gray-500 transition-colors">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3 20.5V3.5L13.5 12L3 20.5Z" fill="#4CAF50"/>
                  <path d="M13.5 12L3 20.5L18.5 13L13.5 12Z" fill="#FFC107"/>
                  <path d="M18.5 11L3 3.5L13.5 12L18.5 11Z" fill="#03A9F4"/>
                  <path d="M13.5 12L18.5 11L18.5 13L13.5 12Z" fill="#F44336"/>
                </svg>
                <span className="text-sm font-medium text-white">Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
              Copyright © 2025 LogiQuest All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 order-1 sm:order-2">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm">About us</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm">Contact us</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xs sm:text-sm">Privacy policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}