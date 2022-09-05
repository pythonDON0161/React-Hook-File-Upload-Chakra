import React, { useState, useRef } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  FormErrorMessage,
  Icon,
  Button,
  ButtonGroup
} from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";
import { useStateMachine } from "little-state-machine";
import { useController, useForm, Controller } from "react-hook-form";
import UploadUnit from "./UploadUnit";
import updateAction from "./updateAction";

export const FileUpload = ({
  name,
  placeholder,
  acceptedFileTypes,
  children,
  isRequired = false
}) => {
  const inputRef = useRef();
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    setValue,
    watch,
    control,
    ref
  } = useForm();

  const { action, state } = useStateMachine(updateAction);

  const onSubmit = (data) => {
    console.log("List:" + data.files);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <br />
        <div>
          <UploadUnit name="trn"></UploadUnit>
        </div>
        <br />

        <br />
        <div>
          <UploadUnit name="nis"></UploadUnit>
        </div>
        <br />

        <br />
        <div></div>
        <br />
        <br></br>
        <ButtonGroup spacing={4}>
          <Button loadingText="Submitting" variantColor="teal" type="submit">
            Save Progress
          </Button>
          <Button variantColor="teal" variant="outline">
            Next
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default FileUpload;
