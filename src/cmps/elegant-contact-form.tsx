import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const formspreeId = import.meta.env.VITE_FORMSPREE ?? "";
  const [state, handleSubmit] = useForm(formspreeId);

  const isSubmitting = state.submitting;
  const isSubmitted = state.succeeded;

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    await handleSubmit({
      email,
      message
    });

    if (state.succeeded) {
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className='contact-page relative' id='contacts'>
      <div className='contact-container'>
        <div className='contact-txt-container'>
          <h2 className='contact-txt'>Contact Me - I'd Love to Hear From You!</h2>
          <p className='contact-subtext'>Or send an email <a href="mailto:orihaguel@gmail.com"><span>here!</span></a></p>
        </div>
        <div className="form-container">
          <div className="contact-form text-white rounded-xl shadow-2xl relative overflow-hidden ">
            {/* Decorative elements */}
            <div className="bg-circle-color-1 absolute -top-10 -right-10 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-xl"></div>
            <div className="bg-circle-color-2 absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-xl"></div>

            {!isSubmitted && <h2 className="get-in-touch-txt mb-4 text-3xl font-bold mb-1 w-fit">
              Get in Touch!
            </h2>}

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle2 className="text-green-500 w-16 h-16 mb-4" />
                <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                <p className="text-gray-400">I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6 relative z-10">
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
                      name="email"
                      type="email"
                      value={email}
                      autoComplete='email'
                      onChange={handleEmailChange}
                      className="contact-input-bg w-full border-gray-800 focus:border-purple-500 focus:ring-purple-500 text-gray-100 rounded-lg"
                      placeholder="your@email.com"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg pointer-events-none border border-gray-700 border-opacity-50"></div>
                  </div>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 mt-2"
                  />
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
                      name="message"
                      value={message}
                      onChange={handleMessageChange}
                      className="contact-input-bg  resize-none w-full bg-gray-900 border-gray-800 focus:border-purple-500 focus:ring-purple-500 text-gray-100 rounded-lg min-h-32"
                      placeholder="How can we help you?"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg pointer-events-none border border-gray-700 border-opacity-50"></div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full send-mgg-btn text-white rounded-lg py-3 font-medium transition-all duration-200 ease-in-out transform hover:scale-[1.03] active:scale-[0.98]"
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
      <footer>
        <p>© 2025 orihaguel.com. All rights reserved. | <a href="/privacy-policy" target="_blank">Privacy Policy</a></p>
      </footer>


    </div>
  );
};

export default ContactForm;