import React, {useState } from 'react';
import { DocumentPickerOptions, DocumentPicker } from 'react-native-document-picker';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

// const FileUploader = () => {
//     const [ singleFile, setSingleFile ] = useState(null);

//     const uploadImage = async () => {
//         // Check if any file is selected or not
//         if (singleFile != null) {
//           // If file selected then create FormData
//           const fileToUpload = singleFile;
//           const data = new FormData();
//           data.append('name', 'Image Upload');
//           data.append('file_attachment', fileToUpload);
//           // Please change file upload URL
//           let res = await fetch(
//             'http://localhost:19006',
//             {
//               method: 'post',
//               body: data,
//               headers: {
//                 'Content-Type': 'multipart/form-data; ',
//               },
//             }
//           );
//           let responseJson = await res.json();
//           if (responseJson.status == 1) {
//             alert('Upload Successful');
//           }
//         } else {
//           // If no file selected the show alert
//           alert('Please Select File first');
//         }
//       }; 

//       const selectFile = async () => {
//         // Opening Document Picker to select one file
//         try {
//           const res = await DocumentPicker.pick({
//             // Provide which type of file you want user to pick
//             type: [DocumentPicker.types.allFiles],
//             // There can me more options as well
//             // DocumentPicker.types.allFiles
//             // DocumentPicker.types.images
//             // DocumentPicker.types.plainText
//             // DocumentPicker.types.audio
//             // DocumentPicker.types.pdf
//           });
//           // Printing the log realted to the file
//           console.log('res : ' + JSON.stringify(res));
//           // Setting the state to show single file attributes
//           setSingleFile(res);
//         } catch (err) {
//           setSingleFile(null);
//           // Handling any exception (If any)
//           if (DocumentPicker.isCancel(err)) {
//             // If user canceled the document selection
//             alert('Canceled');
//           } else {
//             // For Unknown Error
//             alert('Unknown Error: ' + JSON.stringify(err));
//             throw err;
//           }
//         }
//       };

//       return (
//         <View style={styles.mainBody}>
//           <View style={{ alignItems: 'center' }}>
//             <Text style={{ fontSize: 30, textAlign: 'center' }}>
//               React Native File Upload Example
//             </Text>
//             <Text
//               style={{
//                 fontSize: 25,
//                 marginTop: 20,
//                 marginBottom: 30,
//                 textAlign: 'center',
//               }}>
//               www.aboutreact.com
//             </Text>
//           </View>
//           {/*Showing the data of selected Single file*/}
//           {singleFile != null ? (
//             <Text style={styles.textStyle}>
//               File Name: {singleFile.name ? singleFile.name : ''}
//               {'\n'}
//               Type: {singleFile.type ? singleFile.type : ''}
//               {'\n'}
//               File Size: {singleFile.size ? singleFile.size : ''}
//               {'\n'}
//               URI: {singleFile.uri ? singleFile.uri : ''}
//               {'\n'}
//             </Text>
//           ) : null}
//           <TouchableOpacity
//             style={styles.buttonStyle}
//             activeOpacity={0.5}
//             onPress={selectFile}>
//             <Text style={styles.buttonTextStyle}>Select File</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.buttonStyle}
//             activeOpacity={0.5}
//             onPress={uploadImage}>
//             <Text style={styles.buttonTextStyle}>Upload File</Text>
//           </TouchableOpacity>
//         </View>
//       );
// };

const Upload = () => {
    const [uploadUrl, setUploadUrl] = useState(false);
    const uploadyContext = useContext(UploadyContext);
  
    useItemFinishListener((item) => {
      const response = JSON.parse(item.uploadResponse.data);
      console.log(`item ${item.id} finished uploading, response was: `, response);
      setUploadUrl(response.url);
    });
  
    useItemErrorListener((item) => {
      console.log(`item ${item.id} upload error !!!! `, item);
    });
  
    useItemStartListener((item) => {
      console.log(`item ${item.id} starting to upload,name = ${item.file.name}`);
    });
  
    const pickFile = useCallback(async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],
        });
  
        uploadyContext.upload(res);
        
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          console.log("User cancelled the picker, exit any dialogs or menus and move on");
        } else {
          throw err;
        }
      }
    }, [uploadyContext]);
  
    return (
      <View>
        <Button title="Choose File" onPress={pickFile} />
        {uploadUrl && <Image source={{ uri: uploadUrl }} style={styles.uploadedImage} />}
      </View>
    );
  };

  export default Upload;