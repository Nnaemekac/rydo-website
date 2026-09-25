export interface RiderApplication {
  id: number;
  full_name: string;
  phone: string;
  email: string;
  preferred_zone: string | null;
  vehicle_type: string | null;
  licence_number: string;
  nin: string | null;
  house_address: string | null;
  state: string | null;
  lga: string | null;
  document_path: string | null;
  selfie_path: string | null;
  status: string | null;
  created_at: string;
}

export interface PackageRequest {
  id: number;
  sender_name: string;
  sender_phone: string;
  pickup_address: string;
  dropoff_address: string;
  recipient_name: string;
  recipient_phone: string;
  status: string | null;
  created_at: string;
}

export interface Message {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  topic: string | null;
  message: string;
  status: string | null;
  created_at: string;
}

export interface OpsStaff {
  full_name: string;
  role: string;
}

export const RIDER_STATUSES = ['applied', 'approved', 'rejected'] as const;
export const PACKAGE_STATUSES = [
  'pending',
  'confirmed',
  'picked_up',
  'in_transit',
  'delivered',
  'cancelled',
] as const;
export const MESSAGE_STATUSES = ['new', 'handled'] as const;
