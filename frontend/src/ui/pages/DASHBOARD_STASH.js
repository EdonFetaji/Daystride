import React, { useEffect, useState } from "react";
import DashboardRepository from "../../repository/DashboardRepository";
import { Loader } from "@mantine/core";
import TodoInfoCard from "../components/todos/TodoInfoCard";
import HabitInfoCard from "../components/habits/HabitInfoCard";
import GoalInfoCard from "../components/goals/GoalInfoCard";
import ToDoRepository from "../../repository/ToDoRepository";
import HabitRepository from "../../repository/HabitRepository";

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await DashboardRepository.fetchUserDashboard();
                setDashboardData(res.data);
            } catch (err) {
                console.error("Failed to fetch dashboard data", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleTodoToggle = async (todo) => {
        try {
            await ToDoRepository.partialUpdate(todo.id, {
                completed: !todo.completed,
            });
            const res = await DashboardRepository.fetchUserDashboard();
            setDashboardData(res.data);
        } catch (err) {
            console.error("Failed to toggle todo", err);
        }
    };

    const handleHabitToggle = async (habit) => {
        try {
            await HabitRepository.partialUpdate(habit.id, {
                completed: !habit.completed,
            });
            const res = await DashboardRepository.fetchUserDashboard();
            setDashboardData(res.data);
        } catch (err) {
            console.error("Failed to toggle habit", err);
        }
    };

    if (loading || !dashboardData) return <Loader />;

    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 p-6 flex justify-center items-center">
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl shadow-lg flex overflow-hidden max-w-5xl w-full">
                <div className="flex flex-col justify-center items-center text-white p-8 w-32">
                    <div className="text-4xl font-bold">{day}</div>
                    <div className="text-lg mt-1">{month}</div>
                </div>
                <div className="flex-1 p-6 space-y-4">
                    {/* Todos */}
                    <div className="bg-white rounded-xl shadow p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg font-semibold text-amber-600">To-Do Tasks</h2>
                            <button className="bg-amber-100 text-amber-700 hover:bg-amber-200 px-3 py-1 rounded text-sm font-medium">
                                Add Task
                            </button>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {dashboardData.todos.map((todo) => (
                                <TodoInfoCard
                                    key={todo.id}
                                    todo={todo}
                                    onToggleCompleted={() => handleTodoToggle(todo)}
                                />
                            ))}
                        </ul>
                    </div>

                    {/* Habits */}
                    <div className="bg-white rounded-xl shadow p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg font-semibold text-green-600">Habits</h2>
                            <button className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1 rounded text-sm font-medium">
                                Manage
                            </button>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {dashboardData.habits.map((habit) => (
                                <HabitInfoCard
                                    key={habit.id}
                                    habit={habit}
                                    onToggleCompleted={() => handleHabitToggle(habit)}
                                />
                            ))}
                        </ul>
                    </div>

                    {/* Goals */}
                    <div className="bg-white rounded-xl shadow p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg font-semibold text-blue-600">Goals</h2>
                            <button className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 rounded text-sm font-medium">
                                Create Goal
                            </button>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {dashboardData.goals.map((goal) => (
                                <GoalInfoCard key={goal.id} goal={goal} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
