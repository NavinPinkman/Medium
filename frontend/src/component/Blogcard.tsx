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
        <div>
            < div className="mt-6">
                <div className="flex ">
                    <div><Avatar name={authorName}/></div>
                    <div className="font-semibold mr-2"> {authorName} </div>
                    <div className="flex justify-center flex-col mr-3"><Circle/></div>
                    <div className=" text-slate-500"> {publishedDate} </div>
                </div>
                <div className="font-extrabold text-xl mt-3">
                    {title}
                </div>
                <div className="text-md mt-2">
                    {content.slice(0,250) +"..."}
                </div>
                <div className=" text-slate-500 mt-6">
                    {`${Math.ceil(content.length / 100)} min read`}
                </div>
                <div className="mt-6">
                    <hr />
                </div>
            </div>
        </div>
    )
}

function Circle(){
    return <div className="w-1 h-1 bg-slate-500 rounded-full">

    </div>
}

function Avatar({name} : {name : string}){
    return ( 
            <div className=" mr-2 relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300  ">{name[0]}</span>
            </div>
            
    )
}