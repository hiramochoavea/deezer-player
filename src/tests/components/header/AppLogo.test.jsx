import { render, screen } from "@testing-library/react";
import AppLogo from "../../../components/header/AppLogo";

const logoName = "SVG-Test";

jest.mock("../../../assets/logo.svg", () => logoName);

describe('AppLogo component', () => {

    it('Render AppLogo component without crashing', () => {
        const { debug, container, getByRole } = render( <AppLogo /> );

        const logoContainer = container.querySelector("#logo-container");

        expect(logoContainer).toBeInTheDocument();
        expect( getByRole("img").src ).toContain(logoName);
    });

});