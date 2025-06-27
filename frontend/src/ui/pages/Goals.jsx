import React, {useState} from "react";
import {
    Stack,
    Title,
    Loader,
    Button,
    Group,
    Card,
    Container,
    Divider
} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";

import useGoal from "../../hooks/useGoal.js";
import GoalGrid from "../components/goals/GoalGrid.jsx";
import EditGoalDialog from "../components/goals/EditGoalDialog.jsx";
import DeleteGoalDialog from "../components/goals/DeleteGoalDialog.jsx";
import AddGoalDialog from "../components/goals/AddGoalDialog.jsx";

const Goals = () => {
    const {userGoals, loading, onAdd, onEdit, onDelete} = useGoal();

    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [addOpen, setAddOpen] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState(null);

    const handleEditClick = (goal) => {
        setSelectedGoal(goal);
        setEditOpen(true);
    };

    const handleDeleteClick = (goal) => {
        setSelectedGoal(goal);
        setDeleteOpen(true);
    };

    return (
        <Container size="lg" className="my-10">
            <Card shadow="md" p="lg" radius="md" className="border-2 border-blue-500 bg-white">
                <Stack>
                    <Group position="apart">
                        <Title order={3} className="text-blue-700">My Goals</Title>
                        <Button
                            leftSection={<IconPlus size={16}/>}
                            onClick={() => setAddOpen(true)}
                            variant="light"
                            color="blue"
                            radius="md"
                        >
                            New Goal
                        </Button>
                    </Group>

                    <Divider className="my-2"/>

                    {loading ? (
                        <Loader/>
                    ) : (
                        <GoalGrid
                            goals={userGoals}
                            onEdit={handleEditClick}
                            onDelete={handleDeleteClick}
                        />
                    )}
                </Stack>
            </Card>

            <AddGoalDialog
                open={addOpen}
                onClose={() => setAddOpen(false)}
                onAdd={onAdd}
            />

            {selectedGoal && editOpen && (
                <EditGoalDialog
                    open={editOpen}
                    onClose={() => setEditOpen(false)}
                    onEdit={onEdit}
                    goal={selectedGoal}
                />
            )}

            {selectedGoal && deleteOpen && (
                <DeleteGoalDialog
                    open={deleteOpen}
                    onClose={() => setDeleteOpen(false)}
                    onDelete={onDelete}
                    goal={selectedGoal}
                />
            )}
        </Container>
    );
};

export default Goals;
