const USER_KEY = 'dailyhire_user';

/**
 * Returns the current logged-in user object, or null if not logged in.
 */
export function getUser() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Saves a user object to localStorage (simulates login/signup).
 * @param {object} userData - { firstName, lastName, email, accountType, profession?, experience?, bio? }
 */
export function setUser(userData) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USER_KEY, JSON.stringify(userData));
}

/**
 * Clears the current user session (simulates logout).
 */
export function clearUser() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(USER_KEY);
}
