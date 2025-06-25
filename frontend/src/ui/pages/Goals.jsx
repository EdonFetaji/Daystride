// src/ui/pages/Goals.jsx
import React from "react";
import {Loader, Stack, Title} from "@mantine/core";
import GoalGrid from "../components/goals/GoalGrid.jsx";
import useGoal from "../../hooks/useGoal.js";

function Goals() {
    const {userGoals, loading, onEdit, onDelete} = useGoal();

    return (
        <Stack>
            <Title order={2}>Your Goals</Title>
            {loading ? (
                <Loader/>
            ) : (
                <GoalGrid goals={userGoals} onEdit={onEdit} onDelete={onDelete}/>
            )}
        </Stack>
    );
}

export default Goals;
