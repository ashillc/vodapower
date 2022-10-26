import {
    Component
  } from 'react';
  
  import
    * as Updates
  from 'expo-updates';
  
  import {
    Platform
  } from 'react-native';
  
  import
    PropTypes
  from 'prop-types';
  
  export class TestableComponent extends Component {
  
    testID = '';
    accessibilityLabel = '';
    replaceAccessibilityWithAutomation = false;
  
    static propTypes = {
      automationId: PropTypes.string,
      accessibilityLabel: PropTypes.string
    };
  
    constructor(props) {
  
      super(props);
  
      this.testID = typeof props.automationId === 'string'
        ? props.automationId
        : '';
  
      this.accessibilityLabel = typeof props.accessibilityLabel === 'string'
        ? props.accessibilityLabel
        : '';
  
      if (!!Updates.manifest?.extra?.useAutomationIds &&
        !!this.testID && Platform.OS === 'android') {
  
        this.accessibilityLabel = this.testID;
        this.replaceAccessibilityWithAutomation = true;
      }
    }
  }
  