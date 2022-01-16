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

export const UDPATE_SCORE = 'UPDATE_SCORE';

export const updateScore = (score) => ({
  type: UDPATE_SCORE,
  score,
});
