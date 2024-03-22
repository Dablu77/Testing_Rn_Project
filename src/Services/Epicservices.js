const _getOTP = async data => {
  try {
    const response = await Instance({
      url: '/User/userLoginApi',
      data: data,
      method: 'POST',
    });

    return response;
  } catch (error) {
    return error;
  }
};

export {_getOTP};
