import React from 'react';
import { Button } from '../../src/basicComponents/Button';
import { Tabs, Tab, TabDummyComponent } from '../../src/basicComponents/Tabs';

export default {
  title: 'Components API|Basic Components/Tabs/Tab',
  component: TabDummyComponent,
};

export const TabPlayground = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabHandler = (newTab: number) => {
    setActiveTab(newTab);
  };

  return (
    <Tabs
      className="p-2 border shadow rounded m-2"
      value={activeTab}
      onTabChange={tabHandler}
    >
      <Tab value={0}>
        <Button className="bg-green-400 text-white rounded shadow mr-2">
          Profile
        </Button>
      </Tab>
      <Tab value={1}>
        <Button className="bg-green-400 text-white rounded shadow mr-2">
          Settings
        </Button>
      </Tab>
      <Tab value={2}>
        <Button className="bg-green-400 text-white rounded shadow mr-2">
          Other
        </Button>
      </Tab>
    </Tabs>
  );
};
