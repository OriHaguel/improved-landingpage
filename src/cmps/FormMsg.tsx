
import { useForm, ValidationError } from '@formspree/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

export function FormMsg() {
    const formspreeId = import.meta.env.VITE_FORMSPREE ?? "";
    const [state, handleSubmit] = useForm(formspreeId);

    if (state.succeeded) {
        return (
            <div className="w-full max-w-lg mx-auto">
                <div className="bg-white border-2 border-blue-100 p-12 rounded-3xl space-y-6 text-center shadow-lg animate-fadeIn">
                    <div className="flex justify-center">
                        <div className="rounded-full bg-blue-500 p-4 animate-bounce">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">Message Sent!</h3>
                    <p className="text-blue-600 text-lg">We'll be in touch with you shortly.</p>
                </div>
            </div>
        );
    }

    return (
        <div className='h-[100vh] bg-black flex items-center justify-center'>

            <div className="w-[90%] max-w-lg mx-auto">
                <div className="bg-white border-2 border-blue-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="mb-8 animate-fadeIn">
                        <h2 className="text-3xl font-bold mb-2 text-blue-900 hover:text-blue-700 transition-colors duration-300">Let's Talk</h2>
                        <div className="h-1 w-12 bg-blue-500 rounded-full animate-widthGrow"></div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="group animate-slideUp">
                            <div className="flex items-center space-x-2 mb-3">
                                <Mail className="w-5 h-5 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
                                <Label htmlFor="email" className="text-lg text-blue-900">Email</Label>
                            </div>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                className="bg-blue-50 border-blue-200 text-blue-900 h-14 text-lg rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-blue-300 hover:bg-blue-100 transition-colors duration-300"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                                className="text-red-500 mt-2"
                            />
                        </div>

                        <div className="group animate-slideUp animation-delay-100">
                            <div className="flex items-center space-x-2 mb-3">
                                <MessageSquare className="w-5 h-5 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
                                <Label htmlFor="message" className="text-lg text-blue-900">Message</Label>
                            </div>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="What's on your mind?"
                                className="bg-blue-50 border-blue-200 text-blue-900 min-h-40 text-lg rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder:text-blue-300 hover:bg-blue-100 transition-colors duration-300"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                                className="text-red-500 mt-2"
                            />
                        </div>

                        <div className="pt-4 animate-slideUp animation-delay-200">
                            <Button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white h-14 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group"
                            >
                                {state.submitting ? (
                                    <span className="flex items-center justify-center space-x-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        <span>Sending</span>
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center space-x-2">
                                        <span>Send Message</span>
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

// Add these keyframes to your global CSS or styling system
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes widthGrow {
    from { width: 0; }
    to { width: 3rem; }
  }

  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-slideUp {
    animation: slideUp 0.6s ease-out forwards;
    opacity: 0;
  }

  .animate-widthGrow {
    animation: widthGrow 0.6s ease-out;
  }

  .animation-delay-100 {
    animation-delay: 0.1s;
  }

  .animation-delay-200 {
    animation-delay: 0.2s;
  }
`;
// document.head.appendChild(style);

export default FormMsg;