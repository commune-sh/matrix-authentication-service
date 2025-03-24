/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ResetCrossSigningImport } from './routes/reset-cross-signing'
import { Route as AccountImport } from './routes/_account'
import { Route as ResetCrossSigningIndexImport } from './routes/reset-cross-signing.index'
import { Route as AccountIndexImport } from './routes/_account.index'
import { Route as SessionsIdImport } from './routes/sessions.$id'
import { Route as ResetCrossSigningSuccessImport } from './routes/reset-cross-signing.success'
import { Route as ResetCrossSigningCancelledImport } from './routes/reset-cross-signing.cancelled'
import { Route as DevicesSplatImport } from './routes/devices.$'
import { Route as ClientsIdImport } from './routes/clients.$id'
import { Route as PasswordRecoveryIndexImport } from './routes/password.recovery.index'
import { Route as PasswordChangeIndexImport } from './routes/password.change.index'
import { Route as AccountSessionsIndexImport } from './routes/_account.sessions.index'
import { Route as PasswordChangeSuccessImport } from './routes/password.change.success'
import { Route as EmailsIdVerifyImport } from './routes/emails.$id.verify'
import { Route as EmailsIdInUseImport } from './routes/emails.$id.in-use'
import { Route as AccountSessionsBrowsersImport } from './routes/_account.sessions.browsers'

// Create/Update Routes

const ResetCrossSigningRoute = ResetCrossSigningImport.update({
  id: '/reset-cross-signing',
  path: '/reset-cross-signing',
  getParentRoute: () => rootRoute,
} as any)

const AccountRoute = AccountImport.update({
  id: '/_account',
  getParentRoute: () => rootRoute,
} as any)

const ResetCrossSigningIndexRoute = ResetCrossSigningIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => ResetCrossSigningRoute,
} as any)

const AccountIndexRoute = AccountIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AccountRoute,
} as any)

const SessionsIdRoute = SessionsIdImport.update({
  id: '/sessions/$id',
  path: '/sessions/$id',
  getParentRoute: () => rootRoute,
} as any)

const ResetCrossSigningSuccessRoute = ResetCrossSigningSuccessImport.update({
  id: '/success',
  path: '/success',
  getParentRoute: () => ResetCrossSigningRoute,
} as any)

const ResetCrossSigningCancelledRoute = ResetCrossSigningCancelledImport.update(
  {
    id: '/cancelled',
    path: '/cancelled',
    getParentRoute: () => ResetCrossSigningRoute,
  } as any,
)

const DevicesSplatRoute = DevicesSplatImport.update({
  id: '/devices/$',
  path: '/devices/$',
  getParentRoute: () => rootRoute,
} as any)

const ClientsIdRoute = ClientsIdImport.update({
  id: '/clients/$id',
  path: '/clients/$id',
  getParentRoute: () => rootRoute,
} as any)

const PasswordRecoveryIndexRoute = PasswordRecoveryIndexImport.update({
  id: '/password/recovery/',
  path: '/password/recovery/',
  getParentRoute: () => rootRoute,
} as any)

const PasswordChangeIndexRoute = PasswordChangeIndexImport.update({
  id: '/password/change/',
  path: '/password/change/',
  getParentRoute: () => rootRoute,
} as any)

const AccountSessionsIndexRoute = AccountSessionsIndexImport.update({
  id: '/sessions/',
  path: '/sessions/',
  getParentRoute: () => AccountRoute,
} as any)

const PasswordChangeSuccessRoute = PasswordChangeSuccessImport.update({
  id: '/password/change/success',
  path: '/password/change/success',
  getParentRoute: () => rootRoute,
} as any)

const EmailsIdVerifyRoute = EmailsIdVerifyImport.update({
  id: '/emails/$id/verify',
  path: '/emails/$id/verify',
  getParentRoute: () => rootRoute,
} as any)

const EmailsIdInUseRoute = EmailsIdInUseImport.update({
  id: '/emails/$id/in-use',
  path: '/emails/$id/in-use',
  getParentRoute: () => rootRoute,
} as any)

