import React, { useState, useRef, useEffect } from "react";
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot } from "react-icons/fa";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0); // 0: Intro, 1: Form, 2: Success
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    // Auto-open chat once per session
    useEffect(() => {
        const hasOpened = sessionStorage.getItem("chat_auto_opened");
        if (!hasOpened) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem("chat_auto_opened", "true");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formPayload = new FormData();
            formPayload.append("name", formData.name);
            formPayload.append("email", formData.email);
            formPayload.append("message", formData.message);
            formPayload.append("_subject", "New Chatbot Inquiry");

            const response = await fetch("https://formspree.io/f/mwpwzlng", {
                method: "POST",
                body: formPayload,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStep(2); // Success
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error submitting form.");
        } finally {
            setLoading(false);
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [isOpen, step]);

    // Debug logging
    useEffect(() => {
        console.log("ChatWidget mounted");
    }, []);

    return (
        <div
            className="fixed flex flex-col items-end font-sans"
            style={{
                bottom: '24px',
                right: '24px',
                zIndex: 2147483647, // Max safe integer for z-index
                position: 'fixed'
            }}
        >
            {/* Chat Window */}
            <div
                className={`
          mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden
          transition-all duration-300 origin-bottom-right border border-gray-200
          ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 h-0 w-0"}
        `}
            >
                {/* Header */}
                <div className="bg-[var(--color-primary)] p-4 flex justify-between items-center text-white">
                    <div className="flex items-center gap-2">
                        <div className="bg-white/20 p-2 rounded-full">
                            <FaRobot className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">Gridspark Assistant</h3>
                            <p className="text-xs opacity-80">Online</p>
                        </div>
                    </div>
                    <button
                        onClick={toggleChat}
                        className="text-white/80 hover:text-white transition"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Body */}
                <div className="p-4 h-80 overflow-y-auto bg-gray-50 flex flex-col">
                    {/* Bot Intro Message */}
                    <div className="flex gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <FaRobot className="text-[var(--color-primary)] text-sm" />
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100">
                            <p>Hi there! 👋</p>
                            <p className="mt-1">
                                Welcome to Gridspark Solutions. How can we help you innovate today?
                            </p>
                        </div>
                    </div>

                    {step === 0 && (
                        <div className="flex gap-3 mb-4 animate-fade-in">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <FaRobot className="text-[var(--color-primary)] text-sm" />
                            </div>
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100">
                                <p>Please fill out the form below so our team can get back to you.</p>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="flex gap-3 mb-4 animate-fade-in">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <FaRobot className="text-[var(--color-primary)] text-sm" />
                            </div>
                            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-700 border border-gray-100">
                                <p className="text-green-600 font-semibold">Message received! ✅</p>
                                <p className="mt-1">Thanks, {formData.name}. We'll be in touch shortly.</p>
                            </div>
                        </div>
                    )}

                    {/* User Form */}
                    {step !== 2 && (
                        <form onSubmit={handleSubmit} className="mt-auto bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full text-sm p-2 rounded border border-gray-300 focus:outline-none focus:border-[var(--color-primary)]"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full text-sm p-2 rounded border border-gray-300 focus:outline-none focus:border-[var(--color-primary)]"
                                />
                                <textarea
                                    name="message"
                                    required
                                    rows="2"
                                    placeholder="How can we help?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full text-sm p-2 rounded border border-gray-300 focus:outline-none focus:border-[var(--color-primary)] resize-none"
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[var(--color-primary)] text-white text-sm font-bold py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2"
                                >
                                    {loading ? "Sending..." : <>Send Message <FaPaperPlane className="text-xs" /></>}
                                </button>
                            </div>
                        </form>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Footer */}
                <div className="bg-gray-100 p-2 text-center text-[10px] text-gray-400">
                    Powered by Gridspark AI
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className={`
          w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110
          ${isOpen ? "bg-gray-600 rotate-90" : "bg-[var(--color-primary)] animate-bounce-slow"}
        `}
            >
                {isOpen ? (
                    <FaTimes className="text-white text-xl" />
                ) : (
                    <FaCommentDots className="text-white text-2xl" />
                )}
            </button>
        </div>
    );
};

export default ChatWidget;
