import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const results = [];
      values.forEach((value) => {
        if (value.status === 'fulfilled') {
          results.push({
            status: value.status,
            value: value.value,
          });
        } else {
          results.push({
            status: value.status,
            value: `Error: ${value.reason.message}`,
          });
        }
      });
      return results;
    });
}
