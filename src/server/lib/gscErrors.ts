export class GscApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly body?: string,
  ) {
    super(message);
    this.name = "GscApiError";
  }
}

export class GscTokenError extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = "GscTokenError";
  }
}

export class GscNotConnectedError extends Error {
  constructor(public readonly projectId: string) {
    super("Search Console is not connected for this project");
    this.name = "GscNotConnectedError";
  }
}

export class GscInsufficientScopeError extends Error {
  constructor(
    public readonly requiredScope: string,
    message = `Search Console write permission required (${requiredScope}). Please reconnect with sitemap management permission.`,
  ) {
    super(message);
    this.name = "GscInsufficientScopeError";
  }
}
