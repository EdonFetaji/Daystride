// src/ui/components/goals/GoalGrid.jsx
import React from "react";
import {SimpleGrid} from "@mantine/core";
import GoalCard from "./GoalCard.jsx";

const GoalGrid = ({goals, onEdit, onDelete}) => {
    return (
        <SimpleGrid
            cols={{base: 1, sm: 2, md: 3, lg: 4}}
            spacing="lg"
            verticalSpacing="md"
        >
            {goals.map((goal) => (
                <GoalCard
                    key={goal.id}
                    goal={goal}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </SimpleGrid>
    );
};

export default GoalGrid;
