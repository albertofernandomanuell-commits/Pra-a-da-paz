// User Types
export type UserRole = 'client' | 'professional' | 'admin';

export type VerificationStatus = 'pending' | 'verified' | 'rejected';

export interface User {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
  bio: string;
  role: UserRole;
  city: string;
  neighborhood: string;
  latitude: number;
  longitude: number;
  verificationStatus: VerificationStatus;
  verifiedAt: Date | null;
  rating: number;
  totalReviews: number;
  completedServices: number;
  createdAt: Date;
  updatedAt: Date;
}

// Professional Profile Types
export interface ProfessionalProfile {
  id: string;
  userId: string;
  bio: string;
  specialties: string[];
  certificates: Certificate[];
  portfolio: PortfolioItem[];
  badges: Badge[];
  responseTime: number; // minutes
  hourlyRate: number;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuedDate: Date;
  url: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  beforeAfter: {
    before: string;
    after: string;
  } | null;
  category: ServiceCategory;
  completedAt: Date;
}

export type Badge = 
  | 'verified'
  | 'fast_response'
  | 'top_rated'
  | 'professional_week'
  | '100_works'
  | 'elite';

// Service Types
export type ServiceCategory = 
  | 'construction'
  | 'electricity'
  | 'plumbing'
  | 'painting'
  | 'cleaning'
  | 'gardening'
  | 'transport'
  | 'technology'
  | 'design'
  | 'programming'
  | 'photography'
  | 'video'
  | 'events'
  | 'music'
  | 'health'
  | 'education'
  | 'animals'
  | 'security'
  | 'babysitting'
  | 'catering'
  | 'repairs'
  | 'consulting'
  | 'domestic'
  | 'other';

export type ServiceType = 'standard' | 'custom';

export interface Service {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: ServiceCategory;
  type: ServiceType;
  basePrice: number;
  currency: string;
  images: string[];
  tags: string[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CustomRequest {
  id: string;
  userId: string;
  title: string;
  description: string;
  category: ServiceCategory;
  budget: number | null;
  deadline: Date | null;
  images: string[];
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  proposals: Proposal[];
  createdAt: Date;
  updatedAt: Date;
}

// Order/Job Types
export type OrderStatus = 
  | 'pending'
  | 'accepted'
  | 'in_progress'
  | 'completed'
  | 'cancelled'
  | 'disputed';

export interface Order {
  id: string;
  clientId: string;
  professionalId: string;
  serviceId: string | null;
  customRequestId: string | null;
  title: string;
  description: string;
  status: OrderStatus;
  agreedPrice: number;
  currency: string;
  scheduledDate: Date | null;
  completedAt: Date | null;
  reviews: Review[];
  chat: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

// Chat Types
export interface ChatMessage {
  id: string;
  orderId: string;
  senderId: string;
  content: string;
  attachments: ChatAttachment[];
  timestamp: Date;
}

export interface ChatAttachment {
  id: string;
  type: 'image' | 'video' | 'document' | 'location' | 'audio';
  url: string;
  name: string;
}

// Review Types
export interface Review {
  id: string;
  orderId: string;
  fromUserId: string;
  toUserId: string;
  rating: number;
  comment: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Proposal Types
export interface Proposal {
  id: string;
  customRequestId: string;
  professionalId: string;
  price: number;
  description: string;
  deliveryDays: number;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

// Feed Types
export interface FeedPost {
  id: string;
  authorId: string;
  type: 'work' | 'portfolio' | 'achievement' | 'update';
  title: string;
  description: string;
  images: string[];
  likes: number;
  comments: FeedComment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface FeedComment {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  createdAt: Date;
}

// Location/Map Types
export interface Location {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  neighborhood: string;
}

export interface NearbyProfessional extends User {
  distance: number;
  estimatedTime: number; // minutes
}

// Booking/Scheduling Types
export interface TimeSlot {
  id: string;
  professionalId: string;
  date: Date;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Booking {
  id: string;
  orderId: string;
  timeSlotId: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  reminderSent: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Verification Types
export interface VerificationRequest {
  id: string;
  userId: string;
  documentType: 'national_id' | 'passport';
  documentNumber: string;
  documentImage: string;
  selfieImage: string;
  status: VerificationStatus;
  rejectionReason: string | null;
  submittedAt: Date;
  reviewedAt: Date | null;
  reviewedBy: string | null;
}

// Report/Safety Types
export interface SafetyReport {
  id: string;
  reporterId: string;
  reportedUserId: string;
  reason: string;
  description: string;
  evidence: string[];
  status: 'open' | 'reviewing' | 'resolved' | 'dismissed';
  createdAt: Date;
  updatedAt: Date;
}

// Notification Types
export type NotificationType = 
  | 'order_created'
  | 'order_accepted'
  | 'order_completed'
  | 'message_received'
  | 'review_received'
  | 'proposal_received'
  | 'booking_reminder'
  | 'achievement_unlocked';

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  relatedId: string | null;
  read: boolean;
  createdAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error: ApiError | null;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// Pagination
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
