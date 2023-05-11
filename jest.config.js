module.exports = {
    testEnvironment: 'jsdom',
    // other Jest configurations


    "setupFilesAfterEnv": ["./setupTests.js"],


// Exclude specific file extensions from being processed by Jest
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'node',
        // Add more file extensions if needed, excluding the JPEG extension
    ],

    // Exclude specific directories from being processed by Jest
    testPathIgnorePatterns: [
        '/node_modules/',
        '/Users/Meca/Documents/Web Projects/world-quiz/src/images/world-map.jpeg'
        // Add more directories to ignore if needed
    ]

};


