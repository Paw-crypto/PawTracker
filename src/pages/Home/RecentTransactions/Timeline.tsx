import React from "react";
// import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import { Tag, Timeline, Typography } from "antd";
import TimeAgo from "timeago-react";
import BigNumber from "bignumber.js";
import { Colors, TwoToneColors } from "components/utils";
import { rawToRai } from "components/utils";
import { Theme, PreferencesContext } from "api/contexts/Preferences";
import { Transaction } from "types/transaction";

const { Text } = Typography;

interface Props {
  recentTransactions: Transaction[];
}

const RecentTransactions: React.FC<Props> = ({ recentTransactions }) => {
  //   const { t } = useTranslation();
  const history = useHistory();
  const {
    theme,
    hideTransactionsUnderOneNano,
    disableLiveTransactions,
  } = React.useContext(PreferencesContext);
  const isMediumAndLower = window.innerWidth <= 768;

  return (
    <Timeline className="sticky" mode={isMediumAndLower ? "left" : "alternate"}>
      {recentTransactions.map(
        ({ account, amount, hash, timestamp, alias, block: { subtype } }) => {
          const color =
            // @ts-ignore
            Colors[
              `${subtype.toUpperCase()}${theme === Theme.DARK ? "_DARK" : ""}`
            ];

          return (
            <Timeline.Item
              color={color}
              key={hash}
              className={`fadein ${subtype === "send" ? "right" : "left"}`}
            >
              <div className="first-row">
                <Tag
                  color={
                    // @ts-ignore
                    TwoToneColors[
                      `${subtype.toUpperCase()}${
                        theme === Theme.DARK ? "_DARK" : ""
                      }`
                    ]
                  }
                  className={`tag-${subtype} timeline-tag`}
                >
                  {subtype}
                </Tag>
                {subtype !== "change" ? (
                  <Text style={{ color }} className="timeline-amount">
                    {amount
                      ? `${new BigNumber(rawToRai(amount)).toFormat()} NANO`
                      : "N/A"}
                  </Text>
                ) : null}
                <TimeAgo
                  datetime={timestamp}
                  live={true}
                  className="timeline-timeago color-muted"
                  style={{
                    marginLeft: subtype === "change" ? "6px" : 0,
                  }}
                />
              </div>
              {alias ? <div className="color-important">{alias}</div> : null}
              {hideTransactionsUnderOneNano || disableLiveTransactions ? (
                <>
                  <Link to={`/account/${account}`} className="color-normal">
                    {account}
                  </Link>
                  <br />
                  <Link to={`/block/${hash}`} className="color-muted">
                    {hash}
                  </Link>
                </>
              ) : (
                <>
                  <span
                    className="link color-normal"
                    // iOS has difficulties when using <a> & onClick listeners when CPS are very high,
                    // the other page onClick events becomes unresponsive, using <span> & onMouseDown instead
                    // seems to remove that limitation :shrug:
                    onMouseDown={e => {
                      e.preventDefault();
                      history.push(`/account/${account}`);
                    }}
                  >
                    {account}
                  </span>
                  <br />
                  <span
                    className="link color-muted"
                    onMouseDown={e => {
                      e.preventDefault();
                      history.push(`/block/${hash}`);
                    }}
                  >
                    {hash}
                  </span>
                </>
              )}
            </Timeline.Item>
          );
        },
      )}
    </Timeline>
  );
};

export default RecentTransactions;
