const errorMessages = {
  compare_count_desktop_err:
    "You can compare up to 3 products. Try removing one to add another.",
  compare_count_mobile_err:
    "You can compare up to 2 products. Try removing one to add another.",
  compare_category_err: "You can compare only products within same category.",
  not_allow_place_order:
    "Checkout is currently unavailable. Our team is aware of this issue and are working on it. Please try again later.",
  out_of_stock: {
    collect_info: "This order can be collected from a Vodacom Shop\nYou can choose between delivery or collection options during checkout",
    multicart_standalone_out_of_stock: "One or more of the products in your cart is currently out of stock. Please remove it in order to start checkout.",
    any_out_of_stock: "One or more of the products in your cart is currently out of stock. Please remove it in order to start checkout.",
    long_delivery: "One of the items in your cart is currently not available. Delivery of your whole order will take longer than usual since we’ll need to wait for this item to become available for dispatch."
  },
  checkout: {
    errors: {
      addressForm: {
        delivery: {
          addressName: "Please enter a name for this address",
          addressType: "Please select your address type",
          companyName: "Please enter your company name",
          addressLine1: "Please enter your postal address(Line 1)",
          addressLine2: "Please enter your postal address(Line 2)",
          unitNo: "Please enter a unit no.",
          floorNo: "Please enter a unit / floor no.",
          complexName: "Please enter your complex name",
          officeComplexName: "Please enter your office park / building name",
          streetNo: "Please enter your street no.",
          streetName: "Please enter your street name",
          suburb: "Please enter and select suburb",
          postalCode: "Please enter your postal code",
          town: "Please enter your town/city name",
          province: "Please select your province",
          instructions: "Please enter special instructions",
        },
        billing: {
          addressName: "Please enter a name for this address",
          addressType: "Please select your address type",
          companyName: "Please enter your company name",
          addressLine1: "Please enter your postal address(Line 1)",
          addressLine2: "Please enter your postal address(Line 2)",
          unitNo: "Please enter a unit no.",
          floorNo: "Please enter a unit / floor no.",
          complexName: "Please enter your complex name",
          officeComplexName: "Please enter your office park / building name",
          streetNo: "Please enter your street no.",
          streetName: "Please enter your street name",
          suburb: "Please enter and select suburb",
          postalCode: "Please enter your postal code",
          town: "Please enter your town/city name",
          province: "Please select your province",
          instructions: "Please enter special instructions",
        },
        companyInformation: {
          addressName: "Please enter a name for this address",
          addressType: "Please select your address type",
          companyName: "Please enter your company name",
          addressLine1: "Please enter your postal address(Line 1)",
          addressLine2: "Please enter your postal address(Line 2)",
          unitNo: "Please enter a unit no.",
          floorNo: "Please enter a unit / floor no.",
          complexName: "Please enter your complex name",
          officeComplexName: "Please enter your office park / building name",
          streetNo: "Please enter your street no.",
          streetName: "Please enter your street name",
          suburb: "Please enter and select suburb",
          postalCode: "Please enter your postal code",
          town: "Please enter your town/city name",
          province: "Please select your province",
          instructions: "Please enter special instructions",
          companyVatName: "Please enter your company name",
          companyVatNumber: "Please enter your company VAT number",
        },
        details: {
          firstName: "Please enter your first name",
          surName: "Please enter your surname",
          cellNumber: "Please enter your cellphone number",
          email: "Please enter your email address",
        },
        contactDetails: {
          firstName: "Please enter your first name",
          surName: "Please enter your surname",
          cellNumber: "Please enter a cellphone number",
        },
        instructions: {
          instructions: "Please enter special instructions",
        },
      },
    },
    delivery: {
      unitNo: {
        onlyNumber: "Unit no. should be a number",
      },
      floorNo: {
        onlyNumber: "Unit / Floor no. should be a number",
      },
      streetNo: {
        onlyValid: "Please enter a valid street number",
      },
      streetName: {
        onlyValid: "This field cannot contain special characters",
      },
      postalCode: {
        onlyNumber: "Postal code should be a number",
        onlyValid: "Please enter valid postal code",
      },
    },
    billing: {
      unitNo: {
        onlyNumber: "Unit no. should be a number",
      },
      floorNo: {
        onlyNumber: "Unit / Floor no. should be a number",
      },
      streetNo: {
        onlyValid: "Please enter a valid street number",
      },
      streetName: {
        onlyValid: "This field cannot contain special characters",
      },
      postalCode: {
        onlyNumber: "Postal code should be a number",
        onlyValid: "Please enter valid postal code",
      },
    },
    details: {
      firstName: {
        minCharacters: "Must be longer than 2 characters",
      },
      surName: {
        minCharacters: "Must be longer than 2 characters",
      },
      email: {
        onlyValid: "Invalid email address",
      },
      cellNumber: {
        onlyNumber: "This field should only contain numbers",
        startWith: "Cellphone number must start with 0 or 27",
      },
    },
    contactDetails: {
      firstName: {
        minCharacters: "Must be longer than 2 characters",
      },
      surName: {
        minCharacters: "Must be longer than 2 characters",
      },
      cellNumber: {
        onlyNumber: "This field should only contain numbers",
        startWith: "Cellphone number must start with 0 or 27",
      },
    },
  },

  staticFormfieldErrorsMessage: {
    upgradeNumber: {
      cellNumber: "Please enter your cellphone number",
    },
    specialNeeds: {
      name: "Please enter your first name",
      surName: "Please enter your surname",
      cellNumber: "Please enter your cellphone number",
      email: "Please enter your email address",
      confirmEmail: "Please enter your email address",
      contact: "Please select your contact",
      document: "Please upload your document",
    },
    nextLevel: {
      name: "Please enter your first name",
      surName: "Please enter your surname",
      cellNumber: "Please enter your cellphone number",
      email: "Please enter your email address",
      confirmEmail: "Please enter your email address",
      saId: "Please enter your Id number",
    },
    ecommerce: {
      name: "Please enter your first name",
      surName: "Please enter your surname",
      cellNumber: "Please enter your cellphone number",
      email: "Please enter your email address",
      confirmEmail: "Please enter your email address",
    },
  },
  checkoutAuthentication: {
    errors: {
      auth: {
        idType: "Please select your ID type",
        idNumber: "Please enter your ID number",
        cellNumber: "Please enter your cellphone number",
        passportNumber: "Please enter your passport number",
        passportExpiry: "Please enter your passport expiry date",
        countryOrigin: "Please select a country of origin",
      },
    },
    idNumber: {
      onlyNumber: "This field should only contain numbers",
      minCharacters: "Please enter at least 13 characters",
    },
    cellNumber: {
      onlyNumber: "This field should only contain numbers",
      startWith: "Cellphone number must start with 0 or 27",
    },
    passportNumber: {
      onlyValid: "Please enter a valid passport number",
    },
    passportExpiry: {
      onlyValid: "Please enter a valid passport expiry date",
      sixMonthsExpiry: "Passport expiry date shouldn't be less than 6 months",
    },
  },
  creditCheckout: {
    errors: {
      personal: {
        personalDetails: {
          title: "Please select your title",
          initials: "Please enter your initials",
          firstName: "Please enter your first name",
          surName: "Please enter your last name",
          gender: "Please enter your gender",
          dob: "Please enter your date of birth",
          maritalStatus: "Please select your marital status",
        },
      },
      contact: {
        contactDetails: {
          cellNumber: "Please enter your cellphone number",
          emailAddress: "Please enter your email address",
        },
      },
      employment: {
        employmentDetails: {
          employerName: "Please enter your employer's name",
          employerNumber: "Please enter your employer's number",
          employmentType: "Please select your employment type",
          employmentCategory: "Please select your employment category",
          occupation: "Please select your occupation",
          salaryDate: "Please select your salary date",
          grossMonthlySalary: "Please enter your monthly salary before tax",
        },
      },
      home: {
        homeDetails: {
          unitNo: "Please enter a unit no.",
          complexName: "Please enter your complex name",
          streetNo: "Please enter your street no.",
          streetName: "Please enter your street name",
          suburb: "Please enter your suburb",
          postalCode: "Please enter your postal code",
          province: "Please select your province",
          residence: "Please select do you own or rent this property",
          town: "Please enter your town/city name",
          currentAddressPeriod: "Please enter a valid number of years and months",
          previousAddressPeriod: "Please enter a valid number of years and months",
        },
      },
      debit: {
        debitDetails: {
          bank: "Please select your bank",
          accountType: "Please select the type of account this is",
          accountNumber: "Please enter your account number",
          initials: "Please enter valid initials",
          surname: "Please enter valid surname",
          duration: "Please enter a valid number of years and months",
          debitOrderDate: "Please select the debit order date you’d prefer",
          branchName: "Please enter branch name ",
          branchCode: "Please enter your branch code",
        },
      },
      delivery: {
        deliveryDetails: {
          addressName: "Please enter a name for this address",
          addressType: "Please select your address type",
          companyName: "Please enter your company name",
          unitNo: "Please enter a unit no.",
          floorNo: "Please enter a unit / floor no.",
          complexName: "Please enter your complex name",
          officeComplexName: "Please enter your office park / building name",
          streetNo: "Please enter your street no.",
          streetName: "Please enter your street name",
          suburb: "Please enter and select suburb",
          postalCode: "Please enter your postal code",
          town: "Please enter your town/city name",
          province: "Please select your province",
        },
      },
    },
    personalDetails: {
      initials: {
        onlyValid: "Please enter valid initials",
      },
      firstName: {
        onlyValid: "Please enter a valid name",
        minCharacters: "Your first name should contain more than 2 characters",
      },
      surName: {
        onlyValid: "Please enter a valid name",
        minCharacters: "Your last name should contain more than 2 characters",
      },
      dob: {
        onlyValid: "Please enter a valid date of birth",
        minAge: "Please note that you must be over 18 to apply for a contract",
      },
      gender: {
        matchValue: "Title does not match gender",
      },
    },
    employmentDetails: {
      grossMonthlySalary: {
        onlyValid: "Please enter a valid salary amount",
        onlyZero: "This amount must be more than R0",
      },
      employerNumber: {
        onlyNumber: "This field should only contain numbers",
        startWith: "Employer's number must start with 0 or 27",
      },
    },
    homeDetails: {
      unitNo: {
        onlyNumber: "Unit no. should be a number",
      },
      streetNo: {
        onlyValid: "Please enter a valid street number",
      },
      streetName: {
        onlyValid: "This field cannot contain special characters",
      },
      postalCode: {
        onlyNumber: "Postal code should be a number",
        onlyValid: "Please enter valid postal code",
      },
      currentAddressPeriod: {
        onlyValid: "Please enter a valid number of years and months",
      },
      previousAddressPeriod: {
        onlyValid: "Please enter a valid number of years and months",
      },
    },
    debitDetails: {
      accountNumber: {
        onlyValid: "Please enter valid account number",
      },
      duration: {
        onlyValid: "Please enter a valid number of years and months",
      },
      branchCode: {
        onlyValid: "Please enter valid branch code",
      },
    },
    deliveryDetails: {
      unitNo: {
        onlyNumber: "Unit no. should be a number",
      },
      floorNo: {
        onlyNumber: "Unit / Floor no. should be a number",
      },
      streetNo: {
        onlyValid: "Please enter a valid street number",
      },
      streetName: {
        onlyValid: "This field cannot contain special characters",
      },
      postalCode: {
        onlyNumber: "Postal code should be a number",
        onlyValid: "Please enter valid postal code",
      },
    },
    contactDetails: {
      emailAddress: {
        onlyValid: "Invalid format. Please check your email address.",
      },
      cellNumber: {
        onlyNumber: "This field should only contain numbers",
        startWith: "Cellphone number must start with 0 or 27",
      },
    },
  },
};

export default errorMessages;
