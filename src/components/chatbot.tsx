// "use client";

// import { useState, useRef, useEffect } from "react";
// import { Button } from "./ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
// import { MessageCircle, X, Send, Loader2 } from "lucide-react";
// import { Avatar, AvatarFallback } from "./ui/avatar";

// interface Message {
//   role: "user" | "assistant";
//   content: string;
// }

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       role: "assistant",
//       content: "Hi! I'm here to help you navigate the platform. Ask me anything about artists, artworks, or commissions!",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim() || isLoading) return;

//     const userMessage = input.trim();
//     setInput("");
//     setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
//     setIsLoading(true);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           message: userMessage,
//           history: messages.slice(1), // Exclude initial greeting
//         }),
//       });

//       const data = await response.json();

//       if (data.response) {
//         setMessages((prev) => [
//           ...prev,
//           { role: "assistant", content: data.response },
//         ]);
//       } else {
//         throw new Error("No response");
//       }
//     } catch (error) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content: "Sorry, I encountered an error. Please try again.",
//         },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   return (
//     <>
//       {/* Chat Toggle Button */}
//       {!isOpen && (
//         <Button
//           onClick={() => setIsOpen(true)}
//           className="fixed bottom-6 right-6 size-14 rounded-full shadow-lg"
//           size="icon"
//         >
//           <MessageCircle className="size-6" />
//         </Button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl flex flex-col">
//           <CardHeader className="flex flex-row items-center justify-between border-b p-4">
//             <CardTitle className="text-lg">Chat Assistant</CardTitle>
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsOpen(false)}
//               className="size-8"
//             >
//               <X className="size-4" />
//             </Button>
//           </CardHeader>

//           <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
//             {messages.map((msg, idx) => (
//               <div
//                 key={idx}
//                 className={`flex gap-3 ${
//                   msg.role === "user" ? "flex-row-reverse" : ""
//                 }`}
//               >
//                 <Avatar className="size-8 shrink-0">
//                   <AvatarFallback>
//                     {msg.role === "user" ? "U" : "AI"}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div
//                   className={`rounded-lg px-4 py-2 max-w-[75%] ${
//                     msg.role === "user"
//                       ? "bg-primary text-primary-foreground"
//                       : "bg-muted"
//                   }`}
//                 >
//                   <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex gap-3">
//                 <Avatar className="size-8">
//                   <AvatarFallback>AI</AvatarFallback>
//                 </Avatar>
//                 <div className="bg-muted rounded-lg px-4 py-2">
//                   <Loader2 className="size-4 animate-spin" />
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </CardContent>

//           <div className="border-t p-4">
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type your message..."
//                 className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//                 disabled={isLoading}
//               />
//               <Button
//                 onClick={sendMessage}
//                 disabled={!input.trim() || isLoading}
//                 size="icon"
//               >
//                 <Send className="size-4" />
//               </Button>
//             </div>
//           </div>
//         </Card>
//       )}
//     </>
//   );
// }