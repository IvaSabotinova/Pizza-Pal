export const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(isoDate).toLocaleDateString('en-US', options);
    return formattedDate;
};

export const formatDateTime = (isoDate) => {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',       
    };

    const formattedDateTime = new Date(isoDate).toLocaleDateString('en-US', options);
    return formattedDateTime;
}