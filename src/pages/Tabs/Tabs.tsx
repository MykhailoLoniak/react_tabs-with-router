import { useParams } from 'react-router-dom';

import { TabsComponent } from '../../components/Tabs';

export const Tabs = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const { tabsId } = useParams();
  const selectedTabId = tabsId || '';

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <TabsComponent
        tabs={tabs}
        selectedTabId={selectedTabId}
      />
    </div>
  );
};
