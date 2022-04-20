


/**
 * @desc truncates string to certain length of character. default is 224.
 * @returns { Array }
 * @param {String} stringToBeTruncated
 */
 export const truncateText =  (stringToBeTruncated,  length ) => {
  
    if (stringToBeTruncated.length >= 226) {
        return stringToBeTruncated.substring(0, 230) + "..."
    }

    return stringToBeTruncated
};
