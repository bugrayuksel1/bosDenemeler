export const validateUsername = (username) => {
  if (!username) return "Kullanıcı adı boş bırakılamaz";
  if (username.length < 5) return "Kullanıcı adı en az 5 karakter olmalıdır";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "Şifre boş bırakılamaz";
  if (password.length < 6) return "Şifre en az 6 karakter olmalıdır";
  return "";
};
