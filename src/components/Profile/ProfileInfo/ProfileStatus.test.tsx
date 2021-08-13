import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={newStatus => {} } />);
        const instance: any = component.getInstance();
        const status = instance.state.status;
        expect(status).toBe("it-kamasutra.com");
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={newStatus => {} } />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children.length).not.toBeNull();
    });

    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={newStatus => {} } />);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });

    test("after creation span should contains correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={newStatus => {} } />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("it-kamasutra.com");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={newStatus => {} } />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();

        const input = root.findByType("input");
        expect(input.props.value).toBe("it-kamasutra.com");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback} />);
        const instance: any = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

// https://www.valentinog.com/blog/testing-react/