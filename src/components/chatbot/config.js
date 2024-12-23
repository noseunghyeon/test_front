import { createChatBotMessage } from "react-chatbot-kit";
import LoadingDots from "./LoadingDots";

const config = {
  initialMessages: [createChatBotMessage("안녕하세요! 무엇을 도와드릴까요?")],
  // 기본 로딩 위젯 비활성화
  widgets: [],
  customComponents: {
    // LoadingDots 컴포넌트를 등록
    loading: (props) => <LoadingDots {...props} />,
  },
  customStyles: {
    // 기본 로딩 스타일 제거
    loadingContainer: {
      display: "none",
    },
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
