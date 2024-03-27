import { useState, useRef, useEffect } from "react";

export const useChatBot = () => {
  const [conversations, setConversations] = useState([
    {
      role: "system",
      content: "default",
    },
  ]);
  const [error, setError] = useState(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [promptContent, setPromptContent] = useState("");
  const textareaRef = useRef(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const accountId = process.env.NEXT_PUBLIC_ACCOUNT_ID;

  const handleInput = (e) => {
    setPromptContent(e.target.value);
  };

  const closeErrorPopup = () => {
    setError(null);
  };

  useEffect(() => {
    const currentTextarea = textareaRef.current;
    currentTextarea.style.height = "auto";
    if (currentTextarea.scrollHeight !== 0) {
      currentTextarea.style.height = `${currentTextarea.scrollHeight}px`;
    }
    currentTextarea.focus();
  }, [promptContent]);

  const onSendClick = async () => {
    const prompt = promptContent.trim();

    if (prompt.length >= 2) {
      let newConversations = [
        ...conversations,
        { role: "user", content: prompt },
      ];

      try {
        setConversations(newConversations);
        setPromptContent("");
        setIsAiLoading(true);

        const requestData = {
          conversations: newConversations,
          max_new_tokens: 512,
          do_sample: true,
          temperature: 0.5,
          top_p: 0.8,
          top_k: 50,
          repetition_penalty: 1.05,
        };
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-key": `api-key ${apiKey}`,
            "account-id": accountId,
          },
          body: JSON.stringify(requestData),
        });

        const data = await response.json();

        if (response.ok) {
          const generatedOutput = data.output[0].data;
          newConversations.push({
            role: "ai",
            content: generatedOutput,
          });

          setConversations(newConversations);
        } else {
          setError(data?.detail ? data.detail : data);
        }
      } catch (serverError) {
        setError(
          "The server is not reachable at this moment, Please try again."
        );
      } finally {
        setIsAiLoading(false);
      }
    } else {
      setError("Please enter a prompt of at least 2 characters.");
    }
  };

  return {
    conversations,
    error,
    isAiLoading,
    promptContent,
    textareaRef,
    handleInput,
    closeErrorPopup,
    onSendClick,
  };
};
