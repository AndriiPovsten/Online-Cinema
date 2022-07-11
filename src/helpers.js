//convert time to hours and minutes
export const calcTime = time =>{
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return`${hours}h ${mins}m`;
};
export const convertMoney = money =>{
    const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    return formatted.format(money);
}