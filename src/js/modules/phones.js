export default function correctPhoneNumber(phoneNumber) {
  const correctNumber = phoneNumber.replace(/\D/g, '');
  return `+${correctNumber.length === 11 ? '7'.concat(correctNumber.slice(1)) : correctNumber}`;
}
