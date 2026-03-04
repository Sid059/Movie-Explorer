// Mock user database
export const mockUsers = [
    {
        id: 1,
        email: 'john@example.com',
        password: 'password123', // In real app, this would be hashed
        name: 'John Doe',
    },
    {
        id: 2,
        email: 'jane@example.com',
        password: 'jane123',
        name: 'Jane Smith',
    },
    {
        id: 3,
        email: 'test@test.com',
        password: 'test123',
        name: 'Test User',
    },
    {
        id: 4,
        email: 'demo@movieflix.com',
        password: 'demo123',
        name: 'Demo User',
    }
];

// Helper function to find user by credentials
export const findUserByCredentials = (email, password) => {
    return mockUsers.find(
        user => user.email === email && user.password === password
    );
};

// Helper function to find user by email only (for checking existence)
export const findUserByEmail = (email) => {
    return mockUsers.find(user => user.email === email);
};