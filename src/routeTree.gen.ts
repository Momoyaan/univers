/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as AuthRouteImport } from './routes/auth/route'
import { Route as AppRouteImport } from './routes/app/route'
import { Route as IndexImport } from './routes/index'
import { Route as AuthVerifyEmailImport } from './routes/auth/verify-email'
import { Route as AuthResetPasswordImport } from './routes/auth/reset-password'
import { Route as AuthRegisterImport } from './routes/auth/register'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as AuthForgotPasswordImport } from './routes/auth/forgot-password'
import { Route as AppVenueReservationImport } from './routes/app/venue-reservation'
import { Route as AppUserManagementImport } from './routes/app/user-management'
import { Route as AppNotificationsImport } from './routes/app/notifications'
import { Route as AppEquipmentsImport } from './routes/app/equipments'
import { Route as AppEquipmentReservationImport } from './routes/app/equipment-reservation'
import { Route as AppDashboardImport } from './routes/app/dashboard'
import { Route as AppCalendarImport } from './routes/app/calendar'
import { Route as AppVenuesRouteImport } from './routes/app/venues/route'
import { Route as AppVenueApprovalRouteImport } from './routes/app/venue-approval/route'
import { Route as AppSettingsRouteImport } from './routes/app/settings/route'
import { Route as AppEventsRouteImport } from './routes/app/events/route'
import { Route as AppVenuesManagementImport } from './routes/app/venues/management'
import { Route as AppVenuesVenueIdImport } from './routes/app/venues/$venueId'
import { Route as AppVenueApprovalApprovalImport } from './routes/app/venue-approval/approval'
import { Route as AppVenueApprovalApprovalIdImport } from './routes/app/venue-approval/$approvalId'
import { Route as AppSettingsProfileImport } from './routes/app/settings/profile'
import { Route as AppSettingsNotificationsImport } from './routes/app/settings/notifications'
import { Route as AppSettingsIntegrationsImport } from './routes/app/settings/integrations'
import { Route as AppSettingsAccountImport } from './routes/app/settings/account'
import { Route as AppEventsTimelineImport } from './routes/app/events/timeline'
import { Route as AppEventsEventIdImport } from './routes/app/events/$eventId'
import { Route as AppEquipmentApprovalApprovalImport } from './routes/app/equipment-approval/approval'
import { Route as AppEquipmentApprovalApprovalIdImport } from './routes/app/equipment-approval/$approvalId'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const AuthRouteRoute = AuthRouteImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRoute,
} as any)

