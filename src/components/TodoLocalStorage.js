
const todokey = "reactTodo";
export const getLocalStorageData = () => {
    const rawTodos = localStorage.getItem(todokey);
    if (!rawTodos) { return [] };

    return JSON.parse(rawTodos);
}

export const setLocalStorageData = (task) => {
    return localStorage.setItem(todokey, JSON.stringify(task));
}