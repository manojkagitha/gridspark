import React, { useState, useRef, useEffect } from "react";
import { FaCommentDots, FaTimes, FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";

// Knowledge Base for the AI
const KNOWLEDGE_BASE = [
    {
        keywords: ["hello", "hi", "hey", "greetings"],
        response: "Hello! 👋 I'm the Gridspark AI Assistant. How can I help you innovate today?",
    },
    {
        keywords: ["services", "offer", "do", "help"],
        response: "We offer comprehensive tech solutions including: \n• **Custom Software Engineering**\n• **AI & LLM Integration**\n• **Cloud Architecture (AWS/Azure)**\n• **Data Analytics**\n\nWhich one interests you?",
    },
    {
        keywords: ["products", "tinykola", "checkaro"],
        response: "We have two flagship products:\n1. **TinyKola:** An AI-powered Restaurant Management System.\n2. **ChecKaro:** A premium home inspection platform.\n\nWould you like a demo of either?",
    },
    {
        keywords: ["contact", "email", "phone", "reach", "talk"],
        response: "You can reach us at **hello@gridsparksolutions.com** or call us directly at **+1 (945) 998-5494**. Alternatively, you can fill out the contact form on our Contact page!",
    },
    {
        keywords: ["pricing", "cost", "rates", "quote"],
        response: "Our pricing is tailored to each project's scope and complexity. Let's discuss your requirements so we can provide an accurate quote.",
    },
    {
        keywords: ["ai", "artificial intelligence", "llm", "gpt"],
        response: "AI is our specialty! We build custom LLMs, chatbots, and predictive analytics models to automate your business processes.",
    },
    {
        keywords: ["tech", "stack", "technologies"],
        response: "We are experts in 100+ technologies including Node.js, React, Python, AWS, Docker, Kubernetes, and many more.",
    },
    {
        keywords: ["location", "where", "office", "based"],
        response: "We are a global team with a presence in the US and India, serving clients worldwide.",
    },
    {
        keywords: ["careers", "job", "hiring", "work", "join"],
        response: "We are always looking for talent! Check out our **Careers** page for current openings in Engineering, Sales, and AI.",
    },
    {
        keywords: ["process", "methodology", "agile"],
        response: "We follow an Agile methodology with 2-week sprints, ensuring rapid delivery, transparency, and continuous feedback loops.",
    },
    {
        keywords: ["industries", "sector", "domain"],
        response: "We serve various industries including Healthcare, Finance, Retail, Real Estate, and Logistics.",
    },
    {
        keywords: ["startup", "mvp"],
        response: "Yes! We love working with startups. We specialize in building scalable MVPs to help you go to market quickly.",
    },
];

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! 👋 I'm Gridspark's AI Assistant. Ask me anything about our services, products, or tech stack!", sender: "bot" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    // Auto-open chat once
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

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const generateResponse = (input) => {
        const lowerInput = input.toLowerCase();

        // Find matching response
        const match = KNOWLEDGE_BASE.find(item =>
            item.keywords.some(keyword => lowerInput.includes(keyword))
        );

        if (match) return match.response;

        // Default fallback
        return "That's a great question! While I don't have the specific details right now, our engineering team definitely does. Would you like to leave your email so they can contact you?";
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = { text: inputValue, sender: "user" };
        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI thinking time
        setTimeout(() => {
            const botResponseText = generateResponse(userMessage.text);
            const botMessage = { text: botResponseText, sender: "bot" };

            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div
            className="fixed flex flex-col items-end font-sans z-[9999]" // High z-index
            style={{ bottom: '24px', right: '24px' }}
        >
            {/* Chat Window */}
            <div
                className={`
          mb-4 w-[calc(100vw-48px)] sm:w-96 bg-[var(--color-bg)] rounded-2xl shadow-2xl overflow-hidden
          transition-all duration-300 origin-bottom-right border border-[var(--color-border)]
          ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 h-0 w-0"}
        `}
            >
                {/* Header */}
                <div className="bg-[var(--color-primary)] p-4 flex justify-between items-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-glow"></div>
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                            <FaRobot className="text-white text-lg" />
                        </div>
                        <div>
                            <h3 className="font-bold text-base">Gridspark AI Agent</h3>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <p className="text-xs opacity-90 font-medium">Online & Ready</p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={toggleChat}
                        className="text-white/80 hover:text-white transition hover:rotate-90 duration-300 relative z-10"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="p-4 h-96 overflow-y-auto bg-[var(--color-bg-alt)] flex flex-col gap-4">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                        >
                            <div className={`
                w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                ${msg.sender === "user" ? "bg-[var(--color-primary)]" : "bg-gray-700"}
              `}>
                                {msg.sender === "user" ? <FaUser className="text-white text-xs" /> : <FaRobot className="text-white text-xs" />}
                            </div>

                            <div className={`
                max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                ${msg.sender === "user"
                                    ? "bg-[var(--color-primary)] text-white rounded-tr-none"
                                    : "bg-[var(--color-card)] text-gray-200 border border-[var(--color-border)] rounded-tl-none"}
              `}>
                                {msg.text.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        {i !== msg.text.split('\n').length - 1 && <br />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                                <FaRobot className="text-white text-xs" />
                            </div>
                            <div className="bg-[var(--color-card)] p-4 rounded-2xl rounded-tl-none border border-[var(--color-border)] flex gap-1 items-center h-10">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSendMessage} className="p-3 bg-[var(--color-bg)] border-t border-[var(--color-border)]">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Ask me anything..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full pl-4 pr-12 py-3 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] text-sm transition-all"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim() || isTyping}
                            className="absolute right-2 p-2 bg-[var(--color-primary)] rounded-lg text-white hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-[var(--color-primary)] transition-colors"
                        >
                            <FaPaperPlane className="text-xs" />
                        </button>
                    </div>
                    <div className="text-center mt-2">
                        <p className="text-[10px] text-gray-500">Powered by Gridspark AI • v2.0</p>
                    </div>
                </form>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className={`
          w-14 h-14 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 z-[9999]
          ${isOpen ? "bg-gray-700 rotate-90" : "bg-[var(--color-primary)] animate-bounce-slow"}
        `}
            >
                {isOpen ? (
                    <FaTimes className="text-white text-xl" />
                ) : (
                    <FaRobot className="text-white text-2xl" />
                )}
            </button>
        </div>
    );
};

export default ChatWidget;