const AppRouteRoute = AppRouteImport.update({
  id: '/app',
  path: '/app',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthVerifyEmailRoute = AuthVerifyEmailImport.update({
  id: '/verify-email',
  path: '/verify-email',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthResetPasswordRoute = AuthResetPasswordImport.update({
  id: '/reset-password',
  path: '/reset-password',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AuthForgotPasswordRoute = AuthForgotPasswordImport.update({
  id: '/forgot-password',
  path: '/forgot-password',
  getParentRoute: () => AuthRouteRoute,
} as any)

const AppVenueReservationRoute = AppVenueReservationImport.update({
  id: '/venue-reservation',
  path: '/venue-reservation',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppUserManagementRoute = AppUserManagementImport.update({
  id: '/user-management',
  path: '/user-management',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppNotificationsRoute = AppNotificationsImport.update({
  id: '/notifications',
  path: '/notifications',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppEquipmentsRoute = AppEquipmentsImport.update({
  id: '/equipments',
  path: '/equipments',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppEquipmentReservationRoute = AppEquipmentReservationImport.update({
  id: '/equipment-reservation',
  path: '/equipment-reservation',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppDashboardRoute = AppDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppCalendarRoute = AppCalendarImport.update({
  id: '/calendar',
  path: '/calendar',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppVenuesRouteRoute = AppVenuesRouteImport.update({
  id: '/venues',
  path: '/venues',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppVenueApprovalRouteRoute = AppVenueApprovalRouteImport.update({
  id: '/venue-approval',
  path: '/venue-approval',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppSettingsRouteRoute = AppSettingsRouteImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppEventsRouteRoute = AppEventsRouteImport.update({
  id: '/events',
  path: '/events',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppVenuesManagementRoute = AppVenuesManagementImport.update({
  id: '/management',
  path: '/management',
  getParentRoute: () => AppVenuesRouteRoute,
} as any)

const AppVenuesVenueIdRoute = AppVenuesVenueIdImport.update({
  id: '/$venueId',
  path: '/$venueId',
  getParentRoute: () => AppVenuesRouteRoute,
} as any)

const AppVenueApprovalApprovalRoute = AppVenueApprovalApprovalImport.update({
  id: '/approval',
  path: '/approval',
  getParentRoute: () => AppVenueApprovalRouteRoute,
} as any)

const AppVenueApprovalApprovalIdRoute = AppVenueApprovalApprovalIdImport.update(
  {
    id: '/$approvalId',
    path: '/$approvalId',
    getParentRoute: () => AppVenueApprovalRouteRoute,
  } as any,
)

const AppSettingsProfileRoute = AppSettingsProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AppSettingsRouteRoute,
} as any)

const AppSettingsNotificationsRoute = AppSettingsNotificationsImport.update({
  id: '/notifications',
  path: '/notifications',
  getParentRoute: () => AppSettingsRouteRoute,
} as any)

const AppSettingsIntegrationsRoute = AppSettingsIntegrationsImport.update({
  id: '/integrations',
  path: '/integrations',
  getParentRoute: () => AppSettingsRouteRoute,
} as any)

const AppSettingsAccountRoute = AppSettingsAccountImport.update({
  id: '/account',
  path: '/account',
  getParentRoute: () => AppSettingsRouteRoute,
} as any)

const AppEventsTimelineRoute = AppEventsTimelineImport.update({
  id: '/timeline',
  path: '/timeline',
  getParentRoute: () => AppEventsRouteRoute,
} as any)

const AppEventsEventIdRoute = AppEventsEventIdImport.update({
  id: '/$eventId',
  path: '/$eventId',
  getParentRoute: () => AppEventsRouteRoute,
} as any)

const AppEquipmentApprovalApprovalRoute =
  AppEquipmentApprovalApprovalImport.update({
    id: '/equipment-approval/approval',
    path: '/equipment-approval/approval',
    getParentRoute: () => AppRouteRoute,
  } as any)

const AppEquipmentApprovalApprovalIdRoute =
  AppEquipmentApprovalApprovalIdImport.update({
    id: '/equipment-approval/$approvalId',
    path: '/equipment-approval/$approvalId',
    getParentRoute: () => AppRouteRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/app': {
      id: '/app'
      path: '/app'
      fullPath: '/app'
      preLoaderRoute: typeof AppRouteImport
      parentRoute: typeof rootRoute
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/app/events': {
      id: '/app/events'
      path: '/events'
      fullPath: '/app/events'
      preLoaderRoute: typeof AppEventsRouteImport
      parentRoute: typeof AppRouteImport
    }
    '/app/settings': {
      id: '/app/settings'
      path: '/settings'
      fullPath: '/app/settings'
      preLoaderRoute: typeof AppSettingsRouteImport
      parentRoute: typeof AppRouteImport
    }
    '/app/venue-approval': {
      id: '/app/venue-approval'
      path: '/venue-approval'
      fullPath: '/app/venue-approval'
      preLoaderRoute: typeof AppVenueApprovalRouteImport
      parentRoute: typeof AppRouteImport
    }
    '/app/venues': {
      id: '/app/venues'
      path: '/venues'
      fullPath: '/app/venues'
      preLoaderRoute: typeof AppVenuesRouteImport
      parentRoute: typeof AppRouteImport
    }
    '/app/calendar': {
      id: '/app/calendar'
      path: '/calendar'
      fullPath: '/app/calendar'
      preLoaderRoute: typeof AppCalendarImport
      parentRoute: typeof AppRouteImport
    }
    '/app/dashboard': {
      id: '/app/dashboard'
      path: '/dashboard'
      fullPath: '/app/dashboard'
      preLoaderRoute: typeof AppDashboardImport
      parentRoute: typeof AppRouteImport
    }
    '/app/equipment-reservation': {
      id: '/app/equipment-reservation'
      path: '/equipment-reservation'
      fullPath: '/app/equipment-reservation'
      preLoaderRoute: typeof AppEquipmentReservationImport
      parentRoute: typeof AppRouteImport
    }
    '/app/equipments': {
      id: '/app/equipments'
      path: '/equipments'
      fullPath: '/app/equipments'
      preLoaderRoute: typeof AppEquipmentsImport
      parentRoute: typeof AppRouteImport
    }
    '/app/notifications': {
      id: '/app/notifications'
      path: '/notifications'
      fullPath: '/app/notifications'
      preLoaderRoute: typeof AppNotificationsImport
      parentRoute: typeof AppRouteImport
    }
    '/app/user-management': {
      id: '/app/user-management'
      path: '/user-management'
      fullPath: '/app/user-management'
      preLoaderRoute: typeof AppUserManagementImport
      parentRoute: typeof AppRouteImport
    }
    '/app/venue-reservation': {
      id: '/app/venue-reservation'
      path: '/venue-reservation'
      fullPath: '/app/venue-reservation'
      preLoaderRoute: typeof AppVenueReservationImport
      parentRoute: typeof AppRouteImport
    }
    '/auth/forgot-password': {
      id: '/auth/forgot-password'
      path: '/forgot-password'
      fullPath: '/auth/forgot-password'
      preLoaderRoute: typeof AuthForgotPasswordImport
      parentRoute: typeof AuthRouteImport
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthRouteImport
    }
    '/auth/register': {
      id: '/auth/register'
      path: '/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof AuthRouteImport
    }
    '/auth/reset-password': {
      id: '/auth/reset-password'
      path: '/reset-password'
      fullPath: '/auth/reset-password'
      preLoaderRoute: typeof AuthResetPasswordImport
      parentRoute: typeof AuthRouteImport
    }
    '/auth/verify-email': {
      id: '/auth/verify-email'
      path: '/verify-email'
      fullPath: '/auth/verify-email'
      preLoaderRoute: typeof AuthVerifyEmailImport
      parentRoute: typeof AuthRouteImport
    }
    '/app/equipment-approval/$approvalId': {
      id: '/app/equipment-approval/$approvalId'
      path: '/equipment-approval/$approvalId'
      fullPath: '/app/equipment-approval/$approvalId'
      preLoaderRoute: typeof AppEquipmentApprovalApprovalIdImport
      parentRoute: typeof AppRouteImport
    }
    '/app/equipment-approval/approval': {
      id: '/app/equipment-approval/approval'
      path: '/equipment-approval/approval'
      fullPath: '/app/equipment-approval/approval'
      preLoaderRoute: typeof AppEquipmentApprovalApprovalImport
      parentRoute: typeof AppRouteImport
    }
    '/app/events/$eventId': {
      id: '/app/events/$eventId'
      path: '/$eventId'
      fullPath: '/app/events/$eventId'
      preLoaderRoute: typeof AppEventsEventIdImport
      parentRoute: typeof AppEventsRouteImport
    }
    '/app/events/timeline': {
      id: '/app/events/timeline'
      path: '/timeline'
      fullPath: '/app/events/timeline'
      preLoaderRoute: typeof AppEventsTimelineImport
      parentRoute: typeof AppEventsRouteImport
    }
    '/app/settings/account': {
      id: '/app/settings/account'
      path: '/account'
      fullPath: '/app/settings/account'
      preLoaderRoute: typeof AppSettingsAccountImport
      parentRoute: typeof AppSettingsRouteImport
    }
    '/app/settings/integrations': {
      id: '/app/settings/integrations'
      path: '/integrations'
      fullPath: '/app/settings/integrations'
      preLoaderRoute: typeof AppSettingsIntegrationsImport
      parentRoute: typeof AppSettingsRouteImport
    }
    '/app/settings/notifications': {
      id: '/app/settings/notifications'
      path: '/notifications'
      fullPath: '/app/settings/notifications'
      preLoaderRoute: typeof AppSettingsNotificationsImport
      parentRoute: typeof AppSettingsRouteImport
    }
    '/app/settings/profile': {
      id: '/app/settings/profile'
      path: '/profile'
      fullPath: '/app/settings/profile'
      preLoaderRoute: typeof AppSettingsProfileImport
      parentRoute: typeof AppSettingsRouteImport
    }
    '/app/venue-approval/$approvalId': {
      id: '/app/venue-approval/$approvalId'
      path: '/$approvalId'
      fullPath: '/app/venue-approval/$approvalId'
      preLoaderRoute: typeof AppVenueApprovalApprovalIdImport
      parentRoute: typeof AppVenueApprovalRouteImport
    }
    '/app/venue-approval/approval': {
      id: '/app/venue-approval/approval'
      path: '/approval'
      fullPath: '/app/venue-approval/approval'
      preLoaderRoute: typeof AppVenueApprovalApprovalImport
      parentRoute: typeof AppVenueApprovalRouteImport
    }
    '/app/venues/$venueId': {
      id: '/app/venues/$venueId'
      path: '/$venueId'
      fullPath: '/app/venues/$venueId'
      preLoaderRoute: typeof AppVenuesVenueIdImport
      parentRoute: typeof AppVenuesRouteImport
    }
    '/app/venues/management': {
      id: '/app/venues/management'
      path: '/management'
      fullPath: '/app/venues/management'
      preLoaderRoute: typeof AppVenuesManagementImport
      parentRoute: typeof AppVenuesRouteImport
    }
  }
}

// Create and export the route tree

interface AppEventsRouteRouteChildren {
  AppEventsEventIdRoute: typeof AppEventsEventIdRoute
  AppEventsTimelineRoute: typeof AppEventsTimelineRoute
}

const AppEventsRouteRouteChildren: AppEventsRouteRouteChildren = {
  AppEventsEventIdRoute: AppEventsEventIdRoute,
  AppEventsTimelineRoute: AppEventsTimelineRoute,
}

const AppEventsRouteRouteWithChildren = AppEventsRouteRoute._addFileChildren(
  AppEventsRouteRouteChildren,
)

interface AppSettingsRouteRouteChildren {
  AppSettingsAccountRoute: typeof AppSettingsAccountRoute
  AppSettingsIntegrationsRoute: typeof AppSettingsIntegrationsRoute
  AppSettingsNotificationsRoute: typeof AppSettingsNotificationsRoute
  AppSettingsProfileRoute: typeof AppSettingsProfileRoute
}

const AppSettingsRouteRouteChildren: AppSettingsRouteRouteChildren = {
  AppSettingsAccountRoute: AppSettingsAccountRoute,
  AppSettingsIntegrationsRoute: AppSettingsIntegrationsRoute,
  AppSettingsNotificationsRoute: AppSettingsNotificationsRoute,
  AppSettingsProfileRoute: AppSettingsProfileRoute,
}

const AppSettingsRouteRouteWithChildren =
  AppSettingsRouteRoute._addFileChildren(AppSettingsRouteRouteChildren)

interface AppVenueApprovalRouteRouteChildren {
  AppVenueApprovalApprovalIdRoute: typeof AppVenueApprovalApprovalIdRoute
  AppVenueApprovalApprovalRoute: typeof AppVenueApprovalApprovalRoute
}

const AppVenueApprovalRouteRouteChildren: AppVenueApprovalRouteRouteChildren = {
  AppVenueApprovalApprovalIdRoute: AppVenueApprovalApprovalIdRoute,
  AppVenueApprovalApprovalRoute: AppVenueApprovalApprovalRoute,
}

const AppVenueApprovalRouteRouteWithChildren =
  AppVenueApprovalRouteRoute._addFileChildren(
    AppVenueApprovalRouteRouteChildren,
  )

interface AppVenuesRouteRouteChildren {
  AppVenuesVenueIdRoute: typeof AppVenuesVenueIdRoute
  AppVenuesManagementRoute: typeof AppVenuesManagementRoute
}

const AppVenuesRouteRouteChildren: AppVenuesRouteRouteChildren = {
  AppVenuesVenueIdRoute: AppVenuesVenueIdRoute,
  AppVenuesManagementRoute: AppVenuesManagementRoute,
}

const AppVenuesRouteRouteWithChildren = AppVenuesRouteRoute._addFileChildren(
  AppVenuesRouteRouteChildren,
)

interface AppRouteRouteChildren {
  AppEventsRouteRoute: typeof AppEventsRouteRouteWithChildren
  AppSettingsRouteRoute: typeof AppSettingsRouteRouteWithChildren
  AppVenueApprovalRouteRoute: typeof AppVenueApprovalRouteRouteWithChildren
  AppVenuesRouteRoute: typeof AppVenuesRouteRouteWithChildren
  AppCalendarRoute: typeof AppCalendarRoute
  AppDashboardRoute: typeof AppDashboardRoute
  AppEquipmentReservationRoute: typeof AppEquipmentReservationRoute
  AppEquipmentsRoute: typeof AppEquipmentsRoute
  AppNotificationsRoute: typeof AppNotificationsRoute
  AppUserManagementRoute: typeof AppUserManagementRoute
  AppVenueReservationRoute: typeof AppVenueReservationRoute
  AppEquipmentApprovalApprovalIdRoute: typeof AppEquipmentApprovalApprovalIdRoute
  AppEquipmentApprovalApprovalRoute: typeof AppEquipmentApprovalApprovalRoute
}

const AppRouteRouteChildren: AppRouteRouteChildren = {
  AppEventsRouteRoute: AppEventsRouteRouteWithChildren,
  AppSettingsRouteRoute: AppSettingsRouteRouteWithChildren,
  AppVenueApprovalRouteRoute: AppVenueApprovalRouteRouteWithChildren,
  AppVenuesRouteRoute: AppVenuesRouteRouteWithChildren,
  AppCalendarRoute: AppCalendarRoute,
  AppDashboardRoute: AppDashboardRoute,
  AppEquipmentReservationRoute: AppEquipmentReservationRoute,
  AppEquipmentsRoute: AppEquipmentsRoute,
  AppNotificationsRoute: AppNotificationsRoute,
  AppUserManagementRoute: AppUserManagementRoute,
  AppVenueReservationRoute: AppVenueReservationRoute,
  AppEquipmentApprovalApprovalIdRoute: AppEquipmentApprovalApprovalIdRoute,
  AppEquipmentApprovalApprovalRoute: AppEquipmentApprovalApprovalRoute,
}

const AppRouteRouteWithChildren = AppRouteRoute._addFileChildren(
  AppRouteRouteChildren,
)

interface AuthRouteRouteChildren {
  AuthForgotPasswordRoute: typeof AuthForgotPasswordRoute
  AuthLoginRoute: typeof AuthLoginRoute
  AuthRegisterRoute: typeof AuthRegisterRoute
  AuthResetPasswordRoute: typeof AuthResetPasswordRoute
  AuthVerifyEmailRoute: typeof AuthVerifyEmailRoute
}

const AuthRouteRouteChildren: AuthRouteRouteChildren = {
  AuthForgotPasswordRoute: AuthForgotPasswordRoute,
  AuthLoginRoute: AuthLoginRoute,
  AuthRegisterRoute: AuthRegisterRoute,
  AuthResetPasswordRoute: AuthResetPasswordRoute,
  AuthVerifyEmailRoute: AuthVerifyEmailRoute,
}

const AuthRouteRouteWithChildren = AuthRouteRoute._addFileChildren(
  AuthRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/app': typeof AppRouteRouteWithChildren
  '/auth': typeof AuthRouteRouteWithChildren
  '/about': typeof AboutRoute
  '/app/events': typeof AppEventsRouteRouteWithChildren
  '/app/settings': typeof AppSettingsRouteRouteWithChildren
  '/app/venue-approval': typeof AppVenueApprovalRouteRouteWithChildren
  '/app/venues': typeof AppVenuesRouteRouteWithChildren
  '/app/calendar': typeof AppCalendarRoute
  '/app/dashboard': typeof AppDashboardRoute
  '/app/equipment-reservation': typeof AppEquipmentReservationRoute
  '/app/equipments': typeof AppEquipmentsRoute
  '/app/notifications': typeof AppNotificationsRoute
  '/app/user-management': typeof AppUserManagementRoute
  '/app/venue-reservation': typeof AppVenueReservationRoute
  '/auth/forgot-password': typeof AuthForgotPasswordRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/auth/reset-password': typeof AuthResetPasswordRoute
  '/auth/verify-email': typeof AuthVerifyEmailRoute
  '/app/equipment-approval/$approvalId': typeof AppEquipmentApprovalApprovalIdRoute
  '/app/equipment-approval/approval': typeof AppEquipmentApprovalApprovalRoute
  '/app/events/$eventId': typeof AppEventsEventIdRoute
  '/app/events/timeline': typeof AppEventsTimelineRoute
  '/app/settings/account': typeof AppSettingsAccountRoute
  '/app/settings/integrations': typeof AppSettingsIntegrationsRoute
  '/app/settings/notifications': typeof AppSettingsNotificationsRoute
  '/app/settings/profile': typeof AppSettingsProfileRoute
  '/app/venue-approval/$approvalId': typeof AppVenueApprovalApprovalIdRoute
  '/app/venue-approval/approval': typeof AppVenueApprovalApprovalRoute
  '/app/venues/$venueId': typeof AppVenuesVenueIdRoute
  '/app/venues/management': typeof AppVenuesManagementRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/app': typeof AppRouteRouteWithChildren
  '/auth': typeof AuthRouteRouteWithChildren
  '/about': typeof AboutRoute
  '/app/events': typeof AppEventsRouteRouteWithChildren
  '/app/settings': typeof AppSettingsRouteRouteWithChildren
  '/app/venue-approval': typeof AppVenueApprovalRouteRouteWithChildren
  '/app/venues': typeof AppVenuesRouteRouteWithChildren
  '/app/calendar': typeof AppCalendarRoute
  '/app/dashboard': typeof AppDashboardRoute
  '/app/equipment-reservation': typeof AppEquipmentReservationRoute
  '/app/equipments': typeof AppEquipmentsRoute
  '/app/notifications': typeof AppNotificationsRoute
  '/app/user-management': typeof AppUserManagementRoute
  '/app/venue-reservation': typeof AppVenueReservationRoute
  '/auth/forgot-password': typeof AuthForgotPasswordRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/auth/reset-password': typeof AuthResetPasswordRoute
  '/auth/verify-email': typeof AuthVerifyEmailRoute
  '/app/equipment-approval/$approvalId': typeof AppEquipmentApprovalApprovalIdRoute
  '/app/equipment-approval/approval': typeof AppEquipmentApprovalApprovalRoute
  '/app/events/$eventId': typeof AppEventsEventIdRoute
  '/app/events/timeline': typeof AppEventsTimelineRoute
  '/app/settings/account': typeof AppSettingsAccountRoute
  '/app/settings/integrations': typeof AppSettingsIntegrationsRoute
  '/app/settings/notifications': typeof AppSettingsNotificationsRoute
  '/app/settings/profile': typeof AppSettingsProfileRoute
  '/app/venue-approval/$approvalId': typeof AppVenueApprovalApprovalIdRoute
  '/app/venue-approval/approval': typeof AppVenueApprovalApprovalRoute
  '/app/venues/$venueId': typeof AppVenuesVenueIdRoute
  '/app/venues/management': typeof AppVenuesManagementRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/app': typeof AppRouteRouteWithChildren
  '/auth': typeof AuthRouteRouteWithChildren
  '/about': typeof AboutRoute
  '/app/events': typeof AppEventsRouteRouteWithChildren
  '/app/settings': typeof AppSettingsRouteRouteWithChildren
  '/app/venue-approval': typeof AppVenueApprovalRouteRouteWithChildren
  '/app/venues': typeof AppVenuesRouteRouteWithChildren
  '/app/calendar': typeof AppCalendarRoute
  '/app/dashboard': typeof AppDashboardRoute
  '/app/equipment-reservation': typeof AppEquipmentReservationRoute
  '/app/equipments': typeof AppEquipmentsRoute
  '/app/notifications': typeof AppNotificationsRoute
  '/app/user-management': typeof AppUserManagementRoute
  '/app/venue-reservation': typeof AppVenueReservationRoute
  '/auth/forgot-password': typeof AuthForgotPasswordRoute
  '/auth/login': typeof AuthLoginRoute
  '/auth/register': typeof AuthRegisterRoute
  '/auth/reset-password': typeof AuthResetPasswordRoute
  '/auth/verify-email': typeof AuthVerifyEmailRoute
  '/app/equipment-approval/$approvalId': typeof AppEquipmentApprovalApprovalIdRoute
  '/app/equipment-approval/approval': typeof AppEquipmentApprovalApprovalRoute
  '/app/events/$eventId': typeof AppEventsEventIdRoute
  '/app/events/timeline': typeof AppEventsTimelineRoute
  '/app/settings/account': typeof AppSettingsAccountRoute
  '/app/settings/integrations': typeof AppSettingsIntegrationsRoute
  '/app/settings/notifications': typeof AppSettingsNotificationsRoute
  '/app/settings/profile': typeof AppSettingsProfileRoute
  '/app/venue-approval/$approvalId': typeof AppVenueApprovalApprovalIdRoute
  '/app/venue-approval/approval': typeof AppVenueApprovalApprovalRoute
  '/app/venues/$venueId': typeof AppVenuesVenueIdRoute
  '/app/venues/management': typeof AppVenuesManagementRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/app'
    | '/auth'
    | '/about'
    | '/app/events'
    | '/app/settings'
    | '/app/venue-approval'
    | '/app/venues'
    | '/app/calendar'
    | '/app/dashboard'
    | '/app/equipment-reservation'
    | '/app/equipments'
    | '/app/notifications'
    | '/app/user-management'
    | '/app/venue-reservation'
    | '/auth/forgot-password'
    | '/auth/login'
    | '/auth/register'
    | '/auth/reset-password'
    | '/auth/verify-email'
    | '/app/equipment-approval/$approvalId'
    | '/app/equipment-approval/approval'
    | '/app/events/$eventId'
    | '/app/events/timeline'
    | '/app/settings/account'
    | '/app/settings/integrations'
    | '/app/settings/notifications'
    | '/app/settings/profile'
    | '/app/venue-approval/$approvalId'
    | '/app/venue-approval/approval'
    | '/app/venues/$venueId'
    | '/app/venues/management'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/app'
    | '/auth'
    | '/about'
    | '/app/events'
    | '/app/settings'
    | '/app/venue-approval'
    | '/app/venues'
    | '/app/calendar'
    | '/app/dashboard'
    | '/app/equipment-reservation'
    | '/app/equipments'
    | '/app/notifications'
    | '/app/user-management'
    | '/app/venue-reservation'
    | '/auth/forgot-password'
    | '/auth/login'
    | '/auth/register'
    | '/auth/reset-password'
    | '/auth/verify-email'
    | '/app/equipment-approval/$approvalId'
    | '/app/equipment-approval/approval'
    | '/app/events/$eventId'
    | '/app/events/timeline'
    | '/app/settings/account'
    | '/app/settings/integrations'
    | '/app/settings/notifications'
    | '/app/settings/profile'
    | '/app/venue-approval/$approvalId'
    | '/app/venue-approval/approval'
    | '/app/venues/$venueId'
    | '/app/venues/management'
  id:
    | '__root__'
    | '/'
    | '/app'
    | '/auth'
    | '/about'
    | '/app/events'
    | '/app/settings'
    | '/app/venue-approval'
    | '/app/venues'
    | '/app/calendar'
    | '/app/dashboard'
    | '/app/equipment-reservation'
    | '/app/equipments'
    | '/app/notifications'
    | '/app/user-management'
    | '/app/venue-reservation'
    | '/auth/forgot-password'
    | '/auth/login'
    | '/auth/register'
    | '/auth/reset-password'
    | '/auth/verify-email'
    | '/app/equipment-approval/$approvalId'
    | '/app/equipment-approval/approval'
    | '/app/events/$eventId'
    | '/app/events/timeline'
    | '/app/settings/account'
    | '/app/settings/integrations'
    | '/app/settings/notifications'
    | '/app/settings/profile'
    | '/app/venue-approval/$approvalId'
    | '/app/venue-approval/approval'
    | '/app/venues/$venueId'
    | '/app/venues/management'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppRouteRoute: typeof AppRouteRouteWithChildren
  AuthRouteRoute: typeof AuthRouteRouteWithChildren
  AboutRoute: typeof AboutRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppRouteRoute: AppRouteRouteWithChildren,
  AuthRouteRoute: AuthRouteRouteWithChildren,
  AboutRoute: AboutRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/app",
        "/auth",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/app": {
      "filePath": "app/route.tsx",
      "children": [
        "/app/events",
        "/app/settings",
        "/app/venue-approval",
        "/app/venues",
        "/app/calendar",
        "/app/dashboard",
        "/app/equipment-reservation",
        "/app/equipments",
        "/app/notifications",
        "/app/user-management",
        "/app/venue-reservation",
        "/app/equipment-approval/$approvalId",
        "/app/equipment-approval/approval"
      ]
    },
    "/auth": {
      "filePath": "auth/route.tsx",
      "children": [
        "/auth/forgot-password",
        "/auth/login",
        "/auth/register",
        "/auth/reset-password",
        "/auth/verify-email"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/app/events": {
      "filePath": "app/events/route.tsx",
      "parent": "/app",
      "children": [
        "/app/events/$eventId",
        "/app/events/timeline"
      ]
    },
    "/app/settings": {
      "filePath": "app/settings/route.tsx",
      "parent": "/app",
      "children": [
        "/app/settings/account",
        "/app/settings/integrations",
        "/app/settings/notifications",
        "/app/settings/profile"
      ]
    },
    "/app/venue-approval": {
      "filePath": "app/venue-approval/route.tsx",
      "parent": "/app",
      "children": [
        "/app/venue-approval/$approvalId",
        "/app/venue-approval/approval"
      ]
    },
    "/app/venues": {
      "filePath": "app/venues/route.tsx",
      "parent": "/app",
      "children": [
        "/app/venues/$venueId",
        "/app/venues/management"
      ]
    },
    "/app/calendar": {
      "filePath": "app/calendar.tsx",
      "parent": "/app"
    },
    "/app/dashboard": {
      "filePath": "app/dashboard.tsx",
      "parent": "/app"
    },
    "/app/equipment-reservation": {
      "filePath": "app/equipment-reservation.tsx",
      "parent": "/app"
    },
    "/app/equipments": {
      "filePath": "app/equipments.tsx",
      "parent": "/app"
    },
    "/app/notifications": {
      "filePath": "app/notifications.tsx",
      "parent": "/app"
    },
    "/app/user-management": {
      "filePath": "app/user-management.tsx",
      "parent": "/app"
    },
    "/app/venue-reservation": {
      "filePath": "app/venue-reservation.tsx",
      "parent": "/app"
    },
    "/auth/forgot-password": {
      "filePath": "auth/forgot-password.tsx",
      "parent": "/auth"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx",
      "parent": "/auth"
    },
    "/auth/register": {
      "filePath": "auth/register.tsx",
      "parent": "/auth"
    },
    "/auth/reset-password": {
      "filePath": "auth/reset-password.tsx",
      "parent": "/auth"
    },
    "/auth/verify-email": {
      "filePath": "auth/verify-email.tsx",
      "parent": "/auth"
    },
    "/app/equipment-approval/$approvalId": {
      "filePath": "app/equipment-approval/$approvalId.tsx",
      "parent": "/app"
    },
    "/app/equipment-approval/approval": {
      "filePath": "app/equipment-approval/approval.tsx",
      "parent": "/app"
    },
    "/app/events/$eventId": {
      "filePath": "app/events/$eventId.tsx",
      "parent": "/app/events"
    },
    "/app/events/timeline": {
      "filePath": "app/events/timeline.tsx",
      "parent": "/app/events"
    },
    "/app/settings/account": {
      "filePath": "app/settings/account.tsx",
      "parent": "/app/settings"
    },
    "/app/settings/integrations": {
      "filePath": "app/settings/integrations.tsx",
      "parent": "/app/settings"
    },
    "/app/settings/notifications": {
      "filePath": "app/settings/notifications.tsx",
      "parent": "/app/settings"
    },
    "/app/settings/profile": {
      "filePath": "app/settings/profile.tsx",
      "parent": "/app/settings"
    },
    "/app/venue-approval/$approvalId": {
      "filePath": "app/venue-approval/$approvalId.tsx",
      "parent": "/app/venue-approval"
    },
    "/app/venue-approval/approval": {
      "filePath": "app/venue-approval/approval.tsx",
      "parent": "/app/venue-approval"
    },
    "/app/venues/$venueId": {
      "filePath": "app/venues/$venueId.tsx",
      "parent": "/app/venues"
    },
    "/app/venues/management": {
      "filePath": "app/venues/management.tsx",
      "parent": "/app/venues"
    }
  }
}
ROUTE_MANIFEST_END */
