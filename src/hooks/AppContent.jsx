import { CaptionProvider } from "./modules/CaptionContext";
import { ProgressProvider } from "./modules/ProgressContext";
import { VideoProvider } from "./modules/VideoContext";

const AppProviders = ({ children }) => {
  return (
    <ProgressProvider>
      <CaptionProvider>
        <VideoProvider>{children}</VideoProvider>
      </CaptionProvider>
    </ProgressProvider>
  );
};

export default AppProviders;
