export const saveAccount = (account) => {
  window.localStorage.setItem("account", JSON.stringify(account));
};

export const getLocalAccount = () => {
  const account: any = window.localStorage.getItem("account");
  return JSON.parse(account);
};

export const saveLocalLanguage = (language) => {
  localStorage.setItem("language", language);
};

export const getLocalLanguage = () => {
  return localStorage.getItem("language") || "GB";
};
