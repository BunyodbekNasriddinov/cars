export class AuthorizationError extends Error {
  status: number
  name: string
  message: string
  constructor(message: string) {
    super()
    this.status = 401
    this.name = "AuthorizationError"
    this.message = message
  }
}
export class NotFoundError extends Error {
  status: number
  name: string
  message: string
  constructor(message: string) {
    super()
    this.status = 404
    this.name = "NotFoundError"
    this.message = message
  }
}

export class BadRequestError extends Error {
  status: number
  name: string
  message: string
  constructor(message: string) {
    super()
    this.status = 400
    this.name = "BadRequestError"
    this.message = message
  }
}

export class ForbiddenError extends Error {
  status: number
  name: string
  message: string
  constructor(message: string) {
    super()
    this.status = 403
    this.name = "ForbiddenError"
    this.message = message
  }
}

export class InternalServerError extends Error {
  status: number
  name: string
  message: string
  constructor(message: string = "InternalServerError") {
    super()
    this.status = 500
    this.name = "InternalServerError"
    this.message = message
  }
}
