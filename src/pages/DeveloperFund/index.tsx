import * as React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row, Skeleton, Tooltip, Typography } from "antd";
import orderBy from "lodash/orderBy";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TimeAgo from "timeago-react";
import BigNumber from "bignumber.js";
import {
  PreferencesContext,
  CurrencySymbol,
  CurrencyDecimal,
} from "api/contexts/Preferences";
import { MarketStatisticsContext } from "api/contexts/MarketStatistics";
import useAccountsBalances from "api/hooks/use-accounts-balances";
import useAvailableSupply from "api/hooks/use-available-supply";
import useDeveloperAccountFund from "api/hooks/use-developer-fund-transactions";
import QuestionCircle from "components/QuestionCircle";
import LoadingStatistic from "components/LoadingStatistic";
import { rawToRai, timestampToDate } from "components/utils";
import {
  GENESIS_ACCOUNT,
  POG_FUND_ACCOUNTS,
  DEF_FUNDS,
  ORIGINAL_DEVELOPER_FUND_BLOCK,
  ORIGINAL_DEVELOPER_FUND_BURN_BLOCK,
  ORIGINAL_DEVELOPER_FUND_ACCOUNT,
  ORIGINAL_EXPENSE_FUND_ACCOUNT,
  ORIGINAL_EXPENSE_FUND_BLOCK
} from "../../knownAccounts.json";

const DEVELOPER_FUND_CHANGE_LINK =
  "https://medium.com/nanocurrency/announcement-changes-to-nano-foundation-development-fund-account-43f8f340a841";
const DEVELOPER_FUND_ORIGINAL_LINK =
  "https://docs.nano.org/protocol-design/distribution-and-units/#distribution";

const { Title } = Typography;

const DeveloperFund: React.FC = () => {
  const { t } = useTranslation();
  let totalBalance: number = 0;
  const { fiat } = React.useContext(PreferencesContext);
  const {
    marketStatistics: {
      currentPrice,
      priceStats: { bitcoin: { [fiat]: btcCurrentPrice = 0 } } = {
        bitcoin: { [fiat]: 0 },
      },
    },
    isInitialLoading: isMarketStatisticsInitialLoading,
  } = React.useContext(MarketStatisticsContext);
  const {
    accountsBalances,
    isLoading: isAccountsBalancesLoading,
  } = useAccountsBalances(DEF_FUNDS);
  //const { availableSupply } = useAvailableSupply();
  const totalSupply = 340282366920.9385;
  const { developerFundTransactions } = useDeveloperAccountFund();
  const isSmallAndLower = !useMediaQuery("(min-width: 576px)");

  const data = orderBy(
    Object.entries(accountsBalances?.balances || []).reduce(
      // @ts-ignore
      (accounts, [account, { balance, pending }]) => {
        const calculatedBalance = new BigNumber(rawToRai(balance || 0))
          .plus(rawToRai(pending || 0))
          .toNumber();

        totalBalance = new BigNumber(totalBalance)
          .plus(calculatedBalance)
          .toNumber();

        accounts.push({
          account,
          balance: calculatedBalance,
        });

        return accounts;
      },
      [] as any,
    ),
    ["balance"],
    ["desc"],
  );

  const fiatBalance = new BigNumber(totalBalance)
    .times(currentPrice)
    .toFormat(CurrencyDecimal?.[fiat]);
  const btcBalance = new BigNumber(totalBalance)
    .times(currentPrice)
    .dividedBy(btcCurrentPrice)
    .toFormat(12);

  const skeletonProps = {
    active: true,
    paragraph: false,
    loading: isAccountsBalancesLoading || isMarketStatisticsInitialLoading,
  };

  const { amount, local_timestamp = 0, hash: lastTransactionHash } =
    developerFundTransactions?.[0] || {};
  const modifiedTimestamp = Number(local_timestamp) * 1000;
  const lastTransactionAmount = new BigNumber(rawToRai(amount || 0)).toNumber();

  return (
    <>
      <Helmet>
        <title>PAW {t("menu.developerFund")}</title>
      </Helmet>

      <Title level={3}>
        {t("pages.developerFund.totalAccounts", { totalAccounts: data.length })}
      </Title>

      <Card
        size="small"
        bordered={false}
        className="detail-layout"
        style={{ marginBottom: "12px" }}
      >
        {!isSmallAndLower ? (
          <>
            <Row gutter={6}>
              <Col sm={10} md={10} xl={6}>
                {t("common.balance")}
              </Col>
              <Col sm={14} md={14} xl={18}>
                {t("common.account")}
              </Col>
            </Row>
          </>
        ) : null}
        {data?.map(({ account, balance }) => (
          <Row gutter={6} key={account}>
            <Col sm={10} md={10} xl={6}>
              <span
                className="default-color"
                style={{
                  display: "block",
                }}
              >
                {balance} PAW
              </span>
            </Col>
            <Col sm={14} md={14} xl={18}>
              <Link to={`/account/${account}`} className="break-word">
                {account}
              </Link>
            </Col>
          </Row>
        ))}
      </Card>
    </>
  );
};

/*

            <Row gutter={6}>
              <Col xs={24} sm={6}>
                {t("pages.developerFund.lastTransaction")}
                <Tooltip
                  placement="right"
                  title={t("tooltips.lastTransaction", {
                    totalAccounts: data.length,
                  })}
                >
                  <QuestionCircle />
                </Tooltip>
              </Col>
              <Col xs={24} sm={18}>
                <Skeleton active loading={!modifiedTimestamp} paragraph={false}>
                  <TimeAgo datetime={modifiedTimestamp} live={false} /> (
                  {timestampToDate(modifiedTimestamp)})
                  <br />
                </Skeleton>
                <Skeleton
                  active
                  loading={!lastTransactionAmount}
                  paragraph={false}
                >
                  {lastTransactionAmount} PAW
                  <br />
                </Skeleton>
                <Skeleton
                  active
                  loading={!lastTransactionHash}
                  paragraph={false}
                >
                  <Link
                    to={`/block/${lastTransactionHash}`}
                    className="break-word"
                  >
                    {lastTransactionHash}
                  </Link>
                  <br />
                </Skeleton>
                <Link to={`/developer-fund/transactions`}>
                  <Button
                    type="primary"
                    size="small"
                    style={{ marginTop: "6px" }}
                  >
                    {t("pages.developerFund.allTransactions")}
                  </Button>
                </Link>
              </Col>
            </Row>
			*/
export default DeveloperFund;
