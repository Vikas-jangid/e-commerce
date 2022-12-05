import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './navbar';

    test("should render the default Navbar Component", () => {
      const { container } = render(
        <Router>
          <Navbar />
        </Router>
      );
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const header = container.querySelector(".navbar");
      expect(header).toBeInstanceOf(HTMLDivElement);
    });