export const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = new Date(isoDate).toLocaleDateString('en-US', options)

    //     const currentDate = new Date();
    // const timestamp = currentDate.getTime();

    // console.log(timestamp); // Output: 1701369148843


    return formattedDate;
};