import { useRouter } from "next/router";
import { blogs } from "../../components/Data";
import Nav2 from "../../components/Nav2";
import { useEffect } from "react";
import Link from "next/link";

function FullBlog() {
  const router = useRouter();
  const blogId = parseInt(router.query.blogId);

  return (
    <div className="flex mx-auto justify-center">
      <Nav2 />
      <div className="mt-14 p-4 xl:w-1/2 max-w-full mx-auto lg:max-w-7xl h-fit bg-mediumnavy border-8 border-gold">
        <h1 className="text-3xl lg:text-7xl">
          {blogs[blogs.length - 1 - blogId]?.header}
        </h1>
        <h2>{blogs[blogs.length - 1 - blogId]?.date}</h2>
        <aside className="h-1/5 w-1/4 flex justify-center">
          <img
            src={blogs[blogs.length - 1 - blogId]?.img}
            alt={blogs[blogs.length - 1 - blogId]?.imgAlt}
          />
        </aside>
        <div className="space-y-3 text-lg flex-col">
          <div>{blogs[blogs.length - 1 - blogId]?.first}</div>
          <div>{blogs[blogs.length - 1 - blogId]?.second}</div>
          <div>{blogs[blogs.length - 1 - blogId]?.third}</div>

          {/https:\/\//.test(blogs[blogs.length - 1 - blogId]?.fourth) ? (
            <div>
              <Link
                className="bg-white py-2 px-4 text-black rounded-lg"
                href={blogs[blogs.length - 1 - blogId]?.fourth}
              >
                Check out the repo!
              </Link>
            </div>
          ) : (
            <div>{blogs[blogs.length - 1 - blogId]?.fourth}</div>
          )}
        </div>
        <div className="flex justify-between mt-3">
          <Link
            className="bg-white py-2 px-4 text-black rounded-lg"
            href={"/blog/" + (blogId + 1)}
          >
            Next Blog
          </Link>
          <Link
            className="bg-white py-2 px-4 text-black rounded-lg"
            href="/blog/"
          >
            All Blogs
          </Link>
          <Link
            className="bg-white py-2 px-4 text-black rounded-lg"
            href={"/blog/" + (blogId - 1)}
          >
            Last Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FullBlog;
