import React from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, MixStyle, media } from "../styles";
const { colors, buttonBg, textColor } = theme;
const StyledModal = styled(Modal)`
  max-width: ${({ maxwidth }) => maxwidth || "1095px"};
  width: 100% !important;
  padding-left: 20px;
  padding-right: 20px;
  .ant-modal-content {
    padding: 30px 0px;
    background: #ffffff;
    ${MixStyle.shadow};
    border-radius: 23px;
  }
  .ant-modal-header {
    border-radius: 23px;
    padding: 30px;
    border: none;
  }
  .ant-modal-title {
    font-weight: 800;
    font-size: 36px;
    ${media.minitablet`font-size:24px;`}
    line-height: 54px;
    color: ${textColor.primary};
    text-align: center;
  }
  .ant-modal-footer {
    ${MixStyle.flexCenter}
    > div {
      display: contents;
      margin: auto;
      .ant-btn {
        background: white;
        color: ${textColor.primary};
        ${MixStyle.shadow};
        border-radius: 10px;
        border: 2px solid ${buttonBg.primary};
        width: 187px;
        height: 55px;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
      }
      .ant-btn.ant-btn-primary {
        background: ${buttonBg.primary};
        color: white;
      }
    }
  }
`;
const ModalCompo = (
  {
    className,
    children,
    visibility,
    visible,
    onCreate,
    onCancel,
    onOk,
    isShowing,
    hide,
    ...rest
  },
  theme
) => {
  return (
    <StyledModal
      style={{ top: 20 }}
      {...rest}
      className={className}
      maskStyle={{ background: `${colors.modalBg}` }}
      title={rest.tittle}
      visible={visible}
      closable={rest.closable}
      okText={rest.okText}
      cancelText={rest.cancelText}
      onCancel={onCancel}
      onOk={onOk}
    >
      {children}
    </StyledModal>
  );
};
ModalCompo.propTypes = {
  maxwidth: PropTypes.string,
};
export default ModalCompo;
