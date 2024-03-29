/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: InfoTypes

// ns__custom_start unit: appSpec, comp: InfoTypes, loc: beforeImports
// ns__custom_end unit: appSpec, comp: InfoTypes, loc: beforeImports

// ns__start_section imports
import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

// ns__custom_start unit: appSpec, comp: InfoTypes, loc: addedImports
import getChildData from '../../custom/getChildData';
import { Context as UnitDataContext } from '../../custom/UnitDataContext';
import SubChildInfoType from '../SubChildInfoType';
import SubChildInfoTypeCreationForm from '../SubChildInfoTypeCreationForm';
import SubInfoChildTypes from '../SubInfoChildTypes';

// ns__custom_end unit: appSpec, comp: InfoTypes, loc: addedImports
// ns__end_section imports

// ns__start_section stylingSection
const InfoTypesStyleWrapper = styled.div`
  // ns__custom_start unit: appSpec, comp: InfoTypes, loc: styling
  margin: 0 0 0 3%;
  // ns__custom_end unit: appSpec, comp: InfoTypes, loc: styling
`;

// ns__end_section stylingSection

// ns__start_replacement button
// ns__end_replacement button

// ns__custom_start unit: appSpec, comp: InfoTypes, loc: beforeFunction
// ns__custom_end unit: appSpec, comp: InfoTypes, loc: beforeFunction

// ns__start_section function
class CustomChildSub extends Component {
  // ns__custom_start unit: appSpec, comp: InfoTypes, loc: beginning
  // eslint-disable-next-line react/static-property-placement
  static contextType = UnitDataContext;

  // ns__custom_end unit: appSpec, comp: InfoTypes, loc: beginning
  state = {
    selectedInfoTypeId: null,
    // ns__custom_start unit: appSpec, comp: InfoTypes, loc: addedState
    childState1: [],
    parentState: [],
    subInfoTypeValueCount: 0,
    // ns__custom_end unit: appSpec, comp: InfoTypes, loc: addedState
  };

  wrapperRef = createRef();

  // ns__start_section didMount
  componentDidMount() {
    // ns__custom_start unit: appSpec, comp: InfoTypes, loc: componentDidMount
    const { childState1, parentState } = this.state;
    const { childState, subInfoTypes } = this.props;
    console.log('chilcustom', subInfoTypes);

    if (!childState1.length || !parentState.length) {
      const [parentData, childData] = getChildData(childState);

      this.setState({
        childState1: childData,
        parentState: parentData,
        subInfoTypeValueCount: 0,
      });
    }
    // ns__custom_end unit: appSpec, comp: InfoTypes, loc: componentDidMount
    document.addEventListener('mousedown', this.handleClick);
  }
  // ns__end_section didMount

  // ns__start_section willMount
  componentWillUnmount() {
    // ns__custom_start unit: appSpec, comp: InfoTypes, loc: componentWillUnmount
    // ns__custom_end unit: appSpec, comp: InfoTypes, loc: componentWillUnmount
    document.removeEventListener('mousedown', this.handleClick);
  }
  // ns__end_section willMount

  // ns__start_section handleClick
  handleClick = (e) => {
    const node = this.wrapperRef.current;

    if (node && node !== e.target && !node.contains(e.target)) {
      this.setState({ selectedInfoTypeId: null });
    }
  };
  // ns__end_section handleClick

  // ns__start_section handleSelect
  handleSelect = (id) => this.setState({ selectedInfoTypeId: id });
  // ns__end_section handleSelect

  // ns__custom_start unit: appSpec, comp: InfoTypes, loc: beforeRender
  onChangeHelper = (value) => {
    this.setState({ subInfoTypeValueCount: value.length });
  };

  // ns__custom_end unit: appSpec, comp: InfoTypes, loc: beforeRender

  // ns__start_section render
  render() {
    const {
      subInfoId,
      childState,
      subInfoTypes,
      refetchQueries,
      onUpdate,
      parentId,
    } = this.props;

    const { selectedInfoTypeId } = this.state;

    // ns__custom_start unit: appSpec, comp: InfoTypes, loc: renderBeginning
    const { label } = this.props;
    const validateInfoTypes = childState.length;
    const { childState1, parentState, subInfoTypeValueCount } = this.state;
    // const [data] = getChildData(parentState);
    // ns__custom_end unit: appSpec, comp: InfoTypes, loc: renderBeginning

    // ns__start_replacement renderReturn

    return (
      <>
        <InfoTypesStyleWrapper ref={this.wrapperRef} onClick={this.handleClick}>
          {parentState &&
            parentState.map((infoType) => {
              return (
                // eslint-disable-next-line consistent-return

                <SubChildInfoType
                  key={v4()}
                  subChildInfoType={infoType}
                  infoTypeId={infoType.id}
                  selected={infoType.id === selectedInfoTypeId}
                  parentId={parentId}
                  refetchQueries={refetchQueries}
                  onSelect={this.handleSelect}
                  // ns__custom_start unit: appSpec, comp: InfoTypes, loc: addedPropsForChildren
                  hasParentId={infoType.parentId}
                  onChange={this.onChangeHelper}
                  childState={childState}
                  // ns__custom_end unit: appSpec, comp: InfoTypes, loc: addedPropsForChildren
                />
              );
            })}

          <SubChildInfoTypeCreationForm
            refetchQueries={refetchQueries}
            childId={subInfoId}
            parentId={parentId}
          />

          {/* ns__custom_start unit: appSpec, comp: InfoTypes, loc: renderEnding */}
          {/* ns__custom_end unit: appSpec, comp: InfoTypes, loc: renderEnding */}
        </InfoTypesStyleWrapper>
      </>
    );

    // ns__end_replacement renderReturn
  }
  // ns__end_section render
}
// ns__end_section function

// ns__start_section  compose
// ns__end_section  compose

// ns__start_section propTypes
CustomChildSub.propTypes = {
  // ns__custom_start unit: appSpec, comp: InfoTypes, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: InfoTypes, loc: addedPropTypes
};
// ns__end_section propTypes

export default CustomChildSub;
