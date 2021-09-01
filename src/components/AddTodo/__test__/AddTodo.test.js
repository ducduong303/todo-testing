import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from "../AddTodo";

const mockedSetTodo = jest.fn();

describe("AddTodo", () => {
    it('should render input element', () => {
        render(
            <AddTodo
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Thêm công việc mới.../i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into input', () => {
        render(
            <AddTodo
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Thêm công việc mới.../i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Học bài" } })
        expect(inputElement.value).toBe("Học bài");
    });

    it('should be able to type into input', () => {
        render(
            <AddTodo
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Thêm công việc mới.../i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Học bài" } });
        const buttonElement = screen.getByRole("button", { name: /Thêm/i });
        fireEvent.click(buttonElement)
        expect(mockedSetTodo).toBeCalled()
    });

    it('should have empty input when add button is cliked', () => {
        render(
            <AddTodo
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Thêm công việc mới.../i);
        fireEvent.change(inputElement, { target: { value: "Học bài" } });
        const buttonElement = screen.getByRole("button", { name: /Thêm/i });
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("")
    });
})