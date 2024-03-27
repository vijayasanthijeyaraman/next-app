import Footer from "EAMBlog/components/Footer";
import NavBar from "EAMBlog/components/NavBar";
import Head from "next/head";
import Link from "next/link";

const Page404 = () => {
  return (
    <main className="bg-white dark:bg-neutral-900">
      <Head>
        <title>EliteAppMakers Nela ChatBot</title>
      </Head>
      <NavBar/>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl h-[calc(100vh-112px)] lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple-500 ">
              404
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
              Something&lsquo;s missing.
            </p>
            <p class="mb-4 text-lg font-light text-gray-700 ">
              Sorry, we can&lsquo;`t find that page. You&lsquo;`ll find lots to
              explore on the home page.
            </p>
            <Link
              href="/"
              class="inline-flex text-white bg-purple-500 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Page404;
