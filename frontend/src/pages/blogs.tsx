import { BlogCard } from "../component/Blogcard"
import { Navbar } from "../component/navbar"
import { useBlogs } from "../hooks"

export const Blogs= ()=>{
    const {loading , blogs}  = useBlogs()
    if(loading){
        return <div>
            Loading
        </div>
    }

    return (
        <div>
            <Navbar name="Priya V."/>
             <div className="flex justify-center">
            <div className=" max-w-3xl ">
                {blogs.map(blog => <BlogCard authorName={blog.title} publishedDate="Dec 3 2004" content="
                Joanne Rowling CH OBE FRSL, known by her pen name J. K. Rowling, is a British author and philanthropist. She wrote Harry Potter, a seven-volume fantasy series published from 1997 to 2007." 
                title="How an girl who become an successfull story writer"/>)}
            </div>
        </div>
        </div>
       
    )
}



