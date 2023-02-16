export default function RightColumn() {
    return (
        <div className=" w-3/12 flex flex-col border-2 my-5 mx-5 rounded-3xl bg-slate-200">
            <div className=" flex items-center justify-center p-5">
                <i className="fa-thin fa-calendar-days p-4"></i>
                <i className="fa-thin fa-bell p-4 relative">
                    <div className=" w-1 h-1 rounded-full bg-red-600 absolute top-4 left-6"></div>
                </i>
                <i className="fa-thin fa-message-dots p-4 relative">
                <div className=" w-1 h-1 rounded-full bg-red-600 absolute top-4 left-7"></div>
                </i>
                <img src="profile.jpg" className="w-9 h-9  rounded-full"></img>
                <i className="fa-thin fa-angle-down p-4"></i>
            </div>
            <div className="flex flex-col border-2 shadow-2xl mx-2 rounded-2xl">
                <p className="p-3">Formation status</p>
                <p className="p-3">In progress</p>
                <div className="flex p-3">
                    <div className=" w-full p-1.5 rounded-md bg-gray-300 relative"></div>
                    <div className=" w-52 p-1.5 rounded-md bg-blue-700 bg-opacity-70 absolute"></div>
                </div>
                <p className=" text-center font-bold">Estimated processing</p>
                <p className=" text-center p-2">4-5 business days</p>
                <button className=" w-11/12 mx-auto py-2 my-4 bg-blue-700 bg-opacity-70 rounded-lg">View status</button>
            </div>
            <div className="flex flex-col p-4">
                <p>Your to-Do list</p>
                <div className="flex p-2">
                    <i className=" fa-thin fa-home py-3.5 px-3 mx-3 bg-slate-400 rounded-2xl"></i>
                    <div className="flex-col">
                        <p>Run payroll</p>
                        <p>Mar 4 at 6:00 pm</p>
                    </div>
                </div>
                <div className="flex p-2">
                    <i className=" fa-thin fa-home py-3.5 px-3 mx-3 bg-slate-400 rounded-2xl"></i>
                    <div className="flex-col">
                        <p>Review time off request</p>
                        <p>Mar 7 at 6:00 pm</p>
                    </div>
                </div>
                <div className="flex p-2">
                    <i className=" fa-thin fa-home py-3.5 px-3 mx-3 bg-slate-400 rounded-2xl"></i>
                    <div className="flex-col">
                        <p>Sign board resolution</p>
                        <p>Mar 12 at 6:00 pm</p>
                    </div>
                </div>
                <div className="flex p-2">
                    <i className=" fa-thin fa-home py-3.5 px-3 mx-3 bg-slate-400 rounded-2xl"></i>
                    <div className="flex-col">
                        <p>Finish onboarding Tony</p>
                        <p>Mar 12 at 6:00 pm</p>
                    </div>
                </div>
            </div>
            <div className=" py-2 px-2 mx-4 bg-white rounded-xl w-11/12">
                <p className=" px-7">Board meeting</p>
                <div className="flex items-center">
                <div className=" h-4 w-4 bg-blue-600 rounded-full"></div>
                <p className=" px-3">Feb 22 at 6:00 PM</p>
                </div>
                <p className=" px-7">You have been invited to attend a</p>
                <p className=" px-7">meeting of the Board Directors.</p>
            </div>
        </div>
    )
}