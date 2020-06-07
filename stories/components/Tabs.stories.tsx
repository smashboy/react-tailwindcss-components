import React from 'react';
import { Button } from '../../src/basicComponents/Button';
import {
  Tabs,
  Tab,
  TabPanel,
  TabsProps,
  TabProps,
  TabPanelProps,
} from '../../src/basicComponents/Tabs';

export default {
  title: 'Components API|Basic Components/Tabs',
  component: TabsProps,
  subcomponents: { TabProps, TabPanelProps },
};

export const TabsPlayground = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabHandler = (newTab: number) => {
    setActiveTab(newTab);
  };

  const activeTabHandler = (tabId: number) =>
    activeTab === tabId ? 'bg-green-400 text-white' : 'bg-white text-green-400';

  return (
    <div className="flex flex-wrap m-2">
      <Tabs
        className="p-2 border shadow-sm rounded mb-4 w-full"
        value={activeTab}
        onTabChange={tabHandler}
      >
        <Tab value={0}>
          <Button className={`${activeTabHandler(0)} rounded shadow mr-2`}>
            Profile
          </Button>
        </Tab>
        <Tab value={1} disabled>
          <Button className={`${activeTabHandler(1)} rounded shadow mr-2`}>
            Settings
          </Button>
        </Tab>
        <Tab value={2}>
          <Button className={`${activeTabHandler(2)} rounded shadow mr-2`}>
            Other
          </Button>
        </Tab>
      </Tabs>
      <TabPanel
        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded px-4 py-5 flex-auto"
        value={0}
        activeTab={activeTab}
      >
        Collaboratively administrate empowered markets via plug-and-play
        networks. Dynamically procrastinate B2C users after installed base
        benefits. <br /> <br />
        Dramatically visualize customer directed convergence without
        revolutionary ROI.
      </TabPanel>
      <TabPanel
        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded px-4 py-5 flex-auto"
        value={2}
        activeTab={activeTab}
      >
        Efficiently unleash cross-media information without cross-media value.
        Quickly maximize timely deliverables for real-time schemas.
        <br />
        <br /> Dramatically maintain clicks-and-mortar solutions without
        functional solutions.
      </TabPanel>
    </div>
  );
};
