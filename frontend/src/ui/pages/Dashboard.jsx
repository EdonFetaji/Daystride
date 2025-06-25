const Dashboard = () => {
    return (
        <div className="min-h-screen bg-slate-700 text-white p-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-teal-300">Dashboard</h1>
                    <p className="text-sm text-gray-300">Welcome back. Here's your summary:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-900 rounded shadow">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl text-yellow-400">To-Do Tasks</h2>
                            <button className="bg-pink-600 px-3 py-1 rounded text-sm">Add Task</button>
                        </div>
                        <ul className="text-sm text-gray-300">[task list placeholder]</ul>
                    </div>

                    <div className="p-4 bg-gray-900 rounded shadow">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl text-yellow-400">Habits</h2>
                            <button className="bg-pink-600 px-3 py-1 rounded text-sm">Manage</button>
                        </div>
                        <ul className="text-sm text-gray-300">[habit list placeholder]</ul>
                    </div>
                </div>

                <div className="mt-6 p-4 bg-gray-900 rounded shadow">
                    <h2 className="text-xl text-yellow-400 mb-2">Goals</h2>
                    <ul className="text-sm text-gray-300">[goals list placeholder]</ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
