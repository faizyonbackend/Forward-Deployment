package in.coderarmy.demo;

import in.coderarmy.demo.tools.CallculatorTool;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.messages.AssistantMessage;
import org.springframework.ai.chat.messages.Message;
import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatService {

    private final ChatClient chatClient;
    private CallculatorTool callculatorTool;

    private final List<Message> history = new ArrayList<>();

    public ChatService(ChatClient.Builder builder,
                       CallculatorTool callculatorTool) {
        this.callculatorTool = callculatorTool;
        this.chatClient = builder.build();
    }

    private static final String SYSTEM_PROMPT = """
            You are a helpful AI assistant with access to external tools.
            
                        Follow these rules:
                        1. For arithmetic calculations, ALWAYS use the calculator tool.
                        2. Always use calculator tool for even trivial calculation
            """;
//
//            Your job is to identify the customer's main
//            problem and urgency. Answer them related to there query.
//
//            Use professional language. If user has an issue,
//            use words like I understand your frustration,
//            I am really sorry for your trouble etc.
//
//            Do not answer any other question which is not
//            related to Ordering Food query, refund query,
//            order tracking status query or company policy query.


    public String chat(String message) {

        // USER role
        history.add(new UserMessage(message));

        // SYSTEM + Conversation History
        String response = chatClient.prompt()
                .system(SYSTEM_PROMPT)
                .messages(history)
                .tools(callculatorTool)
                .call()
                .content();

        // ASSISTANT role
        history.add(new AssistantMessage(response));

        return response;
    }

    public void clearHistory() {
        history.clear();
    }
}
