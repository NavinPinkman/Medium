import { useEffect, useState } from "react";
import { backend_url } from "../config";
import axios from 'axios'

interface Blog {
    "title" : string,
    "content" : string,
    "author" : {
        "name" : string
    }
}

interface Blogresponse {
    blog : Blog[]
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get<Blogresponse>(`${backend_url}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlogs(response.data.blog);
                setLoading(false);
            })
    }, [])

    return {
        loading,
        blogs
    }
}