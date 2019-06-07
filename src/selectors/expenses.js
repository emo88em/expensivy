export default (expenses, {text, sortBy, startDate, endDate }) => {
    return expenses.filter(() => {
        const startDateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().include(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy == 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == 'amount') {
            return amount < b.amount ? 1 : -1 
        }
    })
}