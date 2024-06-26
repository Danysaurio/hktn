import { motion } from "framer-motion";
import { RiRobot2Line, RiUserLine } from "react-icons/ri";
// components/MessageBubble.tsx

interface MessageBubbleProps {
  user: string;
  text: string;
  botThinking?: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  user,
  text,
  botThinking,
}) => {
  return (
    <motion.div
      initial={user === "bot" && !botThinking ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${user === "bot" ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`flex items-end ${user === "bot" ? "" : "flex-row-reverse"}`}
      >
        <div
          className={`w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ${
            user === "bot" ? "mr-2" : "ml-2"
          }`}
        >
          {user === "bot" ? <RiRobot2Line /> : <RiUserLine />}
        </div>
        <div
          className={`inline-block p-2 rounded-lg ${
            user === "bot" ? "bg-blue-200 text-left" : "bg-green-200 text-right"
          }`}
        >
          {botThinking && user === "bot" ? (
            <span className="loading loading-dots loading-sm" />
          ) : (
            text
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
