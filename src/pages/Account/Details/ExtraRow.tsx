import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import { KnownAccountsContext } from "api/contexts/KnownAccounts";

interface Props {
  account: string;
}
const ExtraRow: React.FC<Props> = ({ account }) => {
  const { t } = useTranslation();
  const { knownAccounts } = React.useContext(KnownAccountsContext);

  return (
    <>
      {knownAccounts.find(x => x.account == account)?.alias.includes('Distribution') ? (
        <Row gutter={6}>
          <Col xs={24} sm={6} md={4}>
            {t("common.statistics")}
          </Col>
          <Col xs={24} sm={18} md={20}>
            <Link to="/statistics/distribution">
              {t("common.viewPayouts")}
            </Link>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default ExtraRow;
