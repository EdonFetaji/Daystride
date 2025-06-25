import React from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Group,
    Burger,
    Text,
    Button,
    Flex,
    Box,
    Paper,
} from '@mantine/core';
import {IconMenu2} from '@tabler/icons-react';

const pages = [
    {path: '/', name: 'Home'},
    {path: '/dashboard', name: 'Dashboard'},
    {path: '/habits', name: 'Habits'},
    {path: '/todos', name: 'Todos'},
    {path: '/goals', name: 'Goals'},
    {path: '/goalhub', name: 'Goal Hub'},
];

const Header = () => {
    return (
        <Paper shadow="sm" radius={0} p="md" withBorder>
            <Container size="xl">
                <Flex align="center" justify="space-between">
                    <Group gap="xs">
                        <IconMenu2/>
                        <Text fw={600} size="lg">
                            Daystride
                        </Text>
                    </Group>
                    <Group gap="sm">
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.path}
                                variant="subtle"
                                color="gray"
                                size="sm"
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Group>
                </Flex>
            </Container>
        </Paper>
    );
};

export default Header;
