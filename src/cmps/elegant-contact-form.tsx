import { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError('');

    if (!email || !message) {
      setError('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setMessage('');

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className='contact-page'>
      <div className='contact-container'>
        <div className='contact-txt-container'>
          <h2 className='contact-txt'>Have any questions? contact me here!</h2>
          <p className="contact-subtext">I'm always happy to help. Drop a message below!</p>

        </div>
        <div className="form-container">
          <div className="contact-form text-white rounded-xl shadow-2xl relative overflow-hidden ">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-xl  " ></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-xl"></div>

            <h2 className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Get in Touch
            </h2>

            <p className="text-gray-400 mb-6">We'd love to hear from you. Send us a message.</p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle2 className="text-green-500 w-16 h-16 mb-4" />
                <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-300 block"
                  >
                    Email Address
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-900 border-gray-800 focus:border-purple-500 focus:ring-purple-500 text-gray-100 rounded-lg"
                      placeholder="your@email.com"
                    />
                    <div className="absolute inset-0 rounded-lg pointer-events-none border border-gray-700 border-opacity-50"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-300 block"
                  >
                    Message
                  </Label>
                  <div className="relative">
                    <Textarea

                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="resize-none w-full bg-gray-900 border-gray-800 focus:border-purple-500 focus:ring-purple-500 text-gray-100 rounded-lg min-h-32"
                      placeholder="How can we help you?"
                    />
                    <div className="absolute inset-0 rounded-lg pointer-events-none border border-gray-700 border-opacity-50"></div>
                  </div>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm"
                  >
                    {error}
                  </motion.p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg py-3 font-medium transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>


  );
};

export default ContactForm;
