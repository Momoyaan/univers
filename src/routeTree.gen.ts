/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as AppRouteImport } from './routes/app/route'
import { Route as IndexImport } from './routes/index'
import { Route as AppVenuesImport } from './routes/app/venues'
import { Route as AppVenueReservationImport } from './routes/app/venue-reservation'
import { Route as AppUserManagementImport } from './routes/app/user-management'
import { Route as AppNotificationsImport } from './routes/app/notifications'
import { Route as AppEventsImport } from './routes/app/events'
import { Route as AppEquipmentsImport } from './routes/app/equipments'
import { Route as AppDashboardImport } from './routes/app/dashboard'
import { Route as AppCalendarImport } from './routes/app/calendar'
import { Route as authVerifyEmailImport } from './routes/(auth)/verify-email'
import { Route as authRegisterImport } from './routes/(auth)/register'
import { Route as authLoginImport } from './routes/(auth)/login'
import { Route as authForgotPasswordImport } from './routes/(auth)/forgot-password'
import { Route as AppVenueApprovalRouteImport } from './routes/app/venue-approval/route'
import { Route as AppSettingsRouteImport } from './routes/app/settings/route'
import { Route as AppVenueVenueIdImport } from './routes/app/venue/$venueId'
import { Route as AppVenueApprovalApprovalImport } from './routes/app/venue-approval/approval'
import { Route as AppVenueApprovalApprovalIdImport } from './routes/app/venue-approval/$approvalId'
import { Route as AppSettingsProfileImport } from './routes/app/settings/profile'
import { Route as AppSettingsNotificationsImport } from './routes/app/settings/notifications'
import { Route as AppSettingsIntegrationsImport } from './routes/app/settings/integrations'
import { Route as AppSettingsAccountImport } from './routes/app/settings/account'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
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

