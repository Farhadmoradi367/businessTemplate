import 'animate.css'

export default function ColumnLeft() {
    return (
        <div className=" w-1/14 flex flex-col m-6 ">
            <div className="flex items-center py-3 px-4 ">
                <div className="p-1.5 mx-1.5 rounded-full bg-red-600"></div>
                <div className="p-1.5 mx-1.5 rounded-full bg-yellow-500"></div>
                <div className="p-1.5 mx-1.5 rounded-full bg-green-600"></div>
            </div>
            <div className="flex flex-col items-center justify-between w-full rounded-3xl bg-blue-700 bg-opacity-80">
                <p className="py-9 animate__animated animate__bounce">dappr</p>
                <link rel="stylesheet" href="/libs/fa/css/all.css" />
                <div className=' flex flex-col mb-52'>
                    <i className=" fa-light text-white hover:bg-emerald-700 hover:text-fuchsia-800 rounded-2xl fa-home p-4"></i>
                    <i className=" fa-light text-white hover:bg-emerald-700 hover:text-fuchsia-800 rounded-2xl fa-square-poll-vertical p-4"></i>
                    <i className=" fa-light text-white hover:bg-emerald-700 hover:text-fuchsia-800 rounded-2xl fa-building-columns p-4"></i>
                    <i className=" fa-light text-white hover:bg-emerald-700 hover:text-fuchsia-800 rounded-2xl fa-building-columns p-4"></i>
                    <i className=" fa-light text-white hover:bg-emerald-700 hover:text-fuchsia-800 rounded-2xl fa-building-columns p-4"></i>
                    <i className=" fa-light text-white hover:bg-emerald-700 hover:text-fuchsia-800 rounded-2xl fa-building-columns p-4"></i>
                    <i className=" fa-light text-white hover:bg-emerald-700 hover:text-fuchsia-800 rounded-2xl fa-building-columns p-4"></i>
                    <i className=" fa-light text-white hover:bg-emerald-700 hover:text-fuchsia-800 rounded-2xl fa-building-columns p-4"></i>
                </div>
                <div>
                    <i className=" fa-light text-white hover:bg-emerald-700 hover:text-fuchsia-800 rounded-2xl fa-building-columns p-4 mb-8"></i>
                </div>

            </div>
        </div>
    )
}