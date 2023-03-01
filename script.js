function validateForm(theForm) {
    let isValid = true;
    let errorMessage = '';

    if (theForm.clientName.value == '') {
        isValid = false;
        errorMessage = errorMessage + 'Name is required';
        theForm.clientName.focus();
    }

    if (theForm.clientEmail.value.length == 0) {
        errorMessage += '\nEmail is required';
        if (isValid) {
            isValid = false;
            theForm.clientEmail.focus();
        }
    } else {
        if (theForm.clientEmail.value.length <= 6) {
            errorMessage += '\nEmail must be at least 6 characters';
            if (isValid) {
                isValid = false;
                theForm.clientEmail.focus();
            }
        }
    }

    if (theForm.county.value == '') {
        errorMessage += '\nCounty is required'
        if (isValid) {
            isValid = false;
            theForm.county.focus();
        }
    }