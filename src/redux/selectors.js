export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filters;
export const getIsContactsExist = state => getContacts(state).length > 0;
