import React, {useEffect, useState} from "react";
import DashboardRepository from "../../repository/DashboardRepository";
import {Loader} from "@mantine/core";
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
                completed: !todo.completed
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
                completed: !habit.completed
            });
            const res = await DashboardRepository.fetchUserDashboard();
            setDashboardData(res.data);
        } catch (err) {
            console.error("Failed to toggle habit", err);
        }
    };

    if (loading || !dashboardData) return <Loader/>;

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-amber-600">Dashboard</h1>
                    <p className="text-sm text-gray-600">Welcome back. Here's your summary:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Todos */}
                    <div className="p-4 bg-white rounded-lg shadow border-l-4 border-amber-500">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-semibold text-amber-600">To-Do Tasks</h2>
                            <button
                                className="bg-amber-100 text-amber-700 hover:bg-amber-200 px-3 py-1 rounded text-sm font-medium">
                                Add Task
                            </button>
                        </div>
                        <ul className="space-y-2">
                            {dashboardData.todos.map((todo) => (
                                <TodoInfoCard key={todo.id} todo={todo}
                                              onToggleCompleted={() => handleTodoToggle(todo)}/>
                            ))}
                        </ul>
                    </div>

                    {/* Habits */}
                    <div className="p-4 bg-white rounded-lg shadow border-l-4 border-green-500">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-semibold text-green-600">Habits</h2>
                            <button
                                className="bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1 rounded text-sm font-medium">
                                Manage
                            </button>
                        </div>
                        <ul className="space-y-2">
                            {dashboardData.habits.map((habit) => (
                                <HabitInfoCard key={habit.id} habit={habit}
                                               onToggleCompleted={() => handleHabitToggle(habit)}/>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Goals */}
                <div className="mt-6 p-4 bg-white rounded-lg shadow border-l-4 border-blue-500">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold text-blue-600">Goals</h2>
                        <button
                            className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 rounded text-sm font-medium">
                            Create Goal
                        </button>
                    </div>
                    <ul className="space-y-2">
                        {dashboardData.goals.map((goal) => (
                            <GoalInfoCard key={goal.id} goal={goal}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
