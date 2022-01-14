export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmailHeader = (gravatarEmail) => ({
  type: SAVE_EMAIL,
  gravatarEmail,
});

export const SAVE_USER = 'SAVE_USER';

export const saveUser = (name) => ({
  type: SAVE_USER,
  name,
});
