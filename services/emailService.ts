import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  emailjs.init('aPJIBY4YU37k3TdMi'); // Public key
};

export const sendQuoteEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  requirements: string;
  companyName?: string;
  location?: string;
}) => {
  try {
    const response = await emailjs.send(
      'service_1fvfgg7', // Your Service ID
      'template_get_quote', // Your Template ID
      {
        to_email: 'dixitsurya80@gmail.com',
        from_email: formData.email,
        from_name: formData.name,
        subject: `New Quote Request - ${formData.service}`,
        phone: formData.phone,
        company: formData.companyName || 'N/A',
        location: formData.location || 'N/A',
        service: formData.service,
        requirements: formData.requirements,
      }
    );
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
