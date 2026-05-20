import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Tab } from "../../types/Tab";

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = tabs.find((tab) => tab.id === tabId);
  const isTabInvalid = !tabId || !activeTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={tab.id === activeTab?.id ? "is-active" : ""}
              data-cy="Tab"
              key={tab.id}
            >
              <NavLink to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isTabInvalid ? <div>Please select a tab</div> : activeTab?.content}
      </div>
    </div>
  );
};
