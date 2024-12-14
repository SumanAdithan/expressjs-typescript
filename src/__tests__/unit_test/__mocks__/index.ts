import { Request, Response } from 'express';
import { vi } from 'vitest';

export const mockRequest = {} as Request;

export const mockResponse = {
    send: vi.fn(),
} as unknown as Response;
