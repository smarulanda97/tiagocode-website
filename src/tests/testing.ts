import { render, RenderOptions, RenderResult } from '@testing-library/react';

/*
|--------------------------------------------------------------------------
| Helper -> testing
|--------------------------------------------------------------------------
|
| Helpers functions related to the testing functionality:
|
| function customRender() ->
|   Creates a custom function for rendering the components during the testing.
|   React Context, Providers, etc. should be added to this function.
|
*/

function customRender(ui: React.ReactElement, options: RenderOptions = {}): RenderResult {
    return render(ui, {
        wrapper: ({ children }) => children,
        ...options,
    });
}

export * from '@testing-library/react';
export { default as renderer } from 'react-test-renderer';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
