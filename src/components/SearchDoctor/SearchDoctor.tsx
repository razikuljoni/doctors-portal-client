const SearchDoctor = () => {
    return (
        <div
            className="bg-cover bg-center min-h-screen flex flex-col justify-center"
            style={{
                backgroundImage:
                    'url("https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            }}
        >
            <div className="text-white bg-opacity-90 rounded p-4 mx-auto  ">
                <h1 className="text-4xl font-semibold text-white mb-4">
                    Search for your favourite Doctor
                </h1>
                <div className="flex">
                    <input
                        type="text"
                        className="w-full h-14 text-xl p-2 border border-gray-300 rounded-l-full outline-none"
                        placeholder="Search..."
                    />
                    <button className="bg-blue-500 text-white cursor-pointer text-xl p-2 rounded-r-full">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchDoctor;
