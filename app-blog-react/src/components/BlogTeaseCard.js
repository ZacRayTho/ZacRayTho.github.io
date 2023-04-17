import Link from "next/link";
import { NavLink } from "react-router-dom";

function BlogTeaseCard({ blog }) {

    return (
        <div className="w-72 border-4 border-gold mb-4 mx-auto bg-mediumnavy rounded-lg px-2 h-fit">
            <div className="font-bold text-xl flex items-center justify-center text-center min-h-[4rem] ">{blog.header}</div>
            <div className="flex space-x-2 py-2 justify-center">
                <div className="line-clamp-[8]">
                    {blog.first}
                </div>
            </div>
            <div className="mb-3 flex justify-center">
                <Link
                    className="rounded-lg bg-white text-black py-2 px-4"
                    href={"/blog/" + blog.id}
                >
                    Read Full Post
                </Link>
            </div>
        </div>
    )
}
export default BlogTeaseCard