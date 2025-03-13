// Initialize a counter for tracking operations
let operationCount = 0;

/**
 * Middleware to count each operation performed by the backend.
 * Increments the operationCount variable for every request.
 */
const countOperations = (req, res, next) => {
    operationCount++; // Increment the counter
    next(); // Pass control to the next middleware or route handler
};

/**
 * Function to retrieve the current operation count.
 * @returns {number} - The total number of operations performed.
 */
const getOperationCount = () => operationCount;

// Export the middleware and function
module.exports = { countOperations, getOperationCount };