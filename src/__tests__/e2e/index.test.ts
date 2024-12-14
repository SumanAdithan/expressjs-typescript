import request from 'supertest';
import { Express } from 'express';
import { createApp } from '../../createApp';
import { beforeAll, describe, expect, it } from 'vitest';

describe('/api/users', () => {
    let app: Express = createApp();

    beforeAll(async () => {
        app = await createApp();
    });

    it('should return an empty array when getting /api/users', async () => {
        const response = await request(app).get('/api/users');
        expect(response.body).toStrictEqual([]);
    });
});
