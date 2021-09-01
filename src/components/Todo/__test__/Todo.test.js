import { render, screen, fireEvent } from '@testing-library/react';
import Todo from "../Todo"


const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Thêm công việc mới.../i);
    const buttonElement = screen.getByRole("button", { name: /Thêm/i });
    tasks.forEach((task) => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    })
}

it('should be able to type into input', () => {
    render(
        <Todo />
    );
    addTask(["xin chào"])
    const divElement = screen.getByText(/xin chào/i);
    expect(divElement).toBeInTheDocument()
});

it('should render multiple items', () => {
    render(
        <Todo />
    );
    addTask(["xin chào", "xin chào", "xin chào"])
    const divElements = screen.queryAllByText(/xin chào/i);
    expect(divElements.length).toBe(3)
});

it('task should not have complete class when initally rendered', () => {
    render(
        <Todo />
    );
    addTask(["xin chào"])
    const divElement = screen.getByText(/xin chào/i);
    expect(divElement).not.toHaveClass("todo-item-active")
});

it('task should have complete class when clicked', () => {
    render(
        <Todo />
    );
    addTask(["xin chào"])
    const divElement = screen.getByText(/xin chào/i);
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
});