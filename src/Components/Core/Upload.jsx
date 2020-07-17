import React from "react";
import { Upload } from "antd";
import styled from "styled-components";

const StyledUpload = styled(Upload)`
  display: flex;
  justify-content: center;
  .ant-upload.ant-upload-select-picture-card {
    background: none;
    border: 5px solid #233b67;
    border-radius: 50%;
  }
  .ant-upload.ant-upload-select-picture-card > .ant-upload {
    padding: 0px;
  }
`;
const UploadCompo = ({ children, className, ...props }) => {
  return (
    <StyledUpload className={className} {...props}>
      {children}
    </StyledUpload>
  );
};

export default UploadCompo;
