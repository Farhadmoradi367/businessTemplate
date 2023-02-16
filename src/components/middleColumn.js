

export default function MiddleColumn() {
    return (
        <div className=" w-8/12 flex flex-col relative ">
            <div className="flex justify-between p-6">
                <div>
                    <p>Good morning, James!</p>
                </div>
                <div>
                    <i className=" fa-thin fa-angle-left mx-1"></i>
                    <i className=" fa-thin fa-angle-right mx-1"></i>
                </div>
            </div>
            <div className=" flex w-full">
                <div className=" w-1/4  mx-1 flex-col shadow-xl border-2 rounded-3xl">
                    <div className="flex justify-between my-2">
                        <i className="px-5 py-2 fa-thin fa-wallet p-1"></i>
                        <i className="px-5 py-2 fa-thin fa-circle-ellipsis-vertical p-1"></i>
                    </div>
                    <p className="px-5 py-2 font-bold">$143,624</p>
                    <p className="px-5 py-2">Your bank</p>
                    <p className="px-5 py-2">balance</p>
                </div>
                <div className=" w-1/4  mx-1 flex-col shadow-xl border-2 rounded-3xl">
                    <div className="flex justify-between my-2">
                        <i className="px-5 py-2 fa-thin fa-wallet p-1"></i>
                        <i className="px-5 py-2 fa-thin fa-circle-ellipsis-vertical p-1"></i>
                    </div>
                    <p className="px-5 py-2 font-bold">$143,624</p>
                    <p className="px-5 py-2">Your bank</p>
                    <p className="px-5 py-2">balance</p>
                </div>
                <div className=" w-1/4  mx-1 flex-col shadow-xl border-2 rounded-3xl">
                    <div className="flex justify-between my-2">
                        <i className="px-5 py-2 fa-thin fa-wallet p-1"></i>
                        <i className="px-5 py-2 fa-thin fa-circle-ellipsis-vertical p-1"></i>
                    </div>
                    <p className="px-5 py-2 font-bold">$143,624</p>
                    <p className="px-5 py-2">Your bank</p>
                    <p className="px-5 py-2">balance</p>
                </div>
                <div className=" w-1/4 mx-1 mr-4 flex-col shadow-xl border-2 rounded-3xl">
                    <div className="flex justify-between my-2">
                        <i className="px-5 py-2 fa-thin fa-wallet p-1"></i>
                        <i className="px-5 py-2 fa-thin fa-circle-ellipsis-vertical p-1"></i>
                    </div>
                    <p className="px-5 py-2 font-bold">$143,624</p>
                    <p className="px-5 py-2">Your bank</p>
                    <p className="px-5 py-2">balance</p>
                </div>
            </div>
            <div className="flex w-full">
                <div className=" w-1/5 flex-col">
                    <div className="border-2 my-5 shadow-xl rounded-3xl">
                        <p className="p-4">New clients</p>
                        <div className="p-4 flex justify-between items-center">
                            <div>
                                <p className=" text-5xl font-bold">54</p>
                            </div>
                            <div>
                                <p className=" text-green-500 bg-green-500 bg-opacity-40">+18.7%</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 my-5 shadow-xl rounded-3xl">
                        <p className="p-4">Invoices overdue</p>
                        <div className="p-4 flex justify-between items-center">
                            <div>
                                <p className=" text-5xl font-bold">6</p>
                            </div>
                            <div>
                                <p className=" text-red-500 bg-red-500 bg-opacity-40">+2.7%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" w-4/5 my-4 mx-4 flex-col shadow-xl border-2 rounded-3xl">
                    <div className="flex justify-between p-4">
                        <p>Revenue</p>
                        <p>Last 7 days VS prior week</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full  -bottom-20 border-2 shadow-xl rounded-2xl">
                <p className="p-4">Recent emails</p>
                <div className="flex justify-around py-1">
                    <img src="profile.jpg" className=" w-10 h-10 rounded-full"></img>
                    <p>Hannah Morgan</p>
                    <p>Meeting scheduled</p>
                    <p>1:24 PM</p>
                </div>
                <div className="flex justify-around py-1">
                    <img src="profile.jpg" className=" w-10 h-10 rounded-full"></img>
                    <p>Hannah Morgan</p>
                    <p>Meeting scheduled</p>
                    <p>1:24 PM</p>
                </div>
                <div className="flex justify-around py-1">
                    <img src="profile.jpg" className=" w-10 h-10 rounded-full"></img>
                    <p>Hannah Morgan</p>
                    <p>Meeting scheduled</p>
                    <p>1:24 PM</p>
                </div>
                <div className="flex justify-around py-1">
                    <img src="profile.jpg" className=" w-10 h-10 rounded-full"></img>
                    <p>Hannah Morgan</p>
                    <p>Meeting scheduled</p>
                    <p>1:24 PM</p>
                </div>
            </div>
        </div>
    )
}