import React, {Fragment} from 'react';
import styled from 'styled-components/native';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
import PrimaryButton from './PrimaryButton';

  export const Attachment = ({title , hasError }) => {

return (

    <View
      style={styles.container}
    >

      {/* { !isFileAttached && */}

        <Fragment>

          <Text
            style={[
              styles.text,
              styles.title
            ]}
            accessible={true}
            accessibilityTraits={'text'}
            accessibilityLabel={title}
          >
            { title }
          </Text>

          { hasError &&

            <Message
              error={hasError}
              warning={isWarning}
              message={errorMessage}
              title={'Document failed to upload. '}
            />
          }

          <PrimaryButton
            text={'Attach document'}
            onPress={this.handleOnAttachDoc}
            iconUri={FixedLineIcons.Attachment}
            iconColor={Colors.Black}
            textStyle={styles.buttonText}
          />

        </Fragment>
      {/* }

      { isFileAttached && */}

        <View style={styles.row}>

          <Image
            style={styles.docImage}
            source={{
              uri: file?.iconUri
            }}
          />

          <View style={styles.fileDetailsContainer}>

            <Text
              style={styles.text}
              accessible={true}
              accessibilityTraits={'text'}
              accessibilityLabel={title}
            >
              { title }
            </Text>

            <View style={styles.fileDetails}>

            <Text
              style={[
                styles.text,
                styles.filename
              ]}
              numberOfLines={1}
              accessible={true}
              accessibilityTraits={'text'}
              accessibilityLabel={file?.name}
            >
              { file?.name }
            </Text>

            <Text
              style={[
                styles.text,
                styles.fileSize
              ]}
              numberOfLines={1}
              accessible={true}
              accessibilityTraits={'text'}
              accessibilityLabel={AppCore.Accessibility.formatAllDataForAccessibility(file?.displaySize)}
            >
              { file?.displaySize }
            </Text>

            <TouchableOpacity
              style={styles.removeButton}
              onPress={this.reset}
              accessible={true}
              accessibilityTraits={'button'}
              accessibilityComponentType={'button'}
              accessibilityLabel={'Remove attachment'}
            >

              <FontAwesome
                name='trash'
                color={Colors.Grey}
                size={20}
              />

              <Text
                style={[
                  styles.text,
                  styles.removeText
                ]}
                numberOfLines={1}
              >
                Remove
              </Text>

            </TouchableOpacity>

            </View>

          </View>

        </View>
      {/* } */}

    </View>
  );
}


const styles = StyleSheet.create({
container: {
  paddingVertical: 10
},
text: {
  fontSize: 14,
  color: '#C4C4C4'
//   fontFamily: Fonts.VodafoneRegular
},
title: {
  fontSize: 18,
  marginBottom: 15,
//   fontFamily: Fonts.VodafoneRegularBold
},
buttonText: {
//   fontFamily: Fonts.VodafoneRegularBold
},
row: {
  flexDirection: 'row'
},
docImage: {
  width: 60,
  height: 60
},
fileDetailsContainer: {
  flex: 1,
  marginLeft: 8,
  justifyContent: 'center'
},
fileDetails: {
  marginTop: 5,
  alignItems: 'center',
  flexDirection: 'row'
},
filename: {
  flex: 1,
  fontSize: 18,
//   fontFamily: Fonts.VodafoneRegularBold
},
fileSize: {
  marginTop: 3,
  paddingHorizontal: 10,
  color: '#C4C4C4'
},
removeButton: {
  paddingVertical: 2,
  flexDirection: 'row',
  alignItems: 'center'
},
removeText: {
  marginLeft: 8,
  paddingTop: 2,
}
});

export default Attachment;