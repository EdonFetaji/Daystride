// src/ui/components/goals/GoalCard.jsx
import React from "react";
import {
    Card,
    Text,
    Group,
    Badge,
    Button,
    Stack,
    Title,
} from "@mantine/core";

const GoalCard = ({goal, sharedCount = 0, onJoin}) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Stack spacing="xs">
                <Group position="apart">
                    <Title order={4}>{goal.name}</Title>
                    {goal.is_public && (
                        <Badge color="green" variant="light">
                            Public
                        </Badge>
                    )}
                </Group>

                <Text size="sm" color="dimmed">
                    {goal.description}
                </Text>

                <Group spacing="xs">
                    <Badge color="blue" variant="outline">
                        Ends: {goal.end_date}
                    </Badge>
                    <Badge color="gray" variant="outline">
                        Location: {goal.location}
                    </Badge>
                </Group>

                {goal.is_public && (
                    <Text size="xs" color="gray">
                        Shared by {sharedCount} {sharedCount === 1 ? "user" : "users"}
                    </Text>
                )}

                {onJoin && (
                    <Button variant="light" color="blue" fullWidth mt="md" onClick={() => onJoin(goal.id)}>
                        Join Goal
                    </Button>
                )}
            </Stack>
        </Card>
    );
};

export default GoalCard;
