export type StaffPortal = 'mot' | 'ops';

export const STAFF_COOKIE: Record<StaffPortal, string> = {
  mot: 'rydo_mot_staff',
  ops: 'rydo_ops_staff',
};

export const STAFF_ALLOWLIST_TABLE: Record<StaffPortal, string> = {
  mot: 'mot_staff',
  ops: 'rydo_staff',
};

export const STAFF_LOGIN_PATH: Record<StaffPortal, string> = {
  mot: '/mot',
  ops: '/ops',
};

export const STAFF_DASHBOARD_PATH: Record<StaffPortal, string> = {
  mot: '/mot/dashboard',
  ops: '/ops/dashboard',
};

export const STAFF_COOKIE_MAX_AGE = 8 * 60 * 60;

export function isStaffPortal(value: string): value is StaffPortal {
  return value === 'mot' || value === 'ops';
}
