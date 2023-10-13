import StyledComponentsRegistry from "./AntdRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
    );
};
export default Providers;