const AppVenuesRoute = AppVenuesImport.update({
  id: '/venues',
  path: '/venues',
  getParentRoute: () => AppRouteRoute,
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

const AppEventsRoute = AppEventsImport.update({
  id: '/events',
  path: '/events',
  getParentRoute: () => AppRouteRoute,
} as any)

const AppEquipmentsRoute = AppEquipmentsImport.update({
  id: '/equipments',
  path: '/equipments',
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

const authVerifyEmailRoute = authVerifyEmailImport.update({
  id: '/(auth)/verify-email',
  path: '/verify-email',
  getParentRoute: () => rootRoute,
} as any)

const authRegisterRoute = authRegisterImport.update({
  id: '/(auth)/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/(auth)/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const authForgotPasswordRoute = authForgotPasswordImport.update({
  id: '/(auth)/forgot-password',
  path: '/forgot-password',
  getParentRoute: () => rootRoute,
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

const AppVenueVenueIdRoute = AppVenueVenueIdImport.update({
  id: '/venue/$venueId',
  path: '/venue/$venueId',
  getParentRoute: () => AppRouteRoute,
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
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
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
    '/(auth)/forgot-password': {
      id: '/(auth)/forgot-password'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof authForgotPasswordImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/register': {
      id: '/(auth)/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof authRegisterImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/verify-email': {
      id: '/(auth)/verify-email'
      path: '/verify-email'
      fullPath: '/verify-email'
      preLoaderRoute: typeof authVerifyEmailImport
      parentRoute: typeof rootRoute
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
    '/app/equipments': {
      id: '/app/equipments'
      path: '/equipments'
      fullPath: '/app/equipments'
      preLoaderRoute: typeof AppEquipmentsImport
      parentRoute: typeof AppRouteImport
    }
    '/app/events': {
      id: '/app/events'
      path: '/events'
      fullPath: '/app/events'
      preLoaderRoute: typeof AppEventsImport
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
    '/app/venues': {
      id: '/app/venues'
      path: '/venues'
      fullPath: '/app/venues'
      preLoaderRoute: typeof AppVenuesImport
      parentRoute: typeof AppRouteImport
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
    '/app/venue/$venueId': {
      id: '/app/venue/$venueId'
      path: '/venue/$venueId'
      fullPath: '/app/venue/$venueId'
      preLoaderRoute: typeof AppVenueVenueIdImport
      parentRoute: typeof AppRouteImport
    }
  }
}

// Create and export the route tree

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

interface AppRouteRouteChildren {
  AppSettingsRouteRoute: typeof AppSettingsRouteRouteWithChildren
  AppVenueApprovalRouteRoute: typeof AppVenueApprovalRouteRouteWithChildren
  AppCalendarRoute: typeof AppCalendarRoute
  AppDashboardRoute: typeof AppDashboardRoute
  AppEquipmentsRoute: typeof AppEquipmentsRoute
  AppEventsRoute: typeof AppEventsRoute
  AppNotificationsRoute: typeof AppNotificationsRoute
  AppUserManagementRoute: typeof AppUserManagementRoute
  AppVenueReservationRoute: typeof AppVenueReservationRoute
  AppVenuesRoute: typeof AppVenuesRoute
  AppVenueVenueIdRoute: typeof AppVenueVenueIdRoute
}

const AppRouteRouteChildren: AppRouteRouteChildren = {
  AppSettingsRouteRoute: AppSettingsRouteRouteWithChildren,
  AppVenueApprovalRouteRoute: AppVenueApprovalRouteRouteWithChildren,
  AppCalendarRoute: AppCalendarRoute,
  AppDashboardRoute: AppDashboardRoute,
  AppEquipmentsRoute: AppEquipmentsRoute,
  AppEventsRoute: AppEventsRoute,
  AppNotificationsRoute: AppNotificationsRoute,
  AppUserManagementRoute: AppUserManagementRoute,
  AppVenueReservationRoute: AppVenueReservationRoute,
  AppVenuesRoute: AppVenuesRoute,
  AppVenueVenueIdRoute: AppVenueVenueIdRoute,
}

const AppRouteRouteWithChildren = AppRouteRoute._addFileChildren(
  AppRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/app': typeof AppRouteRouteWithChildren
  '/about': typeof AboutRoute
  '/app/settings': typeof AppSettingsRouteRouteWithChildren
  '/app/venue-approval': typeof AppVenueApprovalRouteRouteWithChildren
  '/forgot-password': typeof authForgotPasswordRoute
  '/login': typeof authLoginRoute
  '/register': typeof authRegisterRoute
  '/verify-email': typeof authVerifyEmailRoute
  '/app/calendar': typeof AppCalendarRoute
  '/app/dashboard': typeof AppDashboardRoute
  '/app/equipments': typeof AppEquipmentsRoute
  '/app/events': typeof AppEventsRoute
  '/app/notifications': typeof AppNotificationsRoute
  '/app/user-management': typeof AppUserManagementRoute
  '/app/venue-reservation': typeof AppVenueReservationRoute
  '/app/venues': typeof AppVenuesRoute
  '/app/settings/account': typeof AppSettingsAccountRoute
  '/app/settings/integrations': typeof AppSettingsIntegrationsRoute
  '/app/settings/notifications': typeof AppSettingsNotificationsRoute
  '/app/settings/profile': typeof AppSettingsProfileRoute
  '/app/venue-approval/$approvalId': typeof AppVenueApprovalApprovalIdRoute
  '/app/venue-approval/approval': typeof AppVenueApprovalApprovalRoute
  '/app/venue/$venueId': typeof AppVenueVenueIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/app': typeof AppRouteRouteWithChildren
  '/about': typeof AboutRoute
  '/app/settings': typeof AppSettingsRouteRouteWithChildren
  '/app/venue-approval': typeof AppVenueApprovalRouteRouteWithChildren
  '/forgot-password': typeof authForgotPasswordRoute
  '/login': typeof authLoginRoute
  '/register': typeof authRegisterRoute
  '/verify-email': typeof authVerifyEmailRoute
  '/app/calendar': typeof AppCalendarRoute
  '/app/dashboard': typeof AppDashboardRoute
  '/app/equipments': typeof AppEquipmentsRoute
  '/app/events': typeof AppEventsRoute
  '/app/notifications': typeof AppNotificationsRoute
  '/app/user-management': typeof AppUserManagementRoute
  '/app/venue-reservation': typeof AppVenueReservationRoute
  '/app/venues': typeof AppVenuesRoute
  '/app/settings/account': typeof AppSettingsAccountRoute
  '/app/settings/integrations': typeof AppSettingsIntegrationsRoute
  '/app/settings/notifications': typeof AppSettingsNotificationsRoute
  '/app/settings/profile': typeof AppSettingsProfileRoute
  '/app/venue-approval/$approvalId': typeof AppVenueApprovalApprovalIdRoute
  '/app/venue-approval/approval': typeof AppVenueApprovalApprovalRoute
  '/app/venue/$venueId': typeof AppVenueVenueIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/app': typeof AppRouteRouteWithChildren
  '/about': typeof AboutRoute
  '/app/settings': typeof AppSettingsRouteRouteWithChildren
  '/app/venue-approval': typeof AppVenueApprovalRouteRouteWithChildren
  '/(auth)/forgot-password': typeof authForgotPasswordRoute
  '/(auth)/login': typeof authLoginRoute
  '/(auth)/register': typeof authRegisterRoute
  '/(auth)/verify-email': typeof authVerifyEmailRoute
  '/app/calendar': typeof AppCalendarRoute
  '/app/dashboard': typeof AppDashboardRoute
  '/app/equipments': typeof AppEquipmentsRoute
  '/app/events': typeof AppEventsRoute
  '/app/notifications': typeof AppNotificationsRoute
  '/app/user-management': typeof AppUserManagementRoute
  '/app/venue-reservation': typeof AppVenueReservationRoute
  '/app/venues': typeof AppVenuesRoute
  '/app/settings/account': typeof AppSettingsAccountRoute
  '/app/settings/integrations': typeof AppSettingsIntegrationsRoute
  '/app/settings/notifications': typeof AppSettingsNotificationsRoute
  '/app/settings/profile': typeof AppSettingsProfileRoute
  '/app/venue-approval/$approvalId': typeof AppVenueApprovalApprovalIdRoute
  '/app/venue-approval/approval': typeof AppVenueApprovalApprovalRoute
  '/app/venue/$venueId': typeof AppVenueVenueIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/app'
    | '/about'
    | '/app/settings'
    | '/app/venue-approval'
    | '/forgot-password'
    | '/login'
    | '/register'
    | '/verify-email'
    | '/app/calendar'
    | '/app/dashboard'
    | '/app/equipments'
    | '/app/events'
    | '/app/notifications'
    | '/app/user-management'
    | '/app/venue-reservation'
    | '/app/venues'
    | '/app/settings/account'
    | '/app/settings/integrations'
    | '/app/settings/notifications'
    | '/app/settings/profile'
    | '/app/venue-approval/$approvalId'
    | '/app/venue-approval/approval'
    | '/app/venue/$venueId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/app'
    | '/about'
    | '/app/settings'
    | '/app/venue-approval'
    | '/forgot-password'
    | '/login'
    | '/register'
    | '/verify-email'
    | '/app/calendar'
    | '/app/dashboard'
    | '/app/equipments'
    | '/app/events'
    | '/app/notifications'
    | '/app/user-management'
    | '/app/venue-reservation'
    | '/app/venues'
    | '/app/settings/account'
    | '/app/settings/integrations'
    | '/app/settings/notifications'
    | '/app/settings/profile'
    | '/app/venue-approval/$approvalId'
    | '/app/venue-approval/approval'
    | '/app/venue/$venueId'
  id:
    | '__root__'
    | '/'
    | '/app'
    | '/about'
    | '/app/settings'
    | '/app/venue-approval'
    | '/(auth)/forgot-password'
    | '/(auth)/login'
    | '/(auth)/register'
    | '/(auth)/verify-email'
    | '/app/calendar'
    | '/app/dashboard'
    | '/app/equipments'
    | '/app/events'
    | '/app/notifications'
    | '/app/user-management'
    | '/app/venue-reservation'
    | '/app/venues'
    | '/app/settings/account'
    | '/app/settings/integrations'
    | '/app/settings/notifications'
    | '/app/settings/profile'
    | '/app/venue-approval/$approvalId'
    | '/app/venue-approval/approval'
    | '/app/venue/$venueId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppRouteRoute: typeof AppRouteRouteWithChildren
  AboutRoute: typeof AboutRoute
  authForgotPasswordRoute: typeof authForgotPasswordRoute
  authLoginRoute: typeof authLoginRoute
  authRegisterRoute: typeof authRegisterRoute
  authVerifyEmailRoute: typeof authVerifyEmailRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppRouteRoute: AppRouteRouteWithChildren,
  AboutRoute: AboutRoute,
  authForgotPasswordRoute: authForgotPasswordRoute,
  authLoginRoute: authLoginRoute,
  authRegisterRoute: authRegisterRoute,
  authVerifyEmailRoute: authVerifyEmailRoute,
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
        "/about",
        "/(auth)/forgot-password",
        "/(auth)/login",
        "/(auth)/register",
        "/(auth)/verify-email"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/app": {
      "filePath": "app/route.tsx",
      "children": [
        "/app/settings",
        "/app/venue-approval",
        "/app/calendar",
        "/app/dashboard",
        "/app/equipments",
        "/app/events",
        "/app/notifications",
        "/app/user-management",
        "/app/venue-reservation",
        "/app/venues",
        "/app/venue/$venueId"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
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
    "/(auth)/forgot-password": {
      "filePath": "(auth)/forgot-password.tsx"
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx"
    },
    "/(auth)/register": {
      "filePath": "(auth)/register.tsx"
    },
    "/(auth)/verify-email": {
      "filePath": "(auth)/verify-email.tsx"
    },
    "/app/calendar": {
      "filePath": "app/calendar.tsx",
      "parent": "/app"
    },
    "/app/dashboard": {
      "filePath": "app/dashboard.tsx",
      "parent": "/app"
    },
    "/app/equipments": {
      "filePath": "app/equipments.tsx",
      "parent": "/app"
    },
    "/app/events": {
      "filePath": "app/events.tsx",
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
    "/app/venues": {
      "filePath": "app/venues.tsx",
      "parent": "/app"
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
    "/app/venue/$venueId": {
      "filePath": "app/venue/$venueId.tsx",
      "parent": "/app"
    }
  }
}
ROUTE_MANIFEST_END */
