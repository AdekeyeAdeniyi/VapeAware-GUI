import { CaptionProvider } from "./modules/CaptionContext";
import { ProgressProvider } from "./modules/ProgressContext";

const AppProviders = ({ children }) => {
  return (
    <ProgressProvider>
      <CaptionProvider>{children}</CaptionProvider>
    </ProgressProvider>
  );
};

export default AppProviders;