const AccountSessionsBrowsersRoute = AccountSessionsBrowsersImport.update({
  id: '/sessions/browsers',
  path: '/sessions/browsers',
  getParentRoute: () => AccountRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_account': {
      id: '/_account'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AccountImport
      parentRoute: typeof rootRoute
    }
    '/reset-cross-signing': {
      id: '/reset-cross-signing'
      path: '/reset-cross-signing'
      fullPath: '/reset-cross-signing'
      preLoaderRoute: typeof ResetCrossSigningImport
      parentRoute: typeof rootRoute
    }
    '/clients/$id': {
      id: '/clients/$id'
      path: '/clients/$id'
      fullPath: '/clients/$id'
      preLoaderRoute: typeof ClientsIdImport
      parentRoute: typeof rootRoute
    }
    '/devices/$': {
      id: '/devices/$'
      path: '/devices/$'
      fullPath: '/devices/$'
      preLoaderRoute: typeof DevicesSplatImport
      parentRoute: typeof rootRoute
    }
    '/reset-cross-signing/cancelled': {
      id: '/reset-cross-signing/cancelled'
      path: '/cancelled'
      fullPath: '/reset-cross-signing/cancelled'
      preLoaderRoute: typeof ResetCrossSigningCancelledImport
      parentRoute: typeof ResetCrossSigningImport
    }
    '/reset-cross-signing/success': {
      id: '/reset-cross-signing/success'
      path: '/success'
      fullPath: '/reset-cross-signing/success'
      preLoaderRoute: typeof ResetCrossSigningSuccessImport
      parentRoute: typeof ResetCrossSigningImport
    }
    '/sessions/$id': {
      id: '/sessions/$id'
      path: '/sessions/$id'
      fullPath: '/sessions/$id'
      preLoaderRoute: typeof SessionsIdImport
      parentRoute: typeof rootRoute
    }
    '/_account/': {
      id: '/_account/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AccountIndexImport
      parentRoute: typeof AccountImport
    }
    '/reset-cross-signing/': {
      id: '/reset-cross-signing/'
      path: '/'
      fullPath: '/reset-cross-signing/'
      preLoaderRoute: typeof ResetCrossSigningIndexImport
      parentRoute: typeof ResetCrossSigningImport
    }
    '/_account/sessions/browsers': {
      id: '/_account/sessions/browsers'
      path: '/sessions/browsers'
      fullPath: '/sessions/browsers'
      preLoaderRoute: typeof AccountSessionsBrowsersImport
      parentRoute: typeof AccountImport
    }
    '/emails/$id/in-use': {
      id: '/emails/$id/in-use'
      path: '/emails/$id/in-use'
      fullPath: '/emails/$id/in-use'
      preLoaderRoute: typeof EmailsIdInUseImport
      parentRoute: typeof rootRoute
    }
    '/emails/$id/verify': {
      id: '/emails/$id/verify'
      path: '/emails/$id/verify'
      fullPath: '/emails/$id/verify'
      preLoaderRoute: typeof EmailsIdVerifyImport
      parentRoute: typeof rootRoute
    }
    '/password/change/success': {
      id: '/password/change/success'
      path: '/password/change/success'
      fullPath: '/password/change/success'
      preLoaderRoute: typeof PasswordChangeSuccessImport
      parentRoute: typeof rootRoute
    }
    '/_account/sessions/': {
      id: '/_account/sessions/'
      path: '/sessions'
      fullPath: '/sessions'
      preLoaderRoute: typeof AccountSessionsIndexImport
      parentRoute: typeof AccountImport
    }
    '/password/change/': {
      id: '/password/change/'
      path: '/password/change'
      fullPath: '/password/change'
      preLoaderRoute: typeof PasswordChangeIndexImport
      parentRoute: typeof rootRoute
    }
    '/password/recovery/': {
      id: '/password/recovery/'
      path: '/password/recovery'
      fullPath: '/password/recovery'
      preLoaderRoute: typeof PasswordRecoveryIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface AccountRouteChildren {
  AccountIndexRoute: typeof AccountIndexRoute
  AccountSessionsBrowsersRoute: typeof AccountSessionsBrowsersRoute
  AccountSessionsIndexRoute: typeof AccountSessionsIndexRoute
}

const AccountRouteChildren: AccountRouteChildren = {
  AccountIndexRoute: AccountIndexRoute,
  AccountSessionsBrowsersRoute: AccountSessionsBrowsersRoute,
  AccountSessionsIndexRoute: AccountSessionsIndexRoute,
}

const AccountRouteWithChildren =
  AccountRoute._addFileChildren(AccountRouteChildren)

interface ResetCrossSigningRouteChildren {
  ResetCrossSigningCancelledRoute: typeof ResetCrossSigningCancelledRoute
  ResetCrossSigningSuccessRoute: typeof ResetCrossSigningSuccessRoute
  ResetCrossSigningIndexRoute: typeof ResetCrossSigningIndexRoute
}

const ResetCrossSigningRouteChildren: ResetCrossSigningRouteChildren = {
  ResetCrossSigningCancelledRoute: ResetCrossSigningCancelledRoute,
  ResetCrossSigningSuccessRoute: ResetCrossSigningSuccessRoute,
  ResetCrossSigningIndexRoute: ResetCrossSigningIndexRoute,
}

const ResetCrossSigningRouteWithChildren =
  ResetCrossSigningRoute._addFileChildren(ResetCrossSigningRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AccountRouteWithChildren
  '/reset-cross-signing': typeof ResetCrossSigningRouteWithChildren
  '/clients/$id': typeof ClientsIdRoute
  '/devices/$': typeof DevicesSplatRoute
  '/reset-cross-signing/cancelled': typeof ResetCrossSigningCancelledRoute
  '/reset-cross-signing/success': typeof ResetCrossSigningSuccessRoute
  '/sessions/$id': typeof SessionsIdRoute
  '/': typeof AccountIndexRoute
  '/reset-cross-signing/': typeof ResetCrossSigningIndexRoute
  '/sessions/browsers': typeof AccountSessionsBrowsersRoute
  '/emails/$id/in-use': typeof EmailsIdInUseRoute
  '/emails/$id/verify': typeof EmailsIdVerifyRoute
  '/password/change/success': typeof PasswordChangeSuccessRoute
  '/sessions': typeof AccountSessionsIndexRoute
  '/password/change': typeof PasswordChangeIndexRoute
  '/password/recovery': typeof PasswordRecoveryIndexRoute
}

export interface FileRoutesByTo {
  '/clients/$id': typeof ClientsIdRoute
  '/devices/$': typeof DevicesSplatRoute
  '/reset-cross-signing/cancelled': typeof ResetCrossSigningCancelledRoute
  '/reset-cross-signing/success': typeof ResetCrossSigningSuccessRoute
  '/sessions/$id': typeof SessionsIdRoute
  '/': typeof AccountIndexRoute
  '/reset-cross-signing': typeof ResetCrossSigningIndexRoute
  '/sessions/browsers': typeof AccountSessionsBrowsersRoute
  '/emails/$id/in-use': typeof EmailsIdInUseRoute
  '/emails/$id/verify': typeof EmailsIdVerifyRoute
  '/password/change/success': typeof PasswordChangeSuccessRoute
  '/sessions': typeof AccountSessionsIndexRoute
  '/password/change': typeof PasswordChangeIndexRoute
  '/password/recovery': typeof PasswordRecoveryIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_account': typeof AccountRouteWithChildren
  '/reset-cross-signing': typeof ResetCrossSigningRouteWithChildren
  '/clients/$id': typeof ClientsIdRoute
  '/devices/$': typeof DevicesSplatRoute
  '/reset-cross-signing/cancelled': typeof ResetCrossSigningCancelledRoute
  '/reset-cross-signing/success': typeof ResetCrossSigningSuccessRoute
  '/sessions/$id': typeof SessionsIdRoute
  '/_account/': typeof AccountIndexRoute
  '/reset-cross-signing/': typeof ResetCrossSigningIndexRoute
  '/_account/sessions/browsers': typeof AccountSessionsBrowsersRoute
  '/emails/$id/in-use': typeof EmailsIdInUseRoute
  '/emails/$id/verify': typeof EmailsIdVerifyRoute
  '/password/change/success': typeof PasswordChangeSuccessRoute
  '/_account/sessions/': typeof AccountSessionsIndexRoute
  '/password/change/': typeof PasswordChangeIndexRoute
  '/password/recovery/': typeof PasswordRecoveryIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/reset-cross-signing'
    | '/clients/$id'
    | '/devices/$'
    | '/reset-cross-signing/cancelled'
    | '/reset-cross-signing/success'
    | '/sessions/$id'
    | '/'
    | '/reset-cross-signing/'
    | '/sessions/browsers'
    | '/emails/$id/in-use'
    | '/emails/$id/verify'
    | '/password/change/success'
    | '/sessions'
    | '/password/change'
    | '/password/recovery'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/clients/$id'
    | '/devices/$'
    | '/reset-cross-signing/cancelled'
    | '/reset-cross-signing/success'
    | '/sessions/$id'
    | '/'
    | '/reset-cross-signing'
    | '/sessions/browsers'
    | '/emails/$id/in-use'
    | '/emails/$id/verify'
    | '/password/change/success'
    | '/sessions'
    | '/password/change'
    | '/password/recovery'
  id:
    | '__root__'
    | '/_account'
    | '/reset-cross-signing'
    | '/clients/$id'
    | '/devices/$'
    | '/reset-cross-signing/cancelled'
    | '/reset-cross-signing/success'
    | '/sessions/$id'
    | '/_account/'
    | '/reset-cross-signing/'
    | '/_account/sessions/browsers'
    | '/emails/$id/in-use'
    | '/emails/$id/verify'
    | '/password/change/success'
    | '/_account/sessions/'
    | '/password/change/'
    | '/password/recovery/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AccountRoute: typeof AccountRouteWithChildren
  ResetCrossSigningRoute: typeof ResetCrossSigningRouteWithChildren
  ClientsIdRoute: typeof ClientsIdRoute
  DevicesSplatRoute: typeof DevicesSplatRoute
  SessionsIdRoute: typeof SessionsIdRoute
  EmailsIdInUseRoute: typeof EmailsIdInUseRoute
  EmailsIdVerifyRoute: typeof EmailsIdVerifyRoute
  PasswordChangeSuccessRoute: typeof PasswordChangeSuccessRoute
  PasswordChangeIndexRoute: typeof PasswordChangeIndexRoute
  PasswordRecoveryIndexRoute: typeof PasswordRecoveryIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  AccountRoute: AccountRouteWithChildren,
  ResetCrossSigningRoute: ResetCrossSigningRouteWithChildren,
  ClientsIdRoute: ClientsIdRoute,
  DevicesSplatRoute: DevicesSplatRoute,
  SessionsIdRoute: SessionsIdRoute,
  EmailsIdInUseRoute: EmailsIdInUseRoute,
  EmailsIdVerifyRoute: EmailsIdVerifyRoute,
  PasswordChangeSuccessRoute: PasswordChangeSuccessRoute,
  PasswordChangeIndexRoute: PasswordChangeIndexRoute,
  PasswordRecoveryIndexRoute: PasswordRecoveryIndexRoute,
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
        "/_account",
        "/reset-cross-signing",
        "/clients/$id",
        "/devices/$",
        "/sessions/$id",
        "/emails/$id/in-use",
        "/emails/$id/verify",
        "/password/change/success",
        "/password/change/",
        "/password/recovery/"
      ]
    },
    "/_account": {
      "filePath": "_account.tsx",
      "children": [
        "/_account/",
        "/_account/sessions/browsers",
        "/_account/sessions/"
      ]
    },
    "/reset-cross-signing": {
      "filePath": "reset-cross-signing.tsx",
      "children": [
        "/reset-cross-signing/cancelled",
        "/reset-cross-signing/success",
        "/reset-cross-signing/"
      ]
    },
    "/clients/$id": {
      "filePath": "clients.$id.tsx"
    },
    "/devices/$": {
      "filePath": "devices.$.tsx"
    },
    "/reset-cross-signing/cancelled": {
      "filePath": "reset-cross-signing.cancelled.tsx",
      "parent": "/reset-cross-signing"
    },
    "/reset-cross-signing/success": {
      "filePath": "reset-cross-signing.success.tsx",
      "parent": "/reset-cross-signing"
    },
    "/sessions/$id": {
      "filePath": "sessions.$id.tsx"
    },
    "/_account/": {
      "filePath": "_account.index.tsx",
      "parent": "/_account"
    },
    "/reset-cross-signing/": {
      "filePath": "reset-cross-signing.index.tsx",
      "parent": "/reset-cross-signing"
    },
    "/_account/sessions/browsers": {
      "filePath": "_account.sessions.browsers.tsx",
      "parent": "/_account"
    },
    "/emails/$id/in-use": {
      "filePath": "emails.$id.in-use.tsx"
    },
    "/emails/$id/verify": {
      "filePath": "emails.$id.verify.tsx"
    },
    "/password/change/success": {
      "filePath": "password.change.success.tsx"
    },
    "/_account/sessions/": {
      "filePath": "_account.sessions.index.tsx",
      "parent": "/_account"
    },
    "/password/change/": {
      "filePath": "password.change.index.tsx"
    },
    "/password/recovery/": {
      "filePath": "password.recovery.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
