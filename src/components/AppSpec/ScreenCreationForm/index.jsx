/*
  This file has been partially generated!
  To permit updates to the generated portions of this code in the future,
  please follow all rules at https://bit.ly/nsFrontEndRules
 */
// ns__file unit: appSpec, comp: ScreenCreationForm

// ns__custom_start unit: appSpec, comp: ScreenCreationForm, loc: beforeImports
// ns__custom_end unit: appSpec, comp: ScreenCreationForm, loc: beforeImports

// ns__start_section imports
import React, { useState, useContext } from 'react';
import { graphql } from '@apollo/react-hoc';
import styled from 'styled-components';
import { EXECUTE } from '@nostack/no-stack';
import compose from '@shopify/react-compose';

import PropTypes from 'prop-types';

import { CREATE_SCREEN_FOR_APP_SPEC_ACTION_ID } from '../../../config';
// ns__custom_start unit: appSpec, comp: ScreenCreationForm, loc: addedImports
// <!-- prettier-ignore-start -->
import StepContext from '../../../StepContext';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, TextField, InputAdornment } from '@material-ui/core';
import { keyframes } from 'styled-components';
// <!-- prettier-ignore-end -->
// ns__custom_end unit: appSpec, comp: ScreenCreationForm, loc: addedImports
// ns__end_section imports

// ns__start_replacement stylingSection
const ScreenStyleWrapper = styled.div(
  ({ selected, isDeleting }) => `
  // ns__custom_start unit: appSpec, comp: Screen, loc: styling
  // add styling here
  margin: 2rem 0 .2rem 2rem;
  @media (max-width: 480px) {
    margin: 2rem 0 .2rem 2rem;


  }
  // padding: ${selected ? '0' : '1.5rem'};
  
  border-radius: 10px;
  
  background-color: ${(isDeleting && 'tomato') || (selected && 'white') || ''};
  cursor: ${selected ? 'auto' : 'pointer'};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -31px;
    left: -29px;
    border-left: 2px dashed #a2a5b5;
    width: 1px;
    height: ${(selected && '109%') || '138%'}; 
   
  }

 
  &:after {
    content: "";
    position: absolute;
    border-top: 2px dashed #a2a5b5;
    top: ${(selected && '57px') || '44px'};
    left: -30px;
    width: ${(selected && '30px') || '29px'}; 
  }

  &:last-child:before {
    top: -33px ;
    height: ${(selected && '90px') || '77px'}; 
  }
  // ns__custom_end unit: appSpec, comp: Screen, loc: styling
`
);
const Form = styled.div`
  // ns__custom_start unit: appSpec, comp: ScreenCreationForm, loc: styling
  margin: 0.8rem 0 0.5rem 0.8rem;
  border: none;
  border-radius: 5px;

  &:before {
    content: '';
    position: absolute;
    top: -31px;
    left: -31px;
    border-left: 2px dashed #a2a5b5;
    width: 1px;
    height: '141%';
  }

  &:after {
    content: '';
    position: absolute;
    border-top: 2px dashed #a2a5b5;
    top: '44px';
    left: -30px;
    width: '29px';
  }

  &:last-child:before {
    top: -76px;
    height: '116px';
  }
  // ns__custom_end unit: appSpec, comp: ScreenCreationForm, loc: styling
`;
// ns__end_replacement stylingSection

// ns__start_replacement button
// ns__end_replacement button

// ns__custom_start unit: appSpec, comp: ScreenCreationForm, loc: beforeFunction
const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    
  }
  100% {
    opacity: 1;
    
  }
`;

const CalloutBox = styled.div`
  padding: 1rem;
  animation: ${fadeInDown} 1.5s;
  background-color: #F3E196;
  width: inherit;
  border-radius: 10px;  
  position: relative;
  margin: .5rem;
  display: flex;
  justify-content: space-between;
  

  :after{
    background-color: #F3E196;
    position: absolute;
    width: 27px;
    height: 8px;
    border-top: 0px solid #F3E196;
    border-right: 2px solid #F3E196;
    border-left: 0px solid #F3E196;
    border-bottom: 2px solid #F3E196;
    left: 75px;
    
    content: '';
    transform: rotate(45deg);
    margin-top: -13px;
    }
  }
