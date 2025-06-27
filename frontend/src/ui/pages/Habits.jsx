// src/pages/Habits.jsx
import React, {useEffect, useState} from "react";
import {
    Container,
    Card,
    Title,
    Group,
    Stack,
    Divider,
    SimpleGrid,
    Button
} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";
import HabitRepository from "../../repository/HabitRepository";
import HabitDetailCard from "../components/habits/HabitDetailCard";
import AddHabitDialog from "../components/habits/AddHabitDialog";
import EditHabitDialog from "../components/habits/EditHabitDialog";
import DeleteHabitDialog from "../components/habits/DeleteHabitDialog";

const Habits = () => {
    const [habits, setHabits] = useState([]);
    const [selectedHabit, setSelectedHabit] = useState(null);
    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const fetchHabits = async () => {
        try {
            const res = await HabitRepository.findAll();
            setHabits(res.data);
        } catch (err) {
            console.error("Failed to fetch habits", err);
        }
    };

    useEffect(() => {
        fetchHabits();
    }, []);

    const handleAdd = async (data) => {
        try {
            await HabitRepository.create(data);
            fetchHabits();
        } catch (err) {
            console.error("Add habit failed", err);
        }
    };

    const handleEdit = async (id, data) => {
        try {
            await HabitRepository.update(id, data);
            fetchHabits();
        } catch (err) {
            console.error("Edit habit failed", err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await HabitRepository.delete(id);
            fetchHabits();
        } catch (err) {
            console.error("Delete habit failed", err);
        }
    };

    return (
        <Container size="lg" className="my-10">
            <Card shadow="md" p="lg" radius="md" className="border-2 border-green-500 bg-white">
                <Stack p="md">
                    <Group position="apart">
                        <Title order={3} className="text-green-700">My Habits</Title>
                        <Button
                            leftSection={<IconPlus size={16}/>}
                            variant="light"
                            color="green"
                            radius="md"
                            onClick={() => setAddOpen(true)}
                        >
                            Add Habit
                        </Button>
                    </Group>

                    <Divider className="my-2"/>

                    <SimpleGrid cols={1} spacing="md">
                        {habits.map((habit) => (
                            <HabitDetailCard
                                key={habit.id}
                                habit={habit}
                                onEdit={(h) => {
                                    setSelectedHabit(h);
                                    setEditOpen(true);
                                }}
                                onDelete={(h) => {
                                    setSelectedHabit(h);
                                    setDeleteOpen(true);
                                }}
                            />
                        ))}
                    </SimpleGrid>
                </Stack>
            </Card>

            <AddHabitDialog
                open={addOpen}
                onClose={() => setAddOpen(false)}
                onAdd={handleAdd}
            />

            {selectedHabit && (
                <EditHabitDialog
                    open={editOpen}
                    onClose={() => {
                        setEditOpen(false);
                        setSelectedHabit(null);
                    }}
                    onEdit={handleEdit}
                    habit={selectedHabit}
                />
            )}

            {selectedHabit && (
                <DeleteHabitDialog
                    open={deleteOpen}
                    onClose={() => {
                        setDeleteOpen(false);
                        setSelectedHabit(null);
                    }}
                    onDelete={handleDelete}
                    habit={selectedHabit}
                />
            )}
        </Container>
    );
};

export default Habits;
