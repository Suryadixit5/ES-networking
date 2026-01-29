import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';

interface ServiceContent {
  [key: string]: {
    description: string;
    features: string[];
    subServices: string[];
    applications: string[];
  };
}

const serviceContent: ServiceContent = {
  'CCTV SYSTEM': {
    description: 'Advanced CCTV surveillance systems designed to protect, monitor, and optimize environments. Our comprehensive suite includes IP/Analog Dome Cameras, Bullet Cameras, PTZ Cameras, NVR/DVR systems, POE Switches, and more.',
    features: [
      'IP/Analog Dome Camera - 360-degree coverage with advanced motion detection',
      'IP/Analog Bullet Camera - Long-range surveillance with superior image quality',
      'IP/Analog PTZ Camera - Pan, Tilt, Zoom capabilities for flexible monitoring',
      'NVR/DVR - Network and Digital Video Recording with cloud backup',
      'POE Switch - Power over Ethernet for simplified installation',
      'SMPS - Uninterrupted power supply for continuous operation',
    ],
    subServices: [
      'Installation and configuration',
      'Maintenance and support',
      'Cloud integration',
      'Remote monitoring',
      'Analytics and AI features',
    ],
    applications: [
      'Retail stores and shopping malls',
      'Banks and financial institutions',
      'Hospitals and healthcare facilities',
      'Schools and educational institutions',
      'Corporate offices',
      'Residential complexes',
    ],
  },
  'Access Control System': {
    description: 'Sophisticated access control systems that manage and monitor entry and exit points. Control who has access to your facilities with advanced authentication methods.',
    features: [
      'Card-based access control',
      'Biometric authentication (fingerprint, iris, facial recognition)',
      'PIN-based entry systems',
      'Time-based access restrictions',
      'Real-time access logging',
      'Multi-level authorization',
    ],
    subServices: [
      'System design and planning',
      'Hardware installation',
      'Software configuration',
      'User management',
      'Visitor management',
      'Integration with CCTV systems',
    ],
    applications: [
      'Corporate offices',
      'Data centers',
      'Laboratories',
      'Restricted areas',
      'Government facilities',
      'Healthcare facilities',
    ],
  },
  'Emergency Door Release Or Green MCP': {
    description: 'Emergency door release systems ensuring quick evacuation during emergencies. These systems integrate with fire alarms and emergency systems for seamless safety protocols.',
    features: [
      'Magnetic lock release mechanisms',
      'Push-button emergency exit',
      'Integration with fire alarm systems',
      'Battery backup for power failures',
      'Audible and visual feedback',
      'Fail-safe design',
    ],
    subServices: [
      'Emergency egress planning',
      'System installation',
      'Compliance with safety codes',
      'Testing and certification',
      'Maintenance services',
    ],
    applications: [
      'Commercial buildings',
      'Hospitals',
      'Schools',
      'Hotels',
      'Shopping centers',
      'Any secured facility',
    ],
  },
  'Fire Alarm System': {
    description: 'Comprehensive fire detection and alarm systems to quickly identify and alert about fire hazards. Multi-sensory detection ensures rapid response to potential fires.',
    features: [
      'Smoke detection sensors',
      'Heat detection sensors',
      'Flame detection sensors',
      'Manual pull stations',
      'Audible alarm horns',
      'Visual strobe lights',
      'Monitoring station integration',
    ],
    subServices: [
      'System design',
      'Installation',
      'Testing and inspection',
      'Monitoring services',
      'Maintenance contracts',
      'Compliance verification',
    ],
    applications: [
      'Office buildings',
      'Hospitals',
      'Hotels',
      'Warehouses',
      'Manufacturing facilities',
      'Residential buildings',
    ],
  },
  'Fire Extinguishers': {
    description: 'High-quality fire extinguishers for various types of fires. Professional installation, maintenance, and training to ensure readiness during emergencies.',
    features: [
      'Type A extinguishers (ordinary combustibles)',
      'Type B extinguishers (flammable liquids)',
      'Type C extinguishers (electrical fires)',
      'Type D extinguishers (combustible metals)',
      'Type K extinguishers (kitchen fires)',
      'ABC multi-purpose extinguishers',
    ],
    subServices: [
      'Selection and supply',
      'Installation',
      'Regular inspection and recharging',
      'Staff training',
      'Emergency response protocols',
      'Compliance documentation',
    ],
    applications: [
      'Office buildings',
      'Kitchens',
      'Laboratories',
      'Manufacturing units',
      'Warehouses',
      'Vehicles',
    ],
  },
  'Intruder Alarm System': {
    description: 'Advanced intrusion detection systems to protect your premises from unauthorized access. Multi-layer detection ensures comprehensive coverage.',
    features: [
      'Perimeter sensors',
      'Window and door sensors',
      'Motion detectors',
      'Pressure sensors',
      'Glass break detectors',
      'Control panels with backup batteries',
      'Remote monitoring capabilities',
    ],
    subServices: [
      'Site survey and planning',
      'Professional installation',
      'System configuration',
      'Monitoring services',
      'Maintenance support',
      'User training',
    ],
    applications: [
      'Residential properties',
      'Commercial offices',
      'Retail stores',
      'Banks',
      'Warehouses',
      'Industrial facilities',
    ],
  },
  'Water Leak Detection': {
    description: 'Intelligent water leak detection systems that prevent water damage. Early detection prevents costly repairs and structural damage.',
    features: [
      'Sensor placement at critical points',
      'Real-time leak detection',
      'Automatic shutoff valve integration',
      'Mobile alerts and notifications',
      'Historical data logging',
      'Smart panel display',
    ],
    subServices: [
      'System assessment',
      'Sensor installation',
      'Integration with building management',
      'Alert configuration',
      'Monthly monitoring',
      'Maintenance services',
    ],
    applications: [
      'Residential properties',
      'Commercial buildings',
      'Server rooms',
      'Data centers',
      'Hotels',
      'Hospitals',
    ],
  },
  'EPABX': {
    description: 'Enterprise Private Automatic Branch Exchange systems for efficient communication management. Unified communication solution for modern businesses.',
    features: [
      'Multiple trunk lines support',
      'Call routing and queuing',
      'IVR (Interactive Voice Response)',
      'Call recording',
      'Conference bridging',
      'Call transfer and hold',
      'Voicemail integration',
    ],
    subServices: [
      'System installation',
      'Configuration and customization',
      'Extension setup',
      'Training for staff',
      'Maintenance contracts',
      'Cloud-based solutions',
    ],
    applications: [
      'Corporate offices',
      'Call centers',
      'Hotels',
      'Hospitals',
      'Government offices',
      'Large enterprises',
    ],
  },
  'Networking': {
    description: 'Comprehensive networking solutions for seamless connectivity and data transfer. Secure and reliable network infrastructure for your organization.',
    features: [
      'Network design and planning',
      'Cabling and infrastructure',
      'Switch and router installation',
      'Wireless networking (WiFi)',
      'Fiber optic connectivity',
      'Network security firewalls',
      'VPN setup and management',
    ],
    subServices: [
      'Network assessment',
      'Installation and configuration',
      'Security implementation',
      'Performance monitoring',
      'Maintenance and support',
      'Upgrades and expansion',
    ],
    applications: [
      'Corporate networks',
      'Educational institutions',
      'Healthcare facilities',
      'Government organizations',
      'Retail networks',
      'Industrial operations',
    ],
  },
  'Barriers': {
    description: 'Physical barrier systems for controlling access and ensuring safety. Effective traffic management and security solutions.',
    features: [
      'Rising bollards',
      'Swing barriers',
      'Sliding gates',
      'Automatic gates',
      'Crash-tested barriers',
      'Manual and motorized options',
      'Aesthetic designs',
    ],
    subServices: [
      'Site assessment and planning',
      'Installation',
      'Automation setup',
      'Maintenance services',
      'Repair and replacement',
      'Customization options',
    ],
    applications: [
      'Parking lots',
      'Corporate campuses',
      'Bank premises',
      'Government buildings',
      'Shopping centers',
      'Residential communities',
    ],
  },
  'Door Frame Metal Detector': {
    description: 'Walk-through metal detection systems for high-security applications. Advanced detection technology for threat identification.',
    features: [
      'Walk-through design',
      'Multi-zone detection',
      'High sensitivity settings',
      'Minimal false alarms',
      'Audible and visual alerts',
      'Temperature compensation',
      'Easy calibration',
    ],
    subServices: [
      'Installation at entry points',
      'Calibration and testing',
      'Staff training',
      'Maintenance contracts',
      'Sensitivity adjustments',
      'Integration with access control',
    ],
    applications: [
      'Airports and border security',
      'Banks and jewelry stores',
      'Government offices',
      'Corporate headquarters',
      'Event venues',
      'Museums and galleries',
    ],
  },
};

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Find the service
  const service = SERVICES.find(s => s.id === serviceId);
  const decodedServiceName = serviceId ? decodeURIComponent(serviceId) : '';
  const content = serviceContent[decodedServiceName] || serviceContent['CCTV SYSTEM'];
  
  if (!service && !decodedServiceName) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <Link to="/" className="text-sky-500 hover:text-sky-600 font-semibold">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const serviceName = decodedServiceName || service?.title || 'Service';

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-sky-400 hover:text-sky-300 mb-4 inline-flex items-center gap-2">
            <i className="fas fa-home"></i>
            Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black italic mt-4 mb-4">{serviceName}</h1>
          <div className="w-24 h-1 bg-sky-400 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Description */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-gray-800 mb-6 italic">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{content.description}</p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-gray-800 mb-8 italic">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.features.map((feature, index) => (
              <div key={index} className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-sky-500 text-white">
                    <i className="fas fa-check text-lg"></i>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-gray-800 mb-8 italic">Services We Offer</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ul className="space-y-4">
              {content.subServices.map((subService, index) => (
                <li key={index} className="flex items-center gap-4 pb-4 border-b border-gray-200 last:border-0">
                  <span className="flex-shrink-0 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 text-lg">{subService}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-black text-gray-800 mb-8 italic">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.applications.map((app, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-sky-100 p-6 rounded-lg border border-sky-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <i className="fas fa-star text-sky-500 mt-1 flex-shrink-0"></i>
                  <p className="text-gray-700 font-semibold">{app}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg p-12 text-center">
          <h3 className="text-3xl font-black italic mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-8 opacity-90">Get a customized solution tailored to your needs</p>
          <Link 
            to={`/get-quote?service=${encodeURIComponent(serviceName)}`}
            className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 transform"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
