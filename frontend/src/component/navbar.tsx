export function Navbar({name} : {name : string}){
    return (
        <div className="flex justify-between py-3 px-8 border">
            <div className="flex">
                <div className="font-bold text-3xl">Medium</div>
                <div></div>
            </div>
            <div>
                <div className=" mr-2 relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300  ">{name[0]}</span>
                </div>
            </div>
        </div>
    )
}


