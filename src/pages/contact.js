import Footer from "EAMBlog/components/Footer";
import NavBar from "EAMBlog/components/NavBar";
import Head from "next/head";

const About = () => {
  return (
    <main className="bg-white dark:bg-neutral-900">
      <Head>
        <title>EliteAppMakers Nela ChatBot</title>
      </Head>
      <NavBar />
      <div className="text-center">ContactPage</div>
      <Footer />
    </main>
  );
};

export default About;
