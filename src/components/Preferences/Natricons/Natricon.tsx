import * as React from "react";

interface Props {
  account: string;
  style: { [key: string]: string };
}

export const Natricon: React.FC<Props> = ({ account, style }) =>
  account ? (
    <img
      alt="Pawnimal"
      src={`https://pawnimal.paw.digital/api/v1/nano?address=${account}&svc=nanolooker`}
      style={style}
    />
  ) : null;
