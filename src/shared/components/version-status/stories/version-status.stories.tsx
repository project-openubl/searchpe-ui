import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { VersionStatusIcon, VersionStatusIconProps } from "../version-status";

export default {
  title: "Components / VersionStatusIcon",
  component: VersionStatusIcon,
  argTypes: {
    onPrimaryAction: { action: "clicked" },
  },
} as Meta;

const Template: Story<VersionStatusIconProps> = (args) => (
  <VersionStatusIcon {...args} />
);

export const Scheduled = Template.bind({});
Scheduled.args = {
  value: "SCHEDULED",
};

export const Downloading = Template.bind({});
Downloading.args = {
  value: "DOWNLOADING",
};

export const Unzipping = Template.bind({});
Unzipping.args = {
  value: "UNZIPPING",
};

export const Importing = Template.bind({});
Importing.args = {
  value: "IMPORTING",
};

export const Completed = Template.bind({});
Completed.args = {
  value: "COMPLETED",
};

export const Error = Template.bind({});
Error.args = {
  value: "ERROR",
};
