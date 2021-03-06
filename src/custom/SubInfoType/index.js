import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';
import { graphql } from '@apollo/react-hoc';

import PropTypes from 'prop-types';
import {
  UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  ADD_HAS_PARENT_FOR_PARENT_ACTION_ID,
  CREATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
  TYPE_INFO_TYPE_ID,
} from '../../config';

import EditInstanceForm from '../../components/EditInstanceForm';
import DeleteInstanceMenu from '../../components/DeleteInstanceMenu';
import { InputLabel, makeStyles } from '@material-ui/core';
import Recursive from '../recursive';

// ns__custom_start unit: appSpec, comp: SubInfoType, loc: addedImports
import SubInfoChildTypes from '../SubInfoChildTypes';
import CustomChildSub from '../CustomChildSub';
// ns__custom_end unit: appSpec, comp: SubInfoType, loc: addedImports

const SubInfoTypeWrapper = styled.div(
  ({ selected, isDeleting }) => `
  // ns__custom_start unit: appSpec, comp: InfoType, loc: styling
  // add styling here
  margin: 2rem 0 .5rem 0rem;
  padding: ${selected ? '0' : '1.5rem'};
  
  border-radius: 10px;
  
  background-color: ${
    (isDeleting && 'tomato') || (selected && 'white') || '#D2ECEF'
  };
  cursor: ${selected ? 'auto' : 'pointer'};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -2rem;
    left: -2rem;
    border-left: 2px dashed #a2a5b5;
    width: 1px;
    height: ${(selected && '110%') || '146%'}; 
  }

 
  &:after {
    content: "";
    position: absolute;
    border-top: 2px dashed #a2a5b5;
    top: ${(selected && '42px') || '41px'};
    left: -21px;
    width: ${(selected && '21px') || '21px'}; 
  }
  

 

  &:last-child:before {
    top: -32px ;
    height: ${(selected && '75px') || '75px'}; 
    left: -21px;
  }

  @media (max-width: 600px) {

    &:after {
      content: "";
      position: absolute;
      border-top: 2px dashed #a2a5b5;
      top: ${(selected && '41px') || '41px'};
      left: -9px;
      width: ${(selected && '9px') || '9px'}; 
    }
    &:last-child:before {
      top: -32px ;
      height: ${(selected && '75px') || '75px'}; 
      position: absolute;
      left: -10px;
    }


  }
  // ns__custom_end unit: appSpec, comp: InfoType, loc: styling
`
);

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0;
  color: #bbbbbb;
  transition: color 0.5s ease;
  &:hover {
    color: ${(props) => props.hoverColor || '#000000'};
  }
`;
const TitleWrapper = styled.div`
  margin-top: 8px;
  background: #d2ecef;
  padding: 14px;
  border-radius: 10px;
  text-align: initial;
  text-transfor: capitalize;
  display: flex;
  justify-content: space-between;
`;

const useStyles = makeStyles(() => ({
  titleLabel: {
    fontSize: '.8rem',
    textAlign: 'initial',
  },
}));
const SubInfoType = ({
  infoType,
  infoTypeId,
  parentId,
  selected,
  label,
  hasParentId,
  updateInstance,
  deleteInstance,
  refetchQueries,
  onSelect,
  childState,
}) => {
  // console.log(
  //   'subinfotype----',
  //   updateInstance,
  //   childState,
  //   parentId,
  //   infoType,
  //   infoType.parentId
  // );
  // console.log('subinpe----', infoType);
  const [infoTypeValue, setSubInfoTypeValue] = useState(infoType.value);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const styles = useStyles();
  const infoTypeData =
    infoType.children &&
    infoType.children.find((child) => child.typeId === TYPE_INFO_TYPE_ID);

  console.log('chi@@', infoTypeData);
  const infoTypes = infoTypeData ? infoTypeData.instances : [];

  console.log('cnfoTypesinfoTypes', infoTypes[0].id);

  if (!selected) {
    return (
      <SubInfoTypeWrapper onClick={() => onSelect(infoType.id)}>
        {infoTypeValue}
      </SubInfoTypeWrapper>
    );
  }

  const handleSubInfoTypeValueChange = (e) => {
    setSubInfoTypeValue(e.target.value);
  };

  const ob = { ...childState };
  console.log('papapa', ob);

  const handleSubInfoInfoTypeValueSave = async () => {
    setIsSaving(true);

    await updateInstance({
      variables: {
        actionId: UPDATE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          value: infoTypeValue,
          instanceId: infoType.id,
        }),
      },
      refetchQueries,
    });

    setIsEditMode(false);
    setIsSaving(false);
  };

  const handleCancelEdit = () => {
    setIsEditMode(false);
  };

  if (isEditMode) {
    return (
      <SubInfoTypeWrapper>
        <EditInstanceForm
          id={infoType.id}
          label='Sub Info Typsdde'
          value={infoTypeValue}
          onChange={handleSubInfoTypeValueChange}
          onSave={handleSubInfoTypeValueChange}
          onCancel={handleCancelEdit}
          disabled={isSaving}
        />
      </SubInfoTypeWrapper>
    );
  }

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await deleteInstance({
        variables: {
          actionId: DELETE_INFO_TYPE_FOR_APP_SPEC_ACTION_ID,
          executionParameters: JSON.stringify({
            parentInstanceId: parentId,
            instanceId: infoType.id,
          }),
        },
        refetchQueries,
      });
    } catch (e) {
      setIsDeleting(false);
    }
  };

  const handleCanelDelete = () => {
    setIsDeleteMode(false);
  };

  if (isDeleteMode) {
    return (
      <SubInfoTypeWrapper selected={selected} isDeleting={isDeleting}>
        {infoTypeValue}
        <DeleteInstanceMenu
          onDelete={handleDelete}
          onCancel={handleCanelDelete}
          disabled={isDeleting}
        />
      </SubInfoTypeWrapper>
    );
  }

  return (
    <SubInfoTypeWrapper selected={selected}>
      <InputLabel className={styles.titleLabel}>Sub Infoasdas Type</InputLabel>
      <TitleWrapper>
        {infoTypeValue}
        <div>
          <Button type='button' onClick={() => setIsEditMode(true)}>
            &#9998;
          </Button>
          <Button type='button' onClick={() => setIsDeleteMode(true)}>
            &#128465;
          </Button>
        </div>
      </TitleWrapper>
      {/* 
      <Recursive
              subinfoTypeData={childState}
              refetchQueries={refetchQueries}
              childState={childState}
              parentId={parentId}
      
      
      
      /> */}

      <SubInfoChildTypes
        subInfoTypes={infoType._children}
        subInfoId={infoType.id}
        refetchQueries={refetchQueries}
        childState={childState}
        parentId={infoType.parentId}
      />
    </SubInfoTypeWrapper>
  );
};

export default compose(
  graphql(EXECUTE, { name: 'updateInstance' }),
  graphql(EXECUTE, { name: 'deleteInstance' })
)(SubInfoType);

SubInfoType.propTypes = {
  parentId: PropTypes.string,
  selected: PropTypes.bool,
  updateInstance: PropTypes.func,
  deleteInstance: PropTypes.func,
  refetchQueries: PropTypes.array,
  onSelect: PropTypes.func,
  childState: PropTypes.shape({
    children: PropTypes.array,
    id: PropTypes.string,
  }),
};
