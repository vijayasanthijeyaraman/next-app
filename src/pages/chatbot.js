import { ChatBot } from "EAMBlog/components/ChatBot";
import Footer from "EAMBlog/components/Footer";
import NavBar from "EAMBlog/components/NavBar";
import Head from "next/head";

const ChatBotPage = () => {
  return (
    <main className="bg-white dark:bg-neutral-900">
      <Head>
        <title>EliteAppMakers Nela ChatBot</title>
      </Head>
      <NavBar />
      <div className="p-4 w-full h-[calc(100vh-112px)] space-y-5">
        <ChatBot />
      </div>
      <Footer />
    </main>
  );
};

export default ChatBotPage;
