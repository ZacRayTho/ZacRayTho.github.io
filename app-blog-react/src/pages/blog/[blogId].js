import { useRouter } from 'next/router'
import { blogs } from '../../components/Data'
import Nav2 from '../../components/Nav2'
import { useEffect } from 'react'
import Link from 'next/link';




function FullBlog() {
  const router = useRouter();
  const blogId = parseInt(router.query.blogId)


  function handleClick(symbol) {
    switch (symbol) {
      default:
      case "+":
        setBlog(blog + 1)
        break;

      case "-":
        setBlog(blog - 1)
        break;
    }
  }
  // let blog = blogs[blogId]

  // setTimeout(() => {
  return (
    <div className="flex mx-auto justify-center">
      <Nav2 />
      <div className="mt-14 p-4 w-1/2 mx-auto max-w-7xl h-fit bg-mediumnavy border-8 border-gold">

        <h1 className='text-7xl'>{blogs[blogId]?.header}</h1>
        <h2>{blogs[blogId]?.date}</h2>
        <aside className="h-1/5 w-1/4 flex justify-center">
          <img src={blogs[blogId]?.img} alt={blogs[blogId]?.imgAlt} />
        </aside>
        <div className='space-y-3 text-lg flex-col'>
          <div>
            {blogs[blogId]?.first}
          </div>
          <div>
            {blogs[blogId]?.second}
          </div>
          <div>
            {blogs[blogId]?.third}
          </div>
          <div>
            {blogs[blogId]?.fourth}
          </div>
        </div>
        <div className="flex justify-between">
          <Link className="bg-white py-2 px-4 text-black rounded-lg" href={"/blog/" + (blogId - 1)}>Last Blog</Link>
          <Link className="bg-white py-2 px-4 text-black rounded-lg" href="/blog/">All Blogs</Link>
          <Link className="bg-white py-2 px-4 text-black rounded-lg" href={"/blog/" + (blogId + 1)}>Next Blog</Link>
        </div>
      </div>
    </div>

  )
  // }, 1000)

}

export default FullBlog


