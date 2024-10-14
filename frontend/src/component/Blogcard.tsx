interface cardTypes {
    authorName : string,
    publishedDate : string,
    title : string,
    content : string
}

export const BlogCard = ({
    authorName,
    publishedDate,
    title,
    content
}:cardTypes)=>{

    return (
        <div className="grid grid-cols-3">
            <div>
            {authorName}. {publishedDate}
            <div className="font-extrabold">
                {title}
            </div>
            <div>
                {content.slice(0,100) +"..."}
            </div>
            <div>
                {`${Math.ceil(content.length / 100)} minutes`}
            </div>
            </div>
        </div>
    )
}