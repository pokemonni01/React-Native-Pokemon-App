type ColorType = {
    commonWhite: string;
    commonBlack: string;
    activeColor: string;
    deactiveColor: string;
    boxActiveColor: string;
    themeColor: string;
    white: string;
    sky: string;
    gray: string;
    statusbar: string;
    appBar: string;
    background: string;
    card: string;
};

const commonColor = {
  commonWhite: "#FFFFFF",
  commonBlack: "#000000",
  activeColor: "#DE5E69",
  deactiveColor: "#DE5E6950",
  boxActiveColor: "#DE5E6940",
};

const light: ColorType = {
  themeColor: "#FFFFFF",
  white: "#000000",
  sky: "#DE5E69",
  gray: "gray",
  statusbar: "#E0E0E0",
  appBar: "#F5F5F5",
  background: "#FAFAFA",
  card: "#FFFFFF",
  ...commonColor,
};

const dark: ColorType = {
  themeColor: "#000000",
  white: "#FFFFFF",
  sky: "#831a23",
  gray: "white",
  statusbar: "#000000",
  appBar: "#212121",
  background: "#303030",
  card: "#424242",
  ...commonColor,
};

export default { light, dark };
