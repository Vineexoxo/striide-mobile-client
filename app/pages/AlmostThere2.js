import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  StyleSheet,
} from 'react-native';

const Page = () => {
  const [step, setStep] = useState(1);
  const [occupation, setOccupation] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(''); // State for error message


  const handleNextStep = () => {
    if (!occupation || !gender || !birthday || !isChecked) {
      setError('Please fill in all fields and accept the terms to proceed.');
    } else {
      setError('');
      setStep(step + 1);
    }
  };
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {step === 1 ? (
          <View style={styles.stepContainer}>
            {/* Title Section */}
            <Text style={styles.title}>You're almost there!</Text>
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitle}>Tell Us About Yourself!</Text>
              <Text style={styles.privateText}>
                This information is <Text style={styles.privateHighlight}>private</Text> and will not be displayed on your profile.
              </Text>
            </View>

            {/* Form Fields */}
            <View style={styles.formContainer}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Occupation *</Text>
                <TextInput
                  placeholder="ex. Engineer"
                  placeholderTextColor="#555"
                  style={styles.input}
                  value={occupation}
                  onChangeText={setOccupation}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Gender *</Text>
                <TextInput
                  placeholder="Enter your gender"
                  placeholderTextColor="#555"
                  style={styles.input}
                  value={gender}
                  onChangeText={setGender}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Birthday *</Text>
                <TextInput
                  placeholder="YYYY-MM-DD"
                  placeholderTextColor="#555"
                  style={styles.input}
                  value={birthday}
                  onChangeText={setBirthday}
                />
              </View>
            </View>

            {/* Checkbox */}
            <View style={styles.checkboxContainer}>
              <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={styles.checkbox}>
                {isChecked && <View style={styles.checked} />}
              </TouchableOpacity>
              <Text style={styles.checkboxLabel}>
                I hereby confirm that I have read and agree with the{' '}
                <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>.
              </Text>
            </View>

            {/* Error Message */}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            {/* Next Page Button */}
            <TouchableOpacity onPress={handleNextStep} style={styles.nextButton}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.stepContainer}>
            {/* Title Section */}
            <Text style={styles.title}>One last step!</Text>
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitle}>Please complete your profile!</Text>
              <Text style={styles.publicText}>
                This information will be <Text style={styles.publicHighlight}>public</Text> and will help you connect with people.
              </Text>
            </View>

            {/* Upload Section */}
            <View style={styles.uploadContainer}>
              {uploadedImageUrl ? (
                <>
                  <Image source={{ uri: uploadedImageUrl }} style={styles.uploadedImage} />
                  <TouchableOpacity onPress={toggleModal} style={styles.changeImageButton}>
                    <Text style={styles.changeImageButtonText}>Change Image</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity onPress={toggleModal}>
                  {/* <Image source={require('./assets/camera.png')} style={styles.cameraIcon} /> */}
                </TouchableOpacity>
              )}
            </View>

            {/* Modal */}
            <Modal visible={isModalOpen} transparent animationType="fade" onRequestClose={toggleModal}>
              <View style={styles.modalOverlay}>
                <Image source={{ uri: uploadedImageUrl }} style={styles.expandedImage} />
                <TouchableOpacity onPress={toggleModal} style={styles.closeModalButton}>
                  <Text style={styles.closeModalButtonText}>X</Text>
                </TouchableOpacity>
              </View>
            </Modal>

            {/* Next Page Button */}
            <TouchableOpacity onPress={handleNextStep} style={styles.nextButton}>
              <Text style={styles.nextButtonText}>Finish</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292732',
  },
  scrollView: {
    padding: 16,
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: '#E0631D',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    marginVertical: 8,
  },
  subTitleContainer: {
    marginVertical: 8,
  },
  subTitle: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  privateText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  privateHighlight: {
    color: '#00A886',
  },
  formContainer: {
    marginVertical: 16,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    color: '#F4E9E9',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
    color: '#000000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 16,
    height: 16,
    backgroundColor: '#00A886',
    borderRadius: 2,
  },
  checkboxLabel: {
    color: '#FFFFFF',
  },
  link: {
    textDecorationLine: 'underline',
    color: '#FFFFFF',
  },
  nextButton: {
    backgroundColor: '#00A886',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  uploadContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    width: 50,
    height: 50,
  },
  changeImageButton: {
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#00A886',
    borderRadius: 8,
  },
  changeImageButtonText: {
    color: '#FFFFFF',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandedImage: {
    width: 300,
    height: 300,
  },
  closeModalButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 16,
  },
  closeModalButtonText: {
    color: '#FFFFFF',
  },
  errorText: {
    color: 'red',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default Page;
