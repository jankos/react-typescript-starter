import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import Heading from "./Heading";

describe('Heading', function () {
   it('should display heading with text', function () {
       const container = document.createElement('div');
       document.body.appendChild(container);
       act(() => {
           ReactDOM.render(<Heading text="Hello Heading" />, container);
       })
       const header = container.querySelector('h1');
       expect(header.textContent).toBe("Hello Heading")
   });
});
