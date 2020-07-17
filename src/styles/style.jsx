import { css } from "styled-components";
import theme from "./theme";
const { colors, fontSizes, textColor } = theme;

const MixStyle = {
  Label: css`
    font-size: ${fontSizes.textSize3};
    color: ${textColor.primary};
    line-height: 36px;
    font-weight: bold;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexStart: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  flexArround: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Link: css`
    font-size: ${fontSizes.link};
    color: ${colors.Fiord};
    line-height: 24px;
    font-weight: 500;
    display: inline-flex;
  `,
  DropDownMenu: css`
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    color: #7e93ab;
  `,
  TabelTd: css`
    font-weight: 600;
    font-size: ${fontSizes.small};
    line-height: 20px;
    letter-spacing: 0.2px;
    color: ${colors.grayscale_black};
  `,
  DropDownLi: css`
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    color: #7e93ab;
  `,
  Section: css`
    background: #ffffff;
    border-radius: 10px;
  `,
  inputStyle: css`
    background: #ffffff;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    height: 50px;
    border: 1px solid #dedede;
  `,
  inputTextSize: css`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #979ba4;
  `,
  inputPrefixIcon: css`
    font-size: 25px;
    color: #404e67;
    margin-right: 10px;
  `,
  shadow: css`
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  `,
};

export default MixStyle;
