import { render, screen } from "@testing-library/react";
import AppLogo from "../../../components/header/AppLogo";

jest.mock("../../../assets/logo.svg", () => "SVG-Test");

describe('AppLogo component', () => {

    it('Render AppLogo component without crashing', () => {
        const { debug, container, getByRole } = render( <AppLogo /> );

        const logoContainer = container.querySelector("#logo-container");

        expect(logoContainer).toBeInTheDocument();
        expect( getByRole("img").src ).toContain("SVG-Test");
    });

});