import { describe, expect, it } from 'vitest';
import { getUsers } from '../../../handlers/user';
import { mockRequest, mockResponse } from '../__mocks__';

describe('getUsers', () => {
    it('should return an array of users', () => {
        getUsers(mockRequest, mockResponse);
        expect(mockResponse.send).toBeCalledWith([]);
    });
});
