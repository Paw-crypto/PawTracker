import * as React from "react";
import { useTranslation, Trans } from "react-i18next";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Menu,
  Row,
  Tooltip,
  Typography,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import TimeAgo from "timeago-react";
import useTelemetry, { Percentiles } from "api/hooks/use-telemetry";
import QuestionCircle from "components/QuestionCircle";
import LoadingStatistic from "components/LoadingStatistic";
import { secondsToTime, formatBytes } from "components/utils";

const { Title } = Typography;

const Telemetry: React.FC = () => {
  const { t } = useTranslation();
  const [currentPercentile, setCurrentPercentile] = React.useState(
    Percentiles.P95,
  );
  const {
    telemetry,
    status: { nodeCount, bandwidthCapGroups, date } = {},
    isLoading: isTelemetryLoading,
  } = useTelemetry();
  const [
    formattedMedianBandwidthCap,
    setFormattedMedianBandwidthCap,
  ] = React.useState(formatBytes(0));
  const [
    unlimitedBandwidthCapCount,
    setUnlimitedBandwidthCapCount,
  ] = React.useState<number>();
  const [
    limitedBandwidthCapCount,
    setLimitedBandwidthCapCount,
  ] = React.useState<number>();
  const [limitedBandwidthCap, setLimitedBandwidthCap] = React.useState(
    formatBytes(0),
  );

  React.useEffect(() => {
    if (!telemetry[currentPercentile]) return;
    setFormattedMedianBandwidthCap(
      formatBytes(telemetry[currentPercentile].bandwidthCap),
    );
  }, [telemetry, currentPercentile]);

  const onPercentileClick = ({ key }: any) => {
    setCurrentPercentile(key);
  };

  React.useEffect(() => {
    if (!bandwidthCapGroups) return;
    setUnlimitedBandwidthCapCount(bandwidthCapGroups[0].count);
    setLimitedBandwidthCapCount(bandwidthCapGroups[1]?.count);
    setLimitedBandwidthCap(formatBytes(bandwidthCapGroups[1]?.bandwidthCap));
  }, [bandwidthCapGroups]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          marginBottom: "12px",
        }}
      >
        <Title level={3} style={{ margin: 0 }}>
          {t("pages.status.telemetry")}
        </Title>
        <Tooltip placement="right" title={t("tooltips.telemetry")}>
          <QuestionCircle />
        </Tooltip>
      </div>
      <div style={{ marginBottom: "12px" }}>
        <Dropdown
          overlay={
            <Menu onClick={onPercentileClick}>
              {Object.values(Percentiles).map(percentile => (
                <Menu.Item key={percentile}>{percentile}</Menu.Item>
              ))}
            </Menu>
          }
        >
          <Button>
            {currentPercentile} <DownOutlined />
          </Button>
        </Dropdown>
      </div>

      <Card
        size="small"
        bordered={false}
        className="detail-layout"
        style={{ marginBottom: "12px" }}
      >
        <div style={{ marginBottom: "12px", fontSize: "12px" }}>
          {date ? (
            <>
              {t("common.executionTimeAgo")}{" "}
              <TimeAgo
                datetime={date}
                live={false}
                style={{ fontWeight: "bold" }}
              />
            </>
          ) : null}
          {nodeCount ? (
            <>
              <br />
              <Trans i18nKey="pages.status.nodeCount">
                <strong>{{ nodeCount }}</strong>
              </Trans>
            </>
          ) : null}
          {unlimitedBandwidthCapCount ? (
            <>
              <br />
              <Trans i18nKey="pages.status.unlimitedBandwidthCap">
                <strong>{{ unlimitedBandwidthCapCount }}</strong>
              </Trans>
            </>
          ) : null}
          {limitedBandwidthCapCount && limitedBandwidthCap.value ? (
            <>
              {" "}
              <Trans i18nKey="pages.status.limitedBandwidthCap">
                <strong>{{ limitedBandwidthCapCount }}</strong>
                <strong>
                  {{
                    limitedBandwidthCap: `${limitedBandwidthCap.value} ${limitedBandwidthCap.suffix}`,
                  }}
                </strong>
              </Trans>
            </>
          ) : null}
        </div>
        <Row gutter={6}>
          <Col xs={12} md={6} xl={4}>
            <LoadingStatistic
              isLoading={isTelemetryLoading}
              title={t("common.blocks")}
              value={telemetry[currentPercentile]?.blockCount}
            />
          </Col>
          <Col xs={12} md={6} xl={4}>
            <LoadingStatistic
              isLoading={isTelemetryLoading}
              title={t("pages.status.cemented")}
              tooltip={t("tooltips.cemented")}
              value={telemetry[currentPercentile]?.cementedCount}
            />
          </Col>
          <Col xs={12} md={6} xl={4}>
            <LoadingStatistic
              isLoading={isTelemetryLoading}
              title={t("pages.status.unchecked")}
              tooltip={t("tooltips.unchecked")}
              value={telemetry[currentPercentile]?.uncheckedCount}
            />
          </Col>
          <Col xs={12} md={6} xl={4}>
            <LoadingStatistic
              isLoading={isTelemetryLoading}
              title={t("common.accounts")}
              value={telemetry[currentPercentile]?.accountCount}
            />
          </Col>
          <Col xs={12} md={6} xl={4}>
            <LoadingStatistic
              isLoading={isTelemetryLoading}
              title={t("pages.status.bandwidthCap")}
              tooltip={t("tooltips.bandwidthCap")}
              value={formattedMedianBandwidthCap.value}
              suffix={formattedMedianBandwidthCap.suffix}
            />
          </Col>
          <Col xs={12} md={6} xl={4}>
            <LoadingStatistic
              isLoading={isTelemetryLoading}
              title={t("pages.status.peers")}
              value={telemetry[currentPercentile]?.peerCount}
            />
          </Col>
          <Col xs={12} md={6} xl={4}>
            <LoadingStatistic
              isLoading={isTelemetryLoading}
              title={t("pages.status.uptime")}
              tooltip={t("tooltips.uptime")}
              value={secondsToTime(telemetry[currentPercentile]?.uptime || 0)}
            />
          </Col>
          <Col xs={12} md={6} xl={4}>
            <LoadingStatistic
              isLoading={isTelemetryLoading}
              title={t("pages.status.activeDifficulty")}
              value={telemetry[currentPercentile]?.activeDifficulty}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Telemetry;