`;

const useStyles = makeStyles({
  button: {
    minWidth: 0,
  },
  customWidth: {
    maxWidth: '500',
    minWidth: '300',
    backgroundColor: 'blue',
  },
  helpIcon: {
    fontSize: '1.5rem',
    color: '#FDCC00',
  },
  closeIcon: {
    color: 'white',
    fontSize: '1rem',
  },
  textField: {
    width: '100%',
  },
});
// ns__custom_end unit: appSpec, comp: ScreenCreationForm, loc: beforeFunction

// ns__start_section function
function ScreenCreationForm({
  parentId,
  createScreen,
  refetchQueries,
  // ns__custom_start unit: appSpec, comp: ScreenCreationForm, loc: addedProps
  validateScreens,
  disabled,
  onChange,
  label,
  userTypeCreationCount,
  textLabel,

  // ns__custom_end unit: appSpec, comp: ScreenCreationForm, loc: addedProps
}) {
  const [screenValue, updateScreenValue] = useState('');
  const [loading, updateLoading] = useState(false);
  // ns__custom_start unit: appSpec, comp: ScreenCreationForm, loc: beginning
  const styles = useStyles();
  const [callout, setCallout] = useState(
    useContext(StepContext) == 3 ? true : false
  );
  const showCalloutBox = callout || validateScreens === 0;
  let callOutText = '';

  // if (useContext(StepContext) == 6) {
  //   setCallout(true);
  // }
  if (userTypeCreationCount < 5) {
    callOutText = textLabel;
  } else {
    callOutText = `What is the Screen name ${
      label ? `for ${screenValue} ?` : ''
    }`;
  }

  // useEffect(() => {
  //   setCallout(true);
  // }, [callout]);

  // ns__custom_end unit: appSpec, comp: ScreenCreationForm, loc: beginning

  // ns__start_section handleChange
  function handleChange(e) {
    updateScreenValue(e.target.value);
  }
  // ns__end_section handleChange

  // ns__start_section handleSubmit
  async function handleSubmit(e) {
    e.preventDefault();

    if (!screenValue) {
      return;
    }

    updateLoading(true);

    await createScreen({
      variables: {
        actionId: CREATE_SCREEN_FOR_APP_SPEC_ACTION_ID,
        executionParameters: JSON.stringify({
          parentInstanceId: parentId,
          value: screenValue,
        }),
        unrestricted: false,
      },
      refetchQueries,
    });

    updateScreenValue('');
    updateLoading(false);
  }
  // ns__end_section handleSubmit

  // ns__start_replacement handleKeyPress

  function handleKeyPress(e) {
    // ns__custom_start unit: appSpec, comp: UserTypeCreationForm, loc: insideHandleKeyPress
    // if (e.charCode === 13) {
    //   handleSubmit(e);
    // }
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
    // ns__custom_end unit: appSpec, comp: UserTypeCreationForm, loc: insideHandleKeyPress
  }
  function handleKeyMouse(e) {
    handleSubmit(e);
  }

  // ns__end_replacement handleKeyPress

  // ns__custom_start unit: appSpec, comp: ScreenCreationForm, loc: beforeReturn
  const showCallout = () => {
    setCallout(!callout);
  };
  const handleClickShow = () => setCallout(!callout);

  return (
    <ScreenStyleWrapper>
      <Label htmlFor='screen-value'>
        <TextField
          label='New Screen'
          className={styles.textField}
          value={screenValue}
          onChange={(e) => {
            handleChange(e);
            onChange(e.target.value);
          }}
          onKeyPress={handleKeyPress}
          onMouseUp={handleKeyMouse}
          disabled={disabled || loading}
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <HelpOutlineIcon
                  className={styles.helpIcon}
                  onClick={handleClickShow}
                />
              </InputAdornment>
            ),
          }}
        />
      </Label>
      <StepContext.Consumer>
        {(value) => (
          <div>
            {callout ? (
              <CalloutBox>
                {callOutText}

                <CloseIcon className={styles.closeIcon} onClick={showCallout} />
              </CalloutBox>
            ) : null}
          </div>
        )}
      </StepContext.Consumer>
    </ScreenStyleWrapper>
  );
  // ns__custom_end unit: appSpec, comp: ScreenCreationForm, loc: beforeReturn

  // ns__start_replacement return

  // return (
  //     <Form>
  //       <Label htmlFor='screen-value'>
  //         Screen:
  //         <InputContainer>
  //           <Input
  //               id='screen-value'
  //               type='text'
  //               onChange={handleChange}
  //               onKeyPress={handleKeyPress}
  //               value={screenValue}
  //               disabled={loading}
  //           />

  //           <IconButton className={styles.button} onClick={showCallout}>
  //             <HelpOutlineIcon className={styles.helpIcon} />
  //           </IconButton>
  //         </InputContainer>
  //         <Button type='submit' disabled={loading} onClick={handleSubmit}>
  //           {loading ? 'Creating Screen...' : 'Create Screen'}
  //         </Button>
  //       </Label>
  //       {showCalloutBox ? (
  //           <CalloutBox>
  //             {callOutText}{' '}
  //             <CloseIcon className={styles.closeIcon} onClick={showCallout} />
  //           </CalloutBox>
  //       ) : null}
  //     </Form>
  // );

  // ns__end_replacement return
}

// ns__end_section function

// ns__start_section  compose
export default compose(graphql(EXECUTE, { name: 'createScreen' }))(
  ScreenCreationForm
);
// ns__end_section  compose

// ns__start_section propTypes
ScreenCreationForm.propTypes = {
  parentId: PropTypes.string,
  refetchQueries: PropTypes.array,
  createScreen: PropTypes.func,
  // ns__custom_start unit: appSpec, comp: ScreenCreationForm, loc: addedPropTypes
  // ns__custom_end unit: appSpec, comp: ScreenCreationForm, loc: addedPropTypes
};
// ns__end_section propTypes
