import {
  EuiFlexGroup,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
} from "@elastic/eui";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EventDetails from "./panels/EventDetails";
import SpeakersPanel from "./panels/SpeakersPanel";
import TalksPanel from "./panels/TalksPanel";
import RecordingsPanel from "./panels/RecordingsPanel";
import FAQsPanel from "./panels/FAQsPanel";
import SponsorLogos from "./SponsorLogos";
import { Routes, Route } from "react-router-dom";
import history from "../utilities/history";

function MainPage({ theme, toggleTheme }) {
  const tabs = [
    {
      id: "event",
      label: "Event Details",
      onClick: () => {
        history.push("/events");
        window.location.reload();
      },
    },
    {
      id: "speakers",
      label: "Speakers",
      onClick: () => {
        history.push("/speakers");
        window.location.reload();
      },
    },
    {
      id: "talks",
      label: "Talks",
      onClick: () => {
        history.push("/talks");
        window.location.reload();
      },
    },
    {
      id: "recordings",
      label: "Recordings",
      onClick: () => {
        history.push("/recordings");
        window.location.reload();
      },
    },
    {
      id: "faq",
      label: "FAQs",
      onClick: () => {
        history.push("/faq");
        window.location.reload();
      },
    },
  ];

  return (
    <EuiPage paddingSize="none">
      <EuiFlexGroup className="eui-fullHeight">
        <EuiPageBody panelled>
          <Navbar
            tabs={tabs}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <EuiPageContent
            hasBorder={false}
            hasShadow={false}
            paddingSize="none"
            color="transparent"
            borderRadius="none"
            verticalPosition="center"
            horizontalPosition="center"
          >
            <EuiPageContentBody>
              <Routes>
                <Route path="/" element={<EventDetails />} />
                <Route path="/events" element={<EventDetails />} />
                <Route path="/speakers" element={<SpeakersPanel />} />
                <Route path="/talks" element={<TalksPanel />} />
                <Route path="/recordings" element={<RecordingsPanel />} />
                <Route path="/faq" element={<FAQsPanel />} />
              </Routes>
            </EuiPageContentBody>
            <EuiSpacer size="xl" />
            <SponsorLogos />
          </EuiPageContent>
          <EuiSpacer size="xl" />
          <Footer theme={theme} />
        </EuiPageBody>
      </EuiFlexGroup>
    </EuiPage>
  );
}

export default MainPage;
