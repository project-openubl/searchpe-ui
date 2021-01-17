import React from "react";
import {
  PendingIcon,
  SyncIcon,
  DownloadIcon,
  CompressIcon,
  CheckCircleIcon,
  ErrorCircleOIcon,
} from "@patternfly/react-icons";
import {
  global_success_color_200 as globalSuccessColor200,
  global_danger_color_200 as globalDangerColor200,
} from "@patternfly/react-tokens";
import { VersionStatus } from "api/models";

export interface VersionStatusIconProps {
  value: VersionStatus;
}

export const VersionStatusIcon: React.FC<VersionStatusIconProps> = ({
  value,
}) => {
  return (
    <span>
      {mapStateToIcon(value)}&nbsp;{mapStateToLabel(value)}
    </span>
  );
};

export const mapStateToIcon = (state: VersionStatus) => {
  switch (state) {
    case "SCHEDULED":
      return <PendingIcon />;
    case "DOWNLOADING":
      return <DownloadIcon />;
    case "UNZIPPING":
      return <CompressIcon />;
    case "IMPORTING":
      return <SyncIcon />;
    case "COMPLETED":
      return <CheckCircleIcon color={globalSuccessColor200.value} />;
    case "ERROR":
      return <ErrorCircleOIcon color={globalDangerColor200.value} />;
    default:
      return "Unknown";
  }
};

export const mapStateToLabel = (state: VersionStatus) => {
  switch (state) {
    case "SCHEDULED":
      return "Pending";
    case "DOWNLOADING":
      return "Downloading";
    case "UNZIPPING":
      return "Unzipping";
    case "IMPORTING":
      return "Running";
    case "COMPLETED":
      return "Completed";
    case "ERROR":
      return "Failed";
    default:
      return "Unknown";
  }
};